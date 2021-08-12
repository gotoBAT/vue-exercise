<template>
	<ul>
		<li>news001<input type="text"/></li>
		<li>news002<input type="text"/></li>
		<li>news003<input type="text"/></li>
	</ul>
</template>

<script>
	export default {
		name:'News',
		activated: function () {
			console.log('组件被激活')
		},
		deactivated: function () {
			console.log('组件失活')
		}
	
	}
</script>