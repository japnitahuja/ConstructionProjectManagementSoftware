import { CurrentTaskActionTypes } from "./current-task.types"

export const fetchCurrentTaskStart = (taskId) => ({
    type: CurrentTaskActionTypes.FETCH_CURRENT_TASK_START,
    payload: taskId
})

export const fetchCurrentTaskSuccess = (currentTask) => ({
    type: CurrentTaskActionTypes.FETCH_CURRENT_TASK_SUCCESS,
    payload: currentTask
})

export const fetchCurrentTaskFailure = (error) => ({
    type: CurrentTaskActionTypes.FETCH_CURRENT_TASK_FAILURE,
    payload: error
})

export const completeCurrentTaskStart = (taskId) => ({
    type: CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_START,
    payload: taskId
})

export const completeCurrentTaskSuccess = (message) => ({
    type: CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_SUCCESS,
    payload: message
})

export const completeCurrentTaskFailure = (error) => ({
    type: CurrentTaskActionTypes.COMPLETE_CURRENT_TASK_FAILURE,
    payload: error
})



