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
</div>
