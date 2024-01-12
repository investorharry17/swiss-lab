<script setup>
	
</script>

<template>
	<header>
		<div class="logo">
			<RouterLink to="/">
				
				<span>MySwissLab</span>
			</RouterLink>
		</div>
		<div class="menu-toggle">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
			  <path fill-rule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
			</svg>

		</div>
		<div class="drop-down">
			<ul>
				<li></li>
			</ul>
		</div>
	</header>
</template>

<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		user-select: none;
	}
	.logo span {
		font-size: 25px;
	}
	svg {
		height: 30px;
		cursor: pointer;
	}
	.drop-down {
		display: none;
	}
</style>