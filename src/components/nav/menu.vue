<template>
	<main>
		<img src="../../assets/img/arrow@2x.png" width="10%" class="balck" @click="back" />
		<img src="../../assets/img/avatar@2x.png" alt="" width="60%" />
		<div class="nav">
			<ul class="mainnav">
				<li>
					<router-link to='/car'>
						<img src="../../assets/img/cart@2x.png" alt="" /> My Car
					</router-link>
				
				</li>
				<li>
					<img src="../../assets/img/Ellipse3@2x.png" alt="" /> Categories
					<ul class="childnav">
						<li style="color: deepskyblue;">
							<router-link to='/submenuman'>
								<span><img src="../../assets/img/remember@2x.png" alt="" width="6%"/></span> MAN
								<span class="right"><img src="../../assets/img/Ellipse3copy@2x.png" alt="" width="4%"/></span>
							</router-link>
						</li>

						<li style="color: palevioletred;">
							<router-link to='/submenuwoman'>
								<span><img src="../../assets/img/remember@2x.png" 								alt="" width="6%"/></span> WOMAN
								<span class="right"><img src="../../assets/img/Ellipse3copy@2x.png" alt="" width="4%" /></span>

							</router-link>
						</li>

						<li style="color: goldenrod;">
							<router-link to='/submenu'>
								<span><img src="../../assets/img/remember@2x.png" 								alt="" width="6%"/></span> KIDS
								<span class="right"><img src="../../assets/img/Ellipse3copy@2x.png" alt="" width="4%"/></span>

							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<img src="../../assets/img/account@2x.png" /> Account
				</li>
				<li>
					<img src="../../assets/img/sign@2x.png" /> Sign out
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	import App from '../../App.vue'
	export default {
		data() {
			return {

			}
		},
		methods: {
			back() {
				this.$router.push('/App')
			}
		}
	}
</script>

<style scoped>
	main {
		position: fixed;
		width: 100%;
		min-height: 100%;
		top: 0;
		left: 0;
		z-index: 999;
		background: url(../../assets/img/BG@2x.png);
	}
	
	main>img {
		margin-left: 10%;
		margin-top: 15%;
	}
	
	.balck {
		position: absolute;
		top: -50px;
		left: -8%;
	}
	
	.nav {
		width: 80%;
		margin-left: 10%;
		margin-top: 15%;
	}
	
	.mainnav>li {
		width: 100%;
		line-height: 60px;
		font-size: 20px;
		color: grey;
		font-weight: 900;
	}
	.mainnav>li>a{
		line-height: 60px;
		font-size: 20px;
		color: grey;
		font-weight: 900;
	}
	
	.mainnav>li>img {
		margin-right: 8%;
		width: 10%;
	}
	.mainnav>li>a>img {
		margin-right: 8%;
		width: 10%;
	}
	
	.childnav {
		width: 80%;
		margin-left: 20%;
		list-style: none;
	}
	
	li>a {
		text-decoration: none;
	}
	
	.childnav>li {
		overflow: hidden;
	}
</style>