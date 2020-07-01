export const getNotification = (state) => state.commonStore.notificationStore;
export const getCurrentUser = (state) => state.commonStore.authStore.currentUser;
export const getJwt = (state) => state.commonStore.authStore.jwt;
export const isAuth = (state) => !!getCurrentUser(state);
export const isRegistrationSuccess = (state) => state.commonStore.registrationStore.isSuccess;