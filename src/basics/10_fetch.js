const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

const req = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

req
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);
