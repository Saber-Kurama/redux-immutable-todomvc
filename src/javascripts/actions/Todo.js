import {
  TODO_CREATE, TODO_TOGGLE_COMPLETE_ALL, TODO_COMPLETE
}
from '../constants/todos';

/**
 * 创建新的 todo
 */
export function createtodo(payload) {
    return {
      type: TODO_CREATE,
      payload: payload,
    };
  }

export function toggleCompleteAll() {
    return {
      type: TODO_TOGGLE_COMPLETE_ALL,
    };
  }

 /**
  * 完成 todo 任务
  */
export function toggleComplete(payload) {
  return {
    type: TODO_COMPLETE,
    payload: payload,
  };
}
