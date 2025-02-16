import CodeEditor from './CodeEditor/CodeEditor';
import TestCases from './Testcases/TestCases';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';



export default function CodePanel() {
  const defaultTestCases = [
    '1\n2\n3\n4\n5\n',
    '5\n4\n3\n2\n1\n'
  ]

  const onRun = (testCases: string[]) => {
    console.log(testCases);
  }

  return (
    <ResizablePanelGroup direction="vertical" className='flex-grow'>
      <ResizablePanel minSize={10} defaultSize={70} className='bg-white dark:bg-neutral-900 rounded-lg border shadow'>
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle withHandle className="bg-background py-[1px] my-[2px] hover:bg-blue-700 transition-colors" />
      <ResizablePanel minSize={10} defaultSize={30} className='relative bg-white dark:bg-neutral-900 rounded-lg border shadow'>
        <TestCases defaultTestCases={defaultTestCases} onRun={onRun} />
      </ResizablePanel>
    </ResizablePanelGroup >
  );
}
