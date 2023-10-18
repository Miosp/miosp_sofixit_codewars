<script lang="ts">
    import { tweened } from "svelte/motion";
    import block from "./assets/block.png";

    export let height: number;
    export let base: number;
    export let fluidHeight: number;

    const fluidHeightTweened = tweened(0, {duration: 1000});

    $: fluidHeightTweened.set(fluidHeight);

</script>

<div style="height: {(height+fluidHeight)*Math.min(base, 80)}px; width: {Math.min(base, 80)}px; object-fit: fill;">
    <img src={block} alt="block" class="block" style="height: {height*Math.min(base, 80)}px; width: {Math.min(base, 80)}px;"/>
    {#if fluidHeight>0}
        <div class="gradient" style="height: {($fluidHeightTweened+height)*Math.min(base, 80)}px; width: {Math.min(base, 80)}px;"/>
    {/if}
</div>

<style>
    .block{
        position: absolute;
        bottom: 0;
        z-index: 1;
    }

    .gradient{
        position: absolute;
        bottom: 0;
        background: linear-gradient(180deg, rgba(182,101,158,1) 0%, rgba(120,89,131,1) 35%, rgba(217,193,210,1) 100%);
    }
</style>