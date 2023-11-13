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

interface MenuProviderProps extends React.HTMLAttributes<HTMLDivElement> {  children: React.ReactNode}

export const MenuProvider = ({children ,...props}: MenuProviderProps)  => {
  const [menuType, setMenuType] = useState<MenuType>('menu');

  return (
    <MenuContext.Provider {...props} value={{ menuType, setMenuType }}>
      {children}
    </MenuContext.Provider>
  );
};
