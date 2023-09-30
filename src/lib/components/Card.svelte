
<script>
    export let imageUrl = 'http://placekitten.com/g/200/300';
    export let title = 'Card Title';
    export let description = 'This is some content inside the card';

  // Function to generate a random background color
  function getRandomBackgroundColor() {
    // TODO: add list of colors user friendly
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Generate a random background color
  let backgroundColor = getRandomBackgroundColor();
</script>

<div class="card testimonial-card">
    {#if imageUrl}
        <div class="card-up" style="background-color: {backgroundColor};"></div>
        <div class="avatar mx-auto bg-white">
            <img src={imageUrl} class="rounded-circle" alt="Card Image" width="110" height="110" />
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