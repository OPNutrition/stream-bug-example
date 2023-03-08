import 'dotenv/config'

export default {
  expo: {
    name: 'OnPoint Nutrition',
    slug: 'opn-food-log',
    owner: 'onpoint-nutrition',
    scheme: 'onpoint-nutrition',
    runtimeVersion: {
      policy: 'appVersion',
    },
    version: '1.6.2',
    updates: {
      enabled: true,
      fallbackToCacheTimeout: 0,
    },
    orientation: 'portrait',
    splash: {
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      bundleIdentifier: 'com.onpoint-nutrition.foodlog',
      buildNumber: '210',
      supportsTablet: true,
      associatedDomains: [
        'applinks:onpoint-dev.netlify.app',
        'applinks:app.onpoint-nutrition.com',
      ],
      infoPlist: {
        NSCameraUsageDescription:
          'OnPoint Nutrition needs camera permisions to allow you to share photos in chat.',
        NSPhotoLibraryUsageDescription:
          'OnPoint Nutrition needs photo library permissions to allow you to share photos in chat.',
      },
    },
    android: {
      package: 'com.onpoint_nutrition.foodlog',
      versionCode: 210,
      adaptiveIcon: {
        backgroundColor: '#FFFFFF',
      },
      permissions: [],
      intentFilters: [
        {
          action: 'VIEW',
          autoVerify: true,
          data: [
            {
              scheme: 'https',
              host: 'app.onpoint-nutrition.com',
              pathPrefix: '/reset-password/',
            },
            {
              scheme: 'https',
              host: 'onpoint-dev.netlify.app',
              pathPrefix: '/reset-password/',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    web: {},
    extra: {
      eas: {
        projectId: 'dba65325-ece5-45f6-b2cc-844a093a24fd',
      },
      chatApiKey: process.env.STREAM_API_KEY,
    },
    plugins: [
      [
        'expo-image-picker',
        {
          photosPermission: 'Allow OnPoint Nutrition to access your photos.',
          cameraPermission: 'Allow OnPoint Nutrition to access your camera.',
        },
      ],
    ],
    userInterfaceStyle: 'light',
    runtimeVersion: {
      policy: 'sdkVersion',
    },
  },
}
