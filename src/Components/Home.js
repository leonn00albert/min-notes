import { CardSection } from "./CardSection";
import { SearchBar } from "./SearchBar";
import { SettingsBar } from "./SettingsBar";

export const Home = ({handleShow, notes}) => {
    return (
        <div className="home container">
            <SettingsBar handleShow={handleShow} />
            <SearchBar />
            <CardSection notes={notes} /> 
        </div>
    );
}