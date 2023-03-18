import {
  HStack,
  useRadioGroup,
  Menu,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../Context";
import ThemeOption from "./ThemeOption";

const ThemeSelect = () => {
  const options = [
    "blue.400",
    "green.400",
    "cyan.400",
    "gray.400",
    "red.400",
    "orange.400",
    "#F15BA6",
    "#1C4532",
    "#F6E05E",
    "#63171B",
  ];

  const { theme, setTheme } = useResume();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    value: theme,
    onChange: setTheme,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <ThemeOption key={value} {...radio}>
            {value}
          </ThemeOption>
        );
      })}
    </HStack>
  );
};

export default ThemeSelect;
