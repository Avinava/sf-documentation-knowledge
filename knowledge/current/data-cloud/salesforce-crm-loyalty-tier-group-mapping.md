---
title: "Salesforce CRM: Loyalty Tier Group Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-tier-group-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.247Z
keywords: [Salesforce, CRM, Loyalty, Tier, Group, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Loyalty Tier Group Mapping

# Salesforce CRM: Loyalty Tier Group Mapping

These data mappings are for the Loyalty Tier Group DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A tier group consists of a set of tiers that can be assigned to members based on their engagement with the loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Tier Group object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Loyalty Tier Group | Created Date |
| Extend Expiration | picklist | Loyalty Tier Group | Is Extended To End Of Month |
| Loyalty Tier Group ID | id | Loyalty Tier Group | Loyalty Tier Group Id |
| Active | boolean | Loyalty Tier Group | Is Active |
| Primary | boolean | Loyalty Tier Group | Is Primary |
| Last Modified Date | dateTime | Loyalty Tier Group | Last Modified Date |
| Loyalty Program ID | reference | Loyalty Tier Group | Loyalty Program |
| Qualifying Points Reset Date | date | Loyalty Tier Group | Qualifying Points Reset Date |
| Qualifying Points Reset Frequency | int | Loyalty Tier Group | Qualifying Points Reset Frequency |
| Qualifying Points Reset Period | picklist | Loyalty Tier Group | Qualifying Points Reset Period |
| Tier Period Unit | picklist | Loyalty Tier Group | Tier Period Time UOM |
| Tier Period Quantity | int | Loyalty Tier Group | Tier Period Quantity |
| Tier Model | picklist | Loyalty Tier Group | Loyalty Tier Model |
| Tier Group Name | string | Loyalty Tier Group | Name |