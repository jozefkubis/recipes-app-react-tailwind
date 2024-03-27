const FoundItems = ({ foundItems, setFoundItems }) => {
  const oneItemRemove = (oneItem) => {
    setFoundItems(foundItems.filter((item) => item !== oneItem));
  };

  return foundItems.map((oneItem, index) => {
    return (
      <div key={index} className="inline-flex items-center space-x-2 italic">
        <p>{oneItem}</p>
        <button
          className="flex justify-center items-center italic text-pink-600"
          onClick={() => oneItemRemove(oneItem)}
        >
          x
        </button>
      </div>
    );
  });
};

export default FoundItems;
