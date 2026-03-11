---
title: "Salesforce CRM: Loyalty Ledger Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-ledger-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.257Z
keywords: [Salesforce, CRM, Loyalty, Ledger, Mapping, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Loyalty Ledger Mapping

# Salesforce CRM: Loyalty Ledger Mapping

These data mappings are for the Loyalty Ledger DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A ledger contains information about credited, debited, or adjusted member activity points by transaction journals.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Ledge object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Activity Date | dateTime | Loyalty Ledger | Activity Date |
| Created Date | dateTime | Loyalty Ledger | Created Date |
| Correlation ID | string | Loyalty Ledger | Data Entity Instance |
| Event Type | picklist | Loyalty Ledger | Financial Transaction Type |
| Last Modified Date | dateTime | Loyalty Ledger | Last Modified Date |
| Points | double | Loyalty Ledger | Loyalty Currency Unit Quantity |
| Loyalty Ledger ID | id | Loyalty Ledger | Loyalty Ledger Id |
| Currency ID | reference | Loyalty Ledger | Loyalty Program Currency |
| Expiry Date | date | Loyalty Ledger | Loyalty Program Currency Expiration Date |
| Loyalty Program Member ID | reference | Loyalty Ledger | Loyalty Program Member |
| Transaction Journal ID | reference | Loyalty Ledger | Loyalty Transaction Journal |