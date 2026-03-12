---
title: "Merged Change Events"
domain: change-data-capture
topic: merged-change-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.753Z
estimatedTokens: 671
keywords: [Merged, Change, Events, efficiency, sometimes, transaction, event, occurred, multiple, records, second]
---

# Merged Change Events

> For efficiency, sometimes change events for one transaction are merged into one event if
  the same change occurred in multiple records of the same object type during one second.

# Merged Change Events

For efficiency, sometimes change events for one transaction are merged into one event if the same change occurred in multiple records of the same object type during one second.

When change events are merged, Salesforce sends one change event for all affected records and the recordIds field contains the IDs for all records that have the same change.

Examples of operations with same changes are:

-   Update of fieldA to valueA in Account records.
-   Deletion of Account records.
-   Renaming or replacing a picklist value that results in updating the field value in all affected records.

For more information about the recordIds field, see [ChangeEventHeader Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm "Check out the descriptions of the fields that the change event header contains.").

## Example

If you update the Industry field to Apparel of three Account records in a single update Apex DML statement, one merged change event is sent as shown in this example. The recordIds field contains the IDs of the Account records that have the same change.

{ "ChangeEventHeader": { "entityName": "Account", **"recordIds": \[** **"0015f00002JUZPDAA5",** **"0015f00002JUZPXAA5",** **"0015f00002JUZPcAAP"** **\],** "changeType": "UPDATE", "changeOrigin": "com/salesforce/api/soap/60.0;client=devconsole", "transactionKey": "00065380-d1a9-a64a-9341-14f6f12f674c", "sequenceNumber": 1, "commitTimestamp": 1714170102000, "commitNumber": 1100823480049, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[ "0x400800" \] }, "Name": null, "Type": null, "ParentId": null, "BillingAddress": null, "ShippingAddress": null, "Phone": null, "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, **"Industry": "Apparel",** "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": null, "CreatedDate": null, "CreatedById": null, "LastModifiedDate": 1714170102000, "LastModifiedById": null, "Jigsaw": null, "JigsawCompanyId": null, "CleanStatus": null, "AccountSource": null, "DunsNumber": null, "Tradestyle": null, "NaicsCode": null, "NaicsDesc": null, "YearStarted": null, "SicDesc": null, "DandbCompanyId": null, "OperatingHoursId": null, "CustomerPriority\_\_c": null, "SLA\_\_c": null, "Active\_\_c": null, "NumberofLocations\_\_c": null, "UpsellOpportunity\_\_c": null, "SLASerialNumber\_\_c": null, "SLAExpirationDate\_\_c": null }

After being decoded in a Pub/Sub API client, the changedFields field lists the Industry field as one of the changed fields.

```

```

## Code Examples

```
2024-04-26 15:21:43,674 [grpc-default-executor-0] java.lang.Class - ============================
2024-04-26 15:21:43,674 [grpc-default-executor-0] java.lang.Class -        Changed Fields       
2024-04-26 15:21:43,674 [grpc-default-executor-0] java.lang.Class - ============================
2024-04-26 15:21:43,674 [grpc-default-executor-0] java.lang.Class - Industry
2024-04-26 15:21:43,674 [grpc-default-executor-0] java.lang.Class - LastModifiedDate
2024-04-26 15:21:43,674 [grpc-default-executor-0] java.lang.Class - ============================
```

## Related Topics

- ChangeEventHeader Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm)
