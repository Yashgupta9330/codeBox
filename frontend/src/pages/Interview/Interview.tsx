import LeftPanel from "@/components/LeftPanel"
import { initialTabs } from "@/components/Tabs/constants"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { TabsProvider } from "@/context/tabs-context"
import { useParams } from "react-router-dom"
import RightPanel from "./RightPanel"
import Timer from "@/components/Timer"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Interview() {
  const { id } = useParams<{ id: string }>()
  const [remainingTime, setRemainingTime] = useState<number | null>(null)

  useEffect(() => {
    const fetchInterviewDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/get-interview-details/${id}/`)
        const interview = response.data
        const startTime = new Date(interview.start_time).getTime()
        const currentTime = new Date().getTime()
        const elapsedTime = Math.floor((currentTime - startTime) / 1000) 
        const totalDuration = 45 * 60 
        const remaining = totalDuration - elapsedTime
        setRemainingTime(remaining > 0 ? remaining : 0)
      } catch (error) {
        console.error("Error fetching interview details:", error)
      }
    }
    fetchInterviewDetails()
  }, [id])

 if(remainingTime==null) return;
  return (
    <TabsProvider initialTabs={initialTabs}>
      <div className="h-screen w-full flex flex-col inset-0">
        {/* Pass the calculated remaining time */}
        <Timer remainingTime={remainingTime} />
        <ResizablePanelGroup direction="horizontal" className="flex-grow p-2">
          <ResizablePanel minSize={20} defaultSize={50} className="rounded-lg">
            <LeftPanel />
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-background px-[1px] mx-[2px] hover:bg-blue-700 transition-colors" />
          <ResizablePanel minSize={20} defaultSize={50} className="rounded-lg h-full relative">
            {/* <ChatPanel interview_id={id as string} /> */}
            <RightPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </TabsProvider>
  )
}
