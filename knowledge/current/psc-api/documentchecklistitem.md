---
title: "DocumentChecklistItem"
domain: psc-api
topic: documentchecklistitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.865Z
estimatedTokens: 1012
keywords: [DocumentChecklistItem, checklist, item, file, documentation, upload, Calls, Associated, Objects]
---

# DocumentChecklistItem

> Represents a checklist item for a file documentation upload.

# DocumentChecklistItem

Represents a checklist item for a file documentation upload.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the account the document checklist item belongs to. |
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
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUploaded document checklist item status.Possible values are:AcceptedNewPendingRejectedThe default value is New. |
| UploadedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPerson who uploaded the file. |
| WhoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson that the uploaded documentation pertains to. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[DocumentChecklistItemFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DocumentChecklistItemHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DocumentChecklistItemOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DocumentChecklistItemShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DocumentChecklistItemFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- DocumentChecklistItemHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- DocumentChecklistItemOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- DocumentChecklistItemShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
