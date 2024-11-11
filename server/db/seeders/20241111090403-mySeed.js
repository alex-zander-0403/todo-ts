const { User } = require('../models');
const { Task } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Alex',
        email: '111@111',
        password: '111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        email: '222@222',
        password: '222',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Carl',
        email: '333@333',
        password: '333',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await Task.bulkCreate([
      {
        title: 'Закончить проект по разработке сайта',
        status: false,
        userId: 1,
      },
      {
        title: 'Подготовить презентацию для клиента',
        status: false,
        userId: 1,
      },
      {
        title: 'Провести анализ конкурентов',
        status: false,
        userId: 1,
      },
      {
        title: 'Обучить новых сотрудников',
        status: false,
        userId: 2,
      },
      {
        title: 'Провести корпоративную вечеринку',
        status: false,
        userId: 2,
      },
      {
        title: 'Заказать рекламу в социальных сетях',
        status: false,
        userId: 2,
      },
      {
        title: 'Подготовить отчет за месяц',
        status: false,
        userId: 3,
      },
      {
        title: 'Провести онлайн-вебинар',
        status: false,
        userId: 3,
      },
      {
        title: 'Обновить базу данных клиентов',
        status: false,
        userId: 3,
      },
      {
        title: 'Провести мозговой штурм для нового проекта',
        status: false,
        userId: 3,
      },
    ]);
  },
};
