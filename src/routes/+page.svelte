<script>
	import Icons from '$lib/ui/icons/definitions.svelte';
	import Banner from '$lib/ui/banner/component.svelte';
	import Projects from '$lib/ui/projects/component.svelte';
	import About from '$lib/ui/about/component.svelte';
	import Connect from '$lib/ui/connect/component.svelte';
</script>

<svelte:head>
	<title>John Aldrich Bernardo</title>
	<meta
		name="description"
		content="Welcome to my Github page! I’m John Aldrich Bernardo, a lead software developer and teacher with nearly a decade of experience. Feel free to explore my work, fork repositories, and collaborate on exciting projects. Connect with me professionally on LinkedIn and let's build something amazing together!"
  />
  <link rel="preconnect" href="https://res.cloudinary.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link rel="preconnect" href="https://www.googletagmanager.com" />
	<meta name="google-site-verification" content="6M9Msm2EpM3K6trQcrQ8UDXilauCst8h841fb6Y-CJM" />
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
	<Banner image="gh-page/arisu" />
	<About />
	<Projects />
	<Connect />
</div>
