const { todosDb } = require("./index");

const addTodo = params => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await todosDb.insert(params);
      resolve(found);
    } catch (error) {
      reject(error);
    }
  });
};

const findTodo = params => {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await todosDb.find(params).sort({ taskNumber: 1 });
      resolve(found);
    } catch (error) {
      reject(error);
    }
  });
};

const updateTodo = (findField, setField) => {
  return new Promise(async (resolve, reject) => {
    try {
      await todosDb.update(findField, setField);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteTodo = (findField, setField) => {
  return new Promise(async (resolve, reject) => {
    try {
      await todosDb.remove(findField, setField);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  addTodo,
  findTodo,
  updateTodo,
  deleteTodo
};
