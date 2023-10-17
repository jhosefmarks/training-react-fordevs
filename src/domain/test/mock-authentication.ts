import { faker } from '@faker-js/faker'

import { Authentication } from '@domain/usecases/authentication'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
