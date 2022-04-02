import { AxiosHttpClient } from "./axios-http-client";
import axios from 'axios';
import faker from 'faker';

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = () : AxiosHttpClient => {
    return new AxiosHttpClient();
}

describe('AxiousHttpClient', () => {
    test('Should call axios with correct url and verb', async () => {
        const url = faker.internet.url();
        await makeSut().post({ url });
        expect(mockedAxios.post).toHaveBeenCalledWith(url);
    })
})