<template>
	<div class="header-wrapper">
		<header>
            <nuxt-link to="/">
                <img src="~/assets/images/utfs-new-logo.jpg" alt="">
            </nuxt-link>
			<HeaderNav />
		</header>
	</div>
</template>
<script>
	import HeaderNav from "@/components/headerNav.vue";
	export default {
		components: {
			HeaderNav
		}
	};
</script>
<style lang="scss" scoped>

header {
    display: flex;
	height: 100%;
    justify-content: space-between;
	color: black;
	padding: 1rem 4rem;
	background-color: white;
	height: 64px;
	img {
		height: 48px ;
		margin-top: -8px;
		object-fit: cover;
	}
}

@media screen and ( max-width: 900px ) {
	.header-wrapper {
		position: fixed;
		width: 100%;
		z-index: 99;
	}
	header {
		padding: 20px 20px;
	}
}
</style>