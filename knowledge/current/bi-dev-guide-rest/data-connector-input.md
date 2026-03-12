---
title: "Data Connector Input"
domain: bi-dev-guide-rest
topic: data-connector-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.719Z
estimatedTokens: 594
keywords: [Data, Connector, Input, Analytics]
---

# Data Connector Input

> An Analytics data connector.

# Data Connector Input

An Analytics data connector.

Properties

DataConnectorInput inherits properties from the abstract [BaseAssetInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm "The base Analytics asset input."). These base properties appear in DataConnectorInput alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| connection​Properties | Data​Connector​Property​Input[] | The list of connection properties for the Analytics connector. | Required for POST and PATCH (can be an empty list) | 39.0 |
| connector​Type | Connect​Wave​Data​Connector​Type​Enum | For a full list of the data connector types, see the enum description. | Required for POST; Not allowed to edit in PATCH | 39.0 |
| connector​Handler | Connect​Wave​Data​Connector​Handler​Enum | The type of Analytics connector. Valid values are:Amazon​AthenaAmazon​Redshift​OutputAmazon​S3Amazon​S3​OutputAmazon​S3​PrivateAws​Rds​Aurora​My​SQLAws​Rds​Aurora​PostgresAws​Rds​Maria​DBAws​Rds​My​SQLAws​Rds​PostgresAws​Rds​Sql​ServerAzure​Data​Lake​Gen2​OutputAzure​Sql​DatabaseAzure​Sql​DatawarehouseDatabricks (Beta)Google​Analytics​4Google​Big​QueryGoogle​Big​Query​DirectGoogle​Big​Query​Standard​SQLGoogle​SpannerHeroku​PostgresHub​SpotMarketoV2Net​SuiteOracle​EloquaRedshiftRedshift​PrivateSalesforce​ExternalSalesforce​Marketing​Cloud​OAuth2Sap​Hana​CloudSfdc​LocalSnowflake​ComputingSnowflake​DirectSnowflake​OutputSnowflake​PrivateSnowflake​Private​OutputTableau​OnlineTableau​Hyper​OutputZendesk. | Required for POST; Not allowed to edit in PATCH | 52.0 |
| folder | Asset​Reference​Input | The folder for the live connector. | Optional | 49.0 |
| target​Connector | Asset​Reference​Input | The target connector associated with the current source connector. | Optional | 50.0 |

#### See Also

-   [Data Connector Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid.htm "Returns Analytics connector properties and updates or deletes Analytics connectors.")

-   [Data Connectors List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid.htm "Returns Analytics connector properties and updates or deletes Analytics connectors.")

## Related Topics

- BaseAssetInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm)
- Data​Connector​Property​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_property_input.htm)
- enum description (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_dev_guide_rest_enums.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Data Connector Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid.htm)
- Data Connectors List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid.htm)
