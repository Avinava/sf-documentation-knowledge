---
title: "Salesforce CRM: Benefit Mapping"
domain: data-cloud
topic: salesforce-crm-benefit-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.063Z
keywords: [Salesforce, CRM, Benefit, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Benefit Mapping

# Salesforce CRM: Benefit Mapping

These data mappings are for the Benefit DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Benefits are offered to members of a loyalty program. Benefits can be offered to members based on their assigned tier or based on their engagement.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Benefit object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Benefit ID Date | id | Loyalty Benefit | Benefit Id |
| Benefit Name | string | Loyalty Benefit | Name |
| Benefit Type ID Date | reference | Loyalty Benefit | Loyalty Benefit Type |
| Created Date | dateTime | Loyalty Benefit | Created Date |
| Last Modified Date | dateTime | Loyalty Benefit | Last Modified Date |
| Unit of Measure ID | reference | Loyalty Benefit | Loyalty Benefit UOM |
| Value | double | Loyalty Benefit | Loyalty Benefit Value |