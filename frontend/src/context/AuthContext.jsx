import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
        navigate('/dashboard')

      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);
  const register = async (userData) => {
    try {

      // https://learnpro-hx3l.onrender.com/api/user/register
      // http://localhost:4001/api/user/register
      const { data } = await axios.post("https://learnpro-hx3l.onrender.com/api/user/register", userData);
      if (data.token) {
        localStorage.setItem("token", JSON.stringify(data.token));
      }
      if (data.user) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return { success: true, message: "Registered successfully!" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed!"
      };
    }
  };

  const login = async (credentials) => {
    try {
      // https://learnpro-hx3l.onrender.com/api/user/login
      // http://localhost:4001/api/user/login
      const { data } = await axios.post("https://learnpro-hx3l.onrender.com/api/user/login", credentials, {
        withCredentials: true,
      });
      if (data.token) {
        localStorage.setItem("token", JSON.stringify(data.token));
      }
      if (data.user) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return { success: true, message: "Login successful!" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed!"
      };
    }
  };

  const forgotPassword = async (email) => {
    try {
      // https://learnpro-hx3l.onrender.com/api/user/forgotPassword
      // http://localhost:4001/api/user/forgotPassword
      const { data } = await axios.post("https://learnpro-hx3l.onrender.com/api/user/forgotPassword", { email });
      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Failed to send reset email!" };
    }
  };

  const resetPassword = async (otp, newPassword, confirmPassword) => {
    try {
      // https://learnpro-hx3l.onrender.com/api/user/resetPassword
      // http://localhost:4001/api/user/resetPassword
      const { data } = await axios.post("https://learnpro-hx3l.onrender.com/api/user/resetPassword", {
        otp,
        password: newPassword,
        confirmPassword,
      });

      return { success: true, message: data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Password reset failed!"
      };
    }
  };


  const logout = async () => {
    try {
      // https://learnpro-hx3l.onrender.com/api/user/logout
      // http://localhost:4001/api/user/logout
      await axios.post("https://learnpro-hx3l.onrender.com/api/user/logout", {}, { withCredentials: true });

      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      return { success: true, message: "Logged out successfully!" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Logout failed!"
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, register, login, forgotPassword, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
