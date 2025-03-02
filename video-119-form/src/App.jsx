import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors,isSubmitting }
  } = useForm();


  const delay=(d)=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
          res()
        }, d*1000);
    })
  }
  const onSubmit = async(data) => {
    await delay(2)
    console.log(data)
    if(data.username==="rohan"){
      setError("myform",{message:"this user is blocked"})
    }

  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input type="text" placeholder='username' {...register("username", { require: { value: true,message:"this field is required" }, minLength: { value: 3, message: "min leght is 3" }, maxLength: { value: 8, message: "max leght is 8" } })} />
        {errors.username && <div>{errors.username.message}</div>}
        <input type="password" {...register("password")} placeholder='password'/>
        <input type="submit" disabled={isSubmitting} value={isSubmitting?"Loading...":"submit"} />
        {errors.myform && <div>{errors.myform.message}</div>}
      </form>
    </>
  )
}

export default App
