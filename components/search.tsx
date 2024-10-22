import Form from "next/form";
import { SearchButton } from "./search-button";

export const Search = () => {
  return (
    <Form action="" className="border">
      <input name="q" />
      <SearchButton />
    </Form>
  );
};
