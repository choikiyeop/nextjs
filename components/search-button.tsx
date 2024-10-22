"use client";

import { useFormStatus } from "react-dom";

export const SearchButton = () => {
  const status = useFormStatus();

  return <button type="submit">{status.pending ? "검색중..." : "검색"}</button>;
};
