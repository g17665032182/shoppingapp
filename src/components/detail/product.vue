<template>
	<main>
		<header>
			<img @click="back" class="left" src="../../assets/img/Shape2@2x.png" alt="" />
			<span>{{msg}}</span>
			<img class="right" src="../../assets/img/search@2x.png" alt="" />
		</header>
		<div class="com">
			<div class="pic">
				<img class="like" src="../../assets/img/like@2x.png" alt="" />
				<ul>
					<li><img src="../../assets/img/Layer12@2x.png" alt="" /></li>
					<li><img src="../../assets/img/Layer12@2x.png" alt="" /></li>
					<li><img src="../../assets/img/Layer12@2x.png" alt="" /></li>
					<li><img src="../../assets/img/Layer12@2x.png" alt="" /></li>
				</ul>
				<ol>
					<li>QUANTITY : 1</li>
					<li>COLOR:BULE</li>
					<li>SIZE:S</li>
				</ol>
			</div>
			<div class="into">
				<div>
				  <h3>DOTTED CUTE DRESS</h3>
				  <h5>marked as High Quality</h5>
				  <p>Luckily, what distinguishes a high quality dress shirt, is more than just black magic and flashy marketing.</p>
				  <p>There are a few things you can look for. These things are generally signs that the shirt took longer to produce and will help you identify a dress shirt made without shortcuts and capable of lasting you a long time.</p>
				</div>
			</div>
		</div>
		<footer>
				<ul>
					<li>
						<p>$425.00</p>
					</li>
					<li>
						<router-link to='/car' style='text-decoration: none; color: white;'>
							<p>
								ADD TO CAR
							</p>
						</router-link>						
					</li>
				</ul>
			</footer>
	</main>
</template>

<script>
	export	default{
		data(){
			return{
				msg:'DETAIL'
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	main{
		width: 100%;
		z-index: 999;
		background: #FF6600;
		margin-top: -90px;
		position: relative;
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
	.com{
		position: relative;
	}
	.pic{
		overflow: hidden;
		position: relative;
	}
	.like{
		position: absolute;
		top: 20px;
		left: 5px;
		z-index: 9999;
	}
	.pic ul{
		position: relative;
		width: 400%;
		overflow: hidden;
	}
	.pic ul li{
		width: 25%;
		float: left;
	}
	.pic ul li img{
		width: 100%;
	}
	.pic ol{
		width: 100%;
		overflow: hidden;
		position: absolute;
		bottom: 0;
		left: 0;
		background: rgba(100,100,100,0.7);
		height: 45px;
	}
	.pic ol li{
		float: left;
		width: 33.33%;
		text-align: center;
		font-size: 15px;
		font-weight: 900;
		color: white;
		line-height: 45px;
		border-right: 1px solid whitesmoke;
		box-sizing: border-box;		
	}
	.into{
		padding-top: 20px;
		background: url(../../assets/img/BG@2x.png);
		width: 100%;
		padding-bottom: 100px;
	}
	.into div{
		width: 90%;
		margin-left: 5%;
		color: gray;
	}
	.into h3{
		width: 100%;
		font-size: 24px;
	}
	.into h5{
		width: 100%;		
		font-size: 12px;
	}
	footer{		
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 115px;
	}
	footer ul{
		overflow: hidden;
	}
	footer ul li{
		width: 50%;
		line-height: 113px;
		font-size: 20px;
		height: 0px;
		padding-bottom: 30%;
		font-weight: 900;
		text-align: center;
		float: left;
		color: white;
	}
	footer ul li:nth-of-type(1){
		background: black;
	}
	footer ul li:nth-of-type(2){
		background: #FF6600;
	}
</style>