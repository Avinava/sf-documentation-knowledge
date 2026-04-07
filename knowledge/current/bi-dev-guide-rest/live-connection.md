---
title: "Live Connection"
domain: bi-dev-guide-rest
topic: live-connection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:10.890Z
estimatedTokens: 320
keywords: [Live, Connection, Analytics, dataset]
---

# Live Connection

> The connection details of an Analytics live dataset.

# Live Connection

The connection details of an Analytics live dataset.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| connection​Label | String | The label of the live connection. | Small, 50.0 | 50.0 |
| connection​Name | String | The developer name of the live connection. | Small, 50.0 | 50.0 |
| connection​Type | Connect​Wave​Data​Connector​Type​Enum | The type of Analytics connector. Valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk. | Small, 53.0 | 53.0 |
| source​Object​Name | String | The source object name for the live connection. | Small, 50.0 | 50.0 |
