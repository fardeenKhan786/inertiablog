<template>
	<div>
		<layout>
			<div class="flex flex-wrap">
				<div class="w-full md:w-2/3">
					<div class="w-full h-68 lg:my-2 p-4">
						<img :src="post.image_full_path" class="object-fill w-full h-full rounded" />
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
						<div class="pt-4">
							<span>Category:</span>&nbsp;
							<span class="text-sm text-green-400">{{post.category.category_name}}</span>
						</div>
						<div class="pt-8 pb-6">
							<p class="text-2xl tracking-wider border-b-2 border-gray-800 inline-block mb-4">6 Comments</p>
							<div class="py-6 flex">
								<div>
									<avatar :name="post.user.name" color="blue"></avatar>
								</div>
								<div class="pl-4">
									<p class="text-lg">John Doe</p>
									<p class="text-sm text-gray-500 tracking-wider uppercase py-1">January 26,2018</p>
									<p
										class="text-sm tracking-wide text-gray-700"
									>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quod ea cum quam necessitatibus laudantium similique ipsum tenetur. Nulla, recusandae rem. Itaque commodi cupiditate perspiciatis omnis minus, autem quibusdam est!</p>
									<button class="bg-gray-700 text-white px-4 py-1 mt-3 rounded">Reply</button>
								</div>
							</div>

							<div class="py-6 flex">
								<div>
									<avatar :name="post.user.name" color="blue"></avatar>
								</div>
								<div class="pl-4">
									<p class="text-lg">John Doe</p>
									<p class="text-sm text-gray-500 tracking-wider uppercase py-1">January 26,2018</p>
									<p
										class="text-sm tracking-wide text-gray-700"
									>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos explicabo accusantium aperiam eum deleniti assumenda dolores dolor, sint odit expedita neque repellat, necessitatibus sed, quod fuga. Accusamus, possimus autem.</p>
									<button class="bg-gray-700 text-white px-4 py-1 mt-3 rounded">Reply</button>
								</div>
							</div>

							<div class="py-6 flex">
								<div>
									<avatar :name="post.user.name" color="blue"></avatar>
								</div>
								<div class="pl-4">
									<p class="text-lg">John Doe</p>
									<p class="text-sm text-gray-500 tracking-wider uppercase py-1">January 26,2018</p>
									<p
										class="text-sm tracking-wide text-gray-700"
									>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aliquid nulla asperiores excepturi placeat quaerat officiis illo. Dolorum soluta nemo aliquid quam iste alias nulla cupiditate consectetur. Voluptatem, voluptatum nihil!</p>
									<button class="bg-gray-700 text-white px-4 py-1 mt-3 rounded">Reply</button>
								</div>
							</div>
							<textarea-input></textarea-input>
						</div>
					</div>
				</div>
				<div class="w-full md:w-1/3 pl-4 md:pl-12 mt-8 md:mt-3">
					<div class="text-2xl tracking-wider border-b-2 border-gray-800 inline-block">Popular Posts</div>
					<div class="flex mt-4">
						<div class="text-3xl text-gray-500 inline-block">01</div>
						<div class="mt-2 pl-2">
							<div class="text-gray-800">Needs to Meet Its Audience Where They Are</div>
							<div class="text-gray-600 text-sm mt-3">
								Category Name:
								<span
									class="text-sm text-teal-600 tracking-wider"
								>{{post.category.category_name}}</span>
							</div>
							<div class="text-gray-800 text-sm flex items-center">
								<div>{{post.published_at_formated}} Rating: &nbsp;</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
										<path
											style="fill:#d69e2e;"
											d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div class="flex mt-4">
						<div class="text-3xl text-gray-500 inline-block">02</div>
						<div class="mt-2 pl-2">
							<div class="text-gray-800">Needs to Meet Its Audience Where They Are</div>
							<div class="text-gray-600 text-sm mt-3">
								Category Name:
								<span
									class="text-sm text-teal-600 tracking-wider"
								>{{post.category.category_name}}</span>
							</div>
							<div class="text-gray-800 text-sm">{{post.published_at_formated}}</div>
						</div>
					</div>
					<div class="flex mt-4 mb-8">
						<div class="text-3xl text-gray-500 inline-block">03</div>
						<div class="mt-2 pl-2">
							<div class="text-gray-800">Needs to Meet Its Audience Where They Are</div>
							<div class="text-gray-600 text-sm mt-3">
								Category Name:
								<span
									class="text-sm text-teal-600 tracking-wider"
								>{{post.category.category_name}}</span>
							</div>
							<div class="text-gray-800 text-sm">{{post.published_at_formated}}</div>
						</div>
					</div>
					<a href="#" class="text-green-400 hover:text-green-600 underline uppercase">See all popular</a>
				</div>
			</div>
		</layout>
	</div>
</template>

<script>
import Layout from "@/Shared/Layout";
import Avatar from "@/Shared/tuis/Avatar";
import TextareaInput from "@/Shared/tuis/TextareaInput";

export default {
	components: {
		Layout,
		Avatar,
		TextareaInput
	},
	props: ["post"]
};
</script>

<style lang="scss" scoped>
</style>