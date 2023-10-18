<script lang="ts">
    import BlockDisplay from "./blockDisplay.svelte";

    export let input: number[];
    let fluidHeight: number[] = input.map((x)=>0);
    let width: number;
    let height: number;
    
    //for simlation
    export let running = false;
    export let left = 0;
    export let right = 0;
    export let result = 0;

    export async function runSimulation(){
        cleanSimulation();

        result = 0;
        left = 0;
        right = input.length - 1;
        let leftMax = 0;
        let rightMax = 0;
        
        running = true;

        while(left < right){
            if(input[left] < input[right]){
                if(input[left] >= leftMax){
                    leftMax = input[left];
                } else {
                    result += leftMax - input[left];
                    fluidHeight[left] = leftMax - input[left];
                    await new Promise(r => setTimeout(r, 1000));
                }
                left++;
                await new Promise(r => setTimeout(r, 1000));
            } else {
                if(input[right] >= rightMax){
                    rightMax = input[right];
                } else {
                    result += rightMax - input[right];
                    fluidHeight[right] = rightMax - input[right];
                    await new Promise(r => setTimeout(r, 1000));
                }
                right--;
                await new Promise(r => setTimeout(r, 1000));
            }
        }
        running = false;
    }

    export function cleanSimulation(){
        fluidHeight = input.map((x)=>0);
    }

    $: base = Math.min(height/(Math.max(...input)), width/(input.length))*0.6;
    $: details = input.map((x, i)=>({height: x, fluidHeight: fluidHeight[i]}));
</script>

<div class="blockContainer" bind:clientHeight={height} bind:clientWidth={width} style="background-size: {input.length*Math.min(base, 80)*1.5}px {Math.max(...input)*Math.min(base, 80)*1.45}px">
    {#each details as block}
        <BlockDisplay height={block.height} base={base} fluidHeight={block.fluidHeight}/>
    {/each}
</div>

<style>
    .blockContainer{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        justify-content: center;
        background-image: url('./assets/ship.webp');
        background-position: bottom;
        background-repeat: no-repeat;
    }
</style>