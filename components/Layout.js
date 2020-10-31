import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>honzza dvorak | web developer</title>
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
}
