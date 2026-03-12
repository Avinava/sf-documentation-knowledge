---
title: "Salesforce CRM: Loyalty Program Engagement Attribute Promotion Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-engagement-attribute-promotion-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.710Z
estimatedTokens: 346
keywords: [Salesforce, CRM, Loyalty, Program, Engagement, Attribute, Promotion, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Data, Cloud., refers, association, between]
---

# Salesforce CRM: Loyalty Program Engagement Attribute Promotion Mapping

> These data mappings are for the Loyalty Program Engagement Attribute Promotion DLO found
  in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to an
  association between a promotion and an engagement attribute. Use engagement attributes to track
  the progress of loyalty program members towards achieving promotion
  targets.

# Salesforce CRM: Loyalty Program Engagement Attribute Promotion Mapping

These data mappings are for the Loyalty Program Engagement Attribute Promotion DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to an association between a promotion and an engagement attribute. Use engagement attributes to track the progress of loyalty program members towards achieving promotion targets.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Engagement Attribute Promotion object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Loyalty Program Engagement Attribute Promotion ID | id | Loyalty Program Engagement Attribute Promotion | Loyalty Pgm Engmt Attribute Promotion Id |
| Loyalty Program Engagement Attribute ID | reference | Loyalty Program Engagement Attribute Promotion | Loyalty Program Engagement Attribute |
| Name | string | Loyalty Program Engagement Attribute Promotion | Name |
| Promotion ID | reference | Loyalty Program Engagement Attribute Promotion | Promotion |
