import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AdminState } from '../types';

const AdminContext = createContext<{
  adminState: AdminState;
  toggleAdmin: () => void;
} | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [adminState, setAdminState] = useState<AdminState>({ isAdmin: false });

  const toggleAdmin = () => {
    setAdminState((prev) => ({ isAdmin: !prev.isAdmin }));
  };

  return (
    <AdminContext.Provider value={{ adminState, toggleAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}