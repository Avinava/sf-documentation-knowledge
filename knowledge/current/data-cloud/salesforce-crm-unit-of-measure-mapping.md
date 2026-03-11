---
title: "Salesforce CRM: Unit of Measure Mapping"
domain: data-cloud
topic: salesforce-crm-unit-of-measure-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.295Z
keywords: [Salesforce, CRM, Unit, Measure, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Unit of Measure Mapping

# Salesforce CRM: Unit of Measure Mapping

These data mappings are for the Unit of Measure DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. The unit of measure for a product purchased by a loyalty program member.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Unit of Measure object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Name | string | Unit of Measure | Name |
| Unit Code | string | Unit of Measure | Unit Of Measure Code |
| Unit of Measure ID | id | Unit of Measure | Unit of Measure Id |
| Type | picklist | Unit of Measure | Unit Of Measure Type |