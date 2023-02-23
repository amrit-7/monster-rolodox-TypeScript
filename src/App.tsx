import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { useState, useEffect, ChangeEvent } from "react";
import { getData } from "./utils/getdata.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  };
  return (
    <div className="App">
      <h1 className="app-title"> Bossom Buddies </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search...."
        className="monster-search"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
