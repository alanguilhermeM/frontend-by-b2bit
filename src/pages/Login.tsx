import React from "react";
import { useFormik } from "formik";
import { validate } from "../utils/validateForm";
import { login } from "../utils/api";
import { useNavigate  } from 'react-router-dom';
import logo from '../assets/logo.png'
const Login: React.FC = () => {
  let navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      await login(values)
      navigate('/profile')
    },
  });
  return (
    <div className="bg-[#FAFAFA] h-screen flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center w-[438px] h-[534px] border-0 rounded-[18px] bg-[#FFFFFF] shadow-2xl"
      >
        {/* <h1 className="text-[#02274F] text-[94.81px] font-bold">
          b2b<span className="text-[#FDCF00]">it</span>
        </h1> */}
        <img src={logo} alt="logoBit" className="relative bottom-[2rem]" width={300}/>

        <div className="flex flex-col w-[385px] relative">
          <label htmlFor="email" className="font-medium text-[#262626] mb-3">E-mail</label>
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            placeholder="@gmail.com"
            className="w-full h-[54px] bg-[#F1F1F1] rounded-[9px] pt-[18px] pr-[18px] pb-[20.25px] pl-[18px] mb-6"
          />

          <label className="font-medium text-[#262626] mb-3">Password</label>
          <input
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            placeholder="************"
            className="w-full h-[54px] bg-[#F1F1F1] text-white rounded-[9px] pt-[18px] pr-[18px] pb-[20.25px] pl-[18px] mb-6"
          />

          <button 
            type="submit" 
            className="w-full h-[54px] bg-[#02274F] text-white rounded-[9px] transition-all duration-300 hover:bg-opacity-80 font-medium relative top-5"
          >Sign In</button>
        </div>
      </form>
    </div>
  );
};
export default Login;

