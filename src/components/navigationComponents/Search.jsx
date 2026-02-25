import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import Shopping from "../../reusedComponents/Shopping";
import Card from "../../reusedComponents/Card";
import styles from "./Navigation.module.css"

export default function Search(){
    const navigate = useNavigate();
    const { search, searchResults, handleChange, handleSearch, addItems } = useContext(StylesContext)
    function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
    if (search) navigate("/search");
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

                { search && searchResults.length ? (
                        <Shopping>
                          {searchResults.map((card) => (
                            <Card
                              key={card._id || card.style}
                              card={card}
                              addItems={addItems}
                            />
                          ))}
                        </Shopping>
                      ) : (
                        <div>
                          <h4>QUICkLINKS</h4>
                          <div className="">
                            <Link to=""><p>New Arrivals</p></Link>
                            <Link to=""><p>Dresses</p></Link>
                            <Link to=""><p>Accessories</p></Link>
                            <Link to=""><p>Footwear</p></Link>
                            <Link to=""><p>Sweatshirt</p></Link>
                          </div>
                        </div>
                      )}
            </div>
        </div>
    )
}