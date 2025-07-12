import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.application.helpinghand',
  appName: 'Helping Hand',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: { buildOptions: { signingType: 'apksigner' } }
};

export default config;
