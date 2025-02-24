import { useEffect, useRef, useState } from "react";
import Editor from '@monaco-editor/react';
import { useEditorMode } from "@/context/editor-mode-context";
import CodeToolbar from "./CodeToolbar";
import { LANGUAGES } from "@/lib/constants";

export interface Language {
  name: string;
  defaultCode: string;
}

export default function CodeEditor() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(LANGUAGES[0]);
  const { state } = useEditorMode();
  const [code, setCode] = useState<string>(LANGUAGES[0].defaultCode);
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  const handleCodeChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
      localStorage.setItem('code', value);
    }
  };

  useEffect(() => {
    if(localStorage.getItem('code')){
       setCode(localStorage.getItem('code') as string);
    }
    else{
      setCode(currentLanguage.defaultCode);
    }
    localStorage.setItem('code', currentLanguage.defaultCode);
  }, [currentLanguage]);

  return (
    <div className="h-[100vh] flex flex-col justify-start items-start inset-0">
      <CodeToolbar
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        editorRef={editorRef}
      />

      <Editor
        height="100%"
        defaultLanguage={currentLanguage.name === 'C++' ? 'cpp' : currentLanguage.name.toLowerCase()}
        defaultValue={currentLanguage.defaultCode}
        language={currentLanguage.name === 'C++' ? 'cpp' : currentLanguage.name.toLowerCase()}
        value={code}
        onChange={handleCodeChange}
        width="100%"
        theme={state.codeTheme}
        className="insert-0"
        options={{
          cursorStyle: "line",
          minimap: { enabled: false },
          wordWrap: 'on',
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}