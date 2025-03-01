import axios from 'axios';
import { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor/CodeEditor';
import TestCases from './Testcases/TestCases';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import { TestCase } from '@/pages/Interview/types';


interface CodePanelProps {
  interview_id?: string;
  isInterview?: boolean;
}

export default function CodePanel({ interview_id, isInterview=false }: CodePanelProps) {
  const [defaultTestCases, setDefaultTestCases] = useState<TestCase[]>([]); 
  const [testCases, setTestCases] = useState<TestCase[]>([]); 
  const problemId = localStorage.getItem('problemId'); 
  const [submitState, setSubmitState] = useState<"initial" | "loading" | "success">("initial");

  useEffect(() => {
    localStorage.setItem('showCode', 'true');
    const fetchTestCases = async () => {
      try {
        const sampleResponse = await axios.get(`http://localhost:8000/api/testcases/${problemId}/`);
        console.log("sample response", sampleResponse.data)
        setDefaultTestCases(sampleResponse.data.testcases);
        setTestCases(sampleResponse.data.testcases);
      } catch (error) {
        console.error('Error fetching test cases:', error);
      }
    };

    if (problemId) {
      fetchTestCases();
    }
  }, [problemId]);

  const onRun = async () => {
    try {
      setSubmitState("loading");
      const language = localStorage.getItem('language');
      const code = localStorage.getItem(`code_${language}`);
      console.log("testCases",testCases)
      console.log("language",language)
      console.log("code",code)
      const response = await axios.post(`http://localhost:8000/api/submissions/submit/`, {
        code,
        test_cases: testCases, 
        language: language?.toUpperCase()
      });
      setSubmitState("success");
      return response.data;
    } catch (error) {
      console.error('Error submitting code:', error);
      setSubmitState("initial");
      throw error;
    }
  };

  if (!interview_id && isInterview) {
    return <div>Loading...</div>;
  }

  return (
    <ResizablePanelGroup direction="vertical" className="flex-grow">
      <ResizablePanel minSize={10} defaultSize={70} className="bg-white dark:bg-neutral-900 rounded-lg border shadow">
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle withHandle className="bg-background py-[1px] my-[2px] hover:bg-blue-700 transition-colors" />
      <ResizablePanel minSize={10} defaultSize={30} className="relative bg-white dark:bg-neutral-900 rounded-lg border shadow">
        <TestCases 
          defaultTestCases={defaultTestCases}  
          onRun={onRun} 
          submitState={submitState}
          setSubmitState={setSubmitState}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
