import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// import List from "@editorjs/list";
import NestedList from "@editorjs/nested-list";
import { useEffect } from "react";

export default function Editor() {
  const editor = new EditorJS({
    /**
     * Id of Element that should contain the Editor
     */
    holder: "editorjs",

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
    autofocus: true,
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link", "marker", "bold", "italic"],
      },
      list: {
        class: NestedList,
        inlineToolbar: true,
      },

      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
    },
  });

  // useEffect(() => {
  //   editor.save().then((outputData) => {
  //     console.log("Article data: ", outputData);
  //   })
  //   .catch((error) => {
  //     console.log("Saving failed: ", error);
  //   });
  // }, []);

  useEffect(() => {
    const save = editor;
    console.log(save);
  }, [])

  return <div id="editorjs" />;
}
