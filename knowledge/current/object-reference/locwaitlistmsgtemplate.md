---
title: "LocWaitlistMsgTemplate"
domain: object-reference
topic: locwaitlistmsgtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.521Z
estimatedTokens: 368
keywords: [LocWaitlistMsgTemplate, junction, connecting, LocationWaitlist, MessagingTemplate, API, version, 50.0, later, Calls]
---

# LocWaitlistMsgTemplate

> Represents a junction object connecting LocationWaitlist to
      MessagingTemplate. This object is available in API version 50.0 and later.

# LocWaitlistMsgTemplate

Represents a junction object connecting LocationWaitlist to MessagingTemplate. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the record was last viewed. |
| LocationWaitlistId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the LocationWaitlist record. |
| MessagingTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the MessagingTemplate record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner for this record. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the queue.Possible values are:approaching—In Progressconfirmation—Confirmedinactive—Inactiveready—Readyremoved—Removed |
