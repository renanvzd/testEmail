import { ReactNode } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

type Template = {
  children: ReactNode;
};

export function PageTemplate(props: Template) {
  return (
    <div>
      
      <Header />
        {props.children}
      <Footer />
      </div>
  );
}

