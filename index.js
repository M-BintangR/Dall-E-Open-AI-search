async function generateImage() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'block';
    const apiKey = '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';
    const inputText = document.getElementById('inputText').value;

    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
        },
        body: JSON.stringify({
            "model": "image-alpha-001",
            "prompt": inputText,
            "num_images": 1,
            "size": "512x512",
            "response_format": "url"
        })
    });

    loadingSpinner.style.display = 'none';
    const result = await response.json();
    const imageUrl = result.data[0].url;
    const outputImage = document.getElementById('outputImage');
    outputImage.innerHTML = '<img src="' + imageUrl + '">';
}