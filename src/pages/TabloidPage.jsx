import { IconEdit, IconEye, IconMail, IconPencil, IconPlane, IconPlaneArrival, IconPlaneDeparture, IconPlug, IconPlus, IconSearch, IconTrain, IconTrash } from '@tabler/icons-react';
import { IconEditOff } from '@tabler/icons-react';

function TabloidPage() {
  return (
    <>
      <h1 className="text-3xl mb-6">Сотрудники</h1>
      <div className="rounded-lg border border-slate-200">
        <div className="px-6 py-4 flex justify-between border-b">
          <div className="flex flex-auto rounded-lg bg-slate-100 p-0.5">
            <div className="flex flex-auto justify-center items-center py-2 gap-x-6 rounded-md bg-white">
              <div className="p-2 bg-blue-600 rounded text-white">
                <IconPlaneDeparture size={24} />
              </div>
              <span className="font-semibold">Отлеты</span>
            </div>
            <div className="flex flex-auto justify-center items-center py-2 gap-x-6 rounded-md">
              <div className="p-2 bg-red-400 rounded text-white">
                <IconPlaneArrival className="-scale-x-100" size={24} />
              </div>
              <span className="font-semibold text-slate-500">Отлеты</span>
            </div>
          </div>
        </div>
        <table className="w-full">
          <thead className="table-head">
            <tr>
              <th>Транспорт</th>
              <th>Рейс</th>
              <th>Пункт назначения</th>
              <th>Время отбытия</th>
              <th>Ответственный</th>
              <th>Телефон</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>
                <div className="p-2 inline-flex rounded-md bg-blue-50 text-blue-600">
                  <IconPlaneDeparture size={24} />
                </div>
              </td>
              <td className="text-gray-500">HY 078</td>
              <td>Бухара Аэропорт</td>
              <td><span className="font-medium">20:08</span></td>
              <td>Мансуралиев А.</td>
              <td>
                <a href="#!" className="text-blue-600">90 123 45 56</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="p-2 inline-flex rounded-md bg-violet-50 text-violet-600">
                  <IconTrain size={24} />
                </div>
              </td>
              <td className="text-gray-500">Шарк</td>
              <td>Наманган</td>
              <td><span className="font-medium">20:08</span></td>
              <td>Джураев Д.</td>
              <td>
                <a href="#!" className="text-blue-600">90 187 83 00</a>
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="table-section">23 Февраль, 2023, ЧТ</td>
            </tr>
            <tr>
              <td>
                <div className="p-2 inline-flex rounded-md bg-violet-50 text-violet-600">
                  <IconTrain size={24} />
                </div>
              </td>
              <td className="text-gray-500">Афрасияб</td>
              <td>Кашкадарья</td>
              <td><span className="font-medium">16:08</span></td>
              <td>Самадова Г.</td>
              <td>
                <a href="#!" className="text-blue-600">90 234 33 21</a>
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="table-section">24 Февраль, 2023, ПТ</td>
            </tr>
            <tr>
              <td>
                <div className="p-2 inline-flex rounded-md bg-violet-50 text-violet-600">
                  <IconTrain size={24} />
                </div>
              </td>
              <td className="text-gray-500">Афрасияб</td>
              <td>Самарканд</td>
              <td><span className="font-medium">02:20</span></td>
              <td>Мансуралиев А.</td>
              <td>
                <a href="#!" className="text-blue-600">90 755 44 34</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="p-2 inline-flex rounded-md bg-blue-50 text-blue-600">
                  <IconPlaneDeparture size={24} />
                </div>
              </td>
              <td className="text-gray-500">HY 078</td>
              <td>Бухара Аэропорт</td>
              <td><span className="font-medium">15:50</span></td>
              <td>Носиров Ж.</td>
              <td>
                <a href="#!" className="text-blue-600">90 356 55 05</a>
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="table-section">25 Февраль, 2023, СБ</td>
            </tr>
            <tr>
              <td>
                <div className="p-2 inline-flex rounded-md bg-violet-50 text-violet-600">
                  <IconTrain size={24} />
                </div>
              </td>
              <td className="text-gray-500">Афрасияб</td>
              <td>Самарканд</td>
              <td><span className="font-medium">23:12</span></td>
              <td>Нурмухаммадов А.</td>
              <td>
                <a href="#!" className="text-blue-600">90 232 22 33</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="p-2 inline-flex rounded-md bg-blue-50 text-blue-600">
                  <IconPlaneDeparture size={24} />
                </div>
              </td>
              <td className="text-gray-500">HY 078</td>
              <td>Наманган Аэропорт</td>
              <td><span className="font-medium">11:00</span></td>
              <td>Абдурашидов А.</td>
              <td>
                <a href="#!" className="text-blue-600">90 545 67 07</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default TabloidPage