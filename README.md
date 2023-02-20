# 🚫 No Shorts!

### Removes YouTube Shorts from your YouTube experience.

## About
I decided to make this extension while on a call with one of my friends, when we started talking about how addicting YouTube Shorts is. This extension aims to help fight the YouTube Shorts addiction, by removing all aspects of Shorts from YouTube, along with redirecting away from `/shorts/` URLs.

## TODO
- [ ] Update icons to remove white border.
- [ ] Remove hard-coding of Shorts-related elements.
    - The elements being removed are hard-coded by JS selector. Ideally this would be done dynamically (somehow?)
- [ ] Get the extension on the Chrome Web Store (and Firefox if possible).
- [x] Improve the efficiency of the extension. 
    - Currently the function to remove Shorts-related elements is called on the event `DOMSubtreeModified` (which YouTube does a lot), so I feel it can be improved.

## Installation
~~[Download it on the Chrome Web Store](https://chrome.google.com/webstore/category/extensions)~~ 
<br />

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
