import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';

// store - storuje vsechny states dohromady v applikaci

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) => 
        getDefaultMiddleware().concat( cryptoApi.middleware ),
});