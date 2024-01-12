import { createRouter , createWebHistory } from "vue-router"
import Homepage from "./views/page-view/Homepage.vue"

// import ErrorPage from "./views/page-view/ErrorPage.vue"

const router = createRouter({ 
	history : createWebHistory("/"),
	routes : [
		{
			path: "/",
			name: "Home",
			component: Homepage
		} ,
		// {
		// 	path: "/:catchall(.*)*",
		// 	name: "Error Page",
		// 	component:ErrorPage
		// } 
	]
})

export default router