import { AxiosHttpClient } from "./axios-http-client";
import { HttpPostParams } from '@/data/protocols/http';
import axios from 'axios';
import faker from 'faker';

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
    data: faker.random.objectElement(),
    status: faker.datatype.number()
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient();
}

const mockPostRequest = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.random.objectElement()
})

describe('AxiousHttpClient', () => {
    test('Should call axios with correct values', async () => {
        const request = mockPostRequest();
        await makeSut().post(request);
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
    })

    test('Should return the correct statusCode and body', async () => {
        const response = await makeSut().post(mockPostRequest());
        expect(response).toEqual({
            statusCode: mockedAxiosResult.status,
            body: mockedAxiosResult.data
        })
    })
})