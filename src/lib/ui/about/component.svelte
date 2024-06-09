<script>
	import { getCloudinaryImage } from '$lib/utils/cloudinary';

	const me = getCloudinaryImage('portfolio/me-prof_ghmwhg').toURL();
</script>

<section id="about" class="flex flex-col bg-[#444] pb-4">
	<div class="flex w-full max-w-7xl flex-col self-center p-2">
		<h2 class="mb-6 mt-6 text-4xl text-secondary">/hello world</h2>
		<div class="flex flex-col md:flex-row">
			<div class="flex flex-col items-center p-6 md:items-start">
				<img
					src={me}
					alt="john aldrich bernardo"
					class="w-[240px] md:w-[780px]"
					width="780"
					height="780"
				/>
			</div>
			<div class="flex flex-col p-4">
				<p class="text-lg text-primary">
					A lead software developer and a teacher with almost a decade of experience. Checkout my
					repositories to see my work with different technologies that I'm passionate about.
					<br /><br />Feel free to fork a repo or reach out if you'd like to collaborate.
					<br /><br />
				</p>
				<a
					href="https://www.linkedin.com/in/sudoaldrich"
					class="animate-bounce text-xl text-primary underline">Let's connect!</a
				>
			</div>
		</div>
	</div>
</section>
