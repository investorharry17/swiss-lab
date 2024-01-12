<script setup>
	import rating_1 from "../../assets/rating_1.jpg"
	import rating_2 from "../../assets/rating_2.jpg"
	import rating_3 from "../../assets/rating_3.jpg"
	import rating_4 from "../../assets/rating_4.jpg"
	import doctor from "../../assets/doctor.jpg"
</script>

<template>
	<div class="main">
		<div class="hero">
			<div class="left">
				
				<div class="top">
					We <span class="color">engineer </span> in silence, so your <span class="color">sosmetics</span> can make the noise.
					</div>
				<div  class="bottom gray">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. 
				</div>
				<div class="buttons">
					<button class="bg"> 
						<span>Contact us</span> 
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
	  						<path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
						</svg>
					 </button>
					<button>
						<span>See reviews</span>  
					</button>
				</div>
				<div class="ratings">
					<div class="avatas">
						<img :src="rating_1">
						<img :src="rating_2">
						<img :src="rating_3">
						<img :src="rating_4">
					</div>
					<div class="words">
						<span class="gray">Ratings 4.5/5</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path class="color" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
						</svg>
						<span class="bold">Trustpilot</span>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="doctor">
					<img :src="doctor">
					<div class="words">
						<span class="main">250+</span>
						<span class="minor">Positive <br/> reviews  </span>

					</div>
				</div>
			</div>

		</div>
		<div class="trusts">
			<ul>
				<li> 
					<span class="title">Certified </span> 
					<span>ISO 9001 certified manufaacturer</span>
				</li>
				<li> 
					<span class="title">Certified </span> 
					<span>ISO 9001 certified manufaacturer</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	.color {
		color: #35caa3
	}
	.gray {
		color: #8f9997
	}
	.bold {
		font-weight: 700
	}
	.main {
		padding: 10px;
	}
	.hero .top {
		text-align: center;
		font-size: 30px;
		line-height: 40px;
	}
	.hero .bottom {
		padding: 20px 0;
		text-align: center;
		font-size: 14px;
	}
	.hero .buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		/*width: 100%;*/
	}
	.hero .buttons {
		margin: 5px 0;
	}
	.hero .buttons button {
		background: #fff;
		padding: 10px 15px;
		border-radius: 4px;
		margin: 0px 5px;
		display: flex;
		align-items: center;
		border: 1.5px solid ;
	}
	.hero .buttons button.bg {
		background: #0b2921
	}
	.hero .buttons button svg {
		height: 16px;
		margin-left: 10px
	}
	.hero .buttons button.bg span ,
	.hero .buttons button.bg svg path{
		color: #fff
	}
	.hero .ratings {
		margin: 20px 0;
		display: flex;
		align-items: center;
	}
	.hero .ratings div.avatas {
		display: flex;
	}
	.hero .ratings div.avatas img {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		position: relative;
		right: 0;
		border: 2px solid #fff;
	}
	.hero .ratings div.avatas img:nth-of-type(2) {
		left: -8px;
	}
	.hero .ratings div.avatas img:nth-of-type(3) {
		left: -16px;
	}
	.hero .ratings div.avatas img:nth-of-type(4) {
		left: -24px;
	}
	.hero .ratings .words {
		display: flex;
		align-items: center;
	}
	.hero .ratings .words span {
		font-size: 13px;
		white-space: nowrap;
	}
	.hero .ratings .words svg {
		height: 20px;
		margin: 0 10px;
	}	
	.doctor {
		margin: 30px 0;
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.doctor img {
		height: 80vw;
		width: 80vw;
		object-fit: cover;
		object-position: top;
		border-radius: 50%;
		background: linear-gradient(315deg, #cacaca, #f0f0f0);
		box-shadow:  0px 0px 10px #dcdcdc,
         0px 0px 10px #e4e4e4;
	}
	.doctor .words {
		position: absolute;
		left: 10px;
		bottom: 10px;
		background: #fff;
		box-shadow:  0px 0px 10px #dcdcdc,
         0px 0px 10px #e4e4e4;
         padding: 0px 10px;
         border-radius: 4px;
         display: flex;
         align-items: center;
	}
	.doctor .words .main {
		font-size: 20px;
		font-weight: bold;
	}
	.doctor .words .minor {
		font-size: 9px;
		line-height: 20px;
	}
</style>