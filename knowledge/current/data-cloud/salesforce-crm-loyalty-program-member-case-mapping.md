---
title: "Salesforce CRM: Loyalty Program Member Case Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-member-case-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.742Z
estimatedTokens: 272
keywords: [Salesforce, CRM, Loyalty, Program, Member, Case, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Data, Cloud., refers, association, between, loyalty]
---

# Salesforce CRM: Loyalty Program Member Case Mapping

> These data mappings are for the Loyalty Program Member Case DLO found in the Loyalty
  Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to an association
  between a loyalty program member and a case created by the
  member.

# Salesforce CRM: Loyalty Program Member Case Mapping

These data mappings are for the Loyalty Program Member Case DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data refers to an association between a loyalty program member and a case created by the member.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Member Case object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Case ID | reference | Loyalty Program Member Case | Case |
| Loyalty Program Member ID | reference | Loyalty Program Member Case | Loyalty Program Member |
| Loyalty Program Member Case ID | id | Loyalty Program Member Case | Loyalty Program Member Case Id |
| Name | string | Loyalty Program Member Case | Name |
