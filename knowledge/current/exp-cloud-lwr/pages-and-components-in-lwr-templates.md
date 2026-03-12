---
title: "Pages and Components in LWR Templates"
domain: exp-cloud-lwr
topic: pages-and-components-in-lwr-templates
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.812Z
estimatedTokens: 862
keywords: [Pages, Components, LWR, Templates, Build, Own, Microsite, Experience, Cloud, provide, essential, out-of-the-box, Site, Light, DOM]
---

# Pages and Components in LWR Templates

> The Build Your Own (LWR) and the Microsite (LWR) templates in Experience Cloud provide
    only the most essential out-of-the-box pages and components.

# Pages and Components in LWR Templates

The Build Your Own (LWR) and the Microsite (LWR) templates in Experience Cloud provide only the most essential out-of-the-box pages and components.

## Site Pages

LWR templates typically include the following template pages, so to create a working site, you often need to [create additional custom pages](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_create_pages.htm "LWR templates in Experience Cloud provide only a few key default pages, so you can create additional custom pages for your particular use case.").

-   Home
-   Error
-   Check Password
-   Forgot Password
-   Login
-   Register
-   News Detail (available in enhanced LWR sites)

## Page Components

We provide several components with LWR templates, but to accomplish your goals, you often must [create custom Lightning web components](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_components.htm "Each Lightning web component folder must include a configuration file named <component>.js-meta.xml. The configuration file defines the metadata values for the component, including the design configuration values for Experience Builder.").

For more information on the components readily available in LWR templates, see [Standard Components for LWR Templates](https://help.salesforce.com/s/articleView?id=experience.networks_byo_lwr_components.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

With LWR templates, the startURL query parameter is propagated for all login and page redirects. Also, autofill is enabled for login input fields and password manager.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=exp_cloud_lwr)

#### Warning

When you customize a login page or any page that includes fields with sensitive or confidential information with Experience Builder, we recommend that you use only standard components built by Salesforce or components that you built, customized, or vetted. Use of third-party components and code libraries on a page that includes fields with sensitive or confidential information can increase your risk for security vulnerabilities.

## Light DOM in LWR Templates and Standard Components

Before Spring ’22, standard Lightning web components in the LWR templates rendered by default in shadow DOM (Document Object Model), making it difficult to integrate third-party analytics services. Now these templates and several of their components are enabled with light DOM. In Lightning web components enabled with light DOM, you can query DOM elements from the document root, which facilitates DOM traversal. You can listen for events within these components and send the events to multiple third-party analytics services, such as Google Analytics.

To take advantage of light DOM on an existing LWR site, republish the site.

#### See Also

-   [*Lightning Web Components Developer Guide*: Light DOM](https://lwc.dev/guide/light_dom "Lightning Web Components Developer Guide: Light DOM - HTML (New Window)")

-   [*Salesforce Help*: Standard Components for Use in the Build Your Own (LWR) Template](https://help.salesforce.com/s/articleView?id=experience.networks_byo_lwr_components.htm&type=5&language=en_US "Salesforce Help: Standard Components for Use in the Build Your Own (LWR)
    Template - HTML (New Window)")

## Related Topics

- create additional custom pages (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_create_pages.htm)
- create
          custom Lightning web components (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_components.htm)
