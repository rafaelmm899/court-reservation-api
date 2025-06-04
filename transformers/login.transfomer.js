export function loginTransformer(token) {
    return {
        type: 'Bearer',
        token: token
    }
}