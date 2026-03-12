---
title: "BusinessProfile"
domain: psc-api
topic: businessprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.309Z
estimatedTokens: 558
keywords: [BusinessProfile, business, license, permit, application, API, version, 49.0, later, Calls, Associated, Objects]
---

# BusinessProfile

> Represents details about the business on the license or permit application. This object is available in API version 49.0 and later.

# BusinessProfile

Represents details about the business on the license or permit application. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), , getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the account associated with this business profile. |
| BusinessOperatingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, Update, idLookupDescriptionName that the business operates with. |
| BusinessStructure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBusiness structure as mentioned in the business license application.Possible values are:CorporationLLCPartnershipSole Proprietorship |
| BusinessTaxIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID issued to the business by the taxation authority. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the business profile. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusinessProfileHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[BusinessProfileFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- BusinessProfileHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BusinessProfileFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
