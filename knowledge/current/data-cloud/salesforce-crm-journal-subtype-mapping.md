---
title: "Salesforce CRM: Journal Subtype Mapping"
domain: data-cloud
topic: salesforce-crm-journal-subtype-mapping
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:17:43.139Z
keywords: [Salesforce, CRM, Journal, Subtype, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Journal Subtype Mapping

# Salesforce CRM: Journal Subtype Mapping

These data mappings are for the Journal Subtype DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Journal subtypes help categorize the types of member activities for which transaction journals are created.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Journal Subtype object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Loyalty Journal Subtype | Created Date |
| Journal Type ID | id | Loyalty Journal Subtype | Loyalty Journal Subtype Id |
| Last Modified Date | dateTime | Loyalty Journal Subtype | Last Modified Date |
| Name | string | Loyalty Journal Subtype | Name |