<script>
    export let imageUrl = 'http://placekitten.com/g/200/300';
    export let imageClass = ''
    export let imageTitle = ''
    export let imageName = 'Card Title';
    export let imageWidth;
    export let imageHeight;
</script>

{#if imageWidth && imageHeight}
  <img src={imageUrl} class="rounded-circle {imageClass}" title="{imageTitle}" alt="{imageName}" width={imageWidth} height={imageHeight} />
{:else if imageWidth}
  <img src={imageUrl} class="rounded-circle {imageClass}" title="{imageTitle}" alt="{imageName}" width={imageWidth} />
{:else if imageHeight}
  <img src={imageUrl} class="rounded-circle {imageClass}" title="{imageTitle}" alt="{imageName}" height={imageHeight} />
{:else}
  <img src={imageUrl} class="rounded-circle {imageClass}" title="{imageTitle}" alt="{imageName}" />
{/if}
