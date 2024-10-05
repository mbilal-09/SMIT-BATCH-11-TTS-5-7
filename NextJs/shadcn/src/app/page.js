import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className={"flex flex-col gap-2 items-center justify-center h-screen"}>
      <h1 className="text-3xl">Beautifully designed components</h1>
      <h1 className="text-xl text-muted-foreground">Beautifully designed components</h1>
      <div className="flex gap-3">
        <Button>Get Started</Button>
        <Button variant={"outline"}>Get Started</Button>
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Add to library</p>
          </TooltipContent>


        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
