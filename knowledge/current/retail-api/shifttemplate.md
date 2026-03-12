---
title: "ShiftTemplate"
domain: retail-api
topic: shifttemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.774Z
estimatedTokens: 1912
keywords: [ShiftTemplate, template, creating, shifts, API, version, 65.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ShiftTemplate

> Represents a template for creating shifts. This object is available in
      API version 65.0 and later.

# ShiftTemplate

Represents a template for creating shifts. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Consumer Goods Cloud must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BackgroundColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSets a background color when shifts are displayed in the UI. Use a 3- or 6-digit hexadecimal format, for example #FF00FF. Available in API version 54.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional information about the shift like number of breaks or activities. |
| Duration | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionHow long the shift lasts. The unit of measurement for this field is determined by ShiftTemplateDurationType. |
| GeoFnLcTypeAtShftEnd | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the allowed location type for geofence validation at the end of the shift.Possible values are:First CustomerHomeWarehouseThis field is reserved for future use. |
| GeoFnLcTypeAtShftStart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the allowed location type for geofence validation at the start of the shift.Possible values are:First CustomerHomeWarehouseThis field is reserved for future use. |
| GeoFnNotificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the notification type for geofence validation at the start and end of the shift.Possible values are:ErrorWarningThis field is reserved for future use. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift is active or inactive. |
| IsGeoFnRqrAtShftEnd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether geofencing was enabled at the end of the shift.The default value is false.This field is reserved for future use. |
| IsGeoFnRqrAtShftStart | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether geofencing was enabled at the start of the shift.The default value is false.This field is reserved for future use. |
| IsGeoLcRqrAtShftEnd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether user's geolocation was captured at the end of the shift.The default value is false.This field is reserved for future use. |
| IsGeoLcRqrAtShftStart | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether user's geolocation was captured at the start of the shift.The default value is false.This field is reserved for future use. |
| IsNonStandard | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift is nonstandard, such as overtime or on-call shifts.The default value is false. Available in API version 54.0 and later. |
| JobProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Job Profile record. This field is optional.This is a relationship field.Relationship NameJobProfileRelationship TypeLookupRefers ToJobProfile |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the shift template was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the shift template was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe shift template record name. |
| NotificationTypeAtShftEnd | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the notification type for open tours at the end of the shift.Possible values are:ErrorWarningThis field is reserved for future use. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the shift template.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordsetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the recordset filter criteria selected for the shift template. Available in API version 53.0 and later.This is a relationship field.Relationship NameRecordsetFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| ShiftTemplateDurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measurement for the shift template duration.Possible values are:H—HoursM—MinutesThe default value is H. |
| ShouldAutoEnd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift was automatically ended when the tour was completed.The default value is false.This field is reserved for future use. |
| ShouldAutoStart | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift was automatically started when the tour began.The default value is false.This field is reserved for future use. |
| StartTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time of day when the shift starts. |
| TimeSlotType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of time slot. Possible values are:NormalExtendedYou can use Extended to represent overtime shifts. Available in API version 55.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ShiftTemplateOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ShiftTemplateShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[ShiftTemplateChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change Data Capture events are available for the object. Available in API version 54.0 and later.

## Related Topics

- ShiftTemplateOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- ShiftTemplateShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
- ShiftTemplateChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
