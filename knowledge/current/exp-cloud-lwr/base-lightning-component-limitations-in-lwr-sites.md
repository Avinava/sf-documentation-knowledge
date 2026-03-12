---
title: "Base Lightning Component Limitations in LWR Sites"
domain: exp-cloud-lwr
topic: base-lightning-component-limitations-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.685Z
estimatedTokens: 316
keywords: [Base, Lightning, Component, Limitations, LWR, Sites, Experience, Cloud, components, Library, there]
---

# Base Lightning Component Limitations in LWR Sites

> In LWR sites for Experience Cloud, you can use most of the components in the Lightning
    Component Library, but there are some limitations.

# Base Lightning Component Limitations in LWR Sites

In LWR sites for Experience Cloud, you can use most of the components in the Lightning Component Library, but there are some limitations.

The lightning-input-field component (including when it’s used within another component):

-   Doesn’t support lookup search in LWR sites viewed on desktop computer
-   Is unsupported in LWR sites viewed on mobile devices

These components and events are unsupported:

-   lightning-emp-api
-   lightningsnapin components
-   platform-show-toast-event, but you can use [toast-container](https://developer.salesforce.com/docs/component-library/bundle/lightning-toast-container/documentation "HTML (New Window)")

These features are unsupported:

-   Opening files, as described in [Open Files](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_open_files "HTML (New Window)") in the Lightning Web Components Developer Guide
-   Using panels or modals

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

See an example of lightning-messageService in codeSamples/messageService in the [code sample files](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm#code_sample).

## Related Topics

- code
          sample files (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm)
