---
title: "Salesforce CRM: Loyalty Program Badge Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-badge-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.486Z
estimatedTokens: 376
keywords: [Salesforce, CRM, Loyalty, Program, Badge, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Cloud, refers]
---

# Salesforce CRM: Loyalty Program Badge Mapping

> These data mappings are for the Loyalty Program Badge DLO found in the Loyalty
  Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to a badge assigned
  to a member as a reward for engaging with the loyalty
  program.

# Salesforce CRM: Loyalty Program Badge Mapping

These data mappings are for the Loyalty Program Badge DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to a badge assigned to a member as a reward for engaging with the loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Badge object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Status | picklist | Loyalty Program Badge | Badge Status |
| Validity Type | picklist | Loyalty Program Badge | Badge Validity Type |
| Description | string | Loyalty Program Badge | Description |
| Image | url | Loyalty Program Badge | Image URL |
| Loyalty Program ID | reference | Loyalty Program Badge | Loyalty Program |
| Loyalty Program Badge ID | id | Loyalty Program Badge | Loyalty Program Badge Id |
| Name | string | Loyalty Program Badge | Name |
| Start Date | date | Loyalty Program Badge | Start Date |
| Validity Duration | int | Loyalty Program Badge | Validity Duration |
| Validity Duration Unit | picklist | Loyalty Program Badge | Validity Duration UOM |
| Validity End Date | date | Loyalty Program Badge | Validity End Date |
