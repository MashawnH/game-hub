import { Image, HStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"68px"}></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
    </HStack>
  );
};

export default NavBar;
