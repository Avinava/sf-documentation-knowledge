---
title: "CaseProceeding"
domain: omnistudio
topic: caseproceeding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.763Z
keywords: [CaseProceeding, Special, Access, Rules, Fields, Associated, Objects]
---

# CaseProceeding

# CaseProceeding

Represents a legal and formal demand for the enforcement of an individual’s rights against another party in a court of justice. This object is available in API version 64.0 and later.

## Special Access Rules

This is a standard object and is available with Collections and Recovery permission set in API version 64.0 and later.

## Fields

| Field | Details |
| --- | --- |
| AddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAddress of the location where the case proceeding is being conducted.This field is a relationship field.Relationship NameAddressRelationship TypeLookupRefers ToAddress |
| ApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe relationship between case proceeding and a business license application or an individual application.This field is a polymorphic relationship field.Relationship NameApplicationRelationship TypeLookupRefers ToBusinessLicenseApplication, IndividualApplication |
| CaseFilingDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe data and time when the case proceeding was initiated. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case associated with the case proceeding record.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the case proceeding record. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the case proceeding was completed. |
| ExternalCaseIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the related case in an external system. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for this case proceeding. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the case proceeding record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the case proceeding record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedCaseProceedingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a case proceeding related to this case proceeding.This field is a relationship field.Relationship NameRelatedCaseProceedingRelationship TypeLookupRefers ToCaseProceeding |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time from when the case proceeding began. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the case proceeding.Possible values are:CompletedPlanned |
| SubType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subtype of the case proceeding.Possible values are:AppealDispositionReview Hearing |
| TotalLegalExpenses | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal legal proceeding expenses for the case associated with a collection plan. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of case proceeding.Possible values are:Board ProceedingCourt ActionMediationWarrant Request |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CaseProceedingFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CaseProceedingHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CaseProceedingOwnerSharingRule](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CaseProceedingShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.