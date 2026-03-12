---
title: "Enrich Change Events with Extra Fields"
domain: change-data-capture
topic: enrich-change-events-with-extra-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.531Z
estimatedTokens: 1760
keywords: [Enrich, Change, Events, Extra, event, messages, include, new, changed, sometimes, unchanged, needed, processing, replicating, data]
---

# Enrich Change Events with Extra Fields

> Change event messages include values for new and changed fields, but sometimes
    unchanged field values are needed for processing or replicating data. For example, use
    enrichment when your app needs an external ID field for matching records in an external system.
    Or always include a field that provides important information about the changed record. You can
    select any field whose type is supported.

# Enrich Change Events with Extra Fields

Change event messages include values for new and changed fields, but sometimes unchanged field values are needed for processing or replicating data. For example, use enrichment when your app needs an external ID field for matching records in an external system. Or always include a field that provides important information about the changed record. You can select any field whose type is supported.

Event enrichment is supported for subscribers that use Pub/Sub API, CometD (Streaming API), or event relays. Fields that you select for enrichment are included in change events for update and delete operations. Enriched fields aren’t included in change events for create and undelete operations because these events contain all the populated fields. Also, because no change event is generated for a hard-deleted record, which is a record deleted from the Recycle Bin, enriched fields aren’t available. If the enriched fields have an empty value, they aren’t included in the event messages in CometD clients and event relays, and are included with null values in Pub/Sub API clients. If the enriched fields are updated to null, they’re included in the event as changed fields and not as enriched fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

If your client-side parsing code expects only changed fields in the event payload, the presence of enriched fields can require a change to the code. Check your client-side code, and modify it if necessary. You can determine which fields are changed by using the changedFields header field. For more information, see [ChangeEventHeader Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm "Check out the descriptions of the fields that the change event header contains.").

Event enrichment is available for channels that support multiple entities, such as the standard /data/ChangeEvents channel, or custom channels, such as /data/SalesEvents\_\_chn. You can’t add enrichment directly to single-entity channels, such as /data/<Entity>ChangeEvent. For example, say that you want to add the Account Industry field for enrichment. You can do that to the custom channel SalesEvents\_\_chn, assuming AccountChangeEvent is a member of that channel. Then, if you subscribe to /data/SalesEvents\_\_chn, the Industry field is included in account change events on that channel. If you subscribe to another channel that isn’t enriched with this field, such as /data/ChangeEvents, or another custom channel, account change events don’t include the Industry field.

We recommend that you configure event enrichment on a custom channel and not the standard /data/ChangeEvents channel. This way, other subscribers that receive change events on the standard channel don’t receive unchanged fields that they don’t expect. If you create a custom channel and configure event enrichment on it, you isolate the fields sent to only the clients that anticipate those fields. To learn how to create a custom channel, see [Compose Streams of Change Data Capture Notifications with Custom Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm "Create a custom channel if you have multiple subscribers and each subscriber receives change events from a different set of entities. Also, use a custom channel with event enrichment to isolate sending enriched fields in change events on a specific channel. Custom channels group and isolate change events for each subscriber so subscribers receive only the types of events they need.").

As part of the fields that a change event object contains, these field types are supported for enriched fields.

-   Address
-   Auto Number
-   Checkbox
-   Currency
-   Date, Date/Time, Time
-   Email
-   External Lookup Relationship
-   Geolocation
-   Hierarchical Relationship on User
-   Lookup Relationship
-   Master-Detail Relationship
-   Name
-   Number
-   Percent
-   Phone (and Fax)
-   Picklist
-   Roll-Up Summary
-   Text
-   TextArea
-   URL

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

-   Formula fields aren’t supported for enriched fields because they aren’t supported for change events.
-   Only the TextArea field type is supported, and not TextArea (Long), TextArea (Rich), or TextArea (Encrypted).
-   Compound fields, such as Name, Address, and Geolocation fields, are supported for enriched fields. You can specify an entire compound field for enrichment but not the individual constituent fields. For example, you can enrich an event with the Lead Name field. The enriched change event contains the constituent fields as part of the Name field, including FirstName, MiddleName, LastName, and Suffix. In CometD clients, all non-empty constituent fields are returned as part of the compound field in the enriched change event. In Pub/Sub API clients, all constituent fields are returned as part of the compound field including the null fields.
-   For a relationship field, you can select only the field as an enriched field. You can’t traverse the fields on the related object. The enriched change event contains the ID of the related record. For example, to enrich a contact change event with the ID of the related account, select the Account relationship field as the name of the enriched field for ContactChangeEvent, and not Account.Name. For custom relationship fields, specify the relationship field name with the \_\_c suffix, such as RelField\_\_c.
-   You can add up to 10 enriched fields in each channel member. A compound field counts as one field. This allocation is per channel member. For example, if you have a channel with two channel members, the channel can be enriched with 20 fields total, 10 for each channel member.

Select fields to enrich your change event messages by using the PlatformEventChannelMember object in Tooling API or Metadata API.

-   **[Example: Add Event Enrichment Fields with Tooling API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_tooling_api.htm)**
    To add event enrichment fields, use the PlatformEventChannelMember Tooling API object, and specify the fields, the channel, and channel member.
-   **[Example: Add Event Enrichment Fields with Metadata API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_metadata_api.htm)**
    To add event enrichment fields, use the PlatformEventChannelMember metadata type, and specify the fields, the channel, and channel member.
-   **[Example: Delivered Enriched Event Messages](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_event_example.htm)**
    Check out example event messages that contain enriched fields for update and delete operations.
-   **[Event Enrichment Considerations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_considerations.htm)**
    Keep in mind these considerations when using enriched change events.

## Related Topics

- ChangeEventHeader Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm)
- Compose Streams of Change Data Capture Notifications with Custom Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm)
- Example: Add Event Enrichment Fields with Tooling API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_tooling_api.htm)
- Example: Add Event Enrichment Fields with Metadata API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_metadata_api.htm)
- Example: Delivered Enriched Event Messages (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_event_example.htm)
- Event Enrichment Considerations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_considerations.htm)
