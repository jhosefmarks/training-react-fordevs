import { UnexpectedError , InvalidCredentialsError } from '@domain/errors'
import { AccountModel } from '@domain/models'
import { Authentication } from '@domain/usecases'

import { HttpPostClient , HttpStatusCode } from '@data/protocols'

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
