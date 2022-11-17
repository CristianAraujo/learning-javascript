// Fecha: 16 de noviembre del 2022

const request = new Request('https://www.mozilla.org/favicon.ico');
const url = request.url;
const method = request.method;
const credentials = request.credentials;

// console.log(request);
// console.log(url);
// console.log(method);
// console.log(credentials);

const peticion = new Request('https://example.com', {
    method: 'POST', 
    body: '{ "foo": "bar" }',
});

const reqUrl = peticion.url;
const bodyUsed = reqUrl.bodyUsed;
console.log(bodyUsed);