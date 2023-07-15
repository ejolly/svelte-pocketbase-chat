<script>
  import { pb } from "../db";
  import Message from "./Message.svelte";

  export let username;
  let messages = [];

  // When messages changes append to the UI
  pb.collection('chat').subscribe("*", (e) => {
    messages = [...messages, e.record];
  });

  // alternatively you can also fetch all records at once via getFullList:
  async function getMessages() {
    const records = await pb.collection("chat").getFullList();
    messages = records;
  }
  let promise = getMessages();
</script>

<div class="relative w-full p-6 overflow-y-auto scrollbar-hide h-[calc(100%-8rem)]">
  {#await promise}
    Loading...
  {:then}
    <ul class="space-y-2">
      {#each messages as message}
        <Message {message} {username} />
      {/each}
    </ul>
  {/await}
</div>
