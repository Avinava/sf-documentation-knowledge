---
title: "ComplianceControlVersion"
domain: omnistudio
topic: compliancecontrolversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.814Z
estimatedTokens: 1198
keywords: [ComplianceControlVersion, Represents, version, compliance, control, implements, requirements.., API, 65.0, later., Supported, Calls, Fields, Associated, Objects]
---

# ComplianceControlVersion

> Represents the version of the compliance control that implements compliance
         requirements.. This object is available in API version 65.0 and later.

# ComplianceControlVersion

Represents the version of the compliance control that implements compliance requirements.. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique name of the record in the API. |
| AssignedAdminId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe admin assigned to configure the compliance procedure.This field is a relationship field.Relationship NameAssignedAdminRefers ToUser |
| ComplianceControlId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related compliance control.This field is a relationship field.Relationship NameComplianceControlRelationship TypeMaster-detailRefers ToComplianceControl (the master object) |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the compliance control version. |
| ImplementationContext | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe implementation context specified for the compliance control version. |
| ImplementerReference | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe identifier of the implementer reference for the control version. |
| ImplementerType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of implementer for the control version. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the compliance control version. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RuleProcessorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related rule processor.This field is a relationship field.Relationship NameRuleProcessorRefers ToExpressionSet |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the compliance control version.Possible values are:ActiveConfiguredDraftPendingApproval—Pending ApprovalPendingConfiguration—Pending ConfigurationRetired |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ComplianceControlVersionChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ComplianceControlVersionFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ComplianceControlVersionHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ComplianceControlVersionShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ComplianceControlVersionChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- ComplianceControlVersionFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- ComplianceControlVersionHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
- ComplianceControlVersionShare (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)
