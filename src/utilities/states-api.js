import sendRequest from "./send-request";

const BASE_URL = '/api/states';

export function getAll() {
    return sendRequest(`${BASE_URL}/getAll`)
}