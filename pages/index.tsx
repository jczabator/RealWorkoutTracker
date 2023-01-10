import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Exercises } from "../components/exercises";

export default function Home() {
  return (
    <>
      <Exercises />
    </>
  );
}
