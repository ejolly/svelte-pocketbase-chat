<script>
  import { pb, username } from "../db.js";
  // Parent-most chat component
  import ProfileHeader from "./ProfileHeader.svelte";
  import MessageList from "./MessageList.svelte";
  import Input from "./Input.svelte";

</script>

<div class="max-w-screen-md mx-auto">
  <div>
    <div class="w-full">
      <ProfileHeader bind:username={$username} />
      <MessageList bind:username={$username} />
      <Input bind:username={$username}/>
    </div>
  </div>
</div>
