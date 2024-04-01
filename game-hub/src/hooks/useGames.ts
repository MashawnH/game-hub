import { GameQurey } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

 export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform[]};
    metacritic: number;

  }
  


const useGames = (gameQuery: GameQurey) => useData<Game>("/games", {
  params: {
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id
  }}, 
    [gameQuery]);
   

export default useGames