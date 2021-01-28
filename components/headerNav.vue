<template>
	<div>
		<!-- <div class="js-modal-bk" @click="modalBkClick" :class="{active:modal_bk}"></div> -->
		<nav class="nav-conent-pc">
			<ul>
				<li>
					<nuxt-link to="/">HOME</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/about">ABOUT</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/report">REPORT</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/join">JOIN</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/contact">CONTACT</nuxt-link>
				</li>
			</ul>
		</nav>
		<nav class="nav-conent-sp" >
			<div id="js-open-menu" class="header__menu" @click="mainMenuToggle" :class="{active:headerMenu_state}">
                <span class="header__menu__line"></span>
                <span class="header__menu__line"></span>
                <span class="header__menu__line"></span>
            </div>
			<div class="header__menu__inner" :class="{active:headerMenu_state}">
 			<ul class="header__menuList">
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
            </div>
		</nav>
	</div>
</template>
<script>
	export default {
		data(){
			return {
			headerMenu_state: false,
			}
		},
		components: { },
		  methods: {
			mainMenuToggle: function () {
			if (this.headerMenu_state == true) {
				this.headerMenu_state = false;
				this.modal_bk = false;
				return;
			}
			this.headerMenu_state = true;
			this.modal_bk = true;
			},
			modalBkClick: function () {
			this.headerMenu_state = false;
			this.modal_bk = false;
			},
		}
	};
</script>
<style lang="scss" scoped>
nav.nav-conent-pc {
	color: #fff;
	ul {
		display: flex;
		justify-content: flex-end;
		li {
			list-style-type: none;
			font-size: 1.25rem;
			padding: 0 1rem;
			font-weight: 700;
			letter-spacing: .1rem;
			a {
                text-decoration: none;
                color: black;
				line-height: 2rem;
                &:hover {
                    text-decoration: underline;
                }
			}
		}
	}
}

.nav-conent-sp {
	display: none;
}

@media screen and ( max-width: 900px ) {
	.nav-conent-pc {
		display: none;
		
	}
	.nav-conent-sp {
		display: block;
	}
	.header__menu {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		position: relative;
		width: 44px;
		height: 24px;
		padding: 0 10px;
		transition: all .4s;
		&__line {
			display: block;
			width: 15px;
			height: 2px;
			margin: 0 auto 0 0;
			background: #090C9B;
			transition: all .4s;
			&:nth-child(3) {
				width: 10px;
			}
		}
	}

	.header__menu.active .header__menu__line {
		position: relative;
		width: 17px;
	    &:nth-of-type(1) {
			top: -2px;
			transform: translateY(5px) rotate(-45deg);
		}
	    &:nth-of-type(2) {
			opacity: 0;
		}
	    &:nth-of-type(3) {
			top: 0;
			width: 17px;
			transform: translateY(-10px) rotate(45deg);
		}
	}

	.header__logo {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 32%;
		margin: auto;
	}


	.header__menu__inner {
		position: fixed;
		top: 50px;
		right: 0;
		width: 50%;
		height: calc(100vh - 46px);
		background: #fff;
		color: #fff;
		text-decoration: none;
		font-size: 14px;
		transform: translateX(100%);
		transition: all .3s;
	}


	.header__menu__inner.active {
		transform: translateX(0)
	}

	.header__menuList {
	margin-bottom: 20px;
	>li {
		position: relative;
		border-bottom: 1px solid rgb(240, 243, 246);
		&:after {
		margin: auto;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 6px solid #090C9B;
		}
			a {
			display: block;
			color: black;
			text-decoration: none;
			padding: 15px 45px 15px 15px;
			line-height: 1.5; 
			span {
				position: relative
			}
		}
	}



	}



 






}
</style>