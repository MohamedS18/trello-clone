import { createContext, useState, type ReactNode } from "react";
import { getData, type ListType } from "../data";

type DataContextType = {
  boardData: ListType[];
  setBoardData: React.Dispatch<React.SetStateAction<ListType[]>>;
};

type Props = { children: ReactNode };

export const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: Props) {
  const [boardData, setBoardData] = useState(() => getData());

  return (
    <DataContext.Provider value={{ boardData, setBoardData }}>
      {children}
    </DataContext.Provider>
  );
}
