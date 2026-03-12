---
title: "Webstore Settings Input"
domain: chatterapi
topic: webstore-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:13.027Z
estimatedTokens: 345
keywords: [Webstore, Settings, Input, associate, asynchronous, product, import, job]
---

# Webstore Settings Input

> ID of a webstore to associate with an asynchronous product import
      job.

# Webstore Settings Input

ID of a webstore to associate with an asynchronous product import job.

Root XML tag

<webstoreSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| webstoreId | String | ID of the webstore. | Required | 57.0 |

#### See Also

-   [Commerce Import Product Job, Create](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_create.htm "Create a job to asynchronously import product data using a .csv file.")

-   [Import Settings Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_settings_input.htm "Import settings applicable to all product rows in a product import .csv file.")

-   [Import Configuration Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm "Configuration input for a product import operation.")

-   [Global Product Import Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_global_product_import_input.htm "Configuration for an asynchronous global product import job.")

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce
    Data - HTML (New Window)")

## Code Examples

```
{
  "webstoreId":"webstore_id"
}
```

## Related Topics

- Commerce Import Product Job, Create (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_create.htm)
- Import Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_settings_input.htm)
- Import Configuration Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm)
- Global Product Import Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_global_product_import_input.htm)
