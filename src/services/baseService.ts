export const errorHandler = (fn: any) => async (...args: any) => {
  try {
    const { data } = await fn(...args);
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error };
  }
};


// export const registerUser = errorHandler(async (email, password) => {
//   const response = await axios.post("/api/v1/auth/join", {
//     email,
//     password,
//   });
//   return response;
// });

// export const loadUser = errorHandler(async () => {
//   const response = await axios.get("/api/v1/auth/token");
//   return response;
// });

// export const sendEmail = errorHandler(async (email) => {
//   const response = await axios.post("/api/v1/auth/sendEmail", {
//     email
//   });
//   return response;
// });

// export const verfiyUser = errorHandler(async (token) => {
//   const response = await axios.post("/api/v1/auth/verify", {
//     token
//   });
//   return response;
// });

// export const forgotPassword = errorHandler(async (email) => {
//   const response = await axios.post("/api/v1/auth/forgot-password", {
//     email
//   });
//   return response;
// });

// export const changePassword = errorHandler(async (token, password) => {
//   const response = await axios.post("/api/v1/auth/change-password", {
//     token,
//     password
//   });
//   return response;
// });

// export const signOut = errorHandler(async () => {
//   const response = await axios.get("/api/v1/auth/signout");
//   return response;
// });


// //Message Services
// export const loadMessage = errorHandler(async (recipientId) => {
//   const response = await axios.post("/api/v1/message", {
//     recipientId
//   });
//   return response;
// });