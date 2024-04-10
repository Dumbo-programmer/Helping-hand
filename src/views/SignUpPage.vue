<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Signup</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      <div class="logo-container">
        <img src="../../resources/icon.png" alt="App Logo" class="logo" />
      </div>
      <div class="form-container">
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input v-model="name" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Phone Number</ion-label>
          <ion-input v-model="phoneNumber" type="tel" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="password" type="password" required></ion-input>
        </ion-item>
        <ion-button expand="full" @click="signup()">Signup</ion-button>
        <ion-button expand="full" fill="clear" @click="goToLogin()">Already have an account? Login</ion-button>
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
      name: '',
email: '',
password: '',
phoneNumber: ''
  }
},
methods: {

signup(){
  if ( this.name && this.email && this.phoneNumber && this.password) {
   

  // Create user in Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user) {
        // Store additional user information in Firestore
        firebase.firestore().collection('users').doc(user.uid).set({
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber,
          money: 0
        })
        .then(() => {
          console.log('Signup successful:', user);
          window.location.href = '/tabs/tab1'
        })
        .catch((error) => {
          console.error('Error storing user information:', error);
          alert('An error occurred during signup.');
        });
      } else {
        console.error('Signup error: User is null');
        alert('An error occurred during signup.');
      }
    })
    .catch((error) => {
      console.error('Signup error:', error);
      alert('An error occurred during signup.');
    });
  }else{
     alert('Please fill in all fields.');

  }
},

goToLogin(){
  window.location.href = '/login'
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

/* Center eye icon vertically */
ion-icon {
  --ion-icon-height: 24px;
}
</style>
