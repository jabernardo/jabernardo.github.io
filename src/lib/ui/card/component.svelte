<script>
	export let name;
	export let description;
	export let link;
	export let icon = '';
</script>

<a
	href={link}
	class="mb-4 mr-4 flex min-h-[218px] flex-col rounded-lg border-[12px] border-t-[6px] border-b-[#adb19b] border-l-[#d2d6cd] border-r-[#caceb8] border-t-[#dce2d4] bg-[#edebe5] p-2 pl-2 shadow-[7px_7px_3px_#c9b7b7] transition duration-100 active:shadow-[0_0_4px_#494746] md:min-h-[145px]"
>
	<div class="flex flex-row">
		{#if icon}
			<div class="flex flex-col">
				<svg class="icon icon-github m-4 flex h-[64px] w-[64px]"><use xlink:href={icon}></use></svg>
			</div>
		{/if}
		<div class="flex flex-col">
			<h3 class="break-all text-3xl text-highlight">{name}</h3>
			<p class="break-words text-lg">{description}</p>
		</div>
	</div>
</a>
