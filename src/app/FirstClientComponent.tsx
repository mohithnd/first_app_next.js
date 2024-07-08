"use client";

import { useState } from "react";

export default function FirstClientComponent() {
  const [value, setValue] = useState(4);
  return (
    <>
      <h1>Welcome To Next.js - I am a Client Component</h1>
      <h2>{value}</h2>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        Client Button
      </button>
    </>
  );
}
