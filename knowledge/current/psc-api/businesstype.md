---
title: "BusinessType"
domain: psc-api
topic: businesstype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.315Z
estimatedTokens: 846
keywords: [BusinessType, category, any, activity, business, individual, healthcare, restaurant, retail, API, version, 49.0, later, Calls, Associated]
---

# BusinessType

> Represents a category of any activity (business or individual), such
      as healthcare, restaurant, or retail. This object is available in API version 49.0 and
      later.

# BusinessType

Represents a category of any activity (business or individual), such as healthcare, restaurant, or retail. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code identifying the principal business activity of a business or individual. |
| AuthorizationActivityType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of entity performing the activity.Possible values are:BusinessOccupationThe default value is Business. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing the business activity. |
| Industry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe industry to which the business is related.Possible values are:Food and BeveragesHealthcareLawRetail |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the business type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user that owns this record. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusinessTypeFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object. This object is available in API version 51.0 and later.

[BusinessTypeHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object. This object is available in API version 51.0 and later.

[BusinessTypeOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BusinessTypeShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Share is available for the object.

## Related Topics

- BusinessTypeFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BusinessTypeHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BusinessTypeOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BusinessTypeShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
