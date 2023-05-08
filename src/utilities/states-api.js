import sendRequest from "./send-request";

const BASE_URL = '/api/states';

export function getAllStates() {
    return sendRequest(`${BASE_URL}/getAllStates`)
}