import Todo from "../models/todo.js";

// GET - Alle Todos
export async function getTodos(req, res) {
  try {
    const todos = await Todo.find({
      user: req.user._id,
    });

    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fehler beim abrufen der Todos" });
  }
}

// POST -  Neues Todo erstellen
export async function createTodo(req, res) {
  try {
    const { title } = req.body;
    const todo = await Todo.create({
      title,
      user: req.user._id,
    });

    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fehler beim Erstellen des todos" });
  }
}

// UPDATE - Todo Aktualisieren
export async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        completed: req.body.completed,
        user: req.user._id,
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo nicht gefunden" });
    }

    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fehler beim aktuiliesiren des todos" });
  }
}

// DELETE - Todo löschen
export async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id, {
      user: req.user._id,
    });

    if (!todo) {
      res.status(404).json({ message: "Todo nicht gefunden" });
    }
    res.json({ message: "Todo erfolgreiche gelöscht" });
  } catch (error) {
    console.error();
    res.status(500).json({ message: "Fehler beim löschen des todos" });
  }
}
