<script>
	import Icons from '$lib/ui/icons/definitions.svelte';
	import Banner from '$lib/ui/banner/component.svelte';
	import Projects from '$lib/ui/projects/component.svelte';
	import About from '$lib/ui/about/component.svelte';
	import Connect from '$lib/ui/connect/component.svelte';
</script>

<svelte:head>
	<title>Hello World! ~ John Aldrich Bernardo</title>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-7TK5VMYV3G"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-7TK5VMYV3G');
	</script>
</svelte:head>

<div class="flex flex-col">
	<Icons />
	<Banner text="John Aldrich Bernardo" image="gh-page/arisu" />
	<About />
	<Projects />
	<Connect />
</div>
