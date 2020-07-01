export const getNotification = (state) => state.commonStore.notificationStore;
export const getCurrentUser = (state) => state.commonStore.authStore.currentUser;
export const isAuth = (state) => !!getCurrentUser(state).login;