---
title: "BenefitAssignmentAdjustment"
domain: psc-api
topic: benefitassignmentadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.138Z
estimatedTokens: 1182
keywords: [BenefitAssignmentAdjustment, monetary, non-monetary, benefit, adjustment, made, enrollee, disbursed, various, frequencies, API, version, 56.0, later, Calls]
---

# BenefitAssignmentAdjustment

> Represents a monetary or non-monetary benefit adjustment made to an
         enrollee that can be disbursed in various frequencies. This object is available in API
      version 56.0 and later.

# BenefitAssignmentAdjustment

Represents a monetary or non-monetary benefit adjustment made to an enrollee that can be disbursed in various frequencies. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the type of adjustment made to the benefit assignment.Possible values are:PayableRecoverable |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Specifies the approval status of the benefit adjustment.Possible values are:ApprovedPendingRejected |
| BenefitAssignmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The benefit assignment associated with this benefit adjustment.This field is a relationship field.Relationship NameBenefitAssignmentRelationship TypeLookupRefers ToBenefitAssignment |
| Comment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description about the benefit adjustment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the benefit assignment adjustment. |
| ProcessingStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the processing status of the benefit adjustment.Possible values are:ActiveCancelledCompleteOn_HoldPendingProcessing |
| Reason | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The reason for making an adjustment to a benefit assignment. |
| RecurringAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The benefit adjustment amount that must be paid to the enrollee or the recipient at regular intervals. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case or participant associated with the benefit assignment.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToCase, CaseParticipant |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The start date and time of the benefit adjustment period. |
| TotalAdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The total benefit adjustment amount that must be paid to the enrollee or the recipient. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitAssignmentAdjustmentFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitAssignmentAdjustmentHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BenefitAssignmentAdjustmentOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BenefitAssignmentAdjustmentShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BenefitAssignmentAdjustmentFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitAssignmentAdjustmentHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BenefitAssignmentAdjustmentOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BenefitAssignmentAdjustmentShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
