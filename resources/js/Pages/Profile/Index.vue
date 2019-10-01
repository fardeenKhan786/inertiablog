<template>
	<layout>
		<div class="flex" mx-auto>
			<div class="w-3/5">
				<heading size="heading" class="mb-3">Public Profile</heading>
				<hr />
				<text-input label="Name" v-model="form.name" class="mt-3"></text-input>
				<small
					class="text-gray-700"
				>Your name may appear around our blog. You can remove it at any time.</small>
				<text-input label="Email" v-model="form.email" class="mt-3"></text-input>
				<small
					class="text-gray-700"
				>You have set your email address to private. To toggle email privacy, go to email settings and uncheck "Keep my email address private."</small>
				<textarea-input
					label="Bio"
					v-model="form.bio"
					class="mt-3 font-bold text-gray-700"
					placeholder="Tell us a little bit about yourself"
				></textarea-input>
				<text-input v-model="form.url" label="Url" class="mt-3"></text-input>
				<text-input v-model="form.location" label="Location" class="mt-3"></text-input>
				<small class="text-gray-700 mb-2">You can share your location from where you belong</small>
				<div>
					<loading-button class="mt-3" variant="success" @click.prevent="updateProfile">Update</loading-button>
				</div>
			</div>
			<div class="w-2/5 h-16 pl-12 mt-16">
				<file-input label="profile picture"></file-input>
			</div>
		</div>
		<div class="flex mx-auto my-8">
			<div class="w-3/5">
				<heading size="heading" class="mb-3">Change Password</heading>

				<hr />

				<div class="my-4">
					<text-input
						:errors="errors.current_password"
						@keydown="delete errors.current_password"
						v-model="data.current_password"
						label="Current Password"
					></text-input>
				</div>
				<div class="my-4">
					<text-input
						:errors="errors.password"
						@keydown="delete errors.password"
						label="New Password"
						v-model="data.password"
					></text-input>
				</div>
				<div class="my-4">
					<text-input
						:errors="errors.password_confirmation"
						@keydown="delete errors.password_confirmation"
						v-model="data.password_confirmation"
						label="Confirm New Password"
					></text-input>
				</div>
				<div class="my-4">
					<loading-button variant="success" @click.prevent="changePassword">Change Password</loading-button>
				</div>
			</div>
			<div class="w-2/5"></div>
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
		return {
			form: {
				name: this.$page.auth.user.name,
				email: this.$page.auth.user.email,
				bio: this.$page.auth.user.bio,
				url: this.$page.auth.user.url,
				location: this.$page.auth.user.location
			},
			data: {
				current_password: "",
				password: "",
				password_confirmation: ""
			}
		};
	},

	props: ["errors"],

	components: {
		Heading,
		FileInput,
		TextInput,
		Layout,
		TextareaInput,
		LoadingButton
	},
	methods: {
		changePassword() {
			this.$inertia
				.post("/password-change", this.data)
				.then(res => {
					// this.data = {};
				})
				.catch(() => {});
		},

		updateProfile() {
			this.$inertia
				.post("/profile-create", this.form)
				.then(res => {
					// this.data = {};
				})
				.catch(() => {});
		}
	}
};
</script>

<style lang="scss" scoped>
</style>