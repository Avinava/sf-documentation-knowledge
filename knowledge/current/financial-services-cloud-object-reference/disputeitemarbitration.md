---
title: "DisputeItemArbitration"
domain: financial-services-cloud-object-reference
topic: disputeitemarbitration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.991Z
estimatedTokens: 1482
keywords: [DisputeItemArbitration, arbitration, compliance, case, filed, transaction, that's, disputed, API, version, 62.0, later, Calls, Special, Access]
---

# DisputeItemArbitration

> Represents the details of the arbitration or compliance case filed for a transaction that's being disputed. This object is available in API version 62.0 and later.

# DisputeItemArbitration

Represents the details of the arbitration or compliance case filed for a transaction that's being disputed. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that's claimed by a party in a disputed transaction. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the arbitration or compliance case. |
| DisputeItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Dispute Item asscoiated with an arbitration or compliance case.This field is a relationship field.Relationship NameDisputeItemRelationship TypeMaster-detailRefers ToDisputeItem (the master object) |
| DisputeReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Dispute Reason associated with the disputed transaction for which an arbitration or compliance case is filed.This field is a relationship field.Relationship NameDisputeReasonRefers ToDisputeReason |
| DocumentUploadStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the upload status of the document or an image related to the arbitration or compliance case.Possible values are:CompletedFailedUnprocessed |
| ExternalCaseIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe uniqie identifier of the arbitration or compliance case assigned to a disputed transaction by a dispute management system, such as Mastercom or Visa. |
| IsEscalated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the pre-arbitration case was escalated (true) or not (false) to create an arbitration case.The default value is false. |
| IsReasonCodeUpdated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the reason code for the disputed transaction was updated (true) or not (fasle) before filing the arbitration or compliance case.The default value is false. |
| Memo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe memo content of the arbitration or compliance case. |
| ReasonCodeUpdateReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description for the reason code update. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the role under which an entity filed the arbitration or compliance case.Possible values are:AcquirerIssuer |
| Status | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the arbitration or compliance case retrieved from a dispute management system. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of case filed for the transaction that's being disputed.Possible values are:ArbitrationCompliancePre-ArbitrationPre-Compliance |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DisputeItemArbitrationChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DisputeItemArbitrationFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DisputeItemArbitrationHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DisputeItemArbitrationOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DisputeItemArbitrationShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DisputeItemArbitrationChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DisputeItemArbitrationFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- DisputeItemArbitrationHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DisputeItemArbitrationOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DisputeItemArbitrationShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
