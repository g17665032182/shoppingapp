<template>
	<main>
		<header>
			<img src="../../assets/img/Shape2@2x.png" alt="" @click="back" />
			<h2>Checkout</h2>
		</header>
		<div class="com">
			<div class="user">
				<div class="avater">
					<img src="../../assets/img/Layer7@2x.png" alt="" width="100%"/>
				</div>
				<p>Hi! please comfirm your order</p>
			</div>
			
		</div>
		<div class="list">
				<table border="" cellspacing="" cellpadding="">
					<thead style="border-bottom: 1px solid gainsboro;">
							<td>Item</td>
							<td>Qty</td>
							<td>Amount</td>
					</thead>
					<tbody style="border-bottom: 1px solid gainsboro;">
						<tr v-for="v in list" >
							<td>{{v.name}}</td>
							<td>{{v.count}}</td>
							<td>{{v.price|change}}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td style="font-size: 18px;">*Free shipping</td>
							<td></td>
							<td style="font-size: 18px;">{{0|change}}</td>
						</tr>
						<tr>
							<td>Total:</td>
							<td></td>
							<td>{{this.$route.params.total|change}}</td>							
						</tr>
					</tbody>
				</table>
			</div>
		<footer>
			<div>
				CONFIRM
			</div>
		</footer>
	</main>
</template>

<script>
export default{
	methods:{
		back(){
			this.$router.go(-1)
		}
	},
	filters:{
			change(n){
				return '$'+n
			}
		},
	data(){
			return{
				list:[{
					name:'RETRO-COLOR',
					type:'SHIRT',
					price:'160.00',
					color:'Dark Green',
					size:'Small',
					count:'2',
					pic:'src/assets/img/Layer11@2x.png'
				},{
					name:'DOTTED CUTE',
					type:'DRESS',
					price:'425.00',
					color:'Pale Blue',
					size:'Small',
					count:'1',
					pic:'src/assets/img/Layer12@2x.png'
				},{
					name:'RAY-BAN',
					type:'GLASSES',
					price:'620.00',
					color:'BLACK',
					size:'Small',
					count:'1',
					pic:'src/assets/img/pic@2x.png'
				}
				]
			}
		},
}
</script>

<style scoped="scoped">
	main{
		width: 100%;
		z-index: 999;
		background: #FF6600;
		margin-top: -90px;
		position: relative;
		padding-bottom: 30%;
		background: #3b3b3b;
	}
	header{
		width:90% ;
		margin-left: 5%;
		text-align: center;
		position: relative;
		height: 90px;
		line-height: 90px;
		color: white;
	}
	header img{
		position: absolute;
		top: 20px;
		left: 0;
	}
	header h2{
		font-size: 30px;	
	}
	.com{
		background: url(../../assets/img/BG@2x.png);
		height: 0px;
		padding-bottom: 55%;
	}
	.user{
		text-align: center;
	}
	.user p{
		font-size: 20px;
	}
	.avater{
		width: 40%;
		height: 0px;
		overflow: hidden;
		padding-bottom: 40%;
		box-sizing: border-box;
		border-radius: 50%;
		margin-left: 30%;
	}
	.list{
		width: 100%;
		background: #3b3b3b;
	}
	.list>table{
		width: 100%;
		color: white;
		font-size: 20px;
		text-align: center;
		border-collapse: collapse;
		
	}
	td{
		height: 40px;
		border: none;
	}
	thead{
		font-size: 18px;
	}
	footer{
		width: 100%;
		background: url(../../assets/img/BG@2x.png);
		height: 0;
		padding-bottom: 30%;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	footer div{
		width: 60%;
		text-align: center;
		background: #F60;
		font-size: 24px;
		font-weight: 900;
		color: white;
		height: 60px;
		line-height: 60pxs;
		position: absolute;
		left: 20%;
		margin-top: 10%;
		
	}
</style>