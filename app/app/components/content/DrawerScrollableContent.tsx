import { useState } from "react";
import { Button } from "../ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"

const SNAP_POINTS = [0.2, 0.45, 0.95] as const;
const DEFAULT_SNAP_POINT = 0.45;

interface DrawerScrollableContentProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function DrawerScrollableContent({ isOpen, setIsOpen }: DrawerScrollableContentProps) {
  const [activeSnapPoint, setActiveSnapPoint] = useState<
    number | string | null
  >(DEFAULT_SNAP_POINT);
  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
      direction="bottom"
      modal={false}
      snapPoints={SNAP_POINTS as unknown as (number | string)[]}
      activeSnapPoint={activeSnapPoint}
      setActiveSnapPoint={setActiveSnapPoint}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p
              key={index}
              className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
          <span>The end.</span>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
