import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
      }
    }
    const url = 'any_url'
    const httpClientSpy = new HttpClientSpy()
    const sut = new RemoteAuthentication(url, httpClientSpy)
    await sut.auth()
    expect(httpClientSpy.url).toBe(url)
  })
})
