import { IconArrowAutofitLeft, IconArrowBack, IconArrowLeft, IconArrowLeftRight, IconArrowsDiff, IconCertificate, IconDotsVertical, IconPlus, IconUsers, IconX, IconBell, IconListDetails } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-50 border-r p-6 shrink-0 min-h-screen">
      <nav className="flex flex-col h-full">
        <div className="flex mb-8">
          <span>Lukoil</span>
          <button className="p-1.5 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md ml-auto">
            <IconArrowLeft size={16} />
          </button>
        </div>
        <button className="rounded-lg py-2 px-4 text-xl bg-red-600 hover:bg-red-500 flex items-center text-white mb-6">
          <IconPlus className="mr-3" size={20} />
          Новое
        </button>
        <ul className="list-none flex flex-col">
          {/* <li>
            <Link to="tabloit" className="px-3 py-1.5 flex gap-x-2.5 items-center hover:bg-slate-200 rounded-md">
              <IconArrowsDiff size={16} />
              <span>Табло</span>
            </Link>
          </li>
          <li>
            <Link to="orders" className="px-3 py-1.5 flex gap-x-2.5 items-center hover:bg-slate-200 rounded-md">
              <IconCertificate size={16} />
              <span>Приказы</span>
            </Link>
          </li>
          <li>
            <Link to="employees" className="px-3 py-1.5 flex gap-x-2.5 items-center hover:bg-slate-200 rounded-md">
              <IconUsers size={16} />
              <span>Сотрудники</span>
            </Link>
          </li> */}
          <li>
            <Link to="ordersEmpl" className="px-3 py-1.5 flex gap-x-2.5 items-center hover:bg-slate-200 rounded-md">
              <IconCertificate size={16} />
              <span>Мои заявки</span>
            </Link>
          </li>
          <li>
            <Link to="ordersSuper" className="px-3 py-1.5 flex gap-x-2.5 items-center hover:bg-slate-200 rounded-md">
              <IconBell size={16} />
              <span>Новые заявки</span>
            </Link>
          </li>
          <li>
            <Link to="ordersPrint" className="px-3 py-1.5 flex gap-x-2.5 items-center hover:bg-slate-200 rounded-md">
              <IconListDetails size={16} />
              <span>Все заявки</span>
            </Link>
          </li>
        </ul>
        <div className="relative text-left mt-auto">
          <div className="flex items-center">
            <div className="flex gap-x-3 w-full">
              <img src="https://cdn.shopify.com/s/files/1/0250/1217/4900/products/steve-carrell-best-boss-mug_620x.jpg?v=1632834772" className="rounded-full w-12 aspect-square object-cover" alt="" />
              <div className="flex flex-col">
                <span className="font-semibold">Анвархуджаев А.</span>
                <span className="text-slate-500">Админ</span>
              </div>
            </div>
            <button type="button" className="inline-flex rounded-md p-2 text-sm font-semibold text-gray-900 hover:bg-slate-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
              <IconDotsVertical size={16} />
            </button>
          </div>
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" >
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
              <form method="POST" action="#" role="none">
                <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
              </form>
            </div>
          </div>
        </div>

      </nav>
    </aside>
  )
}
export default Sidebar