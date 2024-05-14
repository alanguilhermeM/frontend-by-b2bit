import React from "react";
import { useFormik } from "formik";

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-[#FAFAFA] h-screen flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center w-[438px] h-[534px] border-0 rounded-[18px] bg-[#FFFFFF] shadow-2xl"
      >
        <h1 className="text-[#02274F] text-[94.81px] font-bold">
          b2b<span className="text-[#FDCF00]">it</span>
        </h1>

        <label htmlFor="email">E-mail</label>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          placeholder="@gmail.com"
        />

        <label>Password</label>
        <input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          placeholder="************"
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default Login;
