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

<section class="relative flex h-[300px] flex-col justify-center bg-[#c5c4c7]">
	<img
		alt="Arisu Keyboard"
		src={bannerImage}
		class="absolute h-[300px] w-[100%] object-none md:object-cover"
	/>
	<h1
		class="relative flex justify-center self-center p-2 text-6xl text-primary drop-shadow-[0_0_4px_#333]"
	>
		{text}
	</h1>
	<p class="relative flex justify-center p-2 text-2xl drop-shadow-[0_0_1px_#aeaeae]">
		A full-time thinker. Part-time developer.
	</p>
</section>
