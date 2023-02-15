import express, { Router } from 'express'
import UserManager from './users/UserManager.js'
export const userManager = new UserManager()

useApiRouter.get('/',(req,res)=>{
    const users = userManager.obtenerTodos()
    res.json(users)
})
