import { HttpPostClient , HttpResponse, HttpStatusCode } from '@data/protocols'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = { statusCode: HttpStatusCode.ok }

  async post (params: HttpPostClient.Params<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body

    return Promise.resolve(this.response)
  }
}
