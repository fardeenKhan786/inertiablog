<template>
	<layout>
		<div class="flex" mx-auto>
			<div class="w-3/5">
				<heading size="heading" class="mb-3">Public Profile</heading>
				<hr />
				<text-input label="Name" class="mt-3"></text-input>
				<small
					class="text-gray-700"
				>Your name may appear around our blog. You can remove it at any time.</small>
				<text-input label="Email" class="mt-3"></text-input>
				<small
					class="text-gray-700"
				>You have set your email address to private. To toggle email privacy, go to email settings and uncheck "Keep my email address private."</small>
				<textarea-input
					label="Bio"
					class="mt-3 font-bold text-gray-700"
					placeholder="Tell us a little bit about yourself"
				></textarea-input>
				<text-input label="Url" class="mt-3"></text-input>
				<text-input label="Location" class="mt-3"></text-input>
				<small class="text-gray-700 mb-2">You can share your location from where you belong</small>
				<div>
					<loading-button class="mt-3" variant="success">Update</loading-button>
				</div>
			</div>
			<div class="w-2/5 h-16 pl-12 mt-16">
				<file-input label="profile picture"></file-input>
			</div>
		</div>
	</layout>
</template>

<script>
import Heading from "@/Shared/tuis/Heading";
import TextInput from "@/Shared/tuis/TextInput";
import Layout from "@/Shared/Layout";
import TextareaInput from "@/Shared/tuis/TextareaInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import FileInput from "@/Shared/tuis/FileInput";

export default {
	data() {
		return {};
	},
	components: {
		Heading,
		FileInput,
		TextInput,
		Layout,
		TextareaInput,
		LoadingButton
	}
};
</script>

<style lang="scss" scoped>
</style>