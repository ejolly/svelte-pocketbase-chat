<script>
  import { fade, slide, fly } from "svelte/transition";
  export let username;
  export let message;
  const you = message.from === username;
  const them = message.to === username;
  const formattedDate = `${new Date(message.created).toLocaleDateString()}`;
  const formattedTime = `${new Date(message.created).toLocaleTimeString()}`;

  function scrollIntoView(node) {
    node.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
  }

  $: flyfrom = you ? { x: 100 } : { x: -100 };
</script>

<li class="flex" class:justify-start={them} class:justify-end={you}>
  <div class="max-w-xl">
    <div
      class="px-4 py-2 text-white shadow rounded-xl"
      class:bg-gray-500={them}
      class:bg-blue-500={you}
      in:fly={flyfrom}
    >
      <p>
        {message.text}
      </p>
    </div>
  </div>
</li>
<div
  class="text-xs text-gray-500 !my-1 px-2 group/metadata"
  class:text-right={you}
  class:text-left={them}
  use:scrollIntoView
>
  <p>{formattedTime}</p>
  <!-- <p>{formattedDate}</p> -->
</div>
