---
title: "CareObservationComponent"
domain: health-cloud-object-reference
topic: careobservationcomponent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.202Z
estimatedTokens: 1993
keywords: [CareObservationComponent, component, care, observation, API, version, 51.0, later, Calls, Usage, Associated, Objects]
---

# CareObservationComponent

> Represents information about a component of a care observation. This
    object is available in API version 51.0 and later.

# CareObservationComponent

Represents information about a component of a care observation. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BaselineUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe baseline value’s unit.Referenced ObjectsUnitOfMeasure |
| BaselineValueText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe baseline value of an observation represented as a string. |
| CareObservationId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionReferences the parent care observation that this component belongs to.Referenced ObjectsCareObservation |
| ComponentTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-generated code that represents the component type.Referenced ObjectsCodeSetBundleExampleThe LOINC code for niacin in blood. |
| IsObserved | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates a positive observation.A record can only have a value for one of these fields or field combinations:IsObservedObservationStartDateTime and ObservationEndDateTimeObservedValueCodeIdObservedValueTextObservedValueNumerator, ObservedValueDenominator, and ObservedValueUnitId |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was viewed. |
| LowerBaselineValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the lower limit of the baseline value range for the observation. |
| MissingDataReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why observation data is missing or incomplete. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the CareObservationComponent record. |
| NumericValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the observation in numeric form. |
| ObservationEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the end of the period related to observation component value.A record can only have a value for one of these fields or field combinations:IsObservedObservationStartDateTime and ObservationEndDateTimeObservedValueCodeIdObservedValueTextObservedValueNumerator, ObservedValueDenominator, and ObservedValueUnitId |
| ObservationStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the start of the period related to observation component value.A record can only have a value for one of these fields or field combinations:IsObservedObservationStartDateTime and ObservationEndDateTimeObservedValueCodeIdObservedValueTextObservedValueNumerator, ObservedValueDenominator, and ObservedValueUnitId |
| ObservedValueCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-generated code that represents the observed value.A record can only have a value for one of these fields or field combinations:IsObservedObservationStartDateTime and ObservationEndDateTimeObservedValueCodeIdObservedValueTextObservedValueNumerator, ObservedValueDenominator, and ObservedValueUnitIdReferenced ObjectsCodeSetBundle |
| ObservedValueDenominator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe denominator of the numerical type value observed. Use to record quantity, range, and ratio type values.A record can only have a value for one of these fields or field combinations:IsObservedObservationStartDateTime and ObservationEndDateTimeObservedValueCodeIdObservedValueTextObservedValueNumerator, ObservedValueDenominator, and ObservedValueUnitId |
| ObservedValueNumerator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numerator of the numerical type value observed. Use to record quantity, range, and ratio type values.A record can only have a value for one of these fields or field combinations:IsObservedObservationStartDateTime and ObservationEndDateTimeObservedValueCodeIdObservedValueTextObservedValueNumerator, ObservedValueDenominator, and ObservedValueUnitId |
| ObservedValueText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe text form of the value observed in the component.A record can only have a value for one of these fields or field combinations:IsObservedObservationStartDateTime and ObservationEndDateTimeObservedValueCodeIdObservedValueTextObservedValueNumerator, ObservedValueDenominator, and ObservedValueUnitId |
| ObservedValueUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the unit of the observed value. This field is used for quantity, range, and ratio type of observed values.A record can only have a value for one of these fields or field combinations:IsObservedObservationStartDateTime and ObservationEndDateTimeObservedValueCodeIdObservedValueTextObservedValueNumerator, ObservedValueDenominator, and ObservedValueUnitIdReferenced ObjectsUnitOfMeasure |
| UpperBaselineValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the upper limit of the baseline value range for the observation. |
| ValueInterpretation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the interpretation of values observed.Possible values are:HighLowNormal |
| ValueType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of observed value recorded in ObservedValueNumerator and ObservedValueDenominator.Possible values are:QuantityRangeRatio |

## Usage

This object is used to record the different components of an observation, such as different tests that are part of a clinical observation. Component records are connected to the parent observation records using the CareObservationId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CareObservationComponentFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareObservationComponentHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareObservationComponentChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- CareObservationComponentFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareObservationComponentHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareObservationComponentChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
