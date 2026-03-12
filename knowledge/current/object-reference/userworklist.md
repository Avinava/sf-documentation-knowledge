---
title: "UserWorkList"
domain: object-reference
topic: userworklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.058Z
estimatedTokens: 206
keywords: [UserWorkList, work, items, tab, Sales, Engagement, users, Calls]
---

# UserWorkList

> Represents a list of work items in the My List tab for Sales Engagement
      users.

# UserWorkList

Represents a list of work items in the My List tab for Sales Engagement users.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the work list is active or not. |
| ListType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of list, such as a call or email. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the work list. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the list. |
