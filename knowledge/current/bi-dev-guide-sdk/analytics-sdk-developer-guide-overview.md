---
title: "Analytics SDK Developer Guide Overview"
domain: bi-dev-guide-sdk
topic: analytics-sdk-developer-guide-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:06.897Z
estimatedTokens: 1280
keywords: [Analytics, SDK, Developer, features, embed, CRM, functionality, directly, users, work, everyday, having, transition, Lightning, Experience]
---

# Analytics SDK Developer Guide Overview

> Use the Analytics SDK features to embed CRM Analytics functionality directly where your
    users work everyday, without having to transition between Lightning Experience and CRM Analytics
    Studio. The Analytics SDK lets you communicate and interact with CRM Analytics assets from
    Lightning Apps, Lightning Web Components, Apex, Visualforce, and more. You can create one
    cohesive experience powered by CRM Analytics features directly in Salesforce pages and
    apps.

# Analytics SDK Developer Guide Overview

Use the Analytics SDK features to embed CRM Analytics functionality directly where your users work everyday, without having to transition between Lightning Experience and CRM Analytics Studio. The Analytics SDK lets you communicate and interact with CRM Analytics assets from Lightning Apps, Lightning Web Components, Apex, Visualforce, and more. You can create one cohesive experience powered by CRM Analytics features directly in Salesforce pages and apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_sdk)

#### Important

The CRM Analytics SDK and all its components require the purchase of CRM Analytics Platform licenses.

## CRM Analytics Lightning Web Components

Are you ready to use the power of CRM Analytics directly inside Lightning Experience and create your own custom CRM Analytics functionality? By using theCRM Analytics Lightning Web Components, you can access the power of REST APIs to retrieve collections of CRM Analytics data assets, execute queries and schedule data syncs for recipes and dataflows.

## CRM Analytics Assets SDK Aura Component

Use the CRM Analytics <wave:sdk> Aura Component to retrieve collections of CRM Analytics assets, such as dashboards, lenses, and datasets and describe the details of individual assets. Then, customize the display of the results via a Lightning Component controller. You can also create dynamic SAQL queries against your CRM Analytics data to display runtime results.

## CRM Analytics Templates SDK Aura Component

You have great apps, and you’re creating app templates to copy or distribute those apps. And you might even be using the REST APIs to work with templates and folders.

By using the CRM Analytics <wave:sdk> Aura Component template methods, your application can do many of the same things from a Lightning Component controller.

## CRM Analytics Aura Events

Would you like your application to communicate with your CRM Analytics dashboards, whether your application is built with the Lightning SDK, Visualforce, or mobile? How about from an application outside of Salesforce? Wouldn’t it be great if your application could apply filters or know about dashboard selections and filters made by a user?

Your application could take actions specific for your business when values fall outside of defined ranges. Or you could have an application that is a viewpoint for dashboards made available by different parts of your business application ecosystem. Imagine that: a single information source to present to your executive staff!

The CRM Analytics Aura events are the foundation for a new way of thinking about CRM Analytics applications. Coupled with the [Lightning Locker](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/security_code.htm), you can even code your application outside of Salesforce—you can interact with CRM Analytics from any JavaScript application.

## CRM Analytics in Apex

Is your company one of the gazillion using custom code in Apex, the server-side programming language for Lightning Platform? Would you like it to be easier to query data in CRM Analytics directly from your Apex code? Say hello to the CRM Analytics in Apex features.

CRM Analytics in Apex lets developers build well-formed SAQL queries and execute them in the security context of the logged-in user, ensuring that security settings are honored. API versioning is supported to avoid breaking applications as the feature set evolves. Use Wave.Lenses to list and describe CRM Analytics lens assets. CRM Analytics also offers Wave.InvalidParameterException to help catch bad values supplied to the class methods.

-   **[CRM Analytics Lightning Web Components](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_lwc.htm)**
    Use CRM Analytics Lightning Web Components to retrieve data and metadata for CRM Analytics assets, execute queries, and schedule data syncs for recipes, dataflows, and data connectors.
-   **[CRM Analytics Assets SDK Aura Component](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)**
    Discover CRM Analytics dashboards, lenses and datasets, get their details, and dig into dataset fields. Discover dashboard saved views and explore dashboard state. Create and execute queries directly on datasets
-   **[CRM Analytics Template SDK Aura Component](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)**
    Discover CRM Analytics templates and apps created from them. Create, update, and delete CRM Analytics apps created from templates.
-   **[CRM Analytics Aura Events](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web.htm)**
    Easily interact with the embedded CRM Analytics Dashboard component in custom applications. Use Aura Events for Lightning Apps, Visualforce, or your preferred development environment.
-   **[CRM Analytics in Apex](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex.htm)**
    Build and execute queries and retrieve lens and template data using CRM Analytics Apex classes and methods.

## Related Topics

- CRM Analytics Lightning Web Components (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_lwc.htm)
- CRM Analytics Assets SDK Aura Component (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)
- CRM Analytics Template SDK Aura Component (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
- CRM Analytics Aura Events (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web.htm)
- CRM Analytics in Apex (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex.htm)
