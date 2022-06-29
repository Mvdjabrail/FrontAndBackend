import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const fetchTodos = createAsyncThunk("todos/add", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/todo");
    const data = res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const deleteTodos = createAsyncThunk(
  "todos/delete",
  async (i, thunkAPI) => {
    try {
      await fetch(`http://localhost:3000/todo/${i}`, {
        method: "DELETE",
      });
      return i;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const postTodos = createAsyncThunk(
  "todos/post",
  async (text, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ text }),
      });
      return res.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTodos = createAsyncThunk(
  "todos/patch",
  async (el, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/todo/${el._id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ complited: !el.complited }),
      });
      return res.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => {
          return todo._id !== action.payload;
        });
      })
      .addCase(postTodos.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        state.todos = state.todos.map((el) => {
          if(el._id === action.payload._id){
            return action.payload
          }
          return el
        });
      })
  },
});
export const remove = createAction("remove");

export default todoSlice.reducer;
export const add = createAction("add");

// const todosReducer = createReducer(initialState, (builder) => {
//   builder.addCase(add, (state, action) => {
//     state.todos.push(action.payload);
//   });
// builder.addCase(remove, (state, action) => {
//   state.todos = state.todos.filter((el, index) => index !== action.payload);
// });

// builder.addCase(fetchTodos.fulfilled, (state, action) => {
//   state.todos = action.payload
// })
// });
