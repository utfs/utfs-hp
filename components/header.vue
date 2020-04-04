<template>
	<div class="header-wrapper">
		<header>
            <nuxt-link to="/">
                <img style="height: 100%;" src="~/assets/images/utfs-logonew.png" alt="">
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
    justify-content: space-between;
	color: black;
	padding: 20px 60px;
	background-color: white;
	height: 64px;
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