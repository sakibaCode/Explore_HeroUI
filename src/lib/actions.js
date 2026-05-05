import { revalidatePath } from "next/cache"
import { postTask } from "./tasks"  // ← was missing!

export const CreateTask = async (formData) => {
  'use server'

  const data = Object.fromEntries(formData.entries())
  console.log("Task", data)

  const res = await postTask(data)

  if(res.ok){
    revalidatePath('/task')
  }
  return res
}