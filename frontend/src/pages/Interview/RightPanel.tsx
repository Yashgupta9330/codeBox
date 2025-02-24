import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTabs } from "@/context/tabs-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs/Tabs";
import { cn } from "@/lib/utils";
import ChatPanel from "./ChatPanel";
import { MessageCircle, Code2 } from 'lucide-react';
import CodePanel from "@/components/CodePanel";
import { motion } from "framer-motion";

export default function RightPanel() {
  const { activateTab, hideTab } = useTabs();
  const { id } = useParams<{ id: string }>();

  const [activeTab, setActiveTab] = useState('ChatPanel');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    activateTab(value);
  };

  return (
    <div className="flex w-full h-full bg-white border dark:bg-neutral-900 rounded-lg shadow">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full h-full rounded-lg bg-gray-100 dark:bg-neutral-800/50 justify-start items-start"
      >
        <div className="w-full bg-gray-200 dark:bg-neutral-800/50">
          <TabsList direction="row" className="flex bg-gray-200 dark:bg-neutral-800/50">
            <TabsTrigger
              value="ChatPanel"
              isClosable={false}
              className={cn(
                "data-[state=active]:border-b data-[state=active]:border-blue-500",
                "data-[state=inactive]:text-muted-foreground",
                "transition-colors duration-150 p-2 relative"
              )}
            >
              <MessageCircle size={20} />
              {
                activeTab === 'ChatPanel' && (
                  <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="ml-2">
                    Chat
                  </motion.span>
                )
              }
            </TabsTrigger>
            <TabsTrigger
              value="CodePanel"
              isClosable={false}
              className={cn(
                "data-[state=active]:border-b data-[state=active]:border-blue-500",
                "data-[state=inactive]:text-muted-foreground",
                "transition-colors duration-150 p-2 relative"
              )}
            >
              <Code2 size={20} />
              {
                activeTab === 'CodePanel' && (
                  <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="ml-2">
                    Code
                  </motion.span>
                )
              }
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-1 h-[calc(100%-3.0rem)]">
          <TabsContent value="ChatPanel" direction="row" className="w-full h-full">
            <ChatPanel interview_id={id as string} />
          </TabsContent>
          <TabsContent value="CodePanel" direction="row" className="w-full h-full">
            <CodePanel  interview_id={id as string} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
