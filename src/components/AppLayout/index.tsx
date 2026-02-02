import { DataProvider } from "../../context/dataContext";
import { Header } from "../Header";
import { Main } from "../Main";
import "./AppLayout.module.scss";

export function AppLayout() {
  return (
    <>
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
    </>
  );
}
