import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return <section className="container"> {children}</section>;
}
