import { useState } from "react";
import { DrawerScrollableContent } from "~/components/content/DrawerScrollableContent";
import { Button } from "~/components/ui/button";


export function Welcome() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <section>
        <Button onClick={() => setIsDrawerOpen(true)}>Open Welcome Drawer</Button>
      </section>
      <DrawerScrollableContent isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </main>
  );
}
