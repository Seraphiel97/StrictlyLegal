import sendRequest from "./send-request";

const BASE_URL = '/api/laws';

export function createLaw(lawData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', lawData)
}

export function getAllLaws() {
    return sendRequest(`${BASE_URL}/getAllLaws`)
}