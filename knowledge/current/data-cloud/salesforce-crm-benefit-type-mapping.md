---
title: "Salesforce CRM: Benefit Type Mapping"
domain: data-cloud
topic: salesforce-crm-benefit-type-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.066Z
keywords: [Salesforce, CRM, Benefit, Type, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Benefit Type Mapping

# Salesforce CRM: Benefit Type Mapping

These data mappings are for the Benefit DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A benefit type is used to categorize benefits that are offered to members of the loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Benefit Type object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Benefit Type ID | id | Loyalty Benefit Type | Benefit Type Id |
| Benefit Type Name | string | Loyalty Benefit Type | Name |
| Category | picklist | Loyalty Benefit Type | Loyalty Benefit Category |
| Created Date | dateTime | Loyalty Benefit Type | Created Date |
| Last Modified Date | dateTime | Loyalty Benefit Type | Last Modified Date |
| Loyalty Program ID | reference | Loyalty Benefit Type | Loyalty Program |