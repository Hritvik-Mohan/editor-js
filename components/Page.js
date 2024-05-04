import dynamic from "next/dynamic.js";
import PageHeader from "./PageHeader.js";

const Editor = dynamic(() => import("../components/Editor.js"), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <PageHeader />
      <Editor />
    </div>
  );
}
