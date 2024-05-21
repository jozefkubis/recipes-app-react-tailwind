const SearchForm = ({
  searchItem,
  setSearchItem,
  setFoundItems,
  minProtein,
  setMinProtein,
  maxCarbs,
  setMaxCarbs,
}) => {
  const printOnPg = (e) => {
    e.preventDefault()

    if (searchItem) {
      setFoundItems((foundItems) => {
        return [...foundItems, searchItem]
      })

      const form = document.querySelector(".form")
      form.classList.add("height")

      const header = document.querySelector(".header")
      header.classList.add("quote")

      setSearchItem("")
    }
  }

  return (
    <div className="form flex flex-col items-center justify-center w-full h-screen fixed bg-[#1e1d2f] z-10">
      <form className="flex space-x-2 text-sm" onSubmit={printOnPg}>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex space-x-4">
            <input
              className="border-solid border-2 border-pink-600 rounded-md outline-none text-black w-64 p-2 text-xl font-semibold"
              type="text"
              placeholder="Input Ingredient"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <label htmlFor="minProteinInput">Min Protein:</label>
            <input
              id="minProteinInput"
              className="border-solid border-2 border-pink-600 w-16 rounded-md outline-none  text-black text-xl font-semibold"
              value={minProtein}
              onChange={(e) => setMinProtein(e.target.value)}
              type="number"
            />
            <label htmlFor="maxCarbsInput">Max Carbs:</label>
            <input
              id="maxCarbsInput"
              className="border-solid border-2 border-pink-600 w-16 rounded-md outline-none  text-black text-xl font-semibold"
              value={maxCarbs}
              onChange={(e) => setMaxCarbs(e.target.value)}
              type="number"
            />
          </div>

          <div>
            <button className="border-solid border-2 border-pink-600 text-pink-600 bg-[#2d2b43] ml-4 w-20 rounded-md">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1 className="header italic text-2xl p-10">
        "Quality recipes for every occasion"
      </h1>
    </div>
  )
}

export default SearchForm
