import withCloud from "@serverless/cloud/svelte";
import { vitePreprocess } from '@sveltejs/kit/vite';

export default withCloud({
    preprocess: vitePreprocess()
});
