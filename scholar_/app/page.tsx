import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./extranet/landingpage/LandingPage";

export default function Home() {
  return (
    <main>
      <LandingPage></LandingPage>
    </main>
  );
}
