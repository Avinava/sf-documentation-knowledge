---
title: "Salesforce CRM: Loyalty Program Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.175Z
keywords: [Salesforce, CRM, Loyalty, Program, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Loyalty Program Mapping

# Salesforce CRM: Loyalty Program Mapping

These data mappings are for the Loyalty Program DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This object includes data about a company’s loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Loyalty Program | Created Date |
| Loyalty Program ID | id | Loyalty Program | Loyalty Program Member Id |
| Last Modified Date | datetime | Loyalty Program | Last Modified Date |
| Program Name | string | Loyalty Program | Name |
| Status | picklist | Loyalty Program | Loyalty Program Status |