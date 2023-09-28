import { defineStore } from 'pinia';
import userData from "@/user.json"

export const useMyStore = defineStore('myStore', {
  state: () => ({
    currentUser: null,
  }),
  actions: {
    login(payload) {
      console.table(userData)
      return new Promise((resolve, reject) => {
        //Step 1: Extacting login payload
        const { email, password } = payload;

        //Step 2: Null check for email and password
        if (!email || !password) {
          alert('Email and password are required !')
          reject('Email and password are required');
          return;
        }

        //Step 3: Checking if user exists in Local Data
        const findUser = userData.find((user) => user.email === email);

        //Step 3a : Throw Alert if User Not Found !
        if (!findUser) {
          alert('User Not Found !')
          reject('User not found');
          return;
        }
        //Step 4: Checking password

        //Step 4a: Store user if success
        if (findUser.password === password) {
          this.currentUser = findUser;
          let userString = JSON.stringify(this.currentUser)
          document.cookie = `user=${(userString)}`
          resolve(findUser);
        }
        //Step 4b: Throw error if wrong password 
        else {
          alert('Incorrect Password !')
          reject('Incorrect password');
        }
      });
    },

    logOut() {
      this.findUser = null
      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
  },
});