---
title: "CollaborationRoom"
domain: object-reference
topic: collaborationroom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.605Z
estimatedTokens: 530
keywords: [CollaborationRoom, collaboration, room, links, Salesforce, Slack, channel, applications, specific, cases, swarming, reporting, API, version, 55.0]
---

# CollaborationRoom

> Represents a collaboration room, which links Salesforce to a Slack channel
         used by applications with specific use cases, such as swarming or reporting. This
      object is available in API version 55.0 and later.

# CollaborationRoom

Represents a collaboration room, which links Salesforce to a Slack channel used by applications with specific use cases, such as swarming or reporting. This object is available in API version 55.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

To access this object, enable the Slack Terms of Service and one of:

-   Sales Cloud for Slack App
-   Service Cloud for Slack App
-   CRM Analytics for Slack App
-   Industries Cloud for Slack App
-   Health Cloud for Slack App

## Fields

| Field | Details |
| --- | --- |
| IsArchived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the collaboration room is archived (true) or not (false).The default value is false. |
| IsAutoJoin | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether new users automatically join the collaboration room. Used for Sales Cloud for Slack App.The default value is false. |
| IsExternal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether external users are members of the Slack channel (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of collaboration room. |
| PlatformKey | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the Slack channel. |
| TeamKey | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the Slack workspace. |
