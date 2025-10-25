import React, { useState } from "react";
// import{ToastContainer, toast} from "react-toastify";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNum: "",
    gender: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <form
        className="border-4 border-black p-10 rounded-lg shadow-lg bg-white transition-all duration-500 ease-in-out hover:scale-105"
        onSubmit={submitHandler}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Registration Form</h1>
        {/* Your form fields here */}
      </form>
    </div>
    
  );
};

export default RegistrationForm;
