---
title: "B2C Commerce: Sales Order Customer Mapping"
domain: data-cloud
topic: b2c-commerce-sales-order-customer-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.781Z
estimatedTokens: 641
keywords: [B2C, Commerce, Sales, Order, Customer, Mapping, data, stream, deployed, Salesforce, starter, bundle, automatically, maps, source]
---

# B2C Commerce: Sales Order Customer Mapping

> After a data stream is deployed, the Salesforce B2C Commerce Order
         starter data bundle automatically maps source objects from B2C Commerce to data model
         objects (DMO)s in Data Cloud. The Sales Order Customer object represents a customer making
         an order.

# B2C Commerce: Sales Order Customer Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Sales Order Customer object represents a customer making an order.

## DLO to DMO Mapping

These data mappings relate to the Sales Order Customer object used with the B2C Commerce connector. You can add or customize the data mappings. Ensure that these data model objects (DMO) fields are mapped as custom fields to the Individual DMO.

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

These fields are case-sensitive.

The visitorID data field is mapped from the Sales Order Customer DLO to the Individual ID field on the Individual DMO via the Order Bundle. This mapping is required for activation.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| customerId | text | Individual | CustomerId |
| customerListId | text | Individual | CustomerListId |
| customerNo | text | Individual | CustomerNo |
| usid | number | Individual | UsId |
| buyerEmail | text | ContactPointEmail | Email Address |
| customerProfileBirthday | text | Individual | Birth Date |
| customerProfileCreationDate | date | Individual | Created Date |
| date | ContactPointPhone | Created Date |
| customerProfileFirstName | text | Individual | First Name |
| customerProfileLastName | text | Individual | Last Name |
| customerProfilePhoneHome | text | ContactPointPhone | Telephone Number |
| invoiceToAddressAddress1 | text | ContactPointAddress | Address Line 1 |
| invoiceToAddressAddress2 | text | ContactPointAddress | Address Line 2 |
| invoiceToAddressCity | text | ContactPointAddress | City |
| invoiceToAddressCountryCode | text | ContactPointAddress | Country |
| invoiceToAddressPostalCode | text | ContactPointAddress | Postal Code |
| invoiceToAddressPostBox | text | ContactPointAddress | Address Line 3 |
| invoiceToAddressStateCode | text | ContactPointAddress | State Province |
| orderPlacedTimestamp | date | Individual | Last Modified Date |
| orderPlacedTimestamp | date | ContactPointEmail | Last Modified Date |
| visitorId | text | Individual | Individual Id |
| text | ContactPointEmail | Contact Point Email Id |
| text | ContactPointEmail | Party |
| text | ContactPointPhone | Contact Point Phone Id |
| text | ContactPointPhone | Party |
| text | ContactPointAddress | Contact Point Address Id |
| text | ContactPointAddress | Party |
