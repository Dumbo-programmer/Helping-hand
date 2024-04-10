<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Advertisement</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Advertisement</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- AdMob banner ad container -->
      <div id="ad-banner"></div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { onMounted } from 'vue';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, BannerAdPluginEvents, AdMobBannerSize } from '@capacitor-community/admob';

export default {
  name: 'Advertisement',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  },
  setup() {
    onMounted(() => {
      initializeAdMob();
    });

    const initializeAdMob = async () => {
      AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
        // Subscribe Banner Event Listener
      });

      AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size: AdMobBannerSize) => {
        // Subscribe Change Banner Size
      });

      const options: BannerAdOptions = {
        adId: 'ca-app-pub-3940256099942544/9214589741',//'ca-app-pub-9633054417275249/4933901865',
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: true,
        npa: true
      };

      AdMob.showBanner(options);
    };

    return {};
  }
};
</script>

<style scoped>
#ad-banner {
  background-color: grey;
  width: 440px;
  height: 340px;
  margin: auto; /* Center horizontally */

margin-top: 15vh;
}


</style>