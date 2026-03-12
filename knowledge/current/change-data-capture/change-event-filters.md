---
title: "Change Event Filters"
domain: change-data-capture
topic: change-event-filters
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.609Z
estimatedTokens: 861
keywords: [Change, Event, Filters, Filter, stream, events, adding, expression, channel, member, contain, Salesforce, entity, part, ChangeEventHeader]
---

# Change Event Filters

> Filter a stream of change events by adding a filter expression on a channel
                member. A filter expression can contain Salesforce entity fields and event header
                fields, which are part of ChangeEventHeader. A change data capture channel can have
                one or more channel members, and each channel member can have its own filter.

# Change Event Filters

Filter a stream of change events by adding a filter expression on a channel member. A filter expression can contain Salesforce entity fields and event header fields, which are part of ChangeEventHeader. A change data capture channel can have one or more channel members, and each channel member can have its own filter.

The filter can still be evaluated even if the subscriber has no view access to the fields in the filter expression. For more information, see field-level security in [Field Considerations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_considerations.htm "Keep these considerations in mind for the fields in a filter expression.").

## Auto-Enrichment of Filtered Fields

Each Salesforce entity field referenced in a filter expression is automatically enriched, which means that the change event message always contains the filtered field. Without enrichment, change events contain only new and changed fields of Salesforce records. With a filter and auto-enrichment, fields referenced in the filter expression are included in the change event message, provided that they’re not empty and the subscriber has view access to them. For more information about event enrichment, see [Enrich Change Events with Extra Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm "Change event messages include values for new and changed fields, but sometimes unchanged field values are needed for processing or replicating data. For example, use enrichment when your app needs an external ID field for matching records in an external system. Or always include a field that provides important information about the changed record. You can select any field whose type is supported.").

## Change Event Header Fields

You can add ChangeEventHeader fields in a filter expression, except for fields that are arrays. For a list of header fields, see [ChangeEventHeader Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm "Check out the descriptions of the fields that the change event header contains.").

The unsupported array fields are:

-   recordIds
-   nulledfields
-   diffFields
-   changedFields

ChangeEventHeader fields contain information about the change, such as the change type and the ID of the user who made the change. For example, you can use the ChangeEventHeader.changeType field in a filter expression to receive events only for record updates.

-   **[Filter Expression Format](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_expression_format.htm)**
    The filter expression format is based on SOQL and supports a subset of SOQL operators and field types. The filter expression can contain one or more field expressions, joined by a logical operator.
-   **[Field Considerations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_considerations.htm)**
    Keep these considerations in mind for the fields in a filter expression.
-   **[Event Delivery Usage for Filtered Streams](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_event_allocations.htm)**
    The event delivery allocation applies to the number of events delivered after the filter is applied and not before filtering. Because a filter can reduce the number of events delivered to a subscriber, using a filter helps lower a subscriber's usage of the event delivery allocation.

## Related Topics

- Field Considerations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_considerations.htm)
- Enrich Change Events with Extra Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm)
- ChangeEventHeader Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm)
- Filter Expression Format (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_expression_format.htm)
- Event Delivery Usage for Filtered Streams (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_event_allocations.htm)
