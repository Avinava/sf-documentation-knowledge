---
title: "ContractLineOutcome"
domain: object-reference
topic: contractlineoutcome
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.334Z
estimatedTokens: 1795
keywords: [ContractLineOutcome, contract, line, outcome’s, captured, data, capturing, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# ContractLineOutcome

> Represents information on a contract line outcome’s captured data and other
         related parameters that are used when capturing data. This object is available in API
      version 58.0 and later.

# ContractLineOutcome

Represents information on a contract line outcome’s captured data and other related parameters that are used when capturing data. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Entitlements must be enabled.

## Fields

| Field | Details |
| --- | --- |
| CalculationMethod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe method used for calculating the contract line outcome’s captured data to determine the outcome value. Select Average or As Captured to calculate the contract line outcome. Average calculates the outcome value based on the average of all data captured to date. As Captured calculates the outcome value based on the asset’s current data at the time of the compliance check.Possible values are:AsCapturedAverage |
| CaptureFrequency | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe frequency at which data capturing and contract compliance check for the contract line outcome occurs.Possible values are:DailyMonthlyWeekly |
| ComplianceStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates if the criteria were met. Compliant–The outcome is compliant with the contract. Not Compliant–The outcome isn’t compliant with the contract. Not Available–The outcome’s compliance information isn’t available yet. Invalid–The outcome isn’t valid because the option selected for the Criteria Field of the recordset filter criteria was deleted. To restart the calculation, create a new contract line outcome.Possible values are:CompliantInvalidNotAvailableNotCompliantThe default value is NotAvailable. |
| ContractLineItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contract line item associated with the contract line outcome.This field is a relationship field.Relationship NameContractLineItemRelationship TypeLookupRefers ToContractLineItem |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the contract line outcome. |
| EndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe contract line outcome's data capture end date. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the contract line outcome was last modified. Its UI label is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the contract line outcome was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the contract line outcome. |
| NextDataCaptureDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date of the next data capture and compliance check based on the capture frequency. The date is auto-populated and updated after each capture |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe contract line outcome’s owner. By default, the owner is the user who created the contract line outcome record. Its UI label is Contract Line Outcome Owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordsetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the recordset filter criteria in which the contract line outcome’s conditions are defined.This field is a relationship field.Relationship NameRecordsetFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| ServiceContractId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe service contract associated with the contract line item and the contract line outcome.This field is a relationship field.Relationship NameServiceContractRelationship TypeLookupRefers ToServiceContract |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe contract line outcome's data capture start date. |

## Usage

Use this object to define the data capture frequency and other related parameters that are used when capturing data in order to evaluate a service contract’s compliance.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractLineOutcomeChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ContractLineOutcomeFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContractLineOutcomeHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContractLineOutcomeOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ContractLineOutcomeShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [ContractLineOutcomeData](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractlineoutcomedata.htm "Represents the contract line outcome’s captured data. It stores the data that was captured between the contract line outcome’s start date and end date. This object is available in API version 58.0 and later.")

## Related Topics

- ContractLineOutcomeChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContractLineOutcomeFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ContractLineOutcomeHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContractLineOutcomeOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ContractLineOutcomeShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- ContractLineOutcomeData (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contractlineoutcomedata.htm)
