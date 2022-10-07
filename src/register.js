export const register = async () => {
  if (navigator.serviceWorker) {
    try {
      const registration = await navigator.serviceWorker.register(
        "./serviceWorker.js"
      ); //* Registramos el serviceWorker
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (err) {
      console.log(`Registration failed with ${err}`);
    }
  }
};
