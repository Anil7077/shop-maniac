import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import newUserSlice from './slices/newUserSlice'
import newCartSlice from './slices/newCartSlice'
import storage from '@react-native-async-storage/async-storage'
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const userPersistConfig = {
    key: "user",
    storage: storage,
    version: 1
  };
  
  const newUserPersistConfig = {
    key: "newUser",
    storage: storage,
    version: 1
  };
  const newCartPersistConfig = {
    key: "cartItems",
    storage: storage,
    version: 1
  };
  
  const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userSlice),
    newUser: persistReducer(newUserPersistConfig, newUserSlice),
    newCart: persistReducer(newCartPersistConfig, newCartSlice)
  });
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
export const persistor = persistStore(store)