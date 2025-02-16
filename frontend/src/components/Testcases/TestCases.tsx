"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { Textarea } from "../ui/textarea"
import ActionButtons from "./ActionButtons"

interface TestCase {
  id: number
  value: string
}

export default function TestCases({ className, defaultTestCases, onRun }: { className?: string, defaultTestCases: string[], onRun: (testCases: string[]) => void }) {
  const [testCases, setTestCases] = useState<TestCase[]>(defaultTestCases.map((value, index) => ({ id: index + 1, value })))
  const [activeCase, setActiveCase] = useState<number>(1)
  const [submittedCases, setSubmittedCases] = useState<string[]>([])
  const [showSubmitted, setShowSubmitted] = useState(false)

  const addTestCase = () => {
    const newId = testCases.length + 1
    setTestCases([...testCases, { id: newId, value: "" }])
    setActiveCase(newId)
  }

  const updateTestCase = (value: string) => {
    setTestCases(testCases.map((testCase) => (testCase.id === activeCase ? { ...testCase, value } : testCase)))
  }

  const handleSubmit = () => {
    const nonEmptyCases = testCases.filter((testCase) => testCase.value.trim() !== "").map((testCase) => testCase.value)
    setSubmittedCases(nonEmptyCases)
    setShowSubmitted(true)
    onRun(nonEmptyCases)
  }

  return (
    <div className="min-h-screen p-4 overflow-auto">
      <h1 className="text-xl font-bold mb-4">
        Test Cases
      </h1>
      <div className="max-w-2xl mx-auto">
        <div className="space-x-2 mb-4">
          {testCases.map((testCase) => (
            <Button
              key={testCase.id}
              variant="secondary"
              className={` rounded-md px-4 py-2 ${
                activeCase === testCase.id ? "ring-2 ring-sky-500/50 dark:ring-gray-500/70" : ""
              }`}
              onClick={() => setActiveCase(testCase.id)}
            >
              Case {testCase.id}
            </Button>
          ))}
          <Button
            onClick={addTestCase}
            variant="secondary"
            className=" rounded-md px-3 py-2"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <Textarea
            id="input-n"
            value={testCases.find((tc) => tc.id === activeCase)?.value || ""}
            onChange={(e) => updateTestCase(e.target.value)}
            className="border-none w-full focus-visible:ring-0 focus-visible:ring-offset-0 scrollbar-hidden"
            placeholder="Enter test case value"
          />
        </div>
      </div>
      <ActionButtons className="absolute bottom-0 right-0" onRun={handleSubmit} />
    </div>
  )
}
