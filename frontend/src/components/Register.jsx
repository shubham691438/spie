import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormfacadeEmbed from "@formfacade/embed-react";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful! Redirecting to Sign In page...");
    navigate("/signin");
  };

  return (

    <div>
      <FormfacadeEmbed

      formFacadeURL="https://formfacade.com/include/107273075676913643495/form/1FAIpQLScbEY-q6R71VkyCMUmR-dMTUVdf_fxYD1637Gv94pIqcucZWQ/classic.js/?div=ff-compose"

      onSubmitForm={() => console.log('Form submitted')}

      />
    
    </div>
  );
};

export default Register;
