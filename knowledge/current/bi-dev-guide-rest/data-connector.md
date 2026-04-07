---
title: "Data Connector"
domain: bi-dev-guide-rest
topic: data-connector
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:10.502Z
estimatedTokens: 588
keywords: [Data, Connector, Analytics]
---

# Data Connector

> An Analytics data connector.

# Data Connector

An Analytics data connector.

Properties

DataConnector inherits properties from the abstract [BaseAssetReference](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_asset_reference.htm "The base Analytics asset."). These base properties appear in DataConnector alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| connection​Properties | Connection​Property​Value[] | The connection properties. These are name and value pairs. | Small, 39.0 | 39.0 |
| connector​Handler | Connect​Wave​Data​Connector​Handler​Enum | The connector handler associated with the Analytics connector. Valid values are:BaseLegacy | Small, 52.0 | 52.0 |
| connector​Type | Connect​Wave​Data​Connector​Type​Enum | The type of Analytics connector. Valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk. | Small, 39.0 | 39.0 |
| folder | Asset​Reference | The folder for the live connection. | Small, 49.0 | 49.0 |
| ingestion​Schedule | Schedule | Schedule for the Analytics connector data sync. | Small, 43.0 | 43.0 |
| target​Connector | Asset​Reference | The target connector associated with the current source connector. | Small, 50.0 | 50.0 |

#### See Also

-   [Data Connector Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid.htm "Returns Analytics connector properties and updates or deletes Analytics connectors.")

-   [Data Connectors List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors.htm "Returns a collection of Analytics connectors and creates an Analytics connector.")

## Related Topics

- BaseAssetReference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_asset_reference.htm)
- Connection​Property​Value (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_connection_property_value.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_schedule.htm)
- Data Connector Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid.htm)
- Data Connectors List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors.htm)
