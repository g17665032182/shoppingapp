<template>
	<main>
		<ul>
			<li>
				<router-link to='/listman'>
					<img src="../../assets/img/buttonmen@2x.png" alt="" width="100%" @click="aa"/>				
				</router-link>
			</li>
			<li>
				<router-link to='/listwoman'>
					<img src="../../assets/img/buttonwomen@2x.png" alt="" width="100%" @click="aa"/>
				</router-link>			
			</li>
		</ul>
		

	</main>
</template>

<script>
	export default{
		methods:{
			aa(){
				
			}
		}
	}
	
</script>

<style scoped>
	main{
		position:relative;
		bottom: 0;
		left: 0;
	}
	main ul{
		overflow: hidden;
	}
	main li{
		float:left;
		width:50%;
		position: relative;
		height: 0;
		padding-bottom: 30%;
	}


</style>