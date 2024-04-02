import { Heading } from "@chakra-ui/react";
import { GameQurey } from "../App";

interface Props {
  gameQuery: GameQurey;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
