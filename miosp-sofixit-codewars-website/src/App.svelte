<script lang="ts">
  import debounce from "just-debounce-it"
  import Simulation from "./lib/simulation.svelte";

  let input = "";
  let error = false;
  let debouncer = debounce(()=>error=validityChecker(), 1000);
  let simulation: Simulation;


  let simulationRan = false;
  let simulationRunning = false;
  let simulationRight = 0;
  let simulationLeft = 0;
  let simulationResult = 0;

  function validityChecker(){
    const regex = /^\d+(?:,\d+)*$/;
    return !(input=="") && !regex.test(input);
  }

  function handleChange(){
    if(error) error = false;
    debouncer();
  }

  $: inputArray = input.split(",").map((x)=>Number(x));
  $: if(simulationRunning) simulationRan=true;
</script>

<main>
  <div class="rowContainer">
    <div style="padding-right: 2%">
      <p>Enter arguments for the "material" function:</p>
      <input type="text" name="functionInput" id="mainInput" bind:value={input} on:keyup={handleChange}>
      {#if error}
      <p style="color: red;">Input must be a comma separated list of numbers</p>
      {/if}
    </div>
    <div class="buttonContainer">
      <button style="margin-bottom: 5%" on:click={()=>{if(!error && input!="" && !validityChecker())simulation.runSimulation()}}>Run!</button>
      <button on:click={()=>{if(!error && input!="" && !validityChecker()){simulation.cleanSimulation(); simulationRan=false;}}}>Clean</button>
    </div>
    {#if simulationRan}
      <div>
        <p>Left pointer: {simulationLeft}</p>
        <p>Right pointer: {simulationRight}</p>
        <p>Result: {simulationResult}</p>
      </div>
    {/if}
  </div>
  {#if !error && input!="" && !validityChecker()}
    <Simulation input={inputArray} bind:this={simulation} bind:right={simulationRight} bind:left={simulationLeft} bind:result={simulationResult} bind:running={simulationRunning}/>
  {/if}
</main>

<style>
  input,p{
    font-family: 'xirod';
  }

  main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    box-sizing: border-box;
  }

  .rowContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2vh;
  }

  .buttonContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;
  }
</style>