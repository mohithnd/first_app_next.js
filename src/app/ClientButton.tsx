"use client";

export default function ClickButton() {
  return (
    <button
      onClick={() => {
        console.log("Hello");
      }}
    >
      Click
    </button>
  );
}
