// import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
// import { useColorScheme } from 'react-native';

// import { AnimatedSplashOverlay } from '@/components/animated-icon';
// import AppTabs from '@/components/app-tabs';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <AnimatedSplashOverlay />
//       <AppTabs />
//     </ThemeProvider>
//   );
// }





















// import { Stack } from 'expo-router';
// import { LanguageProvider } from '../context/LanguageContext';

// export default function Layout() {
//   return (
//     <LanguageProvider>
//       <Stack />
//     </LanguageProvider>
//   );
// }

// ////////////////////////////////////////////

// import { Stack } from 'expo-router';

// export default function Layout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//   );
// }





// new
import { Stack } from 'expo-router';
import { LanguageProvider } from '../context/LanguageContext';

export default function Layout() {
  return (
    <LanguageProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </LanguageProvider>
  );
}