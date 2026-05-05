import { unstable_noStore as noStore } from 'next/cache'
import tasksData from '../data/tasks.json'

let tasks = [...tasksData]  // copy into a mutable module-level array

export const getTasks = async () => {
  noStore()
  return tasks
}

export const postTask = async (data) => {
  data.id = tasks.length + 1
  tasks.push(data)
  return { ok: true, message: 'added task!' }
}