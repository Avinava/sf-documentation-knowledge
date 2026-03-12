---
title: "VoiceCallListItem"
domain: object-reference
topic: voicecalllistitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.227Z
estimatedTokens: 229
keywords: [VoiceCallListItem, phone, number, prioritized, call, Calls, Special, Access, Rules]
---

# VoiceCallListItem

> Represents a single phone number in a prioritized call
		list.

# VoiceCallListItem

Represents a single phone number in a prioritized call list.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CallListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related call list. |
| Ordinal | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order of the item in the overall call list. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the related record. |
| State | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionWhether the call list item is not called, called, or skipped. |
