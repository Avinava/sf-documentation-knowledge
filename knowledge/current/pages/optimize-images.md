---
title: "Optimize Images"
domain: pages
topic: optimize-images
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.884Z
estimatedTokens: 441
keywords: [Optimize, Images, frequently, largest, components, web, they, significantly, affect, Visualforce, page’s, performance]
---

# Optimize Images

> Images are frequently the largest components of a web page, so they significantly affect
    a Visualforce page’s performance.

# Optimize Images

Images are frequently the largest components of a web page, so they significantly affect a Visualforce page’s performance.

To minimize the performance impact of images:

-   Use fewer images and smaller background textures.
-   Use CSS instead of images whenever possible.
-   Use CSS sprites instead of individual images. With CSS sprites, you can combine a collection of similarly sized graphics, such as buttons and icons, into a single file. Then you can use the CSS background-image and background-position properties to display portions of the combined image. Because this technique reduces the number of images used, the number of HTTP requests sent also decreases. It’s also more efficient to cache a sprite file than to cache multiple images.
-   Use static resources to serve images. Images served this way benefit from the caching and the content distribution network (CDN) built into Salesforce.
-   Compress images. Graphics tools often use default settings that favor visual fidelity over compression and add metadata when saving images. Image compression tools can reduce an image’s file size by up to 30% without lowering visual quality.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

To improve your development workflow, add a script that compresses image assets.

#### See Also

-   [Using Static Resources](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.")

## Related Topics

- Using Static Resources (atlas.en-us.pages.meta/pages/pages_resources.htm)
