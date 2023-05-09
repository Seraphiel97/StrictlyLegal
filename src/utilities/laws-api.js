import sendRequest from "./send-request";

const BASE_URL = '/api/laws';

export function createLaw(lawData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', lawData)
}

export function getAllLaws() {
    return sendRequest(`${BASE_URL}/getAllLaws`)
}

export function deleteLaw(law) {
    return sendRequest(`${BASE_URL}/deleteLaw`, 'DELETE')
}

export function updateLaw(update, id) {
    return sendRequest(`${BASE_URL}/updateLaw`, 'PUT', {update, id})
}