---
title: "Salesforce CRM: Voucher Definition Mapping"
domain: data-cloud
topic: salesforce-crm-voucher-definition-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.617Z
estimatedTokens: 427
keywords: [Salesforce, CRM, Voucher, Definition, Mapping, data, mappings, DLO, found, Loyalty, Management, bundle, Connector, Cloud, template]
---

# Salesforce CRM: Voucher Definition Mapping

> These data mappings are for the Voucher Definition DLO found in the Loyalty Management
  bundle of the Salesforce CRM Connector for Data Cloud. A voucher definition is a template that
  used to issue vouchers to members of a loyalty
  program.

# Salesforce CRM: Voucher Definition Mapping

These data mappings are for the Voucher Definition DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A voucher definition is a template that used to issue vouchers to members of a loyalty program.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Voucher Definition object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Voucher Definition | Created Date |
| Discount Percentage | int | Voucher Definition | Discount Percent |
| Effective Date | date | Voucher Definition | Effective Date |
| Expiration Date | date | Voucher Definition | Expiration Date |
| Expiration Period | int | Voucher Definition | Expiration Period |
| Face Value | currency | Voucher Definition | Face Value Amount |
| Voucher Definition ID | id | Voucher Definition | Voucher Definition Id |
| Action | boolean | Voucher Definition | Is Active |
| Last Modified Date | dateTime | Voucher Definition | Last Modified Date |
| Loyalty Program ID | reference | Voucher Definition | Loyalty Program |
| Account ID | reference | Voucher Definition | Partner Account |
| Expiration Type | picklist | Voucher Definition | Voucher Expiration Type |
| Expiration Period Unit | picklist | Voucher Definition | Expiration Period UOM |
| Type | picklist | Voucher Definition | Voucher Type |
