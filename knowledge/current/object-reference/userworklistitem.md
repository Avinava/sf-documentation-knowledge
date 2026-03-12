---
title: "UserWorkListItem"
domain: object-reference
topic: userworklistitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.062Z
estimatedTokens: 159
keywords: [UserWorkListItem, individual, work, item, tab, Sales, Engagement, users, Calls]
---

# UserWorkListItem

> Represents an individual work item in the My List tab for Sales Engagement
      users.

# UserWorkListItem

Represents an individual work item in the My List tab for Sales Engagement users.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| PriorityOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order of the item in the list. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the related record. |
| UserWorkListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related work list. |
