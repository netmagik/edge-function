export default async (request, context) => {
    return new Response('Hello World from The Edge!', {
        headers: {
            "content-type": "text/html",
        }
    })
}