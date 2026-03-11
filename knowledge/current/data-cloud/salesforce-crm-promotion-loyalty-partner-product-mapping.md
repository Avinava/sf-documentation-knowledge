---
title: "Salesforce CRM: Promotion Loyalty Partner Product Mapping"
domain: data-cloud
topic: salesforce-crm-promotion-loyalty-partner-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.274Z
keywords: [Salesforce, CRM, Promotion, Loyalty, Partner, Product, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Promotion Loyalty Partner Product Mapping

# Salesforce CRM: Promotion Loyalty Partner Product Mapping

These data mappings are for the Promotion Loyalty Partner Product DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A product that’s eligible for a promotion. Members are provided with the promotion’s reward when they purchase a product that’s eligible for the promotion.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Promotion Loyalty Partner Product object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Promotion Loyalty Partner Product | Created Date |
| Promotion Loyalty Partner Product ID | id | Promotion Loyalty Partner Product | Promotion Loyalty Partner Product Id |
| Last Modified Date | dateTime | Promotion Loyalty Partner Product | Last Modified Date |
| Loyalty Partner Product ID | reference | Promotion Loyalty Partner Product | Loyalty Partner Product |
| Promotion ID | reference | Promotion Loyalty Partner Product | Promotion |