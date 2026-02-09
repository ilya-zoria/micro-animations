# AI Voice Input - Standalone Version

A simplified, standalone version of the AI Voice Input component that works without any dependencies or build tools.

## Features

- ✅ Visualizer bars animation
- ✅ Timer display (MM:SS format)
- ✅ Microphone button with toggle
- ✅ Spinning animation when recording
- ✅ No dependencies - pure HTML, CSS, and JavaScript
- ✅ Works directly in the browser

## Usage

Simply open `index.html` in your web browser. No installation or build process required!

## Customization

You can customize the component by modifying the JavaScript initialization:

```javascript
const voiceInput = new AIVoiceInput({
    visualizerBars: 6,        // Number of visualizer bars
    demoMode: false,          // Enable demo mode
    demoInterval: 3000,       // Demo interval in milliseconds
    onStart: () => {
        console.log('Recording started');
    },
    onStop: (duration) => {
        console.log(`Recording stopped. Duration: ${duration} seconds`);
    }
});
```

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript
- CSS3 animations
- requestAnimationFrame API
