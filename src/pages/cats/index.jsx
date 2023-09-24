import useFetch from "../../hooks/use-fetch";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Cats = () => {
  const getBreedsUrl = "https://api.thecatapi.com/v1/breeds";
  const [breedsList, breedsListErr, breedsListLoading] = useFetch(getBreedsUrl);
  const navigate = useNavigate();

  const [catName, setCatName] = useState("Select");

  const handleSelect = (e) => {
    setCatName(e.target.value); //
    // console.log("selected", e.target.value);

    const selectedCat = e.target.value;
    console.log(selectedCat);
    if (selectedCat !== "Select") {
      navigate(`/cats/${selectedCat}`);
    }
  };

  if (breedsListLoading || !breedsList) return <div> loading </div>;
  if (breedsListErr) return <div> error </div>;

  // const filteredBreeds = Object.values(breedsList);
  //  console.log(filteredBreeds)
  return (
    <main>
      <div className="catSelect">
        <label>Select a Cat</label>
        <select value={catName} onChange={handleSelect}>
          <option value="Select">All</option>

          {breedsList.map((breed, i) => (
            <option key={i} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </div>
{/* 
      {breedsList.map((breed, i) => (
        <Link key={i} to={`/cats/${breed.id}`}>
          <div>{breed.name}</div>
        </Link>
      ))} */}
    </main>
  );
};
export default Cats;
