The issue was resolved by updating the AsyncStorage library. The original version was incompatible with Expo SDK 48. This version was then updated to the latest version that has better compatibility with the current SDK version. 
```javascript
//expoBugSolution.js
//Original code that caused error
//import AsyncStorage from '@react-native-async-storage/async-storage';

//Updated code to fix the issue
import * as SecureStore from 'expo-secure-store';

//Using SecureStore instead of AsyncStorage will fix the issue
```