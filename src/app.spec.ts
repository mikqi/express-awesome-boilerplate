import * as request from 'supertest'
import App from './app'

describe('#App', () => {
  it('should render root page', async () => {
    const response = await request(App).get('/')

    expect(response.ok).toBeTruthy()
    expect(response.text).toContain('hello world')
  })
})
