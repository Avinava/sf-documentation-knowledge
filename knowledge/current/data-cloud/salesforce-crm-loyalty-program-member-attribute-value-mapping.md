---
title: "Salesforce CRM: Loyalty Program Member Attribute Value Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-member-attribute-value-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.515Z
estimatedTokens: 463
keywords: [Salesforce, CRM, Loyalty, Program, Member, Attribute, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Cloud]
---

# Salesforce CRM: Loyalty Program Member Attribute Value Mapping

> These data mappings are for the Loyalty Program Member Attribute Value DLO found in the
  Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data refers to the
  value achieved by a loyalty program member for an engagement attribute. A member’s progress
  towards the target for an engagement attribute is tracked across periods or for individual
  periods.

# Salesforce CRM: Loyalty Program Member Attribute Value Mapping

These data mappings are for the Loyalty Program Member Attribute Value DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data refers to the value achieved by a loyalty program member for an engagement attribute. A member’s progress towards the target for an engagement attribute is tracked across periods or for individual periods.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Member Attribute Value object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Cumulative Value | double | Loyalty Program Member Attribute Value | Cumulative Value |
| Current Value | string | Loyalty Program Member Attribute Value | Current Value |
| End Date | date | Loyalty Program Member Attribute Value | End Date |
| LastResetDate | date | Loyalty Program Member Attribute Value | Last Reset Date |
| Loyalty Program Member Attribute Value ID | id | Loyalty Program Member Attribute Value | Loyalty Pgm Member Attribute Value Id |
| Loyalty Program Engagement Attribute ID | reference | Loyalty Program Member Attribute Value | Loyalty Program Engagement Attribute |
| Loyalty Program Member ID | reference | Loyalty Program Member Attribute Value | Loyalty Program Member |
| Name | string | Loyalty Program Member Attribute Value | Name |
| Reset Count | int | Loyalty Program Member Attribute Value | Reset Count |
| Start Date | date | Loyalty Program Member Attribute Value | Start Date |
