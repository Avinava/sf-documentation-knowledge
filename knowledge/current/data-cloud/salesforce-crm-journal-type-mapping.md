---
title: "Salesforce CRM: Journal Type Mapping"
domain: data-cloud
topic: salesforce-crm-journal-type-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.434Z
estimatedTokens: 259
keywords: [Salesforce, CRM, Journal, Mapping, data, mappings, DLO, found, Loyalty, Management, bundle, Connector, Cloud, categorize, transaction]
---

# Salesforce CRM: Journal Type Mapping

> These data mappings are for the Journal type DLO found in the Loyalty Management bundle
  of the Salesforce CRM Connector for Data Cloud. A journal type is used to categorize transaction
  journals based on the types of members activities for which members can be
  rewarded.

# Salesforce CRM: Journal Type Mapping

These data mappings are for the Journal type DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A journal type is used to categorize transaction journals based on the types of members activities for which members can be rewarded.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Journal type object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Loyalty Journal Type | Created Date |
| Journal Type ID | id | Loyalty Journal Type | Loyalty Journal Subtype Id |
| Last Modified Date | dateTime | Loyalty Journal Type | Last Modified Date |
| Name | string | Loyalty Journal Type | Name |
