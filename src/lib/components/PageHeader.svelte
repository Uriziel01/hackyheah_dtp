<script>
    export let imageUrl = '/lemur1.jpg';
    export let title = 'Title';
    export let subtitle = 'Title';
</script>
<style>
    .red-purple{
        height: 25vh;
        background-color: #e41c2d;
        overflow: hidden;
    }
    .red-purple .color-dodge{
        mix-blend-mode: multiply;
        -webkit-filter: grayscale(100%) contrast(1);
        filter: grayscale(100%) contrast(.8);
        overflow: hidden;
        width: 100%;
        height:100%;
    }
    .red-purple::after{
        background-color: #1d3162;
        mix-blend-mode: lighten;
    }
</style>
<div class="column red-purple m-0 p-0">
    <div class="color-dodge m-0 p-0 h-100" style="background-size:cover;background-image:url({imageUrl})"></div>
    {#if title}
    <span class="display-1 text-white">{title}</span>
    {/if}
    {#if subtitle}
    <span class="display-5 text-white">{subtitle}</span>
    {/if}
</div>