<script>
	import { onMount, onDestroy } from 'svelte';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import * as maptilersdk from '@maptiler/sdk';

	let map;
	let mapContainer;

	const apiKey = 'aulKwDgT8Ke4BfyQowYC';

	onMount(() => {
		const initialState = { lng: 15.5061862, lat: 51.9356214, zoom: 14 };
		const map = new maptilersdk.Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});

		new maptilersdk.Marker()
			.setLngLat([15.5061862, 51.9356214])
			.setPopup(new maptilersdk.Popup().setHTML('Election commission No ZG_20902/23'))
			.addTo(map);
		new maptilersdk.Marker()
			.setLngLat([15.5051862, 51.9446214])
			.setPopup(new maptilersdk.Popup().setHTML('Election commission No ZG_20902/22'))
			.addTo(map);
		new maptilersdk.Marker()
			.setLngLat([15.5211862, 51.9446214])
			.setPopup(new maptilersdk.Popup().setHTML('Election commission No ZG_20902/21'))
			.addTo(map);
	});
</script>

<div class="map-wrap">
	<a href="https://www.maptiler.com" class="watermark"
		><img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" /></a
	>
	<div class="map" bind:this={mapContainer} />
</div>

<style>
	.map-wrap {
		position: relative;
		width: 100%;
		height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
	}

	.map {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.watermark {
		position: absolute;
		left: 10px;
		bottom: 10px;
		z-index: 999;
	}
</style>
