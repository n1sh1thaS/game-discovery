import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} margin-right={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
