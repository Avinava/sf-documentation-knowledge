---
title: "Head Markup in LWR Sites"
domain: exp-cloud-lwr
topic: head-markup-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.796Z
estimatedTokens: 815
keywords: [Head, Markup, LWR, Sites, Experience, Cloud, control, over, included, Now, open, window, access]
---

# Head Markup in LWR Sites

> With LWR sites in Experience Cloud, you have complete control over the head markup
  included on the page. Now, when you open the Head Markup window, you can access this default
  markup.

# Head Markup in LWR Sites

With LWR sites in Experience Cloud, you have complete control over the head markup included on the page. Now, when you open the Head Markup window, you can access this default markup.

```

```

In Aura sites, this markup isn’t exposed in the Head Markup window, but with LWR sites, you can edit:

-   The meta charset tag, which specifies the character set to use. This specification is a best practice.
-   The title tag, which controls the default title of your site that appears in the browser tab.
-   Links to the default style sheets that control the site’s appearance. One link is for Salesforce Lightning Design System (SLDS) and the others are internal style sheets used by the base template. Although you can’t edit the style sheets directly, you can [remove them](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_remove.htm "If necessary, you can remove Salesforce Lightning Design System (SLDS) from your site.").

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

You can also use this section to include global JavaScript from third-party libraries using the [<x-oasis-script>](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_privileged_script.htm "Some components within an LWR site encapsulate their elements in shadow DOM, which prevents global interaction with those components. As a result, third-party JavaScript libraries such as Google Analytics and Google Tag Manager can have trouble querying the DOM globally on an LWR site. When programmatic access to an element within the DOM is needed, you can write scripts within an <x-oasis-script> privileged script tag. Loading third-party libraries using this privileged script tag lets those libraries bypass any shadow DOM boundaries.") privileged script tag.

You can use the { basePath } and { versionKey } variable references in your head markup as you want. For example, if your site URL is https://site.acme.com/service, then { basePath } returns service, which allows you to reference relative URLs.

{ versionKey } is a unique id that’s used to refer to a current published state, which you can use for caching and performance purposes. Every time the site is republished, the versionKey changes.

#### See Also

-   [Integrate Third-Party Libraries Using the Privileged Script Tag](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_privileged_script.htm "Some components within an LWR site encapsulate their elements in shadow DOM, which prevents global interaction with those components. As a result, third-party JavaScript libraries such as Google Analytics and Google Tag Manager can have trouble querying the DOM globally on an LWR site. When programmatic access to an element within the DOM is needed, you can write scripts within an <x-oasis-script> privileged script tag. Loading third-party libraries using this privileged script tag lets those libraries bypass any shadow DOM boundaries.")

-   [*Salesforce Help*: Add Markup to the Page <head> to Customize Your Site](https://help.salesforce.com/articleView?id=experience.community_builder_page_head.htm&type=5&language=en_US "Salesforce Help: Add Markup to the Page <head> to Customize Your
    Site - HTML (New Window)")

## Code Examples

```
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Welcome to LWC Communities!</title>

<link rel="stylesheet" href="{ basePath }/assets/styles/styles.css?{ versionKey }" />

<!-- webruntime-branding-shared stylesheets -->
<link rel="stylesheet" href="{ basePath }/assets/styles/salesforce-lightning-design-system.min.css?{ versionKey }" />
<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-site-spacing-styling-hooks.min.css?{ versionKey }" />
<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-styling-hooks.min.css?{ versionKey }" />
<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-slds-extensions.min.css?{ versionKey }" />
<!-- webruntime-branding-shared stylesheets -->
```

## Related Topics

- remove
      them (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_remove.htm)
- <x-oasis-script> (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_privileged_script.htm)
- Integrate Third-Party Libraries Using the Privileged Script Tag (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_privileged_script.htm)
