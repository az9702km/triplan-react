import { createContext, useReducer } from "react";
import employeesReduser from "./EmployeesReducer";

const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const initialState = {
    employees: [],
    employee: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(employeesReduser, initialState);

  return (
    <EmployeesContext.Provider value={{...state, dispatch}} >
      {children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesContext;