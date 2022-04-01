export enum HttpStatusCode {
    ok = 200,
    noContent = 205,
    unauthorized = 401,
    badRequest = 400,
    notFound = 404,
    internalServerError=500
}

export type HttpResponse<T> = {
    statusCode: HttpStatusCode,
    body?: T
}