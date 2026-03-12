---
title: "Salesforce CRM: Loyalty Program Member Badge Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-member-badge-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.519Z
estimatedTokens: 337
keywords: [Salesforce, CRM, Loyalty, Program, Member, Badge, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Cloud]
---

# Salesforce CRM: Loyalty Program Member Badge Mapping

> These data mappings are for the Loyalty Program Member Badge DLO found in the Loyalty
  Management bundle of the Salesforce CRM Connector for Data Cloud. This data includes information
  about a badge assigned to a member as a reward for engaging with the loyalty
  program.

# Salesforce CRM: Loyalty Program Member Badge Mapping

These data mappings are for the Loyalty Program Member Badge DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data includes information about a badge assigned to a member as a reward for engaging with the loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Member Badge object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| End Date | date | Loyalty Program Member Badge | End Date |
| Loyalty Program Badge ID | reference | Loyalty Program Member Badge | Loyalty Program Badge |
| Loyalty Program Member ID | reference | Loyalty Program Member Badge | Loyalty Program Member |
| Loyalty Program Member Badge ID | id | Loyalty Program Member Badge | Loyalty Program Member Badge Id |
| Reason | string | Loyalty Program Member Badge | Reason |
| Start Date | date | Loyalty Program Member Badge | Start Date |
| Status | picklist | Loyalty Program Member Badge | Status |
