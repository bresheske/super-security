import { giberish } from "./functions/giberish";

export async function handle(event, context) {

    const data = event.pathParameters.data;
    console.log(`encrypt: ${data}`)
    return {
        statusCode: 200,
        body: JSON.stringify({
            data: giberish(data)
        })
    };

}