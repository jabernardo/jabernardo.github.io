<script>
	import Card from '$lib/ui/card/component.svelte';
</script>

<section id="projects" class="flex w-full max-w-7xl flex-col self-center p-2">
	<h2 class="mb-6 mt-6 text-4xl text-secondary before:content-['/']">projects</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<Card
			name="calf"
			description="Yet another Micro-framework for PHP"
			link="https://jabernardo.github.io/calf/"
		/>
		<Card
			name="rute"
			description="A Simple Router for Deno"
			link="https://github.com/jabernardo/rute"
		/>
		<Card
			name="Aargh!"
			description="Command-line Application Base Template"
			link="https://github.com/jabernardo/aargh"
		/>
		<Card
			name="console.php"
			description="Command-line Application Skeleton for PHP"
			link="https://github.com/jabernardo/console.php"
		/>
		<Card
			name="wtf"
			description="Yet another cURL but using JSON files."
			link="https://github.com/jabernardo/wtf"
		/>
		<Card
			name="TheF"
			description="Shorthand ?! Press The F!"
			link="https://github.com/jabernardo/thef"
		/>
		<Card
			name="TheF"
			description="Shorthand ?! Press The F!"
			link="https://github.com/jabernardo/thef"
		/>
		<Card
			name="<<<<"
			description="See more projects"
			link="https://github.com/jabernardo"
			icon="#icon-github"
		/>
	</div>
</section>
