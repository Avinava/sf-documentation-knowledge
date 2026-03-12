---
title: "Output Data Cloud Parameters"
domain: salesforce-recipes-api
topic: output-data-cloud-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.861Z
estimatedTokens: 473
keywords: [Output, Data, Cloud, node, recipe]
---

# Output Data Cloud Parameters

> The parameters for an output Data 360 node in a recipe.

# Output Data Cloud Parameters

The parameters for an output Data 360 node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| category | Data​Object​Category | The data category for the data lake object (DLO). | Small, v60.0 | 60.0 |
| connector​Type | Connect​Wave​Data​Connector​Type​Enum | The connector type. Valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk | Small, v62.0 | 62.0 |
| dataspace | Asset​Reference | The dataspace to use in Data 360. | Small, v60.0 | DEPRECATED: min 60.0, max 64.0 |
| dataspaces | Asset​Reference[] | A list of dataspaces to use in Data 360. | Small, v65.0 | 65.0 |
| event​Time​Field | String | The event time field. | Small, v66.0 | 66.0 |
| fields​Mapping | Output​Data​Cloud​Fields​Mapping[] | The list of field mappings. | Small, v60.0 | 60.0 |
| label | String | The label of the Data 360 object. | Small, v62.0 | 62.0 |
| name | String | The name of the Data 360 object. | Small, v60.0 | 60.0 |
| primary​Key | String | The name of the primary key field for the Data 360 object. | Small, v60.0 | 60.0 |
| type | Recipe​Data​Cloud​Output​Type​Enum | The output type. Valid values are:Date​Lake​Object | Small, v60.0 | 60.0 |

## Related Topics

- Data​Object​Category (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_data_object_category.htm)
- Output​Data​Cloud​Fields​Mapping (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_output_data_cloud_fields_mapping.htm)
