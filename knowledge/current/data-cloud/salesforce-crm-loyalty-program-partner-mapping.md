---
title: "Salesforce CRM: Loyalty Program Partner Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-partner-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.536Z
estimatedTokens: 440
keywords: [Salesforce, CRM, Loyalty, Program, Partner, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Cloud, partners]
---

# Salesforce CRM: Loyalty Program Partner Mapping

> These data mappings are for the Loyalty Program Partner DLO found in the Loyalty
  Management bundle of the Salesforce CRM Connector for Data Cloud. Loyalty program partners offer
  their products and services to members of the loyalty program. Partners can choose to allow
  members to accrue or redeem points by purchasing partner products. Partners can also run
  promotions in collaboration with the loyalty program.

# Salesforce CRM: Loyalty Program Partner Mapping

These data mappings are for the Loyalty Program Partner DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Loyalty program partners offer their products and services to members of the loyalty program. Partners can choose to allow members to accrue or redeem points by purchasing partner products. Partners can also run promotions in collaboration with the loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Partner object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Loyalty Program Partner | Created Date |
| Loyalty Program Partner ID | id | Loyalty Program Partner | Loyalty Program Partner Id |
| Last Modified Date | dateTime | Loyalty Program Partner | Last Modified Date |
| Loyalty Program Partner ID | reference | Loyalty Program Partner | Partner Account |
| Loyalty Program ID | reference | Loyalty Program Partner | Loyalty Program |
| Program Partnership Category | picklist | Loyalty Program Partner | Loyalty Partner Category |
| Program Partnership End Date | date | Loyalty Program Partner | Partnership End Date |
| Program Partnership Start Date | date | Loyalty Program Partner | Partnership Start Date |
| Status | picklist | Loyalty Program Partner | Loyalty Partner Status |
| Type | picklist | Loyalty Program Partner | Loyalty Partner Type |
