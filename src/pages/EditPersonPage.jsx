import { IconArrowBack, IconArrowNarrowLeft, IconCalendarEvent, IconPlus, IconTrash, IconUpload } from "@tabler/icons-react"

function EditPersonPage() {
  return (
    <>
      <div className="pt-3">
        <a href="#!" className="btn btn-secondary">
          <IconArrowNarrowLeft className="inline" size={16} /> Назад
        </a>
      </div>
      <h1 className="text-2xl font-semibold mt-4 mb-3">
        Добавить нового сотрудника
      </h1>
      <section id="basics" className="py-6">
        <h2 className="text-xl font-semibold mb-5">Основные</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-section flex flex-col gap-y-4">
            <div className="flex gap-x-6">
              <div className="input-group w-full">
                <label htmlFor="fullname" className="mb-2 block">
                  Фамилия Имя Отчество
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="form-control w-full"
                  placeholder="Ф.И.О сотрудника"
                />
              </div>
              <div className="input-group w-32">
                <label htmlFor="tabno" className="mb-2 block">
                  Таб. №
                </label>
                <input
                  type="text"
                  name="tabno"
                  id="tabno"
                  className="form-control w-full"
                  placeholder="Таб номер"
                />
              </div>
            </div>
            <div className="input-group w-full">
              <label htmlFor="title" className="mb-2 block">
                Должность
              </label>
              <select name="title" id="title" className="form-control w-full">
                <option value="1">Сис админ</option>
                <option value="1">Сис админ</option>
                <option value="1">Сис админ</option>
                <option value="1">Сис админ</option>
                <option value="1">Сис админ</option>
              </select>
            </div>
            <div className="input-group w-full">
              <label htmlFor="department" className="mb-2 block">
                Подразделение
              </label>
              <select
                name="department"
                id="department"
                className="form-control w-full"
              >
                <option value="1">ИТ отдел</option>
                <option value="1">ИТ отдел</option>
                <option value="1">ИТ отдел</option>
                <option value="1">ИТ отдел</option>
                <option value="1">ИТ отдел</option>
              </select>
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
                <option value="1">Центральное здание, 545тый кабинет</option>
                <option value="1">Центральное здание, 545тый кабинет</option>
                <option value="1">Центральное здание, 545тый кабинет</option>
                <option value="1">Центральное здание, 545тый кабинет</option>
                <option value="1">Центральное здание, 545тый кабинет</option>
              </select>
            </div>
          </div>
          <div className="image-section flex self-start">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQGI_44TpUUmtQ/profile-displayphoto-shrink_800_800/0/1609428594537?e=2147483647&v=beta&t=IKBpMfCg53jePV_SPnL6NGlIxhNWQTphUEA7TalKoAA"
              className="w-44 mr-6 aspect-[3/4] object-cover rounded-xl"
              alt=""
            />
            <div className="flex flex-col gap-y-4">
              <button className="btn btn-light-primary">
                <IconUpload size={16} />
                Загрузить фото
              </button>
              <button className="btn btn-light-danger">
                <IconTrash size={16} />
                Удалить фото
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="contacts" className="py-6">
        <h2 className="text-xl font-semibold mb-5">Контактные данные</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-section flex flex-col gap-y-4">
            <div className="input-group w-full">
              <label htmlFor="phone" className="mb-2 block">
                Контактный телефон
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control w-full"
                placeholder="Контактный телефон"
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="passport" className="py-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold">Паспортные данные</h2>
            <label className="form-check form-check--sm">
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="form-check__switch peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-500"></div>
              <span className="form-check__label">Иностранный пасспорт</span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-section flex flex-col gap-y-4">
            <div className="input-group w-full">
              <label htmlFor="fullnamelatino" className="mb-2 block">
                Фамилия Имя на латынце
              </label>
              <input
                type="text"
                name="fullnamelatino"
                id="fullnamelatino"
                className="form-control w-full"
                placeholder="Ф.И.О сотрудника"
              />
            </div>
            <div className="flex gap-x-6">
              <div className="input-group w-full">
                <label htmlFor="dbirth" className="mb-2 block">
                  Дата рождения
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
              <div className="age-block py-1.5 px-3 border border-transparent w-32 self-end">
                = 26 лет
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="input-group w-32">
                <label htmlFor="pseria" className="mb-2 block">
                  Серия
                </label>
                <input
                  type="text"
                  name="pseria"
                  id="pseria"
                  className="form-control w-full"
                  placeholder="AA"
                />
              </div>
              <div className="input-group w-full">
                <label htmlFor="pnumber" className="mb-2 block">
                  Номер паспорта
                </label>
                <input
                  type="text"
                  name="pnumber"
                  id="pnumber"
                  className="form-control w-full"
                  placeholder="2311233"
                />
              </div>
            </div>
            <div className="input-group w-full">
              <label htmlFor="iib" className="mb-2 block">
                Кем выдан
              </label>
              <select
                name="iib"
                id="iib"
                className="form-control w-full"
              >
                <option value="1">Юнусабадский ГУВД</option>
                <option value="1">Юнусабадский ГУВД</option>
                <option value="1">Юнусабадский ГУВД</option>
                <option value="1">Юнусабадский ГУВД</option>
                <option value="1">Юнусабадский ГУВД</option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-x-6">
              <div className="input-group w-full">
                <label htmlFor="dbirth" className="mb-2 block">
                  Дата выдачи
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
                  Действует до
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="dbirth"
                    id="dbirth"
                    className="form-control w-full pr-10"
                    placeholder="01.01.2000"
                    disabled
                  />
                  <IconCalendarEvent
                    size={16}
                    className="text-slate-500 absolute right-3 top-[50%] translate-y-[-50%]"
                  />
                </div>
              </div>
              <div className="age-block py-1.5 px-3 border border-transparent w-32 self-end">
                ост.: 470 дн.
              </div>
            </div>
          </div>
          <div className="image-section flex self-start p-6 bg-gray-100 rounded-2xl">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQGI_44TpUUmtQ/profile-displayphoto-shrink_800_800/0/1609428594537?e=2147483647&v=beta&t=IKBpMfCg53jePV_SPnL6NGlIxhNWQTphUEA7TalKoAA"
              className="w-44 mr-6 aspect-[3/4] object-cover rounded-xl self-start"
              alt=""
            />
            <div className="personal-datas flex flex-col gap-y-4">
              <div className="passport-data">
                <div className="passport-data__title">Ф.И.О</div>
                <div>Анвархуджаев Акбархон Баходир угли</div>
              </div>
              <div className="passport-data">
                <div className="passport-data__title">Дата рождения</div>
                <div>08.10.1996</div>
              </div>
              <div className="passport-data">
                <div className="passport-data__title">Пасспорт</div>
                <div>AA 2311233</div>
              </div>
              <div className="passport-data">
                <div className="passport-data__title">Кем выдан</div>
                <div>Юнусабадский ГУВД</div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div className="passport-data">
                  <div className="passport-data__title">Дата выдачи</div>
                  <div>15.06.2012</div>
                </div>
                <div className="passport-data">
                  <div className="passport-data__title">Действует до</div>
                  <div>14.06.2012</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <button className="btn btn-secondary grow justify-center text-slate-500"><IconPlus size={16} />Добавить пасспорт</button>
        </div>
      </section>
      <hr />
      <section id="contacts" className="py-6">
        <h2 className="text-xl font-semibold mb-5">Контактные данные</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-section flex gap-x-6">
            <div className="input-group grow">
              <label htmlFor="mbp" className="mb-2 block">
                МВП работника
              </label>
              <input
                type="text"
                name="mbp"
                id="mbp"
                className="form-control w-full"
                placeholder="AA99999"
              />
            </div>
            <div className="input-group grow">
              <label htmlFor="mbz" className="mb-2 block">
                МВЗ сотрудника
              </label>
              <input
                type="text"
                name="mbz"
                id="mbz"
                className="form-control w-full"
                placeholder="AA99999"
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="flex gap-x-4 pt-4 mt-4">
          <button className="btn btn-secondary">Отменить</button>
          <button className="btn btn-primary">Сохранить</button>
        </div>
      </section>
    </>
  );
}
export default EditPersonPage