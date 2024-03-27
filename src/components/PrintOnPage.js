const PrintOnPage = ({ printOnPage, setPrintOnPage }) => {
  const handleRemove = (recipe) => {
    setPrintOnPage(printOnPage.filter((item) => item !== recipe));
  };

  const unHideHeading = () => {
    const headings = document.querySelectorAll(".heading");
    headings.forEach((heading) => {
      heading.addEventListener("click", () => {
        const textDiv = heading.parentNode.parentNode.querySelector(
          ".flex.flex-col.justify-between"
        );
        if (textDiv) {
          textDiv.classList.toggle("invisible");
        }
      });
    });
  };

  const unHide = () => {
    const images = document.querySelectorAll(".recipe-image");
    images.forEach((image) => {
      image.addEventListener("click", () => {
        const textDiv = image.nextElementSibling;
        textDiv.classList.toggle("invisible");
      });
    });
  };

  return (
    <ol className="grid grid-cols-2 space-x-10 space-y-10 place-items-baseline pt-28">
      {printOnPage.map((recipe, index) => {
        const { label, image, ingredientLines, calories, url, totalNutrients } =
          recipe;

        return (
          <li
            className="flex-inline w-[340px] h-[340px] space-y-3 border-solid border-2 border-sky-8 rounded-2xl p-3 overflow-auto relative bg-[#2d2b43] cursor-pointer"
            key={index}
          >
            <div className="flex justify-between">
              <h3 onClick={unHideHeading} className="heading text-ms font-bold">
                {label}{" "}
              </h3>
              <button
                className=""
                style={{ cursor: "pointer" }}
                onClick={() => handleRemove(recipe)}
              >
                x
              </button>
            </div>

            <div className="flex justify-center items-center space-y-2">
              <img
                className="recipe-image w-52 h-52 rounded-full mt-5"
                src={image}
                alt={label}
                onClick={unHide}
              />
              <div className="flex flex-col justify-between text-[10px] invisible absolute p-2 bottom-0 right-0 bg-white rounded-md text-black italic font-medium w-full">
                <p className="recipe-ingredients mb-2">
                  Ingredients: {ingredientLines.join(", ")}
                </p>
                <div className="mb-2">
                  <p>
                    {totalNutrients["PROCNT"].label}:{" "}
                    {totalNutrients["PROCNT"].quantity.toFixed(2)}{" "}
                    {totalNutrients["PROCNT"].unit}
                  </p>
                  <p>
                    {totalNutrients["CHOCDF"].label}:{" "}
                    {totalNutrients["CHOCDF"].quantity.toFixed(2)}{" "}
                    {totalNutrients["CHOCDF"].unit}
                  </p>
                  <p>
                    {totalNutrients["SUGAR"].label}:{" "}
                    {totalNutrients["SUGAR"].quantity.toFixed(2)}{" "}
                    {totalNutrients["SUGAR"].unit}
                  </p>
                  <p>
                    {totalNutrients["FIBTG"].label}:{" "}
                    {totalNutrients["FIBTG"].quantity.toFixed(2)}{" "}
                    {totalNutrients["FIBTG"].unit}
                  </p>
                  <p className="recipe-calories">
                    Calories: {Math.round(calories)}
                  </p>
                </div>

                <div>
                  <a href={url} target="_blank" rel="noreferrer">
                    Click here for instructions...
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default PrintOnPage;
