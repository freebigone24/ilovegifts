document.getElementById('uploadBtn').addEventListener('click', () => {
    document.getElementById('uploadInput').click();
});

document.getElementById('uploadInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        console.log('Uploaded file:', file.name);
        // Handle the file upload
    }
});

document.getElementById('videoLink').addEventListener('paste', (event) => {
    const link = event.clipboardData.getData('text');
    console.log('Pasted link:', link);
    // Handle the pasted link
});

document.getElementById('originalLanguage').addEventListener('change', (event) => {
    console.log('Original language selected:', event.target.value);
});

document.getElementById('translationLanguage').addEventListener('change', (event) => {
    console.log('Translation language selected:', event.target.value);
});

document.getElementById('captionTemplate').addEventListener('change', (event) => {
    const preview = document.getElementById('subtitlePreview');
    preview.className = event.target.value;
    console.log('Caption template selected:', event.target.value);
});

document.getElementById('generateBtn').addEventListener('click', () => {
    const originalLanguage = document.getElementById('originalLanguage').value;
    const translationLanguage = document.getElementById('translationLanguage').value;
    const captionTemplate = document.getElementById('captionTemplate').value;
    const videoLink = document.getElementById('videoLink').value;
    const uploadInput = document.getElementById('uploadInput').files[0];

    if (!videoLink && !uploadInput) {
        alert('Please upload a video or paste a video link.');
        return;
    }

    console.log('Generating captions with the following options:');
    console.log('Original Language:', originalLanguage);
    console.log('Translation Language:', translationLanguage);
    console.log('Caption Template:', captionTemplate);
    console.log('Video Link:', videoLink);
    console.log('Uploaded File:', uploadInput ? uploadInput.name : 'No file uploaded');

    // Simulate caption generation process
    generateCaptions(originalLanguage, translationLanguage, captionTemplate, videoLink, uploadInput);
});

function generateCaptions(originalLanguage, translationLanguage, captionTemplate, videoLink, uploadInput) {
    // This is a placeholder function. Replace it with actual caption generation logic.
    console.log('Generating captions...');
    setTimeout(() => {
        alert('Captions generated successfully!');
        // Display the generated captions in the preview or download them
        document.getElementById('subtitlePreview').innerText = 'Generated captions preview here.';
    }, 2000);
}
