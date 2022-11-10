import "./style.css";
import Footer from "../../component/footer/Footer";
import { HeroBackground } from "../../component/hero/HeroBackground";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import Card from "./Card";
import ApiSearchProject from "./ApiSearchProject";

const SearchProject = () => {
  const [posts, setPost] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // useEffect(() => {

  // }, [searchTerm]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setPost(res.data);
    };
    fetchApi();

    const result = posts.filter((person) =>
      person.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setSearchResult(result);
  }, [posts, searchTerm]);

  return (
    <>
      <div>
        <HeroBackground title={"Search Project"} />
        <div className="d-flex justify-content-center">
          <form className="searchProjects d-flex m-sm-2 " role="search">
            <input
              className="searchProInput  me-2"
              type="search"
              placeholder="Search more projects"
              aria-label="Search"
              name="search"
              onChange={handleSearch}
              value={searchTerm}
            />
            <span className="searchIconMain">
              <SearchIcon className="searchIcon text-dark" />
            </span>
          </form>
        </div>

        <div className="searchProjectMain d-flex justify-content-center">
          <Card posts={searchResult} className="" />
          <ApiSearchProject posts={searchResult} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SearchProject;
