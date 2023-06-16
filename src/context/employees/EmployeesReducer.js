const employeesReduser = (state, action) => {
  switch (action.type) {
    case 'GET_EMPLS':
      return {
        ...state,
        employees: action.payload,
        loading: false
      }
    case 'GET_EMPL':
      return {
        ...state,
        employee: action.payload,
      }
    case 'CLEAN_EMPL':
      return {
        ...state,
        employee: {}
      }
  }
}

export default employeesReduser;