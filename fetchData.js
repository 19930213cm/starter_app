import https from 'https';

const getData = () => (
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data;
        resp.on('data', (chunk) => {
            data += chunk;
        });
    })
);

export default getData;