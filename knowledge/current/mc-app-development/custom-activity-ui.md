---
title: "Custom Activity UI"
domain: mc-app-development
topic: custom-activity-ui
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.995Z
estimatedTokens: 405
keywords: [Custom, Activity, web, applications, build, according, specifications, Journey, Builder, recognizes, recommendations, implement, app's, file, structure]
---

# Custom Activity UI

> A custom activity is web applications that you build according to specifications that Journey Builder recognizes. Using these recommendations, you can implement your app's file structure according to your preferences and business needs.

# Custom Activity UI

For simplicity, the documentation mostly refers to custom activities. In Journey Builder, custom events and custom activities use the same framework, so building either object follows the same structure. For event-specific instructions, see Considerations for Building Custom Activities.

A custom activity is web applications that you build according to specifications that Journey Builder recognizes. Using these recommendations, you can implement your app's file structure according to your preferences and business needs.

## Recommended File Structure

-   {endpoint-URL}/ This file is the endpoint URL of the activity as defined in the Journey Builder component of your installed package.
    -   index.html (required) - This file does not have to be a sublevel of the endpoint. This file is the default assumption when not including an overridden path.
    -   [config.json](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-config.htm) (required)
    -   customActivity.js (required) - This file does not have to be a sublevel of the endpoint. This file is the default assumption when not including an overridden path. You can use any name for this value, and you can embed this value in script within the index.html file.
-   {endpoint-URL}/js/ (required) Provide the jQuery separately when not using the FuelUX 2 Loader.
    -   require.js - May load from CDN
    -   jquery.min.js - May load from CDN
    -   postmonger.js (required) - Available on GitHub
-   {endpoint-URL}/images/ Refer to the icon specifications for your icon image.
    -   icon.png

## Related Topics

- config.json (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-config.htm)
