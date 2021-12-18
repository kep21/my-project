export const USER_STORAGE_NAME = 'user';

export function setUserToLocaleStorage(user) {
  localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(user));
}

export function getUserItemFromLocalStorage() {
  return localStorage.getItem(USER_STORAGE_NAME);
}

export function checkIfUserExistsInLocalStorage() {
  const user = getUserItemFromLocalStorage();
  return {
    user,
    exists: !! user
  }
}
