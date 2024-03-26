"use client";
import Document from "@tiptap/extension-document";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import { useCallback } from "react";

export const TipTap = () => {
  const editor = useEditor({
    extensions: [Document, Text, Paragraph, Image.configure({ inline: true })],
    content: `<p>Hello world</p><img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />`,
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
};
