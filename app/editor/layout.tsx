import { EditorChrome } from "@/components/editor/editor-chrome";

export default function EditorLayout({
  children,
}: LayoutProps<"/editor">) {
  return <EditorChrome>{children}</EditorChrome>;
}
