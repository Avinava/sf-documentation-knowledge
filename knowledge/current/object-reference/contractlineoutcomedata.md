---
title: "ContractLineOutcomeData"
domain: object-reference
topic: contractlineoutcomedata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.340Z
estimatedTokens: 1095
keywords: [ContractLineOutcomeData, contract, line, outcome’s, captured, data, stores, start, date, end, API, version, 58.0, later, Calls]
---

# ContractLineOutcomeData

> Represents the contract line outcome’s captured data. It stores the data that
         was captured between the contract line outcome’s start date and end date. This object is
         available in API version 58.0 and later.

# ContractLineOutcomeData

Represents the contract line outcome’s captured data. It stores the data that was captured between the contract line outcome’s start date and end date. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Entitlements must be enabled.

## Fields

| Field | Details |
| --- | --- |
| CalculatedValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe value calculated based on the contract line outcome’s calculation method and the captured data. |
| CaptureDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the data was captured. |
| ContractLineOutcomeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract line outcome associated with the contract line outcome data record.This field is a relationship field.Relationship NameContractLineOutcomeRelationship TypeLookupRefers ToContractLineOutcome |
| KeyPerformanceIndicator | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe key performance indicators (fields or asset attributes) that define the contract line outcome’s compliance status. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the contract line outcome data record was last modified. Its UI label is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the contract line outcome data record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the contract line outcome data record. |
| Value | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual value of the key performance indicator. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractLineOutcomeDataChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ContractLineOutcomeDataFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContractLineOutcomeDataHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContractLineOutcomeDataOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ContractLineOutcomeDataShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ContractLineOutcomeDataChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContractLineOutcomeDataFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ContractLineOutcomeDataHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContractLineOutcomeDataOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ContractLineOutcomeDataShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
