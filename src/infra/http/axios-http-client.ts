import axios from 'axios'

import { HttpPostClient } from '@data/protocols'

export class AxiosHttpClient {
  async post (params: HttpPostClient.Params<any>): Promise<void> {
    await axios(params.url)
  }
}
