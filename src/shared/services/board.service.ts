import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const fetchBoard = async () => {
    const data = await axios.get("https://dummyjson.com/todos");
    console.log(data);
    return  data.data;
};


export const { data, isLoading, error } = useQuery({
  queryKey: ["boardList"],
  queryFn: fetchBoard,
});