<script>
	export let text;
	export let image;

	import { getCloudinaryImage } from '$lib/utils/cloudinary';
	import { blur, grayscale } from '@cloudinary/url-gen/actions/effect';
	import { scale } from '@cloudinary/url-gen/actions/resize';

	const bannerImage = getCloudinaryImage(image)
		.resize(scale().height(600))
		.effect(blur(300))
		.effect(grayscale())
		.toURL();
</script>

<section class="relative flex h-[300px] flex-col justify-center">
	<img alt="Arisu Keyboard" src={bannerImage} class="absolute h-[300px] w-[100%] object-cover" />
	<h1 class="text-primary relative flex justify-center self-center text-5xl">{text}</h1>
	<p class="relative flex justify-center">Pasok Pasok Pasok!</p>
</section>
