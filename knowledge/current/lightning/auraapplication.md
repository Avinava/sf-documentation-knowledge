---
title: "aura:application"
domain: lightning
topic: auraapplication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.427Z
estimatedTokens: 763
keywords: [aura, application, app, special, top-level, component, whose, markup, resource]
---

# aura:application

> An app is a special top-level component whose markup is in a
    .app
  resource.

# aura:application

An app is a special top-level component whose markup is in a .app resource.

The markup looks similar to HTML and can contain components as well as a set of supported HTML tags. The .app resource is a standalone entry point for the app and enables you to define the overall application layout, style sheets, and global JavaScript includes. It starts with the top-level <aura:application> tag, which contains optional system attributes. These system attributes tell the framework how to configure the app.

| System Attribute | Type | Description |
| --- | --- | --- |
| access | String | Indicates whether the app can be extended by another app outside of a namespace. Possible values are public (default), and global. |
| controller | String | The Apex controller class for the app. The format is namespace.myController. |
| description | String | A brief description of the app. |
| extends | Component | The app to be extended, if applicable. For example, extends="namespace:yourApp". |
| extensible | Boolean | Indicates whether the app is extensible by another app. Defaults to false. |
| implements | String | A comma-separated list of interfaces that the app implements. |
| template | Component | The name of the template used to bootstrap the loading of the framework and the app. The default value is aura:template. You can customize the template by creating your own component that extends the default template. For example:<aura:component extends="aura:template" ... > |
| tokens | String | A comma-separated list of tokens bundles for the application. For example, tokens="ns:myAppTokens". Tokens make it easy to ensure that your design is consistent, and even easier to update it as your design evolves. Define the token values once and reuse them throughout your application. |
| useAppcache | Boolean | Deprecated. Browser vendors have deprecated AppCache, so we followed their lead. Remove the useAppcache attribute in the <aura:application> tag of your standalone apps (.app resources) to avoid cross-browser support issues due to deprecation by browser vendors.If you don’t currently set useAppcache in an <aura:application> tag, you don’t have to do anything because the default value of useAppcache is false. |

aura:application also includes a body attribute defined in a <aura:attribute> tag. Attributes usually control the output or behavior of a component, but not the configuration information in system attributes.

| Attribute | Type | Description |
| --- | --- | --- |
| body | Component[] | The body of the app. In markup, this is everything in the body of the tag. |

#### See Also

-   [Creating Apps](atlas.en-us.lightning.meta/lightning/apps_intro.htm "Components are the building blocks of an app. This section shows you a typical workflow to put the pieces together to create a new app.")

-   [Application Access Control](atlas.en-us.lightning.meta/lightning/access_apps.htm "The access attribute on the aura:application tag controls whether the app can be used outside of the app’s namespace.")

## Related Topics

- Creating Apps (atlas.en-us.lightning.meta/lightning/apps_intro.htm)
- Application Access Control (atlas.en-us.lightning.meta/lightning/access_apps.htm)
