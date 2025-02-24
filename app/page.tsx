'use client'
import { useEffect } from "react";
import DealerHome from "./component/dealer-home";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
  setTheme('dark');
  console.log(theme)
 
  }, [])
  
  return (
  <div>
    <DealerHome />
  </div>
);
}
