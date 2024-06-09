<script>
	export let name;
	export let description;
	export let link;
</script>

<a
	href={link}
	class="project-card mb-4 mr-4 inline-flex min-h-[218px] flex-col rounded-lg border-[12px] border-t-[6px] border-b-[#adb19b] border-l-[#d2d6cd] border-r-[#caceb8] border-t-[#dce2d4] bg-[#edebe5] p-2 pl-2 shadow-[7px_7px_3px_#c9b7b7] transition duration-100 active:shadow-[0_0_4px_#494746] md:min-h-[145px]"
>
	<h3 class="break-all text-3xl text-highlight">{name}</h3>
	<p class="break-words text-lg">{description}</p>
</a>

<style>
	.project-card {
		width: calc(50% - 24px);
	}

	@media screen(xsm) {
		.project-card {
			width: calc(100% - 16px);
		}
	}

	@media screen(md) {
		.project-card {
			width: calc(33.333% - 24px);
		}
	}
</style>
