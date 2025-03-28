<script>
  import { ResizeSimpleAction } from "@cloudinary/url-gen/actions/resize/ResizeSimpleAction";
	import { getCloudinaryImage } from '$lib/utils/cloudinary';

	const me = getCloudinaryImage('portfolio/me-prof_ghmwhg').resize(new ResizeSimpleAction("fill", 248)).toURL();
</script>

<section id="about" class="mb-8 flex flex-col bg-[#444] pb-4 shadow-[0px_10px_3px_#c9b7b7]">
	<div class="flex w-full max-w-7xl flex-col self-center p-2">
		<h1 class="mb-6 mt-6 text-4xl text-secondary before:content-['/']">john aldrich bernardo</h1>
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
			<div class="p-4">
				<p class="text-lg text-primary">
					A lead software developer and a teacher with almost a decade of experience. Checkout my
					<a href="https://github.com/jabernardo" target="_blank" class="select-none underline"
						>repositories</a
					>
					to see my work with different technologies that I'm passionate about. Don't forget my insights,
					tutorials, and updates on my latest projects that you could read on my
					<a href="https://jabernardo.com/blog" target="_blank" class="select-none underline"
						>blog</a
					>.
					<br /><br />Feel free to fork a repo or reach out if you'd like to collaborate.
					<br /><br />
				</p>
				<a
					href="https://www.linkedin.com/in/sudoaldrich"
					class="inline-flex animate-bounce text-xl text-primary underline">Let's connect!</a
				>
			</div>
		</div>
	</div>
</section>
