---
title: "ChannelProgramMember"
domain: object-reference
topic: channelprogrammember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.471Z
estimatedTokens: 731
keywords: [ChannelProgramMember, partner, member, channel, program, API, version, 41.0, later, Calls, Associated, Objects]
---

# ChannelProgramMember

> Represents a partner who is a member of a channel program. This
		object is available in API version 41.0 and later.

# ChannelProgramMember

Represents a partner who is a member of a channel program. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date referenced. This field is available in API version 45.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date viewed. This field is available in API version 45.0 and later. |
| LevelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the channel program level. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the channel program member. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. ID of the user who is the owner of the record. |
| PartnerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the partner. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the channel program. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ChannelProgramMemberFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 46.0)

Feed tracking is available for the object.

[ChannelProgramMemberHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 46.0)

History is available for tracked fields of the object.

[ChannelProgramMemberOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ChannelProgramMemberShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 43.0)

Sharing is available for the object.

## Related Topics

- ChannelProgramMemberFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ChannelProgramMemberHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ChannelProgramMemberOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ChannelProgramMemberShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
