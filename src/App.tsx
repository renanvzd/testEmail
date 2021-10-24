import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Routes } from './routes';
import { PageTemplate } from "./Components/pageTemplate";
import ScrollToTop from "./Components/ScrollToTop/scrollToTop";

export function App() {
  return (
  <>
  <BrowserRouter>
  <ScrollToTop  />
    <PageTemplate>
      <Routes />
    </PageTemplate>
    <GlobalStyle />
  </BrowserRouter>
  </>
  );
}
