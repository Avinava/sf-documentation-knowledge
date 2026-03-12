---
title: "ContactPointBestContactTime"
domain: life-sciences-dev-guide
topic: contactpointbestcontacttime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.620Z
estimatedTokens: 1495
keywords: [ContactPointBestContactTime, optimal, time, visit, associated, contact, point, addresses, API, version, 65.0, later, Calls, Objects]
---

# ContactPointBestContactTime

> Represents the optimal time to visit associated contact point
         addresses. This object is available in API version 65.0 and later.

# ContactPointBestContactTime

Represents the optimal time to visit associated contact point addresses. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the account associated with the contact point address.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactPointReferenceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the contact point address linked to the best contact times associated with the account.This field is a polymorphic relationship field.Relationship NameContactPointReferenceRefers ToContactPointAddress |
| DayOfWeek | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe day of the week associated with the best contact time record.Possible values are:FridayMondaySaturdaySundayThursdayTuesdayWednesday |
| FromTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe best from time to reach the account. |
| FromTimeHours | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe best from time hours to reach the account.This field is a calculated field. |
| FromTimeInHours | TypedoublePropertiesFilter, Nillable, SortDescriptionThe best from time in hours to reach the account.This field is a calculated field. |
| FromTimeMinutes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe best from time minutes to reach the account.This field is a calculated field. |
| IndividualId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the individual associated with the contact point address.This field is a relationship field.Relationship NameIndividualRefers ToIndividual |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the contact point best contact time record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| TerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID the territory associated with the best time record.This field is a relationship field.Relationship NameTerritoryRefers ToTerritory2 |
| ToTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe best to time to reach the account. |
| ToTimeHours | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe best to time hours to reach the account.This field is a calculated field. |
| ToTimeMinutes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe best to time minutes to reach the account.This field is a calculated field. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the best time record.Possible values are:Appointment RequiredBest TimeClosedMy Best TimeOpen |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactPointBestContactTimeChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ContactPointBestContactTimeFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContactPointBestContactTimeHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContactPointBestContactTimeShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ContactPointBestContactTimeChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ContactPointBestContactTimeFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ContactPointBestContactTimeHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ContactPointBestContactTimeShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
