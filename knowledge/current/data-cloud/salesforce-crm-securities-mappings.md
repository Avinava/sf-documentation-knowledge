---
title: "Salesforce CRM: Securities Mappings"
domain: data-cloud
topic: salesforce-crm-securities-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.135Z
keywords: [Salesforce, CRM, Securities, Mappings, Usage, Data, Bundle, DLO, DMO, Mapping]
---

# Salesforce CRM: Securities Mappings

# Salesforce CRM: Securities Mappings

These data mappings are for the Securities DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Financial Services Cloud

## DLO to DMO Mapping

These data mappings relate to the Securities object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Id |  | id | Financial Security | Security Id |
| Name |  | text | Financial Security | Name |
| Price | FinServ__Price_c | currency | Financial Security | Price |