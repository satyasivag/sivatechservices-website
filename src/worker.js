export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        // Serve static assets directly
        let response = await env.ASSETS.fetch(request);

        // If not found and it's a page navigation (not an API or file request), serve index.html
        if (response.status === 404 && !url.pathname.includes('.')) {
            response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
        }

        return response;
    },
};
