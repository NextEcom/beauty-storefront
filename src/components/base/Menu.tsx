import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  MenuProps,
} from "@mui/material";
import React, {
  cloneElement,
  ComponentProps,
  ComponentPropsWithRef,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";

type MenuContextType = {
  isOpen: boolean;
  anchorEl: MenuProps["anchorEl"];
};
const MenuContext = createContext<
  MenuContextType & {
    setIsOpen: (value: boolean) => void;
    setAnchorEl: (value: MenuContextType["anchorEl"]) => void;
  }
>({
  isOpen: false,
  anchorEl: null,
  setIsOpen: () => null,
  setAnchorEl: () => null,
});

function MenuImpl({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function Menu({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<MenuContextType["anchorEl"]>(null);

  return (
    <MenuContext.Provider
      value={{
        isOpen: isOpen,
        anchorEl: anchorRef.current,
        setIsOpen,
        setAnchorEl: (el) => (anchorRef.current = el),
      }}
    >
      <MenuImpl>{children}</MenuImpl>
    </MenuContext.Provider>
  );
}

function Button({
  children,
}: {
  children: ReactElement<ComponentPropsWithRef<"button">>;
}) {
  const { setIsOpen, setAnchorEl } = useContext(MenuContext);
  return (
    <>
      {cloneElement(children, {
        ref: setAnchorEl,
        onClick: () => setIsOpen(true),
      })}
    </>
  );
}

function List(props: Omit<ComponentProps<typeof MuiMenu>, "open">) {
  const { isOpen, anchorEl, setIsOpen } = useContext(MenuContext);
  return (
    <MuiMenu anchorEl={anchorEl} open={isOpen} onClose={() => setIsOpen(false)}>
      {props.children &&
        React.Children.map(
          props.children as ReactElement<ComponentProps<typeof MuiMenuItem>>,
          (child) =>
            cloneElement(child, {
              onClick: (e: any) => {
                setIsOpen(false);
                if (child.props.onClick) {
                  child.props.onClick(e);
                }
              },
            })
        )}
    </MuiMenu>
  );
}

Menu.Button = Button;
Menu.List = List;
Menu.Item = MuiMenuItem;
