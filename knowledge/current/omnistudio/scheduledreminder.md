---
title: "ScheduledReminder"
domain: omnistudio
topic: scheduledreminder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:54.357Z
estimatedTokens: 220
keywords: [ScheduledReminder, Represents, information, reminder, schedule., API, version, 60.0, later., Supported, Calls, Fields]
---

# ScheduledReminder

> Represents information about the reminder schedule. This object is
      available in API version 60.0 and later.

# ScheduledReminder

Represents information about the reminder schedule. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| RelatedRecord | TypestringPropertiesCreate, Filter, SortDescriptionThe record in an object for which the reminder is scheduled. |
| ReminderDefinitionId | TypereferencePropertiesCreate, Filter, SortDescriptionThe reminder criteria that's associated with the schedule.This field is a relationship field.Relationship NameReminderDefinitionRelationship TypeLookupRefers ToReminderDefinition |
| ScheduledDateTime | TypedateTimePropertiesCreate, Filter, SortDescriptionThe date when the reminder will be sent. |
| UniqueIdentifier | TypestringPropertiesCreate, Filter, SortDescriptionThe identifier of the reminder schedule. |
