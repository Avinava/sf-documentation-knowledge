---
title: "GeolocationBasedAction"
domain: field-service
topic: geolocationbasedaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.154Z
estimatedTokens: 667
keywords: [GeolocationBasedAction, Represents, geolocation-based, action, which, that’s, triggered, user, enters, exits, within, area, associated, object., API, version, 61.0, later., Supported, Calls]
---

# GeolocationBasedAction

> Represents a geolocation-based action, which is an action that’s
         triggered when a user enters, exits, or is within the area of the associated object.
      Available in API version 61.0 and later.

# GeolocationBasedAction

Represents a geolocation-based action, which is an action that’s triggered when a user enters, exits, or is within the area of the associated object. Available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe details of the selected action type. |
| ActionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of action.Possible values are:PlatformAlertQuickActionViewRecord |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the action. |
| InitialTimeInvoked | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCaptures the first time the mobile worker invoked this action. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastTimeInvoked | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCaptures the last time the mobile worker invoked this action. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the action. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Radius | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe distance in meters from the location of the associated object that triggers the action. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the record that the action is associated with.This field is a relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToServiceAppointment |
| TriggerType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe event that triggered this action.Possible values are:GeoFenceEnter—EnterGeoFenceExit—Exit |
