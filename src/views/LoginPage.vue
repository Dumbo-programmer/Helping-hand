<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      <div class="logo-container">
        <a href="/"><img src="../../resources/icon.png" alt="App Logo" class="logo" /></a>
      </div>
      <div class="form-container">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="password" type="password" required></ion-input>
        </ion-item>
        <ion-button expand="full" @click="login">Login</ion-button>
        <ion-button expand="full" fill="clear" @click="goToSignup">Don't have an account? Signup</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonLabel, IonToolbar, IonTitle, IonInput, IonItem, IonPage, IonHeader, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
//import { useRouter } from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/auth';
firebase.initializeApp({
    apiKey: "AIzaSyDsqaru9FWR8knx4fYnIgR5UJmBl6fIU_c",
    authDomain: "helping-hand-a9d72.firebaseapp.com",
    projectId: "helping-hand-a9d72",
    storageBucket: "helping-hand-a9d72.appspot.com",
    messagingSenderId: "428135495379",
    appId: "1:428135495379:web:d5471d94106588170fc626",
    measurementId: "G-DVN8FV81Q0"
})

</script>
<script lang="ts">
export default defineComponent ({
  components:{
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
  data(){
    return{
email: '',
password: ''
  }
},
 methods: {
  login(){

if(this.email && this.password){
  console.log(this.email)
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
      // Redirect to dashboard or any other page after successful login
      window.location.href = '/tabs/tab1'
    })
    .catch(error => {
      console.error('Login error:', error);
      alert('An error occurred during signup: '+error);
    });
  }else{
    alert("Fill in the fields please")
  }
  },
  goToSignup(){

    window.location.href = '/signup'

  }
 }
})
</script>

<style scoped>
.logo-container {
  margin-bottom: 20px;
}

.form-container {
  padding: 0 20px;
}

.logo {
  width: 150px;
  border-radius: 15px;
}
</style>
