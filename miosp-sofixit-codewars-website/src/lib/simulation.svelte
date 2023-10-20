<script lang="ts">
    import BlockDisplay from "./blockDisplay.svelte";
    import { writable } from "svelte/store";
    import { tweened } from "svelte/motion";
    import { onMount } from "svelte";

    export let input: number[];
    let fluidHeight: number[] = input.map((x)=>0);
    let width: number;
    let height: number;
    let contentRect: DOMRectReadOnly;
    
    //for simlation
    export let simulationRan = false;
    export let running = false;
    export let left = 0;
    export let right = 0;
    export let result = 0;

    let leftTweened = tweened(0, {duration: 500});
    let rightTweened = tweened(0, {duration: 500});

    export async function runSimulation(){
        cleanSimulation();

        result = 0;
        left = 0;
        right = input.length - 1;
        let leftMax = 0;
        let rightMax = 0;
        
        leftTweened.set(left, {duration: 0});
        rightTweened.set(right, {duration: 0});

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
                leftTweened.set(left);
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
                rightTweened.set(right);
                await new Promise(r => setTimeout(r, 1000));
            }
        }
        running = false;
    }

    export function cleanSimulation(){
        simulationRan = false;
        fluidHeight = input.map((x)=>0);
    }

    $: base = Math.min(height/(Math.max(...input)), width/(input.length))*0.6;
    $: details = input.map((x, i)=>({height: x, fluidHeight: fluidHeight[i]}));
    $: if(running) simulationRan=true;

    //i know this is unused, but without it the positining breaks
    let offset: number;
</script>

<div class="backgroundContainer" bind:clientHeight={height} bind:clientWidth={width} style="background-size: {input.length*Math.min(base, 80)*1.5}px {Math.max(...input)*Math.min(base, 80)*1.45}px">
    <div class="blockContainer" bind:contentRect={contentRect} bind:offsetWidth={offset}>
        {#if simulationRan}
            <p class="pointer" style="width: {Math.min(base, 80)}px;left: {(contentRect?.left ?? 0) + $leftTweened*Math.min(base, 80)}px">L</p>
            <p class="pointer" style="width: {Math.min(base, 80)}px;left: {(contentRect?.left ?? 0) + $rightTweened*Math.min(base, 80)}px">R</p>
        {/if}
        {#each details as block}
            <BlockDisplay height={block.height} base={base} fluidHeight={block.fluidHeight}/>
        {/each}
    </div>
</div>

<style>
    .blockContainer{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        height: 100%;
        justify-content: center;
    }

    .backgroundContainer{
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

    .pointer{
        position: absolute;
        background-color: #853970;
        z-index: 3;
        bottom: 0px;
        text-align: center;
        border-radius: 20%;
        margin: 0px;
    }
</style>