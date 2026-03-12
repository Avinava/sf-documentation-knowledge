---
title: "Import Source Input"
domain: chatterapi
topic: import-source-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:11.875Z
estimatedTokens: 374
keywords: [Import, Source, Input, Specify, product, csv, file, operation]
---

# Import Source Input

> Specify a product import .csv file for a product import operation.

# Import Source Input

Specify a product import .csv file for a product import operation.

Root XML tag

<importSource>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentVersionId | String | Upload the .csv file to Salesforce Files. To get the content version ID, view the file details in the Salesforce Files UI. The second-to-last part of the URL is the content version ID. If you upload the file using the User Files Connect API, the API response includes the content version ID. | Required if sampleData isn’t specified | 54.0 |
| sampleData | String | Sample .csv file to import. Values are:B2BSampleData—B2B sample data set.Camera—Camera store sample data set.Coffee—Coffee store sample data set.Hardware—Hardware store sample data set.NorthernTrail—Outdoor goods store sample data set.NorthernTrailLarge—Larger outdoor goods store sample data set.Simple—Two-product sample data set. | Required if contentVersionId isn’t specified | 54.0 |

#### See Also

-   [Import Configuration Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm "Configuration input for a product import operation.")

-   [*Salesforce B2B Commerce and D2C Commerce*: Import Commerce Data](https://help.salesforce.com/s/articleView?id=commerce.comm_data_import.htm&type=5&language=en_US "Salesforce B2B Commerce and D2C Commerce: Import Commerce
    Data - HTML (New Window)")

## Code Examples

```
{
   "importSource":{
      "contentVersionId":"069RM0000008F4FYAU"
   }
}
```

## Related Topics

- User Files
                        Connect API (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_general.htm)
- Import Configuration Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_import_configuration_input.htm)
