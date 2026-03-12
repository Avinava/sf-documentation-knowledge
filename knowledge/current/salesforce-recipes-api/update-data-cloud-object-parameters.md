---
title: "Update Data Cloud Object Parameters"
domain: salesforce-recipes-api
topic: update-data-cloud-object-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.068Z
estimatedTokens: 386
keywords: [Data, Cloud, node, recipe]
---

# Update Data Cloud Object Parameters

> The parameters for an update data cloud object node in a recipe.

# Update Data Cloud Object Parameters

The parameters for an update data cloud object node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| connector​Type | Connect​Wave​Data​Connector​Type​Enum | The connector type. Valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk | Small, v66.0 | 66.0 |
| field​Mappings | List[ Output​Data​Cloud​Fields​Mapping] | The list of the Data 360 field mappings. | Small, v66.0 | 66.0 |
| name | String | The name of the Data 360 object to update. | Small, v66.0 | 66.0 |
| operation | Operation​Enum | The update operation. Valid values are:AppendDeleteUpsert | Small, v66.0 | 66.0 |
| primary​Key | String | The name of the primary key field. | Small, v66.0 | 66.0 |
| type | Recipe​Data​Cloud​Output​Type​Enum | The output type. Valid values are:Date​Lake​Object | Small, v66.0 | 66.0 |

## Related Topics

- Output​Data​Cloud​Fields​Mapping (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_output_data_cloud_fields_mapping.htm)
