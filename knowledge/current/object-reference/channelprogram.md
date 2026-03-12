---
title: "ChannelProgram"
domain: object-reference
topic: channelprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.459Z
estimatedTokens: 815
keywords: [ChannelProgram, channel, program, vendors, market, sell, their, products, partners, API, version, 41.0, later, Calls, Associated]
---

# ChannelProgram

> Represents a channel program that vendors use to market and sell
			their products through channel partners. This object is available in API version
		41.0 and later.

# ChannelProgram

Represents a channel program that vendors use to market and sell their products through channel partners. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCategory of the channel program. Categories group channel programs by type. For example, a reseller category would include all the different regional reseller channel programs. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the channel program. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the channel program is active. New channel programs are inactive by default. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the channel program. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the channel program. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ChannelProgramFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ChannelProgramHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ChannelProgramOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ChannelProgramShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ChannelProgramFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ChannelProgramHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ChannelProgramOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ChannelProgramShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
