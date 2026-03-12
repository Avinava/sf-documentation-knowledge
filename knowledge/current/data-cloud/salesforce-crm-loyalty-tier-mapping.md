---
title: "Salesforce CRM: Loyalty Tier Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-tier-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.539Z
estimatedTokens: 277
keywords: [Salesforce, CRM, Loyalty, Tier, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Cloud, Tiers, categorize]
---

# Salesforce CRM: Loyalty Tier Mapping

> These data mappings are for the Loyalty Tier DLO found in the Loyalty Management bundle
  of the Salesforce CRM Connector for Data Cloud. Tiers are used to categorize members based on
  their engagement with the loyalty program. The rewards and benefits offered to members can differ
  based on their assigned tier.
  ...

# Salesforce CRM: Loyalty Tier Mapping

These data mappings are for the Loyalty Tier DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Tiers are used to categorize members based on their engagement with the loyalty program. The rewards and benefits offered to members can differ based on their assigned tier. ...

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Tier object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Loyalty Tier | Created Date |
| Loyalty Tier ID | id | Loyalty Tier | Loyalty Tier Id |
| Last Modified Date | dateTime | Loyalty Tier | Last Modified Date |
| Tier Name | string | Loyalty Tier | Name |
| Tier Group ID | reference | Loyalty Tier | Loyalty Tier Group |
