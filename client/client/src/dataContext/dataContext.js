import { createContext, useState, useEffect } from "react";
import Axios from "axios";
const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        const getElements = async () => {
            const response = await Axios.get("http://localhost:3500/api/Users");
            const data = response.data;
            console.log(data);
            setData(data);
            }
            getElements();
    }, []);
   const handleDelete = async (id) => {
        try{
            const response = await Axios.delete(`http://localhost:3500/api/Users/${id}`);
            return window.location.reload();
        }catch(err){
            console.log(err.message);
        }
   }
    return <DataContext.Provider value={{datas, handleDelete}}>
    {children}
</DataContext.Provider>
}
export default DataContext;