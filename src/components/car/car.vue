<template>
	<main>
		<ul>
			<li v-for="(v,a) in list">
				<div class="right">
					<img :src="v.pic" width="100%" alt="" />
				</div>
				<div class="left">
					<div class="up">
						<p>{{v.name}}
							<span style="font-weight: 900;">{{v.type}}</span> 
							<span id="price">{{v.price | change}}</span>
						</p>
					</div>
					<div class="down">
						<p>color: <span>{{v.color}}</span></p>
						<p>size: <span>{{v.size}}</span></p>
						<div class="count">count:{{v.count}}</div>
						<button @click="add(a)">+</button>
						<button @click="redu(a)">-</button>
					</div>
				</div>				
			</li>
		</ul>
		<div class="logo">
			<img src="../../assets/img/thankyoyline@2x.png" alt="" />
		</div>
		<footer>
				<ul>
					<li>
						<p>{{t | change}}</p>
					</li>
					<li>
						<router-link :to="'/chuckout/'+this.t" style='text-decoration: none; color: white;'>
							<p>
								CHUCKOUT
							</p>
						</router-link>						
					</li>
				</ul>
			</footer>
	</main>
</template>

<script>
	export default{
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
		computed:{
			t(){
				var a=0;
				for(let i=0;i<this.list.length;i++){
					a+=parseInt(this.list[i].price)*parseInt(this.list[i].count)
				}
				return a;
				
			}
		},
		filters:{
			change(n){
				return '$'+n
			}
		},
		methods:{
			add(n){
				this.list[n].count=parseInt(this.list[n].count)+1
			},
			redu(n){
				if(this.list[n].count>0){
					this.list[n].count=parseInt(this.list[n].count)-1
				}else{
					this.list[n].count=0
				}
				
			}
		}
	}
</script>

<style scoped="scoped">
	main{
		background: url(../../assets/img/Layer2@2x.png);
	}
	li{
		overflow: hidden;
		font-size: 16px;
		border-bottom: 2px solid ghostwhite;
		position: relative;
	}
	.right{
		width: 30%;
		height: 0px;
		overflow: hidden;
		padding-bottom: 30%;
		box-sizing: border-box;
		float: left;
		
	}
	.left{
		width: 70%;
		float: left;
	}
	.up{
		margin-top: 10px;
		margin-left: 5%;
	}
	#price{
		float: right;
		font-weight: 900;
	}
	.down{
		margin-top: 10px;
		margin-left: 5%;
	}
	.count{
		position: absolute;
		bottom: 20px;
		right: 5%;
		font-size: 16px;
	}
	.logo{
		width: 100%;
		text-align: center;
		height: 100%;
	}
	.logo img{
		width: 60%;
		margin-top: 40px;
	}
	footer{
		z-index: 999;
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
		font-weight: 900;
		text-align: center;
		float: left;
		color: white;
		height: 0px;
		padding-bottom: 30%;
	}
	footer ul li:nth-of-type(1){
		background: black;
	}
	footer ul li:nth-of-type(2){
		background: #FF6600;
	}
</style>