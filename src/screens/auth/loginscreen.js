import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CustomInputField, FormAction, Header } from "../../components";
import { loginFields, showToast } from "../../constants/formField";
import { login } from "../../data/auth/api";

import { setAccessToken } from "../../features/auth/authSlice";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function LoginScreen() {
  const [loginState, setLoginState] = useState({ fieldsState });
  const [apiLoading, setApiLoading] = useState(false);
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      setApiLoading(true);
      e.preventDefault();
      let token = await login(loginState["username"], loginState["password"]);
      dispatch(setAccessToken(token));
      showToast("Succesfully logged in", "success");
      navigate("/");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log("here");
        showToast(e.response?.data ?? "Something went wrong", "error");
        return;
      }
      showToast(e.response?.data ?? "Something went wrong", "error");
    } finally {
      setApiLoading(false);
    }
  };

  useEffect(() => {
    setLoginState({
      ...loginState,
      username: "test_user",
      password: "test_user$$1234",
    });
    return () => {};
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-[#272945]">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Click here"
            linkUrl="/signup"
          />
          <form
            className="mt-8 space-y-6"
            onSubmit={apiLoading ? null : handleSubmit}
          >
            <div className="-space-y-px">
              {loginFields.map((field) => (
                <CustomInputField
                  key={field.id}
                  handleChange={handleChange}
                  value={loginState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
            <FormAction
              text={`${apiLoading ? "Loading" : "Login"}`}
              loading={apiLoading}
            />
          </form>
        </div>
      </div>
    </>
  );
}
