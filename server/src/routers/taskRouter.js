const taskRouter = require('express').Router();
const { Task } = require('../../db/models');

//
// taskRouter
//   .route('/')
// .get(async (req, req) => {
//   try {
//     const allTasks = await Task.findAll();
//     res.json(allTasks);
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ message: error.message, text: 'Ошибка получения всех tasks' });
//   }
// })
// .post(async (req, res) => {
//   try {
//     const { title } = req.body;
//     if (!title) {
//       return res.status(400).json({ message: 'заполните обязательные поля' });
//     }
//     const newPost = await Post.create({ title, status: false, userId: null });
//     res.send(newPost);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message, text: 'Ошибка получения allPosts' });
//   }
// });

//
taskRouter.route('/:id').delete(
  // checkId,
  async (req, res) => {
    try {
      const { id } = res.locals; // через checkId
      await Task.destroy({ where: { id } });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка удаления' });
    }
  },
);

//
module.exports = taskRouter;
