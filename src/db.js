// Shared database instance
import { writable } from "svelte/store";
import PocketBase from "pocketbase";
export const pb = new PocketBase("https://admin.eshin.codes");
export const loggedIn = writable(localStorage.getItem("pocketbase_auth") !== null);
export const username = writable(localStorage.getItem("pocketbase_auth") !== null ? JSON.parse(localStorage.getItem("pocketbase_auth")).model.username : null);

// Watch auth status
pb.authStore.onChange((token, model) => {
  loggedIn.set(model !== null);
  username.set(model ? model.username : null)
});