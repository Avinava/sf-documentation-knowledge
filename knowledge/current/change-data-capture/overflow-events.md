---
title: "Overflow Events"
domain: change-data-capture
topic: overflow-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.649Z
estimatedTokens: 1087
keywords: [Overflow, Events, capture, changes, efficiently, generated, transactions, exceed, threshold]
---

# Overflow Events

> To capture changes more efficiently, overflow events are generated for single
    transactions that exceed a threshold.

# Overflow Events

To capture changes more efficiently, overflow events are generated for single transactions that exceed a threshold.

The first 100,000 changes generate change events. The set of changes beyond that amount generates one overflow event for each entity type included in that set. An overflow event is generated when a single transaction contains more than 100,000 changes. An overflow event contains only header fields. The changeType field header value is GAP\_OVERFLOW instead of the specific type of change. The object type corresponding to the change is in the entityName field. An overflow event doesn’t include details about the change, such as the record fields or record ID.

A record creation, deletion, or undeletion counts as one change toward the threshold. In a record update, each field change counts toward the overflow threshold. For example, if three field values are modified in one record update, they count as three operations against the overflow threshold.

Transactions with a high volume of operations aren’t frequent, but they can occur in certain situations, such as for a recurring event with hundreds of occurrences and attendees. Another example is a cascade delete of accounts associated with many opportunities, contacts, and activities that results in deleting many more records in the same transaction. If the cascade delete results in the deletion of 120,000 account, opportunity, contact, and activity records in the same transaction, the deletions of the first 100,000 records generate delete change events. The remaining 20,000 records generate one overflow event for each unique entity.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

Because changes are sometimes merged in one change event, the number of generated change events isn’t always equal to the number of changes. For example, the consecutive deletion of accounts can be merged into one change event. For more information, see the recordIds field in [ChangeEventHeader Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm "Check out the descriptions of the fields that the change event header contains."). If Apex triggers fire and create other records, more change events are generated in the same transaction. For more information, see [Merged Change Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_merged_events.htm "For efficiency, sometimes change events for one transaction are merged into one event if the same change occurred in multiple records of the same object type during one second.").

For more information about handling overflow events, see [How to Handle an Overflow Event](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm#section_handle_overflow_event) in [Transaction-Based Replication Steps](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm "To maintain an accurate replica of your Salesforce org’s data in another system, subscribe using a transaction-based approach.").

## Example

This overflow event is for an account and contains information about the change in the header. The change type is GAP\_OVERFLOW. The record ID for the change is always set to 000000000000000AAA, which is the empty record ID.

{ "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "000000000000000AAA" \], "changeType": "GAP\_OVERFLOW", "changeOrigin": "com/salesforce/api/soap/61.0;client=Workbench/", "transactionKey": "000a5148-405c-21fe-86ce-03205d7404ad", "sequenceNumber": 6, "commitTimestamp": 1714417568000, "commitNumber": 72784848482, "commitUser": "005ZM000000M6o1YAC", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "Name": null, "Type": null, "ParentId": null, "BillingAddress": null, "ShippingAddress": null, "Phone": null, "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, "Industry": null, "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": null, "CreatedDate": null, "CreatedById": null, "LastModifiedDate": null, "LastModifiedById": null, "Jigsaw": null, "JigsawCompanyId": null, "AccountSource": null, "SicDesc": null, "External\_Account\_ID\_\_c": null }

## Related Topics

- ChangeEventHeader Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm)
- Merged Change Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_merged_events.htm)
- How to Handle an Overflow
          Event (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm)
- Transaction-Based Replication Steps (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm)
