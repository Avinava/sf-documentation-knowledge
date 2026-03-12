---
title: "CommissionSchedule"
domain: object-reference
topic: commissionschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.670Z
estimatedTokens: 1532
keywords: [CommissionSchedule, commission, calculation, rate, definition, Calculates, commissionable, event, Calls, Associated, Objects]
---

# CommissionSchedule

> Represents a commission calculation and rate definition. Calculates
         commission values for a commissionable event.

# CommissionSchedule

Represents a commission calculation and rate definition. Calculates commission values for a commissionable event.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicableObject | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionThe object for which this Commission Schedule calculates commissions.Possible values are:ContractInsurancePolicyProducerQuote |
| CalcProcessInputMapping | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe input mappings from the object fields to the variables used in the commission calculation. |
| CalcProcessOutput | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe formula applied to this Commission Schedule’s process output that calculates the final commission amount. |
| CalcProcessOutputConvNotation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAn optimized version of the CalcProcessOutput formula that calculates the commission. Not user-editable. |
| CalculationProcessName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Integration Procedure, Calculation Matrix, or Calculation Procedure this Commission Schedule uses for calculations. |
| CalculationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of calculation or process used when this Commission Schedule is used.Possible values are:AmountCalculationMatrixCalculationProcedureIntegrationProcedureRate |
| CommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe commission amount for the Commission Schedule when the process type is Amount. |
| CommissionRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe commission percentage for the Commission Schedule when the process type is Rate. |
| CommissionStructureType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the commission calculation is Flat or Tiered when the process type is Matrix.Possible values are:FlatTieredThe default value is Flat. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe effective end date of the Commission Schedule. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe effective start date of the Commission Schedule. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Commission Schedule is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Commission Schedule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TierDefinition | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInternal-only. Applies when the CalculationType is CalculationMatrix. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CommissionScheduleChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[CommissionScheduleFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CommissionScheduleHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CommissionScheduleOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CommissionScheduleShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CommissionScheduleChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CommissionScheduleFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CommissionScheduleHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CommissionScheduleOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CommissionScheduleShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
