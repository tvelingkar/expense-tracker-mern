export function gerateApiUrl(url) {
    return `${process.env.REACT_APP_API_BASE_URL}${url}`;
}