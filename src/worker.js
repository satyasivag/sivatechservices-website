export default {
    async fetch(request, env) {
        // pass the request to Cloudflare's asset serving
        return env.ASSETS.fetch(request);
    },
};
