---
title: "FlowRecordElementOccurrence"
domain: object-reference
topic: flowrecordelementoccurrence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.446Z
estimatedTokens: 1217
keywords: [FlowRecordElementOccurrence, execution, metrics, element, flow, version, API, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# FlowRecordElementOccurrence

> Represents the execution metrics for a single element within a flow
         version. This object is available in API version 62.0 and later.

# FlowRecordElementOccurrence

Represents the execution metrics for a single element within a flow version. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe ISO code for the currency associated with the flow.Possible values are:USD—U.S. DollarThe default value is USD. |
| Entries | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times the element was initiated in all flow interviews after the flow version was executed. |
| Errors | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of errors for the element in all flow interviews after the flow version was executed. |
| Exits | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times the element was executed to completion in all flow interviews after the flow version was executed. |
| FlowRecordElementId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the flow element.This field is a relationship field.Relationship NameFlowRecordElementRefers ToFlowRecordElement |
| FlowRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the flow.This field is a relationship field.Relationship NameFlowRecordRefers ToFlowRecord |
| FlowRecordVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the flow version.This field is a relationship field.Relationship NameFlowRecordVersionRefers ToFlowRecordVersion |
| FlowRecordVersionOccurrenceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the flow occurrence.This field is a relationship field.Relationship NameFlowRecordVersionOccurrenceRelationship TypeMaster-detailRefers ToFlowRecordVersionOccurrence (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe API name of the flow element. |
| Stopped | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times execution of the element was stopped in all flow interviews after the flow version was executed. |
| TotalDuration | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe total time in milliseconds spent executing the element in all flow interviews. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowRecordElementOccurrenceChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FlowRecordElementOccurrenceFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FlowRecordElementOccurrenceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FlowRecordElementOccurrenceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FlowRecordElementOccurrenceShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FlowRecordElementOccurrenceChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- FlowRecordElementOccurrenceFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- FlowRecordElementOccurrenceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- FlowRecordElementOccurrenceOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FlowRecordElementOccurrenceShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
