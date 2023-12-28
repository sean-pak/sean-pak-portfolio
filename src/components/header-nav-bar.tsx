import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ClassAttributes, HTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

const NavBar = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div {...props}>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="text-button">work</MenubarTrigger>
          <MenubarTrigger className="text-button">about</MenubarTrigger>
          <MenubarTrigger className="text-button">resume</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default NavBar;
