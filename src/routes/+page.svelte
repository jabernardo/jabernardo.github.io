<script>
	import Icons from '$lib/ui/icons/definitions.svelte';
	import Banner from '$lib/ui/banner/component.svelte';
	import Projects from '$lib/ui/projects/component.svelte';
	import About from '$lib/ui/about/component.svelte';
	import Connect from '$lib/ui/connect/component.svelte';
</script>

<svelte:head>
	<title>Hello World! ~ John Aldrich Bernardo</title>
</svelte:head>

<div class="flex flex-col">
	<Icons />
	<Banner text="John Aldrich Bernardo" image="gh-page/arisu" />
	<About />
	<Projects />
	<Connect />
</div>
