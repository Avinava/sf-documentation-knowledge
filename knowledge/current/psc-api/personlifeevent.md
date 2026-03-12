---
title: "PersonLifeEvent"
domain: psc-api
topic: personlifeevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.150Z
estimatedTokens: 1171
keywords: [PersonLifeEvent, life, events, individual, marriage, birth, child, birthday, engagement, Calls, Associated, Objects]
---

# PersonLifeEvent

> Represents the life events of an individual, such as marriage, birth of a
			child, birthday, engagement.

# PersonLifeEvent

Represents the life events of an individual, such as marriage, birth of a child, birthday, engagement.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EventDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date on which the life event occurred. |
| EventDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the life event. |
| EventLocation | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the life event occurred.This is a compound field of type Address and combines these fields: EventLocationCity, EventLocationCountry, EventLocationGeocodeAccuracy, EventLocationLatitude, EventLocationLongitude, EventLocationPostalCode, EventLocationState, and EventLocationStreet. For more information, see Address Compound Fields. |
| EventType | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionRequired. The type of the life event. For example, birth, graduation, job, marriage, relocation, car, home, baby, retirement. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe the date when a life event expired. |
| ExpirationDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescribes why the event expired. |
| IsExpired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a life event has expired. The default value is False. |
| IsTentative | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the exact date of the event is not known. The default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the life event. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| PrimaryPersonId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the person to whom the life event is related. This field cannot be updated using API. |
| RelatedPersonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person related to the primary person in a life event involving two people, such as marriage. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PersonLifeEventFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PersonLifeEventHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PersonLifeEventOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PersonLifeEventShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PersonLifeEventFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PersonLifeEventHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PersonLifeEventOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PersonLifeEventShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
