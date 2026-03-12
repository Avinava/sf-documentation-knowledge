---
title: "BenefitDisbursementAdj"
domain: psc-api
topic: benefitdisbursementadj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.167Z
estimatedTokens: 888
keywords: [BenefitDisbursementAdj, changes, enrollee's, benefit, made, monetary, non-monetary, similar, units, measure, API, version, 56.0, later, Calls]
---

# BenefitDisbursementAdj

> Represents the changes of an enrollee's benefit that can be made as
         monetary or non-monetary with similar units of measure. This object is available in
      API version 56.0 and later.

# BenefitDisbursementAdj

Represents the changes of an enrollee's benefit that can be made as monetary or non-monetary with similar units of measure. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The amount that's adjusted in the benefit disbursement. |
| AdjustmentReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the adjustment in the disbursement amount. |
| BenefitAssignmentAdjustmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit assignment adjustment associated with this disbursement.This field is a relationship field.Relationship NameBenefitAssignmentAdjustmentRelationship TypeLookupRefers ToBenefitAssignmentAdjustment |
| BenefitDisbursementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The benefit disbursement associated with this adjustment.This field is a relationship field.Relationship NameBenefitDisbursementRelationship TypeLookupRefers ToBenefitDisbursement |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the benefit disbursement adjustment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitDisbursementAdjFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitDisbursementAdjHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BenefitDisbursementAdjOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BenefitDisbursementAdjShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BenefitDisbursementAdjFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitDisbursementAdjHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BenefitDisbursementAdjOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BenefitDisbursementAdjShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
