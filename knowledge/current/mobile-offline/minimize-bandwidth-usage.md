---
title: "Minimize Bandwidth Usage"
domain: mobile-offline
topic: minimize-bandwidth-usage
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:57.182Z
estimatedTokens: 1224
keywords: [Minimize, Bandwidth, Usage, Since, mobile, users, network, constraints, consider, devices, building, components, CSS, JavaScript, Libraries]
---

# Minimize Bandwidth Usage

> Since mobile users have network constraints, consider bandwidth on mobile devices when
    building your components.

# Minimize Bandwidth Usage

Since mobile users have network constraints, consider bandwidth on mobile devices when building your components.

## Minimize CSS and JavaScript Libraries

Having many CSS and JavaScript resources can impact loading time. To improve load time, minimize your CSS and JavaScript libraries. Remove comments and whitespace, and compress the resources before you upload your files as static resources. Images and other assets served this way benefit from the caching and content distribution network (CDN) built into Salesforce. See [Access Static Resources](https://developer.salesforce.com/docs/platform/lwc/guide/create-resources.html "HTML (New Window)").

A Lightning web component’s JavaScript file can have a maximum file size of 128 KB (131,072 bytes). To work with third-party JavaScript libraries, consider building custom versions of JavaScript libraries with only the functions you need. Many open-source JavaScript libraries provide this option, which substantially reduces the file size. See [Use Third-Party JavaScript Libraries](https://developer.salesforce.com/docs/platform/lwc/guide/js-third-party-library.html "HTML (New Window)").

## Reduce Image Size

Loading large or high-resolution image files can significantly affect performance. Use fewer images and smaller background textures, and use CSS instead of images when possible. If you must work with multiple or large images, reduce image download size by compressing image files 10–30% using image compression tools.

Consider using CSS sprites instead of individual images. CSS sprites combine a group of similarly sized graphics, such as buttons and icons, into a single file. To display parts of the combined image, use the CSS background-image and background-position properties. Reducing the number of image files used minimizes the number of HTTP requests. Also, the combined sprite file of images is easily cached, and therefore more performant for all devices.

Prioritize vector graphics, also known as SVG images, as they are often smaller in file size, and scale efficiently at any screen sizes. To use a raster image, such as a JPEG or PNG file, follow general responsive design guidelines and consider provisioning raster images only for high-resolution screens. Check the screen resolution for the devices you plan to support. Prepare an image for various resolutions and serve the best quality image corresponding to the screen size. See [Use SVG Resources](https://developer.salesforce.com/docs/platform/lwc/guide/use-svg-in-component.html "HTML (New Window)").

Additionally, Salesforce generates thumbnails for images uploaded locally from the mobile device through the Lightning Data Service (LDS). Both the thumbnail and full-size images are cached after creation. Generating thumbnails locally improves performance for draft images, as it avoids fetching them from the server. Thumbnail generation is supported offline for locally uploaded images.

## Follow General Development and Offline Management Best Practices

To improve overall bandwidth usage, follow development best practices. Present a simple landing page to your mobile users and link to more complex components or pages later. Similarly, lazy load the page to allow basic HTML to load first before loading custom libraries.

Since mobile connectivity issues are common, we recommend that your app handles offline scenarios gracefully. Offline access is available in Salesforce for Android and iOS. When you cache data to make it available offline, mobile users get better overall performance and faster access to previously accessed records. See [Enable Offline Access and Offline Edit for the Salesforce Mobile App](https://help.salesforce.com/articleView?id=salesforce_app_enable_offline_access.htm&language=en_US "HTML (New Window)"). If you build a custom mobile app using the Mobile SDK, consider storing and synchronizing data for offline use. See [Offline Management](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/offline_management.htm "HTML (New Window)").

We recommend following the [Lightning Design System design guidelines](https://lightningdesignsystem.com/guidelines/overview/ "HTML (New Window)") for a consistent experience. When you expect a noticeable lag when loading a page, use loading indicators, such as a spinner ([lightning-spinner](https://developer.salesforce.com/docs/component-library/bundle/lightning-spinner "HTML (New Window)")) or another animated SVG or GIF image. Use lightweight stencils when data takes longer than 300 ms to retrieve. See [Loading](https://lightningdesignsystem.com/guidelines/loading/ "HTML (New Window)") in the SLDS Design Guidelines.

#### See Also

-   [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images "MDN: Responsive Images - HTML (New Window)")
