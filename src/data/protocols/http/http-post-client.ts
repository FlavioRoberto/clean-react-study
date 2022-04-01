import { HttpResponse } from "."

export type HttpPostParams<T> = {
    url: string
    body?: T
}

export interface HttpPostClient<Body, Response> {
    post: (params: HttpPostParams<Body>) => Promise<HttpResponse<Response>>
}
