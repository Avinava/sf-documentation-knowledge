---
title: "Shift"
domain: retail-api
topic: shift
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:40.759Z
estimatedTokens: 2505
keywords: [Shift, user, API, versions, 65.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# Shift

> Represents a shift for a user. Available in API versions 65.0 and
		later.

# Shift

Represents a shift for a user. Available in API versions 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), upsert()

## Special Access Rules

Consumer Goods Cloud must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BackgroundColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSets a background color when shifts are displayed in the UI. Use a 3- or 6-digit hexadecimal format, for example #FF00FF. Available in API version 54.0 and later. |
| EndLocation | TypelocationPropertiesNillableDescriptionCaptures the user’s geolocation at the end of the shift.This field is reserved for future use. |
| EndTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the shift ends. |
| GeoFnLcTypeAtShftEnd | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the allowed location type for geofence validation at the end of the shift.Possible values are:First CustomerHomeWarehouseThis field is reserved for future use. |
| GeoFnLcTypeAtShftStart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the allowed location type for geofence validation at the start of the shift.Possible values are:First CustomerHomeWarehouseThis field is reserved for future use. |
| GeoFnNotificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the notification type for geofence validation at the start and end of the shift.Possible values are:ErrorWarningThis field is reserved for future use. |
| IsGeoFnRqrAtShftEnd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether geofencing was enabled at the end of the shift.The default value is false.This field is reserved for future use. |
| IsGeoFnRqrAtShftStart | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether geofencing was enabled at the start of the shift.The default value is false.This field is reserved for future use. |
| IsGeoLcRqrAtShftEnd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether user's geolocation was captured at the end of the shift.The default value is false.This field is reserved for future use. |
| IsGeoLcRqrAtShftStart | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether user's geolocation was captured at the start of the shift.The default value is false.This field is reserved for future use. |
| IsHolidayShift | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates a shift that overlaps with holiday hours. The default value is false. Available in API version 55.0 and later. |
| IsNonStandard | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift is nonstandard, such as overtime or on-call shifts.The default value is false. Available in API version 54.0 and later. |
| IsOsidGeoFnRngAtShftEnd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift was ended outside the allowed distance between the user's GPS location and the geofence end location (true) or not (false).The default value is false.This field is reserved for future use. |
| IsOsidGeoFnRngAtShftStart | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift was started outside the allowed distance between the user's GPS location and the geofence start location (true) or not (false).The default value is false.This field is reserved for future use. |
| JobProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe job profile associated with the shift. Available in API versions 47.0 and later. |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe label that a shift is given. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed a related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed this record. |
| NotificationTypeAtShftEnd | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the notification type for open tours at the end of the shift.Possible values are:ErrorWarningThis field is reserved for future use. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the shift.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordsetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the recordset filter criteria selected for the shift. Available in API version 49.0 and later.This is a relationship field.Relationship NameRecordsetFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| ShiftNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe number automatically given to the shift upon creation. |
| ShiftTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe shift template ID, if the shift was created from a shift template. Available in API version 53.0 and later.This is a relationship field.Relationship NameShiftTemplateRelationship TypeLookupRefers ToShiftTemplate |
| ShouldAutoEnd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift was automatically ended when the tour was completed.The default value is false.This field is reserved for future use. |
| ShouldAutoStart | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift was automatically started when the tour began.The default value is false.This field is reserved for future use. |
| StartLocation | TypelocationPropertiesNillableDescriptionCaptures the user’s geolocation at the start of the shift.This field is reserved for future use. |
| StartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the shift starts. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe current status of the shift.Possible values are:CompleteIn ProgressNewThe default value is New.This field is a Dynamic Enum. The order of the picklist values depends on how the Admin configures them in Object Manager. This field is reserved for future use.This field is reserved for future use. |
| StatusCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the shift using static values. This field is derived from Status using the mapping defined in setup.Possible values are:CompleteIn progress—In ProgressNewThis field is reserved for future use. |
| TimeSlotType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of time slot for the shift. The same setup values as the TimeSlot field in the OperatingHours object.Possible values are:Normal (default value)Extended |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user assigned to the shift.This field is a relationship field.Relationship NameUserRefers ToUserThis field is reserved for future use. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ShiftChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 54.0)

Change events are available for the object.

[ShiftFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ShiftHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ShiftOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ShiftShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ShiftChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- ShiftFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- ShiftHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- ShiftOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- ShiftShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
