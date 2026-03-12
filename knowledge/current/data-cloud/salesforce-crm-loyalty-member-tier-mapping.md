---
title: "Salesforce CRM: Loyalty Member Tier Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-member-tier-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.566Z
estimatedTokens: 356
keywords: [Salesforce, CRM, Loyalty, Member, Tier, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Cloud, assigned]
---

# Salesforce CRM: Loyalty Member Tier Mapping

> These data mappings are for the Loyalty Member Tier DLO found in the Loyalty Management
  bundle of the Salesforce CRM Connector for Data Cloud. A tier that is assigned to a member based
  on their engagement with the loyalty
  program.

# Salesforce CRM: Loyalty Member Tier Mapping

These data mappings are for the Loyalty Member Tier DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A tier that is assigned to a member based on their engagement with the loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Member Tier object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Change Reason Type | picklist | Loyalty Member Tier | Loyalty Member Tier Change Type |
| Created Date | dateTime | Loyalty Member Tier | Created Date |
| Effective Date | date | Loyalty Member Tier | Effective Date |
| Loyalty Member Tier ID | id | Loyalty Member Tier | Loyalty Member Tier Id |
| Last Modified Date | dateTime | Loyalty Member Tier | Last Modified Date |
| Loyalty Program Member ID | reference | Loyalty Member Tier | Loyalty Program Member |
| Loyalty Tier ID | reference | Loyalty Member Tier | Loyalty Tier |
| Reason for Change | string | Loyalty Member Tier | Tier Change Reason |
| Tier Expiration Date | date | Loyalty Member Tier | Tier Expiration Date |
