import { useState } from "react"

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    await navigator.clipboard.writeText(text);
    setCopiedText(text);
    return true;
  }

  return [copiedText, copy];
}