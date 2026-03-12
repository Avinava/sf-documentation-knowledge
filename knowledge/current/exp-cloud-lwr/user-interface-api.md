---
title: "User Interface API"
domain: exp-cloud-lwr
topic: user-interface-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.683Z
estimatedTokens: 355
keywords: [User, API, Salesforce, record, data, Lightning, web, component, LWR, sites, don’t, require, anything, special, developing]
---

# User Interface API

> User Interface API allows you to get Salesforce record data into your Lightning web
    component. LWR sites don’t require anything special when developing your Lightning web
    components with User Interface API.

# User Interface API

User Interface API allows you to get Salesforce record data into your Lightning web component. LWR sites don’t require anything special when developing your Lightning web components with User Interface API.

To learn more, check out the following topics in the Lightning Web Components Developer Guide.

-   [Use the Wire Service to Get Data](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.data_wire_service "HTML (New Window)")
-   [lightning/ui\*Api Wire Adapters and Functions](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.reference_ui_api "HTML (New Window)")

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

If your site is public or includes public pages, make sure that you also enable the following settings in the Administration workspace under Preferences.

-   **Allow guest users to access public APIs**

    Lets guest users access any Lightning web components that use the User Interface API, in addition to the API access that it already provides. Enable this setting to give guest users access to Salesforce CMS and record detail pages, such as Knowledge detail pages.


-   **Let guest users view asset files, library files, and CMS content available to the site**

    Lets guest users access Lightning web components that use @salesforce/contentAssetUrl.
