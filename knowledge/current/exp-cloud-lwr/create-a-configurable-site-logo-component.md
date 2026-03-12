---
title: "Create a Configurable Site Logo Component"
domain: exp-cloud-lwr
topic: create-a-configurable-site-logo-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.595Z
estimatedTokens: 427
keywords: [Configurable, Site, Logo, Component, --dxp-s-site-logo-path, --dxp-s-site-logo-url, styling, hooks, easily, add, pages, Images, tab, Theme, panel]
---

# Create a Configurable Site Logo Component

> Use the --dxp-s-site-logo-path and --dxp-s-site-logo-url global styling hooks to create an easily
    configurable site logo component that you can add to your site pages. When you update the Site
    Logo property in the Images tab of the Theme panel, the system automatically updates any
    component that references the hooks.

# Create a Configurable Site Logo Component

Use the \--dxp-s-site-logo-path and \--dxp-s-site-logo-url global styling hooks to create an easily configurable site logo component that you can add to your site pages. When you update the Site Logo property in the Images tab of the Theme panel, the system automatically updates any component that references the hooks.

## Site Logo Styling Hooks

Let’s take a closer look at the site logo \--dxp styling hooks.

-   \--dxp-s-site-logo-path stores the path to the image, which can be consumed in JavaScript and HTML.
-   \--dxp-s-site-logo-url stores the site logo path surrounded by url(.), which can be consumed in CSS properties.

For example:

```

```

This JavaScript code sample uses \--dxp-s-site-logo-path to set the image src.

```

```

This CSS code sample uses \--dxp-s-site-logo-url to set the site logo as a background image.

```

```

## The Site Logo Property in Experience Builder

The Site Logo property in Experience Builder uses Salesforce CMS images, so you must first add your LWR site as a channel in a CMS workspace in the Digital Experiences app.

Then to add an image in the Images tab of the Theme panel, you must also be a contributor in that CMS workspace. For more information, see [Salesforce CMS](https://help.salesforce.com/s/articleView?id=xcloud.community_managed_content_overview.htm&type=5&language=en_US).![The Images tab in the Theme panel](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding_images.png&folder=exp_cloud_lwr)

Finally, if the site logo is used on public pages, enable **Let guest users view asset files and CMS content available to the site** in the Administration workspace under Preferences.

## Code Examples

```
:root {
  --dxp-s-site-logo-path: "/cms/delivery/media/MCKW5KMZTF2BBFDLWWZG2MOVLLXA"
  --dxp-s-site-logo-url: url("/cms/delivery/media/MCKW5KMZTF2BBFDLWWZG2MOVLLXA")
}
```

```
const root = document.querySelector('html');
const logoPath = getComputedStyle(root).getPropertyValue('--dxp-s-site-logo-path');
const imgEl = document.createElement('img');
imgEl.src = logoPath;
```

```
.logo-container {
    background-image: var(--dxp-s-site-logo-url);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    max-width: 100%;
}
```
