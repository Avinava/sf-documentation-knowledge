---
title: "Event Enrichment Considerations"
domain: change-data-capture
topic: event-enrichment-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.523Z
estimatedTokens: 623
keywords: [Event, Enrichment, Considerations, Keep, mind, enriched, change, events]
---

# Event Enrichment Considerations

> Keep in mind these considerations when using enriched change events.

# Event Enrichment Considerations

Keep in mind these considerations when using enriched change events.

No Apex Trigger Support

Event enrichment isn’t available in Apex change event triggers.

Latest Enriched Field Value Returned When Replaying an Event Message

Change event messages are stored in the event bus for a temporary duration. Enriched fields aren't stored with the event message in the event bus. When you retrieve an event from the event bus using a replay option, enriched fields are retrieved from the database and added to the event message before delivery. As a result, if an enriched field is updated after the event was stored, the replayed event message contains the latest value and not the original value for the enriched field. The only exception is when the enriched fields are part of the changed fields for the event. In this case, their values reflect the correct changed values.

Duplicate Replay ID for Ungrouped Enriched Event Messages

Salesforce sometimes groups event messages when the same change occurs in multiple records of one object during a transaction. For more information, see the recordIds field in [ChangeEventHeader Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm "Check out the descriptions of the fields that the change event header contains."). However, if change event messages are enriched, single event messages are sent because the external ID field values could be different for each record. Because these event messages are first grouped and then ungrouped, they contain duplicate ReplayId values and only one record ID in the recordIds field. You can still replay those events using the ReplayId option in Streaming API (CometD) or Pub/Sub API. Also, because change event messages aren’t optimistically grouped before being delivered to subscribers, event allocation usage could be higher.

CampaignMember Change Event

If a CampaignMember is deleted from a campaign, the change event message doesn’t include enriched fields because it’s a hard deletion—the record no longer exists in the database. The system can’t query the enriched field value for that record. However, if a CampaignMember is deleted as part of a cascade delete on the campaign, this deletion is a soft deletion, and the records are in the Recycle Bin. The system can query the soft-deleted record and obtain the enriched fields.

Gap and Overflow Events

Enriched fields aren’t supported for gap or overflow events.

## Related Topics

- ChangeEventHeader Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm)
