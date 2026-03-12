---
title: "DocumentChecklistItem"
domain: financial-services-cloud-object-reference
topic: documentchecklistitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.072Z
estimatedTokens: 1647
keywords: [DocumentChecklistItem, checklist, item, file, documentation, upload, API, version, 47.0, later, Calls, Associated, Objects]
---

# DocumentChecklistItem

> Represents a checklist item for a file documentation upload. This object
    is available in API version 47.0 and later.

# DocumentChecklistItem

Represents a checklist item for a file documentation upload. This object is available in API version 47.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead only. The ID of the account the document checklist item belongs to. The value of the field is set internally using the ParentRecordId field. |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionComments added when validating a target reference object against the document checklist item. This field is available only if you have enabled Integrated Onboarding for Financial Services Cloud. |
| DocumentCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document category related to the document checklist item. This field is available only if you have enabled Integrated Onboarding for Financial Services Cloud.This field is a relationship field. |
| DocumentTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the document type for the document checklist item. |
| Instruction | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInstructions associated with the document checklist item. |
| IsAccepted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the file has been accepted. The default value is False. |
| IsFrozen | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the item can no longer be modified. The default value is False. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates if the document checklist item is required. The default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the document checklist item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record. |
| ParentRecordId | Typemaster-detail referencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionOriginal parent object the document checklist item belonged to. |
| ReceivedDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameReceivedDocumentRelationship TypeLookupRefers ToReceivedDocument |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUploaded document checklist item status.Possible values are:AcceptedNewPendingWaivedNot VerifiedRejectedThe default value is New. |
| UploadedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPerson who uploaded the file. |
| ValidatedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who validated the target reference object against the document checklist item. This field is available only if you have enabled Integrated Onboarding for Financial Services Cloud. |
| ValidationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the target reference object was validated. This field is available only if you have enabled Integrated Onboarding for Financial Services Cloud. |
|  |
| WhoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson that the uploaded documentation pertains to. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[DocumentChecklistItemChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DocumentChecklistItemFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DocumentChecklistItemHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DocumentChecklistItemOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DocumentChecklistItemShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DocumentChecklistItemChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DocumentChecklistItemFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- DocumentChecklistItemHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DocumentChecklistItemOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DocumentChecklistItemShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
