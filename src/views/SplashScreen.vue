<template>
    <ion-page>
      <ion-header>
    
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding ion-text-center">
        <div class="logo-container">
        <img src="../../resources/icon.png" alt="App Icon" class="icon" />
        <p class="subtitle">Help the ones in need by allocating a bit of your attention and time with the aid of Helping Hand</p>
  
    </div>
              <div class="button-container">
        <ion-button shape="round" @click="signup()">Signup</ion-button>
        <ion-button shape="round" @click="login()">Login</ion-button>
      </div>
       </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonContent, IonButton } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const signup = () => {
    router.push('/signup');
  };
  
  const login = () => {
    router.push('/login');
  };
  </script>
  
  <style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
    padding-top: 24vh;
}



.icon {
  width: 100px; 
  border-radius: 15px;
}

.subtitle {
  margin-top: 10px;
  font-size: 14px; 
  text-align: center;
}


.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

  </style>
  