<template>
	<div>
		<layout>
			<div class="flex flex-wrap">
				<div class="w-2/3">
					<div class="w-full h-68 lg:my-2 p-4">
						<img :src="post.image_full_path" class="object-fill w-full h-full" />
					</div>
					<div class="w-full pl-4">
						<div class="text-3xl">{{post.title}}</div>
						<avatar :name="post.user.name" color="blue" class="mr-3"></avatar>
						<span class="text-sm">{{post.user.name}}</span>&nbsp;
						<span class="text-sm text-gray-600">in</span>&nbsp;
						<span class="text-sm">{{post.category.category_name}}</span>
						<div
							class="pt-4 text-sm tracking-widest text-gray-700 leading-relaxed text-justify"
						>{{post.description}}</div>
						<div class="pt-8">
							<span>Category:</span>&nbsp;
							<span class="text-sm text-green-400">{{post.category.category_name}}</span>
						</div>
						<div>
							<p class="text-2xl tracking-wider pt-8">
								<u>Comments</u>
							</p>
						</div>
					</div>
				</div>
				<div class="w-1/3">
					<div class="mt-6 bg-gray-200">
						<h3 class="bg-teal-300 py-2 pl-4 text-xl shadow">Popular Posts</h3>
						<div class="h-96 p-4">vgfgrgrg</div>
					</div>
				</div>
			</div>
		</layout>
	</div>
</template>

<script>
import Layout from "@/Shared/Layout";
import Avatar from "@/Shared/tuis/Avatar";

export default {
	components: {
		Layout,
		Avatar
	},
	props: ["post"]
};
</script>

<style lang="scss" scoped>
</style>