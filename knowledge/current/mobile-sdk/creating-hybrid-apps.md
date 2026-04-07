---
title: "Creating Hybrid Apps"
domain: mobile-sdk
topic: creating-hybrid-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.744Z
estimatedTokens: 457
keywords: [Creating, Hybrid, Apps, combine, ease, HTML5, Web, app, development, power, features, native, platform, They, run]
---

# Creating Hybrid Apps

> Hybrid apps combine the ease of HTML5 Web app development with the power
      and features of the native platform. They run within a Salesforce mobile container—a
      native layer that translates the app into device-specific code—and define their
      functionality in HTML5 and JavaScript files.

# Creating Hybrid Apps

Hybrid apps combine the ease of HTML5 Web app development with the power and features of the native platform. They run within a Salesforce mobile container—a native layer that translates the app into device-specific code—and define their functionality in HTML5 and JavaScript files. These apps fall into one of two categories:

-   **Hybrid local**—Hybrid apps developed with the force.js library wrap a Web app inside the mobile container. These apps store their HTML, JavaScript, and CSS files on the device.
-   **Hybrid remote** — Hybrid apps developed with Visualforce technology deliver Apex pages through the mobile container. These apps store some or all of their HTML, JavaScript, and CSS files either on the Salesforce server or on the device (at http://localhost).

In addition to providing HTML and JavaScript code, you also must maintain a minimal container app for your target platform. These apps are little more than native templates that you configure as necessary.

If you’re creating libraries or sample apps for use by other developers, we recommend posting your public modules in a version-controlled online repository such as GitHub ([https://github.com](https://github.com/ "HTML (New Window)")). For smaller examples such as snippets, GitHub provides *gist*, a low-overhead code sharing forum ([https://gist.github.com](https://gist.github.com/ "HTML (New Window)")).

#### See Also

-   [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.")

## Related Topics

- Updating Apps (5.0 and Later) Apps (5.0 and Later) (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm)
