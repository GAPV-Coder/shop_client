import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2EwM2M1ZDZkMzYyODJhODFhMjUxMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDkyMzg0MSwiZXhwIjoxNjY1MTgzMDQxfQ.ec154cnsCOnJMqFRJlzbiK_Vj64tM2YsWRopbIU-2vE";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
	baseURL: BASE_URL
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` }
});
