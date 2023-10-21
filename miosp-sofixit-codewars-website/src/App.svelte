<script lang="ts">
  import debounce from "just-debounce-it"
  import Simulation from "./lib/simulation.svelte";
  import backArrow from "./lib/assets/back-arrow.svg";

  let input = "";
  let error = false;
  let debouncer = debounce(()=>error=validityChecker(), 1000);
  let simulation: Simulation;
  let dialog: HTMLDialogElement;


  let simulationRan = false;
  let simulationRunning = false;
  let simulationRight = 0;
  let simulationLeft = 0;
  let simulationResult = 0;
  let simulationRightMax = 0;
  let simulationLeftMax = 0;

  function validityChecker(){
    const regex = /^\d+(?:,\d+)*$/;
    return !(input=="") && !regex.test(input);
  }

  function handleChange(){
    if(error) error = false;
    debouncer();
  }

  $: inputArray = input.split(",").map((x)=>Number(x));
</script>

<main>
  <dialog bind:this={dialog}>
    <div class="dialogRowContainer">
      <h1 style="margin: unset">About</h1>
      <button on:click={()=>{dialog.close()}} class="backButton">
        <img src={backArrow} alt="back" class="backIcon">
      </button>
    </div>
    <p>Made By Jan Ludwina</p>
    <p style="font-size: 0.8rem">
      This website is a demo of an implementation of Sofixit Code Wars task. The task was to prepare a function, that solves a given task. <br><br>My solution works like that:<br>
      1. Create two pointers, one on the left and one on the right side of the array, two variables for remembering maximum values which the pointers met and one variable for result<br>
      2. While the pointers are not pointing at the same element:<br>
      &nbsp;&nbsp;&nbsp;&nbsp;2.1. Select the pointer with smaller value<br>
      &nbsp;&nbsp;&nbsp;&nbsp;2.2. If the value in the pointer is bigger than the one in this side's maximum, set the maximum value of this side, else add to the result this side's maximum minus height of wall in pointers position<br>
      &nbsp;&nbsp;&nbsp;&nbsp;2.3. Depending on which pointer was selected, move it to the next element (left to right, and right to left)<br><br>
      This works because we need to know the lower of maximums from both sides in order to calculate the value to add to result for each index in the array. If we choose a pointer to move in each iteration, we are sure that value under the pointer is smaller than the one on the other size, so we don't need to care about other side's maximum.
    </p>
  </dialog>
  <div class="rowContainer">
    <div>
      <p>Enter arguments for the "material" function:</p>
      <input type="text" name="functionInput" id="mainInput" bind:value={input} on:keyup={handleChange}>
      {#if error}
      <p style="color: red;">Input must be a comma separated list of positive numbers</p>
      {/if}
    </div>
    <div class="yetAnotherContainer">
      <div class="buttonContainer">
        <button style="margin-bottom: 0.5rem" on:click={()=>{if(!error && input!="" && !validityChecker())simulation.runSimulation()}}>Run!</button>
        <button style="margin-bottom: 0.5rem" on:click={()=>{if(!error && input!="" && !validityChecker()){simulation.cleanSimulation(); simulationRan=false;}}} disabled={simulationRunning}>Clean</button>
        <button on:click={()=>{dialog.showModal()}}>?</button>
      </div>
      {#if simulationRan}
        <div>
          <p>Left maximum: {simulationLeftMax}</p>
          <p>Right maximum: {simulationRightMax}</p>
          <p>Result: {simulationResult}</p>
        </div>
      {/if}
    </div>
  </div>
  {#if !error && input!="" && !validityChecker()}
    <Simulation input={inputArray} bind:this={simulation} bind:right={simulationRight} bind:left={simulationLeft} bind:result={simulationResult} bind:running={simulationRunning} bind:simulationRan={simulationRan} bind:leftMax={simulationLeftMax} bind:rightMax={simulationRightMax}/>
  {/if}
</main>

<style>
  main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    box-sizing: border-box;
  }

  .backButton{
    position: relative;
    background-color: #AAA;
    border-radius: 50%;
    width: 2.5rem;
    aspect-ratio: 1;
    margin: 1rem;
  }

  .backIcon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
  }

  .dialogRowContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .yetAnotherContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .rowContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
  }

  .buttonContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;
    padding: 0px 2rem;
  }
</style>