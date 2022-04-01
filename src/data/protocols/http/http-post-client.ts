import { HttpResponse } from "./http-response"

export type HttpPostParams<T> = {
    url: string
    body?: T
}

export interface HttpPostClient<Body, Response> {
    post: (params: HttpPostParams<Body>) => Promise<HttpResponse<Response>>
}
