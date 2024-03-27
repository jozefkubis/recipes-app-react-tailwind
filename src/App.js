import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import FoundItems from "./components/foundItems";
import PrintOnPage from "./components/PrintOnPage";
import getDataFromApi from "./components/getDataFromApi";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const [foundItems, setFoundItems] = useState([]);
  const [printOnPage, setPrintOnPage] = useState([]);
  const [minProtein, setMinProtein] = useState(0);
  const [maxCarbs, setMaxCarbs] = useState(100);

  useEffect(() => {
    const foundItemsJoin = foundItems.join(",");

    const fetchItems = async () => {
      const { hits } = await getDataFromApi(foundItemsJoin);
      const recipes = hits.map((hit) => hit.recipe);

      const filteredRecipes = recipes.filter((recipe) => {
        return (
          recipe.totalNutrients.PROCNT.quantity >= minProtein &&
          recipe.totalNutrients.CHOCDF.quantity <= maxCarbs
        );
      });

      const form = document.querySelector(".form");
      const header = document.querySelector(".header");
      if (!foundItems.length) {
        form.classList.remove("height");
        header.classList.remove("quote");
      }

      setPrintOnPage(filteredRecipes);
    };

    fetchItems();
  }, [foundItems, minProtein, maxCarbs, foundItems.length]);

  //........................................................

  return (
    <section className="flex flex-col items-center h-screen">
      <SearchForm
        setFoundItems={setFoundItems}
        setSearchItem={setSearchItem}
        searchItem={searchItem}
        minProtein={minProtein}
        setMinProtein={setMinProtein}
        maxCarbs={maxCarbs}
        setMaxCarbs={setMaxCarbs}
      />
      <div className="flex justify-center mt-20 p-1 space-x-3 z-10 fixed bg-[#1e1d2f] w-full">
        <FoundItems foundItems={foundItems} setFoundItems={setFoundItems} />
      </div>

      <PrintOnPage
        className=""
        printOnPage={printOnPage}
        setPrintOnPage={setPrintOnPage}
      />
    </section>
  );
};

export default App;
