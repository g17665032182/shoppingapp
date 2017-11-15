<template>
	<main>
		<header>
			<img @click="back" class="left" src="../../assets/img/Shape2@2x.png" alt="" />
			<span>{{msg}}</span>
			<img class="right" src="../../assets/img/search@2x.png" alt="" />
		</header>
		<div class="com">
			<ul>
				<li>
					<img src="../../assets/img/Layer6@2x.png" alt="" />
					<p>DENIM SLIM JEANS <span>$220.00</span></p>
				</li>
				<li>
					<img src="../../assets/img/Layer7@2x.png" alt="" />
					<p>ALL　STARS SHOES <span>$365.00</span></p>
				</li>
				<li>
					<img src="../../assets/img/Layer10@2x.png" alt="" />
					<p>DENIM SLIM JEANS <span>$220.00</span></p>
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
				msg: 'WOMAN',
				list:[]
			}
		},
		methods: {
			back() {
				this.$router.push('/App')
			}
		},
		mounted() {
			this.$http.get('list.json').then(
				function(res) {
					console.log(res)
				}
			)
		}

	}
</script>

<style scoped="scoped">
	main {
		width: 100%;
		z-index: 999;
		background: #c2c027;
		margin-top: -90px;
		position: relative;
	}
	p{
		
	}	
	header {
		width: 90%;
		margin-left: 5%;
		text-align: center;
		height: 90px;
		line-height: 90px;
		box-sizing: border-box;
	}
	
	header>span {
		font-size: 30px;
		font-weight: 900;
		color: white;
	}
	
	.left {
		float: left;
		width: 8%;
		margin-top: 20px;
	}
	
	.right {
		float: right;
		width: 15%;
		margin-top: 20px;
		box-sizing: content-box			
	}
	.com li{
		position: relative;
		width: 100%;
	}
	.com li img{
		width: 100%;
	}
	.com li p {
		background: rgba(200,200,200,0.7);
		position: absolute;
		bottom: 0px;
		left: 0;
		font-size: 24px;
		height: 60px;
		width: 100%;
		line-height: 60px;
		color: white;
	}
	.com li p span{
		float: right;
		margin-right: 5px;
	}
</style>