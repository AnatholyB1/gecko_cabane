import { createContext, useContext, useState } from 'react';

type MenuType = 'special' | 'menu' | 'drink';

interface MenuContextProps {
  menuType: MenuType;
  setMenuType: (type: MenuType) => void;
}

const MenuContext = createContext<MenuContextProps>({
  menuType: 'menu',
  setMenuType: () => {},
});

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({children} : {children :any}) => {
  const [menuType, setMenuType] = useState<MenuType>('menu');

  return (
    <MenuContext.Provider value={{ menuType, setMenuType }}>
      {children}
    </MenuContext.Provider>
  );
};
