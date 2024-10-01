"use client";

import { useRouter } from "next/navigation";


function CustomButton() {
    const route =  useRouter()
  return (
    <button onClick={() => route.push('/')} className="my-2">
      Go to Home
    </button>
  );
}

export default CustomButton;
