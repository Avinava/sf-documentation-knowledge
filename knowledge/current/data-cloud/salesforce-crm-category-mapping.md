---
title: "Salesforce CRM: Category Mapping"
domain: data-cloud
topic: salesforce-crm-category-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.077Z
keywords: [Salesforce, CRM, Category, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Category Mapping

# Salesforce CRM: Category Mapping

These data mappings are for the Category DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A category of products that the company sells.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Category object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Catalog ID | reference | Product Category | Product Catalog |
| Category ID | reference | Product Category | Parent Category |
| id | Product Category | Product Category Id |
| Created Date | dateTime | Product Category | Created Date |
| Description | textarea | Product Category | Description |
| Last Modified Date | dateTime | Product Category | Last Modified Date |
| Name | string | Product Category | Category Name |