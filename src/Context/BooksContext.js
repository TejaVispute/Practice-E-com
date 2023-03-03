import { createContext, useContext, useState } from "react";

const BookContext = createContext();


function BookContextProvider({ children }) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    let impData = { data, setData, filter, setFilter, loading, setLoading, search, setSearch, cart, setCart }
    return (
        <BookContext.Provider value={impData}>{children}</BookContext.Provider>
    )
}


const useBookContext = () => useContext(BookContext)

export { BookContextProvider, useBookContext };