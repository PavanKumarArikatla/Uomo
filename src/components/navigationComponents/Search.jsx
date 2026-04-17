import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import styles from "./Navigation.module.css"

export default function Search(){
    const navigate = useNavigate();
    const { search, togglePanel, setSearch } = useContext(StylesContext);
    const [searchSuggestions, setSearchSuggestions] = useState(() => {
      const saved = localStorage.getItem("searchSuggestions");
      return saved ? JSON.parse(saved) : [];
    });

    function handleChange(e) {
      setSearch(e.target.value);
    }
    function handleSubmit(e) {
      e.preventDefault();
      togglePanel("search");

      if(!search) return;

      const filteredSuggestions = searchSuggestions.filter(item => item !== search);
      const updatedSuggestions = filteredSuggestions.length >=5 
        ? [...filteredSuggestions.slice(1), search]
        : [...filteredSuggestions, search];

      setSearchSuggestions(updatedSuggestions);
      localStorage.setItem("searchSuggestions", JSON.stringify(updatedSuggestions));
 
      navigate(`/search/${search}`);
    }
    function handleDeleteSuggestion(curSuggestion){
        setSearchSuggestions((prev) => {
            const changedSuggestions = prev.filter(suggestion => suggestion !== curSuggestion)
            localStorage.setItem("searchSuggestions", JSON.stringify(changedSuggestions))
            return changedSuggestions
        })
    }
    return (
        <div className={styles.searchBlock}>
            <div className={styles.search}>
                <p>WHAT ARE YOU LOOKING FOR?</p>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="SEARCH PRODUCTS"
                    value={search}
                    onChange={handleChange}
                    className={styles.input}
                    />
                </form>
                <br></br>

                <div className="flex gap-4">
                    {searchSuggestions.map((suggestion) => (
                        <div className="w-[10%] bg-gray-300 flex justify-around" key={suggestion}>
                            <Link to={`/search/${suggestion}`} onClick={() => togglePanel("search")}>
                                <p>{suggestion}</p>
                            </Link>
                            <button onClick={() => handleDeleteSuggestion(suggestion)} className="cursor-pointer">&#x1D5B7;</button>
                        </div>
                    ))}
                </div>
                <br></br>
                <div>
                    <Link to=""><p>New Arrivals</p></Link>
                    <Link to=""><p>Dresses</p></Link>
                    <Link to=""><p>Accessories</p></Link>
                    <Link to=""><p>Footwear</p></Link>
                    <Link to=""><p>Sweatshirt</p></Link>
                </div>
            </div>
        </div>
    )
}
