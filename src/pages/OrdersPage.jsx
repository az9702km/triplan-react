import { IconEdit, IconEye, IconMail, IconPencil, IconPlug, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react';
import { IconEditOff } from '@tabler/icons-react';

function OrdersPage() {
  return (
    <>
      <h1 className="text-3xl mb-6">Приказы</h1>
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
            <IconPlus size={16} /> Новый Приказ
          </a>
        </div>
        <table className="w-full">
          <thead className="table-head">
            <tr>
              <th>№</th>
              <th>Начало</th>
              <th>Конец</th>
              <th>Цель</th>
              <th>Место</th>
              <th>Участники</th>
              <th>Руководитель</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>
                <a href="#!" className="text-blue-600 font-medium">#32311</a>
              </td>
              <td>18.12.2022 </td>
              <td>03.01.2023</td>
              <td>Проверка регионального филиала</td>
              <td>Наманган</td>
              <td>
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://www.aceshowbiz.com/images/events/RWP-002436.jpg" alt="" />
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://flxt.tmsimg.com/assets/274723_v9_bb.jpg" alt="" />
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://www.film.ru/sites/default/files/people/1518290-1108959.jpg" alt="" />
                </div>
              </td>
              <td>Иванов Николай</td>
              <td className="w-28">
                <div className="flex">
                  <button className="px-3 py-3 text-slate-500 rounded-md hover:bg-slate-100">
                    <IconEye size={16} />
                  </button>
                  <button className="px-3 py-3 text-red-500 rounded-md hover:bg-red-100">
                    <IconTrash size={16} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#!" className="text-blue-600 font-medium">#32311</a>
              </td>
              <td>18.12.2022 </td>
              <td>03.01.2023</td>
              <td>Проверка регионального филиала</td>
              <td>Бухара</td>
              <td>
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://cdn.fansshare.com/celebrity/charlizetheron/450_charlize-theron-normal-devil-advocate-2001089775.jpg" alt="" />
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://i.insider.com/5d03eb08daa48207da7c6698?width=750&format=jpeg&auto=webp" alt="" />
                </div>
              </td>
              <td>Иванов Николай</td>
              <td className="w-28">
                <div className="flex">
                  <button className="px-3 py-3 text-slate-500 rounded-md hover:bg-slate-100">
                    <IconEye size={16} />
                  </button>
                  <button className="px-3 py-3 text-red-500 rounded-md hover:bg-red-100">
                    <IconTrash size={16} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#!" className="text-blue-600 font-medium">#32311</a>
              </td>
              <td>18.12.2022 </td>
              <td>03.01.2023</td>
              <td>Проверка регионального филиала</td>
              <td>Р. Каракалпак</td>
              <td>
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://www.artkinoclub.ru/netcat_files/417/529/kidman.jpg" alt="" />
                </div>
              </td>
              <td>Иванов Николай</td>
              <td className="w-28">
                <div className="flex">
                  <button className="px-3 py-3 text-slate-500 rounded-md hover:bg-slate-100">
                    <IconEye size={16} />
                  </button>
                  <button className="px-3 py-3 text-red-500 rounded-md hover:bg-red-100">
                    <IconTrash size={16} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#!" className="text-blue-600 font-medium">#32311</a>
              </td>
              <td>18.12.2022 </td>
              <td>03.01.2023</td>
              <td>Проверка регионального филиала</td>
              <td>Наманган</td>
              <td>
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://flxt.tmsimg.com/assets/269411_v9_bd.jpg" alt="" />
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/Partnerships/GoodwillAmbassadors/UNwomen_AH_Photo_400px.jpg?h=375&la=en&w=300" alt="" />
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://hips.hearstapps.com/hmg-prod/images/heath_ledger_getty_images_photo_bob_riha_jr_wireimage_116948085.jpg" alt="" />
                  <img className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white" src="https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg" alt="" />
                </div>
              </td>
              <td>Иванов Николай</td>
              <td className="w-28">
                <div className="flex">
                  <button className="px-3 py-3 text-slate-500 rounded-md hover:bg-slate-100">
                    <IconEye size={16} />
                  </button>
                  <button className="px-3 py-3 text-red-500 rounded-md hover:bg-red-100">
                    <IconTrash size={16} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default OrdersPage