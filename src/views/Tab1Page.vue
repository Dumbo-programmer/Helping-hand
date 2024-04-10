<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      <div v-if="userData">
        <h1>Welcome, {{ userData.name }}</h1>
        <!-- Display other user data here -->
        <p>Email: {{ userData.email }}</p>
        <p>Contact No: {{ userData.phoneNumber }}</p>
        <p>Contributed: {{ userData.money }}</p>
      </div>
    <!--   <div v-else>
        <p>Loading user data...</p>
      </div>-->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonToolbar, IonTitle, IonPage, IonHeader, IonContent} from '@ionic/vue';
import { Ref, ref } from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

interface UserData {
  email: string;
  name: string;
  phoneNumber: string;
  money: number;
}

const userData: Ref<UserData | null> = ref(null); // Specify the type explicitly

if (firebase.apps.length === 0) {  
  firebase.initializeApp({
    apiKey: "AIzaSyDsqaru9FWR8knx4fYnIgR5UJmBl6fIU_c",
    authDomain: "helping-hand-a9d72.firebaseapp.com",
    projectId: "helping-hand-a9d72",
    storageBucket: "helping-hand-a9d72.appspot.com",
    messagingSenderId: "428135495379",
    appId: "1:428135495379:web:d5471d94106588170fc626",
    measurementId: "G-DVN8FV81Q0"
  });
}


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid;
    firebase.firestore().collection('users').doc(uid).get()
      .then((doc) => {
        if (doc.exists) {
          userData.value = doc.data() as UserData; // Cast doc.data() to UserData
        } else {
          console.error('User data not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  } else {
window.location.href="/signup"
  }
});
</script>

<style scoped>
/* Add your styles to center content here */
</style>