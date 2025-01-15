import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import ActionButtons from './Testcases/ActionButtons';
import { TabsProvider } from '@/context/tabs-context';
import { initialTabs } from './Tabs/constants';

export default function LeetCodeLayout() {
  return (
    <TabsProvider initialTabs={initialTabs}>
      <div className="h-screen w-full flex flex-col inset-0">
        <ActionButtons />
        <ResizablePanelGroup direction="horizontal" className="flex-grow p-2">
          <ResizablePanel minSize={20} defaultSize={50}>
            <LeftPanel />
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-background px-[1px] mx-[2px] hover:bg-blue-700 transition-colors" />
          <ResizablePanel minSize={20} defaultSize={50}>
            <RightPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </TabsProvider>
  );
}
