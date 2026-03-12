---
title: "LocationWaitlist"
domain: object-reference
topic: locationwaitlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.510Z
estimatedTokens: 815
keywords: [LocationWaitlist, queue, created, specific, location, Multiple, queues, sales, agent, standard, vulnerable, groups, party, people, represented]
---

# LocationWaitlist

> Represents a queue created for a specific location. Multiple queues can be
      created for a single location. For example, you can have a queue for each sales agent or a
      standard queue and a queue for vulnerable groups. The specific party of people in a queue is
      represented by LocationWaitlistedParty. This object is available in API version 50.0 and
    later.

# LocationWaitlist

Represents a queue created for a specific location. Multiple queues can be created for a single location. For example, you can have a queue for each sales agent or a standard queue and a queue for vulnerable groups. The specific party of people in a queue is represented by LocationWaitlistedParty. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the BusinessHours record that contains the hours the business is open. |
| ClosedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time a queue is closed. |
| CumulativeGuestCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of guests allowed. |
| CumulativeGuestGroupCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of groups allowed. |
| CurrentGuestCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current number of guests. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of this record. |
| GuestCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total capacity of guests. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the record was last viewed. |
| MaxPartySize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum size of a group. |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe messaging channel ID. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the group. |
| OpenDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time a queue is open. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner for this record. |
| PartyReminderDelayMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of minutes between when a party is notified and when they receive a reminder. |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location ID for this record. |
| ResourceCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe capacity for this resource. |
| ResourceOccupancyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe occupancy count for this resource. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the queue.Possible values are:closedopenpaused |
