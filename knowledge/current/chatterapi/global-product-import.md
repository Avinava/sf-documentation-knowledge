---
title: "Global Product Import"
domain: chatterapi
topic: global-product-import
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.101Z
estimatedTokens: 1126
keywords: [Product, Import, job]
---

# Global Product Import

> Information about a global product import job.

# Global Product Import

Information about a global product import job.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cmsWorkspaceId | String | ID of the CMS workspace. | Medium, 57.0 | 57.0 |
| commerce​Entitlement​PolicyId | String | ID of the entitlement policy imported to. | Small, 53.0 | 53.0 |
| commerce​Entitlement​ProductsCreated | Integer | Number of entitlement products created by the import. | Small, 53.0 | 53.0 |
| contentVersionId | String | ID of the .csv file that was imported. | Small, 53.0 | 53.0 |
| endTime | Long | Unix epoch timestamp when the import finished. | Small, 53.0 | 53.0 |
| errorMessages | Map<String, String> | Map of .csv file record number to error message. | Small, 53.0 | 53.0 |
| jobId | String | ID of the import job. | Medium, 57.0 | 57.0 |
| numberError | Integer | Number of .csv records that failed to process. | Small, 53.0 | 53.0 |
| numberSuccess | Integer | Number of .csv records that processed successfully. | Small, 53.0 | 53.0 |
| numberToProcess | Integer | Number of .csv records in the data source. | Small, 53.0 | 53.0 |
| numberWarning | Integer | Number of warning messages. | Small, 56.0 | 56.0 |
| pricebookAlias​ToIdMapping | Map<String, ID> | Map of pricebook aliases to pricebook IDs. | Medium, 57.0 | 57.0 |
| pricebookEntries​Created | Integer | Number of pricebook entries created by the import. | Small, 53.0 | 53.0 |
| pricebookEntries​Updated | Integer | Number of pricebook entries updated by the import. | Small, 53.0 | 53.0 |
| processTime | Long | Unix epoch timestamp of how long the import process took. | Small, 53.0 | 53.0 |
| productAttribute​SetProducts​Created | Integer | Number of product attribute set products created by the import. | Small, 53.0 | 53.0 |
| productAttributes​Created | Integer | Number of product attributes created by the import. | Small, 53.0 | 53.0 |
| productAttributes​Updated | Integer | Number of product attributes updated by the import. | Small, 53.0 | 53.0 |
| productCatalog​Id | String | ID of the product catalog imported to. | Small, 53.0 | 53.0 |
| productCategories​Created | Integer | Number of product categories created by the import. | Small, 53.0 | 53.0 |
| productCategory​ProductsCreated | Integer | Number of product category products created by the import. | Small, 53.0 | 53.0 |
| productMedia​Created | Integer | Reserved for future use. | Medium, 53.0 | 53.0 |
| productMedia​Updated | Integer | Reserved for future use. | Medium, 53.0 | 53.0 |
| productSelling​ModelCreated | Integer | Number of product selling models created by the import. | Medium, 54.0 | 54.0 |
| productSelling​Model​OptionCreated | Integer | Number of product selling model options created by the import. | Medium, 54.0 | 54.0 |
| productsCreated | Integer | Number of products created by the import. | Small, 53.0 | 53.0 |
| productsUpdated | Integer | Number of products updated by the import. | Small, 53.0 | 53.0 |
| sampleData | String | Sample .csv file that was imported. Values are:B2BSampleData—B2B sample data set.Camera—Camera store sample data set.Coffee—Coffee store sample data set.Hardware—Hardware store sample data set.NorthernTrail—Outdoor goods store sample data set.NorthernTrailLarge—Larger outdoor goods store sample data set.Simple—Two-product sample data set. | Small, 53.0 | 53.0 |
| slugsCreated | Integer | Number of URL slugs created by the import. | Medium, 58.0 | 58.0 |
| slugsUpdated | Integer | Number of URL slugs updated by the import. | Medium, 58.0 | 58.0 |
| startTime | Long | Unix epoch timestamp when the import started. | Small, 53.0 | 53.0 |
| startedBy | String | ID of the user of who started the import. | Small, 53.0 | 53.0 |
| status | String | Status of the import. | Small, 53.0 | 53.0 |
| warningMessages | Map<String, String>> | Map of record number to associated list of warning messages. | Small, 56.0 | 56.0 |
| webstoreId | String | ID of the store imported to (if used). | Medium, 57.0 | 57.0 |

#### See Also

-   [Commerce Import Product Job, Create](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_create.htm "Create a job to asynchronously import product data using a .csv file.")

-   [Commerce Import Product Job, Manage](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_manage.htm "Cancel or get the status of a job to asynchronously import global product data using a .csv file.")

## Related Topics

- Commerce Import Product Job, Create (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_create.htm)
- Commerce Import Product Job, Manage (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_import_product_job_manage.htm)
