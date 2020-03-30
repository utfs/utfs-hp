<template>
	<div>
		<header>
            <nuxt-link to="/">
                <img src="~/assets/images/logo.png" alt="">
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
}
</style>