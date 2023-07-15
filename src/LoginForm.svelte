<script>
  import { pb } from "./db.js";
  let username = "";
  let password = "";
  let errorMsg = "";

  async function login() {
    try {
      await pb.collection("users").authWithPassword(username, password);
    } catch (error) {
      errorMsg = error.message;
    }
  }
</script>

<div class="flex items-center justify-center h-screen">
  <div
    class="mx-auto bg-white rounded-lg shadow-lg w-[30rem] md:w-[40rem] py-10"
  >
    <div class="text-center">
      <h4 class="pb-1 my-1 text-xl font-semibold">Welcome</h4>
      <p class="mb-4">Login to start chatting</p>
    </div>
    <form on:submit|preventDefault={login}>
      <div class="mb-4">
        <input
          type="text"
          class="form-control block w-1/2 mx-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Username"
          required
          bind:value={username}
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          class="form-control block w-1/2 mx-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Password"
          required
          bind:value={password}
        />
      </div>
      <div class="text-center">
        <button
          class="inline-block px-6 py-2.5 text-white font-medium text-xs
                  leading-tight uppercase rounded shadow-md hover:bg-blue-700
                  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0
                  active:shadow-lg transition duration-150 ease-in-out w-1/5 mb-3 hover:opacity-80"
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          style="
                        background: linear-gradient(
                          to right,
                          #ee7724,
                          #d8363a,
                          #dd3675,
                          #b44593
                        );
                      "
        >
          Log in
        </button>
        <div class="text-center" class:invisible={!errorMsg}>
          <p class="text-xs text-red-500">{errorMsg}</p>
        </div>
      </div>
    </form>
  </div>
</div>
