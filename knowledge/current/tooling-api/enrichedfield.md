---
title: "EnrichedField"
domain: tooling-api
topic: enrichedfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.465Z
estimatedTokens: 746
keywords: [EnrichedField, selected, Change, Data, Capture, Enrichment, channel, member, non-empty, enriched, added, event, changed, API, version]
---

# EnrichedField

> Represents a field selected for Change Data Capture Enrichment for a
      channel and channel member. A non-empty enriched field is added to an update or delete change
      event even when not changed. Available in API version 51.0 and later.

# EnrichedField

Represents a field selected for Change Data Capture Enrichment for a channel and channel member. A non-empty enriched field is added to an update or delete change event even when not changed. Available in API version 51.0 and later.

## Supported SOAP API Calls

delete(), describeSObjects(), query(), retrieve()

## Supported REST API HTTP Methods

DELETE, GET, HEAD, Query

## Special Access Rules

-   This object is part of Change Data Capture Enrichment.
-   Use the EnrichedField object to query, retrieve, or delete enriched fields. Add an enriched field as part of PlatformEventChannelMember. For more information about Change Data Capture Enrichment and adding enriched fields, see [Enrich Change Events with Extra Fields When Subscribed with CometD](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm "HTML (New Window)") and [Example: Add Event Enrichment Fields with Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_enrich_tooling_api.htm "HTML (New Window)") in the Change Data Capture Developer Guide.
-   To retrieve or query this object, you must have the View Setup and Configuration permission.
-   To delete this object, you must have the Customize Application permission.

## Fields

| Field | Details |
| --- | --- |
| ChannelMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the PlatformEventChannelMember that this field is part of. For example, if a field is added to the AccountChangeEvent, which is part of PlatformEventChannelMember, ChannelMemberId is the ID of the PlatformEventChannelMember record. |
| Field | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe name of the field to enrich change events with. For a list of supported field types, see Enrich Change Events with Extra Fields When Subscribed with CometD in the Change Data Capture Developer Guide. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |

## Usage

To find out which channel members and fields you configured, query the EnrichedField object. For example, this query returns the channel member ID and the selected enriched field on that channel.

```

```

In these query results, the rows returned are ordered by the channel member ID. The first two rows contain two enriched fields on the same channel: the Industry field and a custom field, whose value is an ID. The last row is for a different channel member and contains the Phone enriched field.

| ChannelMemberId | Field |
| --- | --- |
| 0v8RM00000000JsYAI | Industry |
| 0v8RM00000000JsYAI | 00NRM000001gEx32AE |
| 0v8RM00000000fIYAQ | Phone |

## Code Examples

```
SELECT ChannelMemberId,Field FROM EnrichedField ORDER BY ChannelMemberId
```
