import useFetch from "../../hooks/use-fetch";
import { Link } from "react-router-dom";

const Dogs = () => {
 const getBreedsUrl = "https://dog.ceo/api/breeds/list/all";
 const [breedsList, breedsListErr, breedsListLoading] = useFetch(getBreedsUrl);

 if (breedsListLoading || !breedsList.message) return <div> loading </div>;
 if (breedsListErr) return <div> error </div>;

 const filteredBreeds = Object.keys(breedsList.message);

 return (
   <main>
     {filteredBreeds.map((e, i) => (
       <Link key={i} to={`/dogs/${e}`}>
        <div> 
         {e}
         </div>
       </Link>
     ))}
   </main>
 );
};
export default Dogs;
