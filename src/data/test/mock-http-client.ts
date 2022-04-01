import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from "@/data/protocols/http"

export class HttpPostClientSpy<body, response> implements HttpPostClient<body, response> {
    url?: string
    body?: body
    response: HttpResponse<response> = {
        statusCode: HttpStatusCode.ok
    }

    async post(params: HttpPostParams<body>): Promise<HttpResponse<response>> {
        this.url = params.url
        this.body = params.body
        return Promise.resolve(this.response)
    }
}