<template>
	<div>
		<header>
            <nuxt-link to="/">
                <img style="height: 100%;" src="~/assets/images/logo.png" alt="">
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

@media screen and ( max-width: 900px ) {
	header {
		padding: 20px 20px;
	}
}
</style>