---
title: "Salesforce CRM: Promotion Mapping"
domain: data-cloud
topic: salesforce-crm-promotion-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.589Z
estimatedTokens: 449
keywords: [Salesforce, CRM, Promotion, Mapping, data, mappings, DLO, found, Loyalty, Management, bundle, Connector, Cloud, that’s, offered]
---

# Salesforce CRM: Promotion Mapping

> These data mappings are for the Promotion DLO found in the Loyalty Management bundle of
  the Salesforce CRM Connector for Data Cloud. Information about a promotion that’s offered to
  members of a loyalty
  program.

# Salesforce CRM: Promotion Mapping

These data mappings are for the Promotion DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Information about a promotion that’s offered to members of a loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Promotion object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Campaign ID | reference | Promotion | Primary Campaign |
| Created Date | dateTime | Promotion | Created Date |
| Cumulative Usage Target | int | Promotion | Cumulative Usage Target Amount |
| Voucher Definition ID | reference | Promotion | Default Voucher Definition |
| End Date | date | Promotion | End Date |
| Enrollment End Date | date | Promotion | Enrollment End Date |
| Enrollment Start Date | date | Promotion | Enrollment Start Date |
| Fulfillment Action | picklist | Promotion | Fulfillment Action |
| Promotion ID | id | Promotion | Promotion Id |
| Last Modified Date | dateTime | Promotion | Last Modified Date |
| Loyalty Promotion Type | picklist | Promotion | Promotion Type |
| Enrollment Required | boolean | Promotion | Is Enrollment Required |
| Name | string | Promotion | Name |
| Start Date | date | Promotion | Start Date |
| Loyalty Program ID | reference | Promotion | Loyalty Program |
| Currency ID | reference | Promotion | Loyalty Program |
| Status | picklist | Promotion | Promotion Status |
| Reward Points | int | Promotion | Total Reward Value Amount |
