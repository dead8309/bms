import { makeObservable, observable, action, computed } from "mobx";
import axios from "../utils/middleware";
import { Root } from "./root";
import { iRoot } from "./root";
import { API } from "@/api";
export class Auth {
  accessToken: string = "";
  refreshToken: string = "";
  isAuthenticated: boolean = false;
  root: iRoot;
  constructor(root: Root) {
    makeObservable(this, {
      accessToken: observable,
      refreshToken: observable,
      isAuthenticated: observable,
      fetchToken: action,
      logout: action,
      register: action,
      orgRegister: action,
      setAuthenticated: action,
      getAccessToken: computed,
      getRefreshToken: computed,
      googleLogin: action,
    });
    this.root = root;
  }
  setAuthenticated() {
    this.isAuthenticated = true;
  }
  async fetchToken(email: string, password: string) {
    const data = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      API.users.login, // Correct URL
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response.data.data.accessToken);
    this.accessToken = response.data.data.accessToken;
    this.refreshToken = response.data.data.refreshToken;
    localStorage.setItem("accessToken", this.accessToken);
    localStorage.setItem("refreshToken", this.refreshToken);
    this.isAuthenticated = true;
    console.log("Login successful:", response.data);
  }

  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    phone: string | null,
    country: string | null
  ) {
    const data = {
      fname: firstName,
      lname: lastName,
      countryCode: country,
      phone: phone,
      fcmToken: "test token",
      email: email,
      gender: gender,
      password: password,
      isTnCAccepted: true,
      isPrivacyPolicyAccepted: true,
    };
    const response = await axios.post(API.users.signup, data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Signup successful:", response.data);
    this.fetchToken(email, password);
  }
  async orgRegister(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    phone: string
  ) {
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      phone: phone,
    };
    const response = await axios.post(API.users.login, data);
    this.accessToken = response.data.token;
    localStorage.setItem("accessToken", this.accessToken);
    localStorage.setItem("refreshToken", this.refreshToken);
    this.isAuthenticated = true;
  }
  logout() {
    this.accessToken = "";
    this.refreshToken = "";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.isAuthenticated = false;
  }
  get getAccessToken() {
    return this.accessToken;
  }
  get getRefreshToken() {
    return this.refreshToken;
  }
  async googleLogin(token: string) {
    const data = {
      credential: token,
    };
    const response = await axios.post(API.users.googleAuth, data, {
      headers: { "Content-Type": "application/json" },
    });
    this.accessToken = response.data.data.accessToken;
    this.refreshToken = response.data.data.refreshToken;
    localStorage.setItem("accessToken", this.accessToken);
    localStorage.setItem("refreshToken", this.refreshToken);
    this.isAuthenticated = true;
    console.log("Login successful");
  }
}
