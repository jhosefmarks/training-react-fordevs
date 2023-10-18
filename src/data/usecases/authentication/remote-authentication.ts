import { UnexpectedError } from '@domain/errors/unexpected-error'
import { InvalidCredentialsError } from '@domain/errors/invalid-credentials-error'
import { Authentication } from '@domain/usecases/authentication'
import { AccountModel } from '@domain/models/account-model'

import { HttpPostClient } from '@data/protocols/http/http-post-client'
import { HttpStatusCode } from '@data/protocols/http/http-response'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<Authentication.Params, AccountModel>
  ) { }

  async auth (params: Authentication.Params): Promise<AccountModel> {
    const response = await this.httpPostClient.post({ url: this.url, body: params })

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
