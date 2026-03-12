---
title: "Salesforce CRM: Loyalty Program Currency Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-program-currency-mapping
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:14.491Z
estimatedTokens: 494
keywords: [Salesforce, CRM, Loyalty, Program, Currency, Mapping, data, mappings, DLO, found, Management, bundle, Connector, Cloud, credits]
---

# Salesforce CRM: Loyalty Program Currency Mapping

> These data mappings are for the Loyalty Program Currency DLO found in the Loyalty
  Management bundle of the Salesforce CRM Connector for Data Cloud. Loyalty program credits points
  of a specific currency to members when they engage with the loyalty program. Qualifying currency
  points help members qualify for tiers of the loyalty program. Members can redeem non-qualifying
  currency points credited for their
  purchases.

# Salesforce CRM: Loyalty Program Currency Mapping

These data mappings are for the Loyalty Program Currency DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Loyalty program credits points of a specific currency to members when they engage with the loyalty program. Qualifying currency points help members qualify for tiers of the loyalty program. Members can redeem non-qualifying currency points credited for their purchases.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Program Currency object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | dateTime | Loyalty Program Currency | Created Date |
| Currency Type | picklist | Loyalty Program Currency | Currency Type |
| Expiration Interval Unit | picklist | Loyalty Program Currency | Expiration Period Frequency Time UOM |
| Expiry Interval | int | Loyalty Program Currency | Expiration Period Frequency |
| Expiry Model | picklist | Loyalty Program Currency | Currency Expiration Model |
| Extend Expiration | picklist | Loyalty Program Currency | Currency Expiration Extension Model |
| Loyalty Program Currency ID | id | Loyalty Program Currency | Loyalty Program Currency Id |
| Active | boolean | Loyalty Program Currency | Is Active |
| Primary | boolean | Loyalty Program Currency | Is Primary |
| Last Modified Date | dateTime | Loyalty Program Currency | Last Modified Date |
| Loyalty Program ID | reference | Loyalty Program Currency | Loyalty Program |
| Loyalty Tier Group ID | reference | Loyalty Program Currency | Loyalty Tier Group |
| Currency Name | string | Loyalty Program Currency | Name |
