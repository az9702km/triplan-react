import { IconArrowBack, IconArrowNarrowLeft, IconCalendarEvent, IconId, IconIdBadge, IconPlus, IconPrinter, IconTrash, IconUpload } from "@tabler/icons-react"

function EditOrderPage() {
  return (
    <>
      <div className="pt-3">
        <a href="#!" className="btn btn-secondary">
          <IconArrowNarrowLeft className="inline" size={16} /> Назад
        </a>
      </div>
      <div className="flex items-center mt-4 mb-3">
        <h1 className="text-2xl font-semibold">Добавить нового сотрудника</h1>
        <div className="flex gap-x-4 items-center ml-7">
          <span>#</span>
          <input
            type="text"
            name="ordernum"
            id="ordernum"
            className="form-control w-24 text-right"
            placeholder="Номер"
          />
          <span>от</span>
          <div className="relative">
            <input
              type="text"
              name="depdate"
              id="depdate"
              className="form-control w-36 pr-10"
              placeholder="01.01.2000"
            />
            <IconCalendarEvent
              size={16}
              className="text-slate-500 absolute right-3 top-[50%] translate-y-[-50%]"
            />
          </div>
        </div>
      </div>
      <section className="grid grid-cols-12 gap-x-6">
        <div className="col-span-7">
          <section id="dates" className="py-6">
            <h2 className="text-xl font-semibold mb-5">Сроки командирования</h2>
            <div className="grid gap-6">
              <div className="form-section flex gap-x-4">
                <div className="input-group w-full">
                  <label htmlFor="dbirth" className="mb-2 block">
                    C
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="dbirth"
                      id="dbirth"
                      className="form-control w-full pr-10"
                      placeholder="01.01.2000"
                    />
                    <IconCalendarEvent
                      size={16}
                      className="text-slate-500 absolute right-3 top-[50%] translate-y-[-50%]"
                    />
                  </div>
                </div>
                <div className="input-group w-full">
                  <label htmlFor="dbirth" className="mb-2 block">
                    До
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="dbirth"
                      id="dbirth"
                      className="form-control w-full pr-10"
                      placeholder="01.01.2000"
                    />
                    <IconCalendarEvent
                      size={16}
                      className="text-slate-500 absolute right-3 top-[50%] translate-y-[-50%]"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <span className="mb-2">Календарных дней</span>
                  <div className="py-1.5 border border-transparent font-medium text-center bg-slate-50">7 дней</div>
                </div>
              </div>
              <div>
                <div className="flex gap-x-6 mb-4">
                  <div className="input-group grow">
                    <label htmlFor="country" className="mb-2 block">
                      Страна
                    </label>
                    <select
                      name="country"
                      id="country"
                      className="form-control w-full"
                    >
                      <option value="1">Узбекистан</option>
                      <option value="1">Узбекистан</option>
                      <option value="1">Узбекистан</option>
                      <option value="1">Узбекистан</option>
                      <option value="1">Узбекистан</option>
                    </select>
                  </div>
                  <div className="input-group grow">
                    <label htmlFor="city" className="mb-2 block">
                      Город
                    </label>
                    <select
                      name="city"
                      id="city"
                      className="form-control w-full"
                    >
                      <option value="1">Бухара</option>
                      <option value="1">Бухара</option>
                      <option value="1">Бухара</option>
                      <option value="1">Бухара</option>
                      <option value="1">Бухара</option>
                    </select>
                  </div>
                </div>
                <div className="input-group w-full mb-4">
                  <label htmlFor="organization" className="mb-2 block">
                    Организация (пункт преб-я)
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    className="form-control w-full"
                    placeholder="Введите назв. орг-ции"
                  />
                </div>
                <div className="input-group w-full">
                  <label htmlFor="department" className="mb-2 block">
                    Офис
                  </label>
                  <select
                    name="department"
                    id="department"
                    className="form-control w-full"
                  >
                    <option value="1">
                      Центральное здание, 545тый кабинет
                    </option>
                    <option value="1">
                      Центральное здание, 545тый кабинет
                    </option>
                    <option value="1">
                      Центральное здание, 545тый кабинет
                    </option>
                    <option value="1">
                      Центральное здание, 545тый кабинет
                    </option>
                    <option value="1">
                      Центральное здание, 545тый кабинет
                    </option>
                  </select>
                </div>
              </div>
              <button className="btn btn-secondary justify-center text-slate-400"><IconPlus size={16}  />Добавить еще</button>
            </div>
          </section>
          <hr />
          <section id="responsibles" className="py-6">
            <h2 className="text-xl font-semibold mb-5">Подписывающие лица</h2>
            <div className="grid gap-6">
              <div className="input-group w-full">
                <label htmlFor="director" className="mb-2 block">
                  Руководитель
                </label>
                <div className="flex gap-x-6">
                  <input
                    type="text"
                    name="director"
                    id="director"
                    className="form-control w-full"
                    placeholder="Руководитель"
                  />
                  <select name="directorSelect" id="directorSelect" className="form-control w-full">
                    <option value="1">Майкл Скотт</option>
                    <option value="1">Майкл Скотт</option>
                    <option value="1">Майкл Скотт</option>
                    <option value="1">Майкл Скотт</option>
                    <option value="1">Майкл Скотт</option>
                  </select>
                </div>
              </div>
              <div className="p-4 bg-slate-50 flex rounded-md">
                <label className="form-check form-check--sm w-full">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                  ></input>
                  <div className="form-check__switch peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-500"></div>
                  <span className="form-check__label">
                    Вывести подписи сотрудников
                  </span>
                </label>
                <label className="form-check form-check--sm w-full">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                  ></input>
                  <div className="form-check__switch peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-500"></div>
                  <span className="form-check__label">
                    Вывести на обороте
                  </span>
                </label>

              </div>
            </div>
          </section>
          <hr />
          <section id="description" className="py-6">
            <h2 className="text-xl font-semibold mb-6">Информация для командировочного удостоверения</h2>
            <div className="form-section flex gap-x-6">
              <div className="input-group w-full">
                <label htmlFor="destination" className="mb-2 block">
                  Место командирования
                </label>
                <textarea name="" id="destination" className="w-full form-control" rows="5"></textarea>
              </div>
              <div className="input-group w-full">
                <label htmlFor="purpose" className="mb-2 block">
                  Цель командирования
                </label>
                <textarea name="" id="purpose" className="w-full form-control" rows="5"></textarea>
              </div>
            </div>
          </section>
          <hr />
          <section id="certification" className="py-6">
            <h2 className="text-xl font-semibold mb-6">Информация для командировочного удостоверения</h2>
            <textarea name="" id="purpose" className="w-full form-control" rows="5"></textarea>
          </section>
          <section className="pt-6">
            <div className="flex gap-x-4 mb-6">
              <button className="btn btn-secondary"><IconPrinter size={16} />Печатать</button>
              <button className="btn btn-secondary"><IconId size={16} />Удостоверение</button>
            </div>
            <div className="flex gap-x-4">
              <button className="btn btn-secondary">Отменить</button>
              <button className="btn btn-primary">Сохранить</button>
            </div>
          </section>
        </div>
        <div className="col-span-5 py-6">
          <h2 className="text-xl font-semibold mb-5">Сотрудники</h2>
          <div className="travelers-list flex flex-col gap-y-6">
            <div className="employee">
              <img src="https://www.themoviedb.org/t/p/w500/b7fTC9WFkgqGOv77mLQtmD4Bwjx.jpg" alt="" className="w-12 rounded-full aspect-square object-cover" />
              <div className="w-full">
                <h3 className="font-semibold">Азамат Абдулладжон угли</h3>
                <div className="text-slate-500">Директор</div>
                <div className="text-slate-500 text-sm">Отдел по продажам</div>
                <select name="" className="form-control mt-4" id="">
                  <option value="1">Био-Пасспорт</option>
                  <option value="2">Иностранный паспорт</option>
                  <option value="3">Загран пасспорт</option>
                  <option value="4">ID карта</option>
                </select>
              </div>
              <small className="pt-1">№21232</small>
            </div>
            <div className="employee">
              <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/64BC/production/_118488752_gadotreuters.jpg" alt="" className="w-12 rounded-full aspect-square object-cover" />
              <div className="w-full">
                <h3 className="font-semibold">Нозима Тураевна</h3>
                <div className="text-slate-500">Секретарь</div>
                <div className="text-slate-500 text-sm">Отдел по продажам</div>
                <select name="" className="form-control mt-4" id="">
                  <option value="4">ID карта</option>
                  <option value="1">Био-Пасспорт</option>
                  <option value="2">Иностранный паспорт</option>
                  <option value="3">Загран пасспорт</option>
                </select>
              </div>
              <small className="pt-1">№21232</small>
            </div>
            <button className="btn btn-secondary justify-center py-9">
              <IconPlus size={48} stroke={1} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default EditOrderPage