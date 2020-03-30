<template>
	<div>
		<nav>
			<ul>
				<li>
					<nuxt-link to="/">Home</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/about">About</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/report">Report</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/join">Join</nuxt-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
	export default {
		components: {}
	};
</script>
<style lang="scss" scoped>
nav {
	color: #fff;
	ul {
		display: flex;
		justify-content: flex-end;
		li {
			list-style-type: none;
			margin-left: 15px;
			a {
                text-decoration: none;
                color: black;
                &:hover {
                    text-decoration: underline;
                }
			}
		}
	}
}
</style>