<script>
  // Parent-most app component
  import { loggedIn } from "./db.js";
  import LoginForm from "./LoginForm.svelte";
  import ChatUI from "./chatui/ChatUI.svelte";

</script>

<div class="flex flex-col min-h-screen bg-gray-200">
  <main class="flex-grow">
    {#if $loggedIn}
      <ChatUI />
    {:else}
      <LoginForm />
    {/if}
  </main>
  <footer class="fixed inset-x-0 bottom-0 h-10 text-white bg-black">
    Built with Svelte + Pocketbase
  </footer>
</div>
