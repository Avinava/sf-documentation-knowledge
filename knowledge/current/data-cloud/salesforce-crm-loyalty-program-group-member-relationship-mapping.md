---
title: "Salesforce CRM: Loyalty Program Group Member Relationship Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-group-member-relationship-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.717Z
estimatedTokens: 507
keywords: [Salesforce, CRM, Loyalty, Program, Group, Member, Relationship, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Data, Cloud., includes, association, between]
---

# Salesforce CRM: Loyalty Program Group Member Relationship Mapping

> These data mappings are for the Loyalty Program Group Member Relationship DLO found in
  the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data includes
  the association between a loyalty program member and their groups, along with details of a
  member’s points contribution towards the associated
  group.

# Salesforce CRM: Loyalty Program Group Member Relationship Mapping

These data mappings are for the Loyalty Program Group Member Relationship DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. This data includes the association between a loyalty program member and their groups, along with details of a member’s points contribution towards the associated group.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Group Member Relationship object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Account ID | reference | Loyalty Program Group Member Relationship | Account |
| Contact ID | reference | Loyalty Program Group Member Relationship | Account Contact |
| Member can redeem group points | boolean | Loyalty Program Group Member Relationship | Can Member Redeem From Group |
| Contribution Calculation Type | picklist | Loyalty Program Group Member Relationship | Contribution Calculation Type |
| Loyalty Program Group Account Member ID | id | Loyalty Program Group Member Relationship | Loyalty Program Group Member Relationship Id |
| Loyalty Program Member ID | reference | Loyalty Program Group Member Relationship | Loyalty Program Group Member |
| Member Name | string | Loyalty Program Group Member Relationship | Member Name |
| Contribution Percentage | percent | Loyalty Program Group Member Relationship | Member Point Contribution Percent |
| Member Role | picklist | Loyalty Program Group Member Relationship | Member Role |
| Name | string | Loyalty Program Group Member Relationship | Name |
| Loyalty Program Member ID | reference | Loyalty Program Group Member Relationship | Related Loyalty Program Member |
