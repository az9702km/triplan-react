import {
  IconEdit,
  IconEye,
  IconMail,
  IconPencil,
  IconPlug,
  IconPlus,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";
import { IconEditOff } from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import EmployeesContext from "../context/employees/EmployeesContext";
import { getEmployees } from "../context/employees/EmployeesActions";

function EmployeesPage() {
  const { employees, employee, dispatch } = useContext(EmployeesContext);

  const showEmployee = (empl) => dispatch({type: "GET_EMPL", payload: empl})
  const hideEmployee = () => dispatch({type: "CLEAN_EMPL"})

  useEffect(() => {
    const empls = getEmployees();
    dispatch({ type: "GET_EMPLS", payload: empls });
  }, []);

  return (
    <>
      <h1 className="text-3xl mb-6">Сотрудники</h1>
      <div className="flex gap-x-4">
        <div className="w-1/4">
          <nav className="flex flex-col"></nav>
        </div>
        <div className="w-3/4">
          <div className="rounded-lg border border-slate-200">
            <div className="px-6 py-4 flex justify-between border-b">
              <div className="relative rounded-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IconSearch className="text-slate-500" size={16} />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 outline-0"
                  placeholder="Поиск..."
                />
              </div>
              <a
                href="#!"
                className="py-1.5 px-3 flex gap-x-1.5 items-center bg-blue-600 rounded-md text-white font-semibold"
              >
                <IconPlus size={16} /> Новый сотрудник
              </a>
            </div>
            <table className="w-full">
              <thead className="table-head">
                <tr>
                  <th>Персонал</th>
                  <th>Должность</th>
                  {/* <th>Отдел</th> */}
                  <th>Руководитель</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {employees.map((empl) => (
                  <tr>
                    <td>
                      <div className="flex gap-x-3 w-full items-start">
                        <img
                          src={empl.img}
                          className="rounded-full w-10 aspect-square object-cover"
                          alt=""
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold text-sm">
                            {empl.name}
                          </span>
                          <a
                            href="#!"
                            className="text-slate-500 text-sm flex items-center hover:text-blue-600 hover:underline"
                          >
                            <IconMail className="mr-1" stroke={1} size={14} />{" "}
                            {empl.email}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>{empl.title}</td>
                    {/* <td>{empl.dep}</td> */}
                    <td>{empl.superViser}</td>
                    <td className="w-36">
                      <div className="flex">
                        <button 
                          onClick={(empl) => showEmployee(empl)}
                          className="px-3 py-3 text-slate-500 rounded-md hover:bg-slate-100">
                          <IconEye size={16} />
                        </button>
                        <button
                          className="px-3 py-3 text-slate-500 rounded-md hover:bg-slate-100"
                        >
                          <IconPencil size={16} />
                        </button>
                        <button className="px-3 py-3 text-red-500 rounded-md hover:bg-red-100">
                          <IconTrash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {Object.keys(employee).length !== 0 && (
        <div
          className="fixed left-0 top-0 flex items-center justify-center h-full w-full z-10 ease-out duration-300 opacity-100"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          onClick={hideEmployee}></div>
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Deactivate account
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All
                      of your data will be permanently removed. This action
                      cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Deactivate
              </button>
              <button
                onClick={hideEmployee}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default EmployeesPage;
