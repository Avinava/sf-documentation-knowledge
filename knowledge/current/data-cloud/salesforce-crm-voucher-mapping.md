---
title: "Salesforce CRM: Voucher Mapping"
domain: data-cloud
topic: salesforce-crm-voucher-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.611Z
estimatedTokens: 391
keywords: [Salesforce, CRM, Voucher, Mapping, data, mappings, DLO, found, Loyalty, Management, bundle, Connector, Cloud, issued, program]
---

# Salesforce CRM: Voucher Mapping

> These data mappings are for the Voucher DLO found in the Loyalty Management bundle of
  the Salesforce CRM Connector for Data Cloud. Data is about a voucher issued to a loyalty program
  member.

# Salesforce CRM: Voucher Mapping

These data mappings are for the Voucher DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Data is about a voucher issued to a loyalty program member.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Voucher object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Benefit ID | reference | Voucher | Loyalty Benefit |
| Created Date | dateTime | Voucher | Created Date |
| Discount Percentage | int | Voucher | Discount Percent |
| Effective Date | date | Voucher | Effective Date |
| Expiration Date | date | Voucher | Expiration Date |
| Face Value | currency | Voucher | Face Value Amount |
| Voucher ID | id | Voucher | Voucher Id |
| Last Modified Date | dateTime | Voucher | Last Modified Date |
| Loyalty Program Member ID | reference | Voucher | Loyalty Program Member |
| Voucher Number | string | Voucher | Name |
| Promotion ID | reference | Voucher | Promotion |
| Reason | string | Voucher | Notes |
| Status | picklist | Voucher | Voucher Status |
| Transaction Journal ID | reference | Voucher | Loyalty Transaction Journal |
| Use Date | date | Voucher | Used Date |
| Voucher Definition ID | reference | Voucher | Voucher Definition |
