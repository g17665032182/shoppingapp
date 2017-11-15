import VueRouter from 'vue-router'
import banner from '../components/index/banner.vue'
import menu from '../components/nav/menu.vue'
import submenuman from '../components/nav/submenuman.vue'
import submenuwoman from '../components/nav/submenuwoman.vue'
import listwoman from '../components/list/listwoman.vue'
import listman from '../components/list/listman.vue'
import sublist from '../components/list/sublist.vue'
import product from '../components/detail/product.vue'
import car from '../components/car/car.vue'
import chuckout from '../components/car/chuckout.vue'
export default new VueRouter({
	routes:[
		{path:'/menu',component:menu},
		{path:'/submenuman',component:submenuman},
		{path:'/submenuwoman',component:submenuwoman},
		{path:'/product',component:product},
		{path:'/car',component:car},
		{path:'/chuckout/:total',component:chuckout},
		{path:'/banner',component:banner},
		{path:'*',redirect:'/banner'},
		{path:'/listwoman',component:listwoman,
			children:[
				{
					path:'/sublist',
					component:sublist
				}
			]
		},
		{path:'/listman',component:listman,
			children:[
				{
					path:'/sublist',
					component:sublist
				}
			]
		},
		//{path:'*',redirect:'/sublist'}	
//		{
//					path:'*',
//					redirect:'/sublist'
//		}
	]

}) 
