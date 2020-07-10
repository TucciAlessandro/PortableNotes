import React, { ReactNode, createContext, useState, useContext } from "react";

interface CreateContextProviderProps {
  children: ReactNode;
}

const DEFAULT_CONTEXT_VALUE = {
  toggleCreatePage: () => console.error("not in context"),
  isCreating: false,
};

interface CreateContextValue {
  toggleCreatePage: () => void;
  isCreating: boolean;
}

const MyCreatePageContext = createContext<CreateContextValue>(
  DEFAULT_CONTEXT_VALUE
);

export const useMyCreatePageContext = () => useContext(MyCreatePageContext);

export const MyCreatePageContextsProvider = ({
  children,
}: CreateContextProviderProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const toggleCreatePage = () => setIsCreating(!isCreating);

  return (
    <MyCreatePageContext.Provider value={{ isCreating, toggleCreatePage }}>
      {children}
    </MyCreatePageContext.Provider>
  );
};
