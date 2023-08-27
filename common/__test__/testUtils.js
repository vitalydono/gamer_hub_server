// import supertest from "supertest";
// import app from "../../app";

// export const request = supertest.agent(app);

// const baseApiPath = "/api/v1";

// export const getHeaders = () => ({
//   "Content-Type": "application/json",
//   isTest: true,
// });

// export const requestWithHeaders = (headers) => {
//   return {
//     get: (path) => request.get(`${baseApiPath}${path}`).set(headers),
//     post: (path) => request.post(`${baseApiPath}${path}`).set(headers),
//     delete: (path) => request.delete(`${baseApiPath}${path}`).set(headers),
//     update: (path) => request.update(`${baseApiPath}${path}`).set(headers),
//   };
// };
