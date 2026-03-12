---
title: "B2C Commerce: Customer Profile Mapping"
domain: data-cloud
topic: b2c-commerce-customer-profile-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.896Z
estimatedTokens: 344
keywords: [B2C, Commerce, Customer, Profile, Mapping, After, data, stream, deployed, Salesforce, Order, starter, bundle, automatically, maps, source, objects, model, DMO, Data]
---

# B2C Commerce: Customer Profile Mapping

> After a data stream is deployed, the Salesforce B2C Commerce Order
         starter data bundle automatically maps source objects from B2C Commerce to data model
         objects (DMO)s in Data Cloud. The Customer Profile object represents a customer profile for
         a registered customer.

# B2C Commerce: Customer Profile Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Customer Profile object represents a customer profile for a registered customer.

## DLO to DMO Mapping

These data mappings relate to the Customer Profile object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| birthday | date | Individual | Birth Date |
| creationDate | date | Account | Created Date |
| date | Contact Point Address | Created Date |
| date | Contact Point Email | Created Date |
| date | Contact Point Phone | Created Date |
| date | Individual | Created Date |
| customerNo | text | Account | Customer Id |
| text | Contact Point Address | Customer Id |
| text | Contact Point Email | Customer Id |
| text | Contact Point Phone | Customer Id |
| text | Individual | Customer Id |
| email | text | Contact Point Email | Email Address |
| firstName | text | Individual | First Name |
| lastModified | date | Individual | Last Modified Date |
| lastName | text | Individual | Last Name |
| lastVisitTime | date | Account | Last Activity Date |
| homePhone | text | Contact Point Phone | Telephone Number |
