---
title: "Salesforce CRM: Loyalty Partner Product Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-partner-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.172Z
keywords: [Salesforce, CRM, Loyalty, Partner, Product, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Loyalty Partner Product Mapping

# Salesforce CRM: Loyalty Partner Product Mapping

These data mappings are for the Loyalty Partner Product DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data refers to a product or service offered by a partner of the loyalty program to members of the loyalty program. Members can accrue or redeem points by purchasing partner products or services.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Partner Product object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Loyalty Partner Product | Created Date |
| Loyalty Partner Product ID | id | Loyalty Partner Product | Loyalty Partner Product Id |
| Last Modified Date | dateTime | Loyalty Partner Product | Last Modified Date |
| Loyalty Program Partner ID | reference | Loyalty Partner Product | Loyalty Program Partner |
| Start Date | date | Loyalty Partner Product | Start Date |
| End Date | date | Loyalty Partner Product | End Date |