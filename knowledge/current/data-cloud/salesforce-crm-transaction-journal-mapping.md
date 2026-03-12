---
title: "Salesforce CRM: Transaction Journal Mapping"
domain: data-cloud
topic: salesforce-crm-transaction-journal-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:14.602Z
estimatedTokens: 826
keywords: [Salesforce, CRM, Transaction, Journal, Mapping, data, mappings, DLO, found, Loyalty, Management, bundle, Connector, Cloud, journals]
---

# Salesforce CRM: Transaction Journal Mapping

> These data mappings are for the Transaction Journal DLO found in the Loyalty Management
  bundle of the Salesforce CRM Connector for Data Cloud. Transaction journals are used to track
  member activities, member behavior, and
  adjustments.

# Salesforce CRM: Transaction Journal Mapping

These data mappings are for the Transaction Journal DLO found in the Loyalty Management bundle of the Salesforce CRM Connector for Data Cloud. Transaction journals are used to track member activities, member behavior, and adjustments.

## Data Bundle

-   Loyalty Management

## DLO to DMO Mapping

These data mappings relate to the Transaction Journal object included in the Salesforce CRM connector and how that data connects to DMOs. Learn more about the DLOs in the [Loyalty Management Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.248.0.loyalty.meta/loyalty/loyalty_api_overview.htm).

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Activity Date | dateTime | Transaction Journal | Activity Date |
| Booked Fare Class | picklist | Transaction Journal | Booked Fare Class |
| Booked Room Type | picklist | Transaction Journal | Booked Room Type |
| Booking Date | date | Transaction Journal | Booking Date |
| Brand | string | Transaction Journal | Brand |
| Channel | picklist | Transaction Journal | Sales Channel |
| Created Date | dateTime | Transaction Journal | Created Date |
| Destination | string | Transaction Journal | Travel Destination Name |
| Distance | double | Transaction Journal | Travel Distance Number |
| Establishment | string | Transaction Journal | Establishment Name |
| External Transaction ID | string | Transaction Journal | External Record Id |
| Flight Number | string | Transaction Journal | Flight Number |
| Transaction Journal | id | Transaction Journal | Loyalty Transaction Journal Id |
| Industry | picklist | Transaction Journal | Industry |
| Invoice Generated Date | date | Transaction Journal | Invoice Date |
| Journal Date | dateTime | Transaction Journal | Journal Date |
| Journal Reason | picklist | Transaction Journal | Reason |
| Journal SubType ID | reference | Transaction Journal | Loyalty Journal Subtype |
| Journal Type ID | reference | Transaction Journal | Loyalty Journal Type |
| Last Modified Date | dateTime | Transaction Journal | Last Modified Date |
| Loyalty Program ID | reference | Transaction Journal | Loyalty Program |
| Program Member ID | reference | Transaction Journal | Loyalty Program Member |
| Order Product ID | reference | Transaction Journal | Sales Order Product |
| Origin | string | Transaction Journal | Travel Origin Name |
| Loyalty Program Partner ID | reference | Transaction Journal | Loyalty Program Partner |
| Payment Method | string | Transaction Journal | Payment Method Type |
| Product ID | reference | Transaction Journal | Product |
| Quantity | double | Transaction Journal | Transaction Quantity |
| Quantity Unit ID | reference | Transaction Journal | Transaction Quantity UOM |
| Referred Member ID | reference | Transaction Journal | Loyalty Program Referred Member |
| Related Corporate Membership ID | reference | Transaction Journal | Loyalty Program Corporate Member |
| Related Journal ID | reference | Transaction Journal | Related Loyalty Transaction Journal |
| Transaction Amount | double | Transaction Journal | Transaction Amount |
| Transaction Location | string | Transaction Journal | Location |
| Traveled Fare Class | string | Transaction Journal | Traveled Fare Class |
