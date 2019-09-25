<template>
	<div>
		<layout>
			<div class="max-w-xl mx-auto rounded-lg bg-gray-100">
				<img :src="post.image_full_path" class="object-cover rounded-lg" />
			</div>
		</layout>
	</div>
</template>

<script>
import Layout from "@/Shared/Layout";

export default {
	components: {
		Layout
	},
	props: ["post"]
};
</script>

<style lang="scss" scoped>
</style>