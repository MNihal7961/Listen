"use client";

import useDebounce from "@/hooks/useDebounse";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import qs from "query-string";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedvalue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = { title: debouncedvalue };
    const url = qs.stringifyUrl({ url: "/search", query: query });
    router.push(url);
  }, [debouncedvalue, router]);
  return (
    <Input
      placeholder="What you want to listen now ?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    /> 
  );
};

export default SearchInput;
