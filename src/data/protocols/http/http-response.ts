export enum HttpStatusCode {
    sucess = 200,
    noContent = 205,
    unathorized = 401,
    badRequest = 400,
    notFound = 404
}

export type HttpResponse = {
    statusCode: HttpStatusCode,
    body?: any
}