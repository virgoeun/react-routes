import useFetch from "../../hooks/use-fetch";
import { useParams } from "react-router-dom";


export const CatsBreedsPage = () => {
  const { id } = useParams();
 
  const searchBreedUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;

  const [selectedBreed, selectedBreedErr, selectedBreedLoading] =
    useFetch(searchBreedUrl);

  if (selectedBreedLoading || !selectedBreed) return <div> loading </div>;

  if (selectedBreedErr) return <div> error </div>;

  console.log("Selected Cat Breed", selectedBreed);
  
  
 


  return (
    <main>
      <img src={selectedBreed[0].url} alt="Hi" width="800px" />
    </main>
  );
};
