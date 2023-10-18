import { faker } from '@faker-js/faker'

import { Authentication } from '@domain/usecases'
import { AccountModel } from '@domain/models'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid()
})
