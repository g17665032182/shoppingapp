<template>
	<main>
		<div class="nav">
			<router-link to='/menu'><img class="menu" src="../../assets/img/menu@2x.png" alt="" /></router-link>
			<img class="logo" src="../../assets/img/minilogo@2x.png"/>
			<img class="search" src="../../assets/img/search@2x.png"/>
<!--			<router-link to='/banner'>gdfd</router-link>-->
		</div>
	</main>
</template>

<script>
	
</script>

<style scoped> 
	main{
		width:100%;
		background: #f60;
		height: 90px;
		text-align: center;
	}
	main>div{
		margin-left: 5%;
		width: 90%;
		height: 90px;
		position: relative;
		text-align: center;
		padding-top: 20px;
		box-sizing: border-box;
	}
	.menu{
		position: absolute;
		left: 0;
		bottom: 25px;
	}
	.search{
		position: absolute;
		right: 0;
		bottom: 20px;
	}
	.logo{
		margin-bottom: 20px;
		box-sizing: border-box;
	}
	
</style>