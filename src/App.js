import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";

export default function App() {
  return (
    <>
      <Header></Header>
      <section>
        <Headline header="hello akib" desc="hello desc"></Headline>
      </section>
    </>
  );
}
