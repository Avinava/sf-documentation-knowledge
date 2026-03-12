---
title: "ContractDocumentVersion"
domain: clm-developer-guide
topic: contractdocumentversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.666Z
estimatedTokens: 1621
keywords: [ContractDocumentVersion, Tracks, contract, document, versions, lifecycle, stages, API, version, 56.0, later, Calls, Associated, Objects]
---

# ContractDocumentVersion

> Tracks contract document versions through contract lifecycle stages. This object is
      available in API version 56.0 and later.

# ContractDocumentVersion

Tracks contract document versions through contract lifecycle stages. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the contract associated with the contract document version.This is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| CreatedByFullName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser who created this contract document version. |
| CreationProcessType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates how the document version was createdPossible values are:BatchMode—Batch ModeCheckoutCheckoutModify—Checkout ModifyContractReconciliation—Contract ReconciliationCreateContract—Create ContractCustomizeExternal_Online_Editor—Microsoft 365GenerateImportMicrosoft365ExternalReview—Non-Private External ReviewMicrosoft365PrivateExternalReview—Private External ReviewReconcileWordUpdateContract |
| DocConversionResourceName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the resource containing the Microsoft Word document file used to generate the output web document. |
| DocumentTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDocument Template Identifier.This is a relationship field.Relationship NameDocumentTemplateRelationship TypeLookupRefers ToDocumentTemplate |
| HasNewTemplateVersionAvl | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the latest version of the template is newer than the version used to generate the document.The default value is 'false'. |
| HasReconRedlinedSection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this contract document version contains red lines.The default value is 'false'. |
| HasRedlinedSection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this contract document version contains red lines.The default value is 'false'. |
| IsDocumentVersionLocked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the document is locked.The default value is 'false'. |
| IsLockedByCurrentUser | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user currently accessing the document has locked the document.The default value is 'false'. |
| IsSectionInfoStoredInDoc | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether section IDs are stored in the document (used for internal processing).The default value is 'false'. |
| ShouldBypassStateMdlTrnst | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Contract State Model Transition is bypassed (true) or ignored (false).The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LockType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the reason why the document version is locked.Possible values are:GenerateSuperUserUser |
| LockedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the user who locked this version.This is a relationship field.Relationship NameLockedByRelationship TypeLookupRefers ToUser |
| LockedByUserName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the user who locked this version. |
| NonStandardSectionCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCount of non-standard sections. |
| ReconRedlinedSectionCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal count of sections that contain red lines in the document version. |
| RedlinedSectionCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal count of sections that contain red lines in the document version. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionContract document version status.Possible values are:ActiveInactiveDraft |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionContract document version number. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractDocumentVersionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ContractDocumentVersionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ContractDocumentVersionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ContractDocumentVersionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ContractDocumentVersionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
