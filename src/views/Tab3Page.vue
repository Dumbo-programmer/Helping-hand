<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-list-header>Miscellaneous</ion-list-header>
        <ion-item lines="none">
          <ion-button color="warning" @click="reloadApp">Reload App</ion-button>
        </ion-item>
        <ion-item lines="none">
          <ion-button color="danger" @click="signOut">Sign Out</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonListHeader, IonItem } from '@ionic/vue';
import { useRouter } from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/auth';
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
const router = useRouter();
const auth = firebase.auth();

const reloadApp = () => {
  // Reload app logic
  window.location.reload();
};

const signOut = async () => {
  try {
    await auth.signOut();
    // Sign out successful, navigate to sign-in page
    router.push('/signin');
  } catch (error) {
    console.error('Error signing out:', error);
    // Handle sign-out error
  }
};
</script>
