---
title: "Salesforce CRM: Loyalty Aggregated Point Expiration Ledger Mapping"
domain: data-cloud
topic: salesforce-crm-loyalty-aggregated-point-expiration-ledger-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.552Z
estimatedTokens: 398
keywords: [Salesforce, CRM, Loyalty, Aggregated, Point, Expiration, Ledger, Mapping, data, mappings, DLO, found, Management, bundle, Connector]
---

# Salesforce CRM: Loyalty Aggregated Point Expiration Ledger Mapping

> These data mappings are for the Loyalty Aggregated Point Expiration Ledger DLO found in
  the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A ledger that
  contains the details of a member’s fixed-type non-qualifying points that are set to expire on a
  particular date.

# Salesforce CRM: Loyalty Aggregated Point Expiration Ledger Mapping

These data mappings are for the Loyalty Aggregated Point Expiration Ledger DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. A ledger that contains the details of a member’s fixed-type non-qualifying points that are set to expire on a particular date.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Loyalty Aggregated Point Expiration Ledger object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Expiration Date | date | Loyalty Aggregated Point Expiration Ledger | Expiration Date |
| Expiration Points | double | Loyalty Aggregated Point Expiration Ledger | Expiration Points Number |
| Loyalty Aggregated Point Expiration Ledger ID | id | Loyalty Aggregated Point Expiration Ledger | Loyalty Aggregated Point Expiration Ledger Id |
| Currency ID | reference | Loyalty Aggregated Point Expiration Ledger | Loyalty Program Currency |
| Loyalty Program Member ID | reference | Loyalty Aggregated Point Expiration Ledger | Loyalty Program Member |
| Points Status | picklist | Loyalty Aggregated Point Expiration Ledger | Points Status |
| Redeemed Points | double | Loyalty Aggregated Point Expiration Ledger | Redeemed Points Number |
