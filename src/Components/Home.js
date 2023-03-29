import { useState } from "react";
import { CardSection } from "./CardSection";
import { SearchBar } from "./SearchBar";
import { SettingsBar } from "./SettingsBar";

export const Home = ({handleShow, notes}) => {
    const [search, setSearch] = useState("");
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    return (
        <div className="home container">
            <SettingsBar handleShow={handleShow} />
            <SearchBar value={search}  handleChange={handleSearch} />
            <CardSection search={search} notes={notes} /> 
        </div>
    );
}