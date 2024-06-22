<script>
	export let image;

	import { getCloudinaryImage } from '$lib/utils/cloudinary';
	import { blur, grayscale } from '@cloudinary/url-gen/actions/effect';
	import { scale } from '@cloudinary/url-gen/actions/resize';

	const bannerImage = getCloudinaryImage(image)
		.resize(scale().height(384))
		.effect(blur(100))
		.effect(grayscale())
		.toURL();
</script>

<section class="relative flex h-[64px] flex-col justify-center bg-[#c5c4c7] sm:h-[128px]">
	<img
		alt="Arisu Keyboard"
		src={bannerImage}
		height="128"
		class="absolute h-[64px] w-[100%] object-none sm:h-[128px] md:object-cover"
	/>
</section>
