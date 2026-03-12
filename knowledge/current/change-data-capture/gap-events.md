---
title: "Gap Events"
domain: change-data-capture
topic: gap-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.646Z
estimatedTokens: 1253
keywords: [Gap, Events, Salesforce, sometimes, instead, change, inform, subscribers, errors, it’s, possible, generate, event, record, doesn’t]
---

# Gap Events

> Salesforce sometimes sends gap events instead of change events to inform subscribers
    about errors, or if it’s not possible to generate change events. A gap event contains
    information about the change in the header, such as the change type and record ID. It doesn’t
    include details about the change, such as record fields.

# Gap Events

Salesforce sometimes sends gap events instead of change events to inform subscribers about errors, or if it’s not possible to generate change events. A gap event contains information about the change in the header, such as the change type and record ID. It doesn’t include details about the change, such as record fields.

The conditions that cause gap events include:

-   The change event size exceeds the maximum 1 MB message size.
-   Some field type conversions of custom fields. For more information, see [Conversions That Generate a Gap Event](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_gap_event.htm "A gap event is generated for all the affected records for some field conversions from Picklist. The change event header of the gap event message contains information about the records, including the record IDs and a change type of GAP_UPDATE.").
-   When an internal error occurs in Salesforce preventing the change event from being generated.
-   Changes that occur outside the application server transaction and are applied directly in the database. For example, archiving of activities or a data cleanup job in the database. To not miss these operations, gap events are generated to notify you about those changes.

Gap events can have one of these changeType values in the event header.

-   GAP\_CREATE
-   GAP\_UPDATE
-   GAP\_DELETE
-   GAP\_UNDELETE

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

A changeType value of GAP\_OVERFLOW means that the event is an overflow event. For more information, see [Overflow Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_overflow.htm "To capture changes more efficiently, overflow events are generated for single transactions that exceed a threshold.").

Upon receiving a gap event message, your application can retrieve the Salesforce record using the record ID value to get the current data for your system. For more information about handling gap events, see [How to Handle a Gap Event](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm#section_handle_gap_event) in [Transaction-Based Replication Steps](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm "To maintain an accurate replica of your Salesforce org’s data in another system, subscribe using a transaction-based approach.").

The gap event's transactionKey represents the internal database transaction ID if the change was applied at the database layer, outside an application server transaction. If the gap event was emitted due to other reasons, such as hitting the 1 MB event size limit or an internal error, the transactionKey holds the application server transaction ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

If the same type of change occurs on the same Salesforce entity within the same transaction, sometimes multiple gap events are merged into a single gap event. The IDs of the changed records are included in the recordIds header field. For more information, see [Merged Change Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_merged_events.htm "For efficiency, sometimes change events for one transaction are merged into one event if the same change occurred in multiple records of the same object type during one second.").

## Example

This sample gap event is for an account creation and contains information about the change in the header. The change type is GAP\_CREATE.

{ "ChangeEventHeader": { "entityName": "Account", "recordIds": \[ "001ZM000001n4n5YAA" \], "changeType": "GAP\_CREATE", "changeOrigin": "", "transactionKey": "000a50de-05dd-07c4-22fb-44b7f9e72ab5", "sequenceNumber": 19, "commitTimestamp": 1714417112000, "commitNumber": 72784468115, "commitUser": "005ZM000000Q6ipYAC", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "Name": null, "Type": null, "ParentId": null, "BillingAddress": null, "ShippingAddress": null, "Phone": null, "Fax": null, "AccountNumber": null, "Website": null, "Sic": null, "Industry": null, "AnnualRevenue": null, "NumberOfEmployees": null, "Ownership": null, "TickerSymbol": null, "Description": null, "Rating": null, "Site": null, "OwnerId": null, "CreatedDate": null, "CreatedById": null, "LastModifiedDate": null, "LastModifiedById": null, "Jigsaw": null, "JigsawCompanyId": null, "AccountSource": null, "SicDesc": null, "External\_Account\_ID\_\_c": null }

#### See Also

-   [*SOAP API Developer Guide*: retrieve()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_retrieve.htm "SOAP API Developer Guide: retrieve() - HTML (New Window)")

-   [*Force.com SOQL and SOSL Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm "Force.com SOQL and SOSL Reference - HTML (New Window)")

## Related Topics

- Conversions That Generate a Gap Event (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_gap_event.htm)
- Overflow Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_overflow.htm)
- How to Handle a Gap
          Event (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm)
- Transaction-Based Replication Steps (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm)
- Merged Change Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_merged_events.htm)
