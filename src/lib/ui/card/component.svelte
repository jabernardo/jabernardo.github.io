<script>
	export let name;
	export let description;
	export let link;
</script>

<a
	href={link}
	class="project-card mb-4 mr-4 inline-flex min-h-[218px] max-w-[405px] flex-col break-all border-[12px] border-b-[#adb19b] border-l-[#dce2d4] border-r-[#adb19b] border-t-[#dce2d4] bg-[#edebe5] p-2 pl-2 shadow-[7px_7px_3px_#c9b7b7] transition duration-100 active:shadow-[0_0_4px_#494746] md:min-h-[145px]"
>
	<h3 class="text-2xl text-highlight">{name}</h3>
	<p class="text-lg">{description}</p>
</a>

<style>
	.project-card {
		width: calc(50% - 32px);
	}

	@media screen(md) {
		.project-card {
			width: calc(33.333% - 32px);
		}
	}
</style>
