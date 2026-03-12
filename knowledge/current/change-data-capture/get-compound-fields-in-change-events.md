---
title: "Get Compound Fields in Change Events"
domain: change-data-capture
topic: get-compound-fields-in-change-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.746Z
estimatedTokens: 1331
keywords: [Compound, Change, Events, lead, contact, Address, Geolocation, represented, nested, structures, event, message, record, updates, changedFields]
---

# Get Compound Fields in Change Events

> Compound fields, such as lead or contact Name, Address, and Geolocation fields, are
  represented as nested field structures in the event message. In record updates, the
   changedFields header field lists each updated component field using this
  format: CompoundField.ComponentField.
  The updated component field is included in the event message in a nested field
  structure.

# Get Compound Fields in Change Events

Compound fields, such as lead or contact Name, Address, and Geolocation fields, are represented as nested field structures in the event message. In record updates, the changedFields header field lists each updated component field using this format: CompoundField.ComponentField. The updated component field is included in the event message in a nested field structure.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

The name of the component field can differ from the field name in the corresponding Salesforce object. For example, in a change event, the Street nested component field of BillingAddress is BillingStreet in the Account object. To find out the field names and structure in a change event, get the event schema. For more information about the event schema, see [Change Event Message Structure](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_message_structure.htm "A change event message contains header fields and record fields."). For more information about Salesforce objects, see [Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm) in the Object Reference for Salesforce and Lightning Platform.

## Compound Field in a New Record

## Example

This example shows a change event received after an account is created with a BillingAddress compound field. The BillingAddress field contains its component fields as nested fields.

{ "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "0015f00002JUXA8AAP" \], "changeType": "CREATE", "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", "transactionKey": "00006bec-ce66-0611-9018-30a98446c9f2", "sequenceNumber": 1, "commitTimestamp": 1714156685000, "commitNumber": 1100670838951, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "Name": "Acme", "Type": null, "ParentId": null, "BillingAddress": { "Street": "415 Mission Street", "City": "San Francisco", "State": "CA", "PostalCode": "94105", "Country": "United States", "Latitude": null, "Longitude": null, "GeocodeAccuracy": null }, "ShippingAddress": null, "Phone": null, "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, "Industry": null, "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": "0055f000005mc66AAA", "CreatedDate": 1714156685000, "CreatedById": "0055f000005mc66AAA", "LastModifiedDate": 1714156685000, "LastModifiedById": "0055f000005mc66AAA", "Jigsaw": null, "JigsawCompanyId": null, "CleanStatus": "Pending", "AccountSource": null, "DunsNumber": null, "Tradestyle": null, "NaicsCode": null, "NaicsDesc": null, "YearStarted": null, "SicDesc": null, "DandbCompanyId": null, "OperatingHoursId": null, "CustomerPriority\_\_c": null, "SLA\_\_c": null, "Active\_\_c": null, "NumberofLocations\_\_c": null, "UpsellOpportunity\_\_c": null, "SLASerialNumber\_\_c": null, "SLAExpirationDate\_\_c": null }

## Compound Field in an Updated Record

## Example

This example shows a change event received after updating the Street component field of BillingAddress. The Street field is nested under BillingAddress.

{ "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "0015f00002JUXA8AAP" \], "changeType": "UPDATE", "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/", "transactionKey": "00006bf0-edfd-6e54-a3f9-e8cefdb2c2b7", "sequenceNumber": 1, "commitTimestamp": 1714156703000, "commitNumber": 1100671026205, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[ "0x400000", "4-0x01" \] }, "Name": null, "Type": null, "ParentId": null, "BillingAddress": { "Street": "415 Mission Street Suite B", "City": null, "State": null, "PostalCode": null, "Country": null, "Latitude": null, "Longitude": null, "GeocodeAccuracy": null }, "ShippingAddress": null, "Phone": null, "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, "Industry": null, "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": null, "CreatedDate": null, "CreatedById": null, "LastModifiedDate": 1714156703000, "LastModifiedById": null, "Jigsaw": null, "JigsawCompanyId": null, "CleanStatus": null, "AccountSource": null, "DunsNumber": null, "Tradestyle": null, "NaicsCode": null, "NaicsDesc": null, "YearStarted": null, "SicDesc": null, "DandbCompanyId": null, "OperatingHoursId": null, "CustomerPriority\_\_c": null, "SLA\_\_c": null, "Active\_\_c": null, "NumberofLocations\_\_c": null, "UpsellOpportunity\_\_c": null, "SLASerialNumber\_\_c": null, "SLAExpirationDate\_\_c": null }

After decoding the changedFields header field in a Pub/Sub API client, the updated Street field is listed as BillingAddress.Street.

```

```

#### See Also

-   [*Object Reference for Salesforce and Lightning Platform*: Compound Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/compound_fields.htm "Object Reference for Salesforce and Lightning Platform: Compound
    Fields - HTML (New Window)")

## Code Examples

```
2024-04-26 11:38:24,375 [grpc-default-executor-0] java.lang.Class - ============================
2024-04-26 11:38:24,375 [grpc-default-executor-0] java.lang.Class -        Changed Fields       
2024-04-26 11:38:24,375 [grpc-default-executor-0] java.lang.Class - ============================
2024-04-26 11:38:24,375 [grpc-default-executor-0] java.lang.Class - LastModifiedDate
2024-04-26 11:38:24,375 [grpc-default-executor-0] java.lang.Class - BillingAddress.Street
2024-04-26 11:38:24,375 [grpc-default-executor-0] java.lang.Class - ============================
```

## Related Topics

- Change Event Message Structure (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_message_structure.htm)
