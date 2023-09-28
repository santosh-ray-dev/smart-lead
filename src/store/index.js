import { defineStore } from 'pinia';
import userData from "@/user.json"

export const useMyStore = defineStore('myStore', {
  state: () => ({
    currentUser:null,
  }),
  actions: {
    // login with id pass
    login(payload) {
      return new Promise((resolve, reject) => {
        const { email, password } = payload;
        
        if (!email || !password) {
          reject('Email and password are required');
          return;
        }
    
        const findUser = userData.find((user) => user.email === email);
    
        if (!findUser) {
          reject('User not found');
          return;
        }
    
        if (findUser.password === password) {
          this.currentUser = findUser;
          resolve(findUser);
        } else {
          reject('Incorrect password');
        }
      });
    },
    
    logOut() {
    },
  },
});
