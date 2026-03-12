---
title: "Data Connector Type"
domain: bi-dev-guide-rest
topic: data-connector-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.194Z
estimatedTokens: 543
keywords: [Data, Connector, Analytics]
---

# Data Connector Type

> An Analytics data connector type.

# Data Connector Type

An Analytics data connector type.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| advanced​Properties | Advanced​Property[] | The advanced properties of the Analytics connector type. | Small, 45.0 | 45.0 |
| associated​Categories | Connect​Wave​Connector​Category​Enum | The categories that the data connector belongs to. Valid values are:Advanced​Properties​SupportBatch​ReadDirectFile​BasedFilter​SupportOutputPrivate | Small, 49.0 | 49.0 |
| bundle | Connect​Wave​Data​Connector​Bundle​Enum | The bundle type that the data connector belongs to. Valid values are:AmazonRedshiftAmazonS3AzureCdpSalesforceSnowflakeTableau | Small, 53.0 | 53.0 |
| connection​Properties | Connection​Property[] | The connection properties of the Analytics connector type. | Small, 39.0 | 39.0 |
| isExternal | Boolean | Indicates whether the Analytics connector type is external (true) or internal (false). | Small, 39.0 | 39.0 |
| label | String | The label of the Analytics connector type. | Small, 39.0 | 39.0 |
| name | String | The name of the Analytics connector type. | Small, 39.0 | 39.0 |
| supported​Connector​Handlers | Connect​Wave​Data​Connector​Handler​Enum[] | The list of supported connector handlers for the Analytics connector type. Valid values are:BaseLegacy | Small, 52.0 | 52.0 |
| type | Connect​Wave​Data​Connector​Type​Enum | The type of Analytics connector. Valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk. | Small, 39.0 | 39.0 |

## Related Topics

- Advanced​Property (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_advanced_property.htm)
- Connection​Property (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_connection_property.htm)
