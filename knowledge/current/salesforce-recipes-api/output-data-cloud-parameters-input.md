---
title: "Output Data Cloud Parameters Input"
domain: salesforce-recipes-api
topic: output-data-cloud-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:18.496Z
estimatedTokens: 471
keywords: [Cloud, node, recipe]
---

> The parameters for an output Data 360 node in a recipe.

# Output Data Cloud Parameters Input

The parameters for an output Data 360 node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| category | Data​Object​Category​Input | The data category for the data lake object (DLO). | Required | 60.0 |
| connector​Type | Connect​Wave​Data​Connector​Type​Enum | The output connector type. Valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk | Required | 60.0 |
| dataspace | Asset​Reference​Input | The dataspace to use in Data 360. | Required | DEPRECATED: min 60.0, max 64.0 |
| dataspaces | Asset​Reference​Input[] | A list of dataspaces to use in Data 360. | Required | 60.0 |
| event​Time​Field | String | The event time field. | Optional | 66.0 |
| fields​Mapping | Output​Data​Cloud​Fields​Mapping​Input[] | The list of field mappings. | Required | 60.0 |
| label | String | The label of the Data 360 object. | Required | 60.0 |
| name | String | The name of the Data 360 object. | Required | 60.0 |
| primary​Key | String | The name of the primary key field for the Data 360 object. | Required | 60.0 |
| type | Recipe​Data​Cloud​Output​Type​Enum | The output type. Valid values are:Date​Lake​Object | Required | 60.0 |

## Related Topics

- Data​Object​Category​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_data_object_category_input.htm)
- Output​Data​Cloud​Fields​Mapping​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_output_data_cloud_fields_mapping_input.htm)
