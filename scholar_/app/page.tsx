"use client";
import Navigate from "@/src/navbar/Navigate";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Requirements from "./requirements/page";

export default function Home() {
  return (
    <>
      <Navigate></Navigate>
      <Requirements></Requirements>
    </>
  );
}
