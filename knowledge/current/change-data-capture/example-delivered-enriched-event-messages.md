---
title: "Example: Delivered Enriched Event Messages"
domain: change-data-capture
topic: example-delivered-enriched-event-messages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.526Z
estimatedTokens: 836
keywords: [Delivered, Enriched, Event, Messages, Check, contain, operations]
---

# Example: Delivered Enriched Event Messages

> Check out example event messages that contain enriched fields for update and delete
    operations.

# Example: Delivered Enriched Event Messages

Check out example event messages that contain enriched fields for update and delete operations.

This change event for an account update includes these enriched fields: the External\_Account\_ID\_\_c custom field, BillingAddress, and Industry. The changedFields field indicates which fields changed. In this example, only the Fax field and the LastModifiedDate system field changed, but the field values for External\_Account\_ID\_\_c, BillingAddress, and Industry are also included because they’re enriched fields.

{ "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "001ZM000001QkdOYAS" \], "changeType": "UPDATE", "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/", "transactionKey": "00097360-44a0-7c2e-a172-97381ae22f82", "sequenceNumber": 1, "commitTimestamp": 1714172795000, "commitNumber": 72657170033, "commitUser": "005ZM000000M6o1YAC", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[ "0x400080" \] }, "Name": null, "Type": null, "ParentId": null, **"BillingAddress": {** **"Street": "415 Mission Street",** **"City": "San Francisco",** **"State": "CA",** **"PostalCode": "94105",** **"Country": "United States",** **"Latitude": null,** **"Longitude": null,** **"GeocodeAccuracy": null** **},** "ShippingAddress": null, "Phone": null, **"Fax": "4155551212",** "AccountNumber": null, "Website": null, "Sic": null, **"Industry": "Biotechnology",** "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": null, "CreatedDate": null, "CreatedById": null, "LastModifiedDate": 1714172795000, "LastModifiedById": null, "Jigsaw": null, "JigsawCompanyId": null, "AccountSource": null, "SicDesc": null, **"External\_Account\_ID\_\_c": "1ABC"** }

After being decoded in a Pub/Sub API client, the changedFields field lists the fields changed, including the Fax field.

```

```

A change event message for a delete operation includes the enriched fields, External\_Account\_ID\_\_c, BillingAddress, and Industry.

{ "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "001ZM000001QkdOYAS" \], "changeType": "DELETE", "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/", "transactionKey": "00097379-d9df-704f-ed2f-c1d2ca3ac266", "sequenceNumber": 1, "commitTimestamp": 1714172911000, "commitNumber": 72657195312, "commitUser": "005ZM000000M6o1YAC", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "Name": null, "Type": null, "ParentId": null, **"BillingAddress": {** **"Street": "415 Mission Street",** **"City": "San Francisco",** **"State": "CA",** **"PostalCode": "94105",** **"Country": "United States",** **"Latitude": null,** **"Longitude": null,** **"GeocodeAccuracy": null** **},** "ShippingAddress": null, "Phone": null, "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, **"Industry": "Biotechnology",** "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": null, "CreatedDate": null, "CreatedById": null, "LastModifiedDate": null, "LastModifiedById": null, "Jigsaw": null, "JigsawCompanyId": null, "AccountSource": null, "SicDesc": null, **"External\_Account\_ID\_\_c": "1ABC"** }

## Code Examples

```
2024-04-26 16:15:52,375 [grpc-default-executor-0] java.lang.Class - ============================
2024-04-26 16:15:52,375 [grpc-default-executor-0] java.lang.Class -        Changed Fields       
2024-04-26 16:15:52,375 [grpc-default-executor-0] java.lang.Class - ============================
2024-04-26 16:15:52,375 [grpc-default-executor-0] java.lang.Class - Fax
2024-04-26 16:15:52,375 [grpc-default-executor-0] java.lang.Class - LastModifiedDate
2024-04-26 16:15:52,375 [grpc-default-executor-0] java.lang.Class - ============================
```
