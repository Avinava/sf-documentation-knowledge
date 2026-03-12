---
title: "Salesforce CRM: Loyalty Program Member Promotion Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-member-promotion-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.528Z
estimatedTokens: 406
keywords: [Salesforce, CRM, Loyalty, Program, Member, Promotion, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Cloud]
---

# Salesforce CRM: Loyalty Program Member Promotion Mapping

> These data mappings are for the Loyalty Program Member Promotion DLO found in the
  Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data about a member’s
  promotion usage. For cumulative type promotions, the member’s progress is tracked towards
  achieving the target of the
  promotion.

# Salesforce CRM: Loyalty Program Member Promotion Mapping

These data mappings are for the Loyalty Program Member Promotion DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data about a member’s promotion usage. For cumulative type promotions, the member’s progress is tracked towards achieving the target of the promotion.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Member Promotion object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | datetime | Loyalty Program Member Promotion | Created Date |
| Cumulative Usage Complete Percentage | percent | Loyalty Program Member Promotion | Cumulative Usage Complete Percent |
| Cumulative Usage Completed | int | Loyalty Program Member Promotion | Cumulative Usage Completed |
| CumulativeUsageTarget | int | Loyalty Program Member Promotion | Cumulative Usage Target |
| Loyalty Program Member Promotion ID | id | Loyalty Program Member Promotion | Loyalty Program Member Promotion Id |
| Last Modified Date | datetime | Loyalty Program Member Promotion | Last Modified Date |
| Loyalty Program Member ID | reference | Loyalty Program Member Promotion | Loyalty Program Member |
| Promotion ID | reference | Loyalty Program Member Promotion | Promotion |
