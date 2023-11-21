import { createContext, useContext, useState } from 'react';



type AdminType = string;

interface AdminContextProps {
  adminType: AdminType;
  setAdminType: (type: AdminType) => void;
}

const AdminContext = createContext<AdminContextProps>({
  adminType: 'dashboard',
  setAdminType: () => {},
});

export const useAdmin = () => useContext(AdminContext);

interface AdminProviderProps extends React.HTMLAttributes<HTMLDivElement> {  children: React.ReactNode}

export const AdminProvider = ({children ,...props}: AdminProviderProps)  => {
  const [adminType, setAdminType] = useState<AdminType>('dashboard');

  return (
    <AdminContext.Provider {...props} value={{ adminType, setAdminType }}>
      {children}
    </AdminContext.Provider>
  );
};
