import { faker } from '@faker-js/faker'

import { Authentication } from '@domain/usecases/authentication'
import { AccountModel } from '@domain/models/account-model'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid()
})
