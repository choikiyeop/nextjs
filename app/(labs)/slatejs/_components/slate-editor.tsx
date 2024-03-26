"use client";

import { useMemo, useState } from "react";
import imageExtensions from "image-extensions";
import { Node, Transforms, createEditor } from "slate";
import { withHistory } from "slate-history";
import { isHotkey } from "is-hotkey";
import isUrl from "is-url";
import {
  Editable,
  ReactEditor,
  Slate,
  useFocused,
  useSelected,
  useSlateStatic,
  withReact,
} from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: "In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.",
      },
    ],
  },
  {
    type: "image",
    url: "https://source.unsplash.com/kFrdX5IeQzI",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "You can delete images with the cross in the top left. Try deleting this sheep:",
      },
    ],
  },
  {
    type: "image",
    url: "https://source.unsplash.com/zOwZKwZOZq8",
    children: [{ text: "" }],
  },
];

export const SlateEditor = () => {
  const [state, setState] = useState();
  const editor = useMemo(
    () => withImages(withHistory(withReact(createEditor()))),
    [],
  );

  const onKeyDown = (e) => {
    if (isHotkey("mod+a", e)) {
      e.preventDefault();
      Transforms.select(editor, []);
    }
  };

  const onClick = () => {
    setState(editor.children.map((n) => Node.string(n)).join("\n"));
    console.log(editor.children.map((n) => Node.string(n)).join("\n"));
  };

  const deserial = () => {};

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        onKeyDown={onKeyDown}
        renderElement={(props) => <Element {...props} />}
        placeholder="Enter some text..."
      />
      <button onClick={onClick}>버튼</button>
      <button onClick={deserial}>역직렬화</button>
    </Slate>
  );
};

const withImages = (editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const insertImage = (editor, url) => {
  const text = { text: "" };
  const image = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
  Transforms.insertNodes(editor, {
    type: "paragraph",
    children: [{ text: "" }],
  });
};

const Element = (props) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "image":
      return <ImageComponent {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const ImageComponent = ({ attributes, children, element }) => {
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);

  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      {children}
      <div contentEditable={false} className="relative">
        <img src={element.url} className=" block max-h-[20em] max-w-full" />
        {/* <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: ${selected && focused ? 'inline' : 'none'};
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
          `}
        >
          <Icon>delete</Icon>
        </Button> */}
      </div>
    </div>
  );
};

const isImageUrl = (url) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext);
};
