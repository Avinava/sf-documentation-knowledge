---
title: "CRM Analytics in Apex"
domain: bi-dev-guide-sdk
topic: crm-analytics-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.851Z
estimatedTokens: 472
keywords: [CRM, Analytics, Apex, Build, execute, queries, retrieve, lens, template, data, classes, Resources]
---

# CRM Analytics in Apex

> Build and execute queries and retrieve lens and template data using CRM Analytics Apex
    classes and methods.

# CRM Analytics in Apex

Build and execute queries and retrieve lens and template data using CRM Analytics Apex classes and methods.

CRM Analytics in Apex currently consists of the executeQuery method, the Wave.QueryBuilder class, and the Wave.Lenses class.

ConnectApi.Wave.executeQuery

Use the executeQuery function (exposed through the ConnectApi namespace) to pass a SAQL query from an Apex page to CRM Analytics, and get a response in the form of JSON.

Wave.QueryBuilder

The QueryBuilder class is the most convenient, preferred, and safest way to construct a SAQL query string for execution.

Wave.Lenses

Retrieve a collection of CRM Analytics lens assets and describe a single lens asset.

Wave.Templates

Retrieve a collection of CRM Analytics templates, describe a single template and template configuration.

## Resources

For more information on using Apex, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_reference.htm).

-   **[CRM Analytics Apex Lens](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_lens.htm)**
    Use the Lenses class to retrieve a collection of CRM Analytics lens assets and to describe a single lens asset.
-   **[CRM Analytics Apex Query](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm)**
    Query your data in CRM Analytics from any Apex class. Construct well-formed queries using the query builder.
-   **[CRM Analytics Apex QueryBuilder Examples](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_examples.htm)**
    Build simple or complex SAQL queries using QueryBuilder.
-   **[CRM Analytics Apex Templates](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm)**
    Use the Templates class to retrieve a collection of CRM Analytics templates, describe a single template and template configuration.

## Related Topics

- CRM Analytics Apex Lens (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_lens.htm)
- CRM Analytics Apex Query (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm)
- CRM Analytics Apex QueryBuilder Examples (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_examples.htm)
- CRM Analytics Apex Templates (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm)
