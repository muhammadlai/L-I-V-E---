import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sara.aiagent',
  appName: 'SARA AI',
  webDir: 'public',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#05060a'
  }
};

export default config;
