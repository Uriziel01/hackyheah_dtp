
<script>
    import Avatar from "./Avatar.svelte"

    export let imageUrl;
    export let title = 'Card Title';
    export let description;

    const colors = [
        '#9d789b',
        '#7a81a8',
        '#6d5b98',
        '#1d6d86',
        '#a0a1a1',
        '#afafae',
        '#4f5051',
        '#00a7a2',
        '#bcbcbd',
        '#79787a'
    ];

  // Function to generate a random background color
  function getRandomBackgroundColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Generate a random background color
  let backgroundColor = getRandomBackgroundColor();
</script>

<div class="card text-white bg-primary testimonial-card">
    {#if imageUrl}
        <div class="card-up" style="background-color: {backgroundColor};"></div>
        <div class="avatar mx-auto bg-white">
            <Avatar imageUrl={imageUrl} imageName="Card Image" imageWidth=110 imageHeight=110 />
        </div>
    {/if}
    <div class="card-body">
        {#if title}
            <h5 class="card-title">{title}</h5>
        {/if}
        {#if description}
            <hr>
            <p class="card-text">
                <i class="fas fa-quote-left pe-2" />
                {description}
            </p>
        {/if}
    </div>
 </div>
<style>
    .card-content {
        margin: 1rem;
    }

    .testimonial-card .card-up {
        height: 120px;
        overflow: hidden;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    
    .testimonial-card .avatar {
        width: 110px;
        margin-top: -60px;
        overflow: hidden;
        border: 3px solid #fff;
        border-radius: 50%;
    }
</style>