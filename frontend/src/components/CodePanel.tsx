import axios from 'axios';
import { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor/CodeEditor';
import TestCases from './Testcases/TestCases';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import { TestCase } from '@/pages/Interview/types';

interface CodePanelProps {
  interview_id: string;
}

export default function CodePanel({ interview_id }: CodePanelProps) {
  const [defaultTestCases, setDefaultTestCases] = useState<TestCase[]>([]); 
  const [testCases, setTestCases] = useState<TestCase[]>([]); 
  const problemId = localStorage.getItem('problemId'); 

  useEffect(() => {

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
      const code = localStorage.getItem('code');
      const language = localStorage.getItem('language');
      console.log("testCases",testCases)
      console.log("language",language)
      const response = await axios.post(`http://localhost:8000/api/submissions/submit/`, {
        code,
        test_cases: testCases, 
        language
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting code:', error);
      throw error;
    }
  };

  if (!interview_id) {
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
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
