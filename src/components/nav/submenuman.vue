<template>
	<main>
		<header>
			<img @click="back" src="../../assets/img/arrow@2x.png" alt="" width="10%" />
			<span id="top">
				<h2>{{msg}}</h2>
			</span>
			<img @click="home" src="../../assets/img/home@2x.png" alt="" />
		</header>
		<div class="com">
			<ul>
				<router-link to='/listman'>
					<li v-for="v in list">
						{{v}}
					</li>
				</router-link>
			</ul>
		</div>
	</main>
</template>

<script>
	import App from '../../App.vue'
	export default{
		
		data(){
			return{
				msg:'MAN',
				list:['T-shirts','Pants','Jackets','Jeans','Vests','Shorts','Outwears']				
			}
		},		
		methods:{
			back(){
				this.$router.go(-1)
			},
			home(){
				this.$router.push('/App')
			}
		}
	}
</script>

<style scoped="scoped">
	main{
		position: fixed;
		width: 100%;
		background: url(../../assets/img/BG@2x.png);
		height: 100%;
		top: 0;
		left: 0;
		z-index: 999;
		
	}
	header{
		width: 90%;
		margin-top: 5px;
		margin-left: 5%;
		box-sizing: border-box;
		text-align: center;
	}
	#top{
		margin-top: 5px;
		color: darkgreen;
		font-size: 36px;
		margin-bottom: 10px;
	}
	.com{
		width: 90%;
		margin-top: 20px;
		margin-left: 5%;
		text-align: center;
		font-size: 20px;
	}
	
	.com li{
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #ccc;
	}
	.com ul a{
		text-decoration: none;
	}
</style>