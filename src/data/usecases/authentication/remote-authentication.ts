import { Authentication } from '@domain/usecases/authentication'

import { HttpPostClient } from '@data/protocols/http/http-post-client'
import { HttpStatusCode } from '@data/protocols/http/http-response'
import { InvalidCredentialsError } from '@domain/errors/invalid-credentials-error'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    const response = await this.httpPostClient.post({ url: this.url, body: params })

    switch (response.statusCode) {
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      default: return { accessToken: '' }
    }
  }
}
