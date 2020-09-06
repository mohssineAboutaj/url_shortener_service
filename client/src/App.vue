<template>
	<div id="app" class="container text-center">
		<img
			alt="Vue logo"
			src="https://img2.pngio.com/a-complete-guide-on-google-url-shortener-whizsky-url-shortening-png-744_486.png"
			class="mx-auto my-4 w-100"
		/>
		<form method="POST" @submit.prevent="submit" class="mx-auto my-4">
			<div class="form-group">
				<input
					type="text"
					class="form-control"
					placeholder="write or paste the long url"
					v-model="long"
				/>
				<div class="form-group"></div>
				<button type="submit" class="btn btn-primary btn-block">shorten</button>
			</div>
		</form>

		<b-spinner label="Loading..." variant="primary" v-show="isLoad"></b-spinner>

		<div class="text-white mx-auto my-4" v-show="formSubmit" id="result">
			<div v-if="status == 200" class="alert alert-success">
				{{ short }}
			</div>
			<div v-else class="alert alert-danger">
				{{ msg }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		formSubmit: false, // for result container
		isLoad: false, // for spinner
		long: "",
		short: "",
		status: 200,
		msg: "",
	}),
	methods: {
		submit() {
			const api = "http://localhost:5000/api/url/shorten";
			this.formSubmit = this.isLoad = true;
			this.$axios
				.post(api, { longUrl: this.long })
				.then((res) => {
					this.short = res.data.shortUrl;
					this.status = res.data.status || res.status;
					this.msg = res.data.message;
					this.isLoad = false;
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
form,
img,
#result {
	max-width: 500px;
}
</style>
