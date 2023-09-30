<script>
    export let imageUrl = 'http://placekitten.com/g/200/300';
    export let imageClass = ''
    export let imageName = 'Card Title';
    export let imageWidth = 110;
    export let imageHeight = 110;
</script>

<img src={imageUrl} class="rounded-circle {imageClass}" alt="{imageName}" width="{imageWidth}" height="{imageHeight}" />
