export default async (request, context) => {
    context.log('Hello - Calling Hello.js Edge Function')

    return new Response('Hello World from The Edge!', {
        headers: {
            "content-type": "text/html",
        }
    })
}