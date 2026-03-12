---
title: "Visit"
domain: automotive-cloud
topic: visit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.719Z
estimatedTokens: 1419
keywords: [Visit, manager, schedules, rep, perform, usually, dealer, locations, Automotive, Cloud, API, version, 56.0, later, Calls]
---

# Visit

> Represents information about a visit that a manager schedules for a field rep
         to perform, usually at dealer locations. This object is available in Automotive Cloud
      in API version 56.0 and later.

# Visit

Represents information about a visit that a manager schedules for a field rep to perform, usually at dealer locations. This object is available in Automotive Cloud in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the visit.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActualVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit ended. |
| ActualVisitStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit started. |
| AddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe address associated with the visit.This field is a relationship field.Relationship NameAddressRelationship TypeLookupRefers ToAddress |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe contact associated with the visit.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| ContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purpose of the visit.This field is a polymorphic relationship field.Relationship NameContextRelationship TypeLookupRefers ToAccount__c, Case |
| InstructionDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecial instructions provided by a manager that the visitor refers to during a visit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe location of the dealer or partner where the visit must be conducted.This field is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the visit record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the visit record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the place that the visitor visits.This field is a polymorphic relationship field.Relationship NamePlaceRelationship TypeLookupRefers ToAddress, Location |
| PlannedVisitEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the visit is expected to end. |
| PlannedVisitStartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the visit is expected to start. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the visit. Visitors can’t edit this field.Possible values are:AbandonedCompletedErrorInProgress—In ProgressNonePlannedUnscheduledThe default value is Planned. |
| StatusRemarks | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reasons for abandoning or completing the visit as provided by the visitor. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user associated with the visit.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| VisitPriority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the visit.Possible values are:HighLowMedium |
| VisitTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of visit such as inspection type, or work type.This field is a polymorphic relationship field.Relationship NameVisitTypeRelationship TypeLookupRefers ToWorkType |
| VisitorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person visiting the place.This field is a polymorphic relationship field.Relationship NameVisitorRelationship TypeLookupRefers ToContact, ServiceResource, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VisitFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[VisitHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[VisitOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[VisitShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
