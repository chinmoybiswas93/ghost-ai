import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-2">
      <span>Ghost AI</span>
      <p>Welcome to Ghost AI!</p>
      <Button variant="outline">Button</Button>
    </div>
  );
}
