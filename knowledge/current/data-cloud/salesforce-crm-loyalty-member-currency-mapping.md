---
title: "Salesforce CRM: Loyalty Member Currency Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-member-currency-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.261Z
keywords: [Salesforce, CRM, Loyalty, Member, Currency, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Loyalty Member Currency Mapping

# Salesforce CRM: Loyalty Member Currency Mapping

These data mappings are for the Loyalty Member Currency DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Information about the qualifying and non-qualifying currency points that are available in members’ point balances.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Member Currency object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Balance Before Reset | double | Loyalty Member Currency | Points Balance Before Reset |
| Created Date | dateTime | Loyalty Member Currency | Created Date |
| Total Expirable Points | double | Loyalty Member Currency | Expirable Points |
| Loyalty Member Currency ID | id | Loyalty Member Currency | Loyalty Member Currency Id |
| Last Accrual Processed Date | dateTime | Loyalty Member Currency | Last Accrual Processed Date |
| Last Expiration Process Run Date | date | Loyalty Member Currency | Last Expiration Process Run Date |
| Last Modified Date | dateTime | Loyalty Member Currency | Last Modified Date |
| Last Reset Date | date | Loyalty Member Currency | Last Reset Date |
| Loyalty Program Member ID | reference | Loyalty Member Currency | Loyalty Program Member |
| Currency ID | reference | Loyalty Member Currency | Loyalty Program Currency |
| Next Reset Date | date | Loyalty Member Currency | Next Reset Date |
| Points Balance | double | Loyalty Member Currency | Points Balance |
| Total Points Accrued | double | Loyalty Member Currency | Total Points Accrued |
| Total Points Expired | double | Loyalty Member Currency | Total Points Expired |
| Total Points Redeemed | double | Loyalty Member Currency | Total Points Redeemed |