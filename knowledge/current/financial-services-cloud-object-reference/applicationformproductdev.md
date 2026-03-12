---
title: "ApplicationFormProductDev"
domain: financial-services-cloud-object-reference
topic: applicationformproductdev
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.443Z
estimatedTokens: 764
keywords: [ApplicationFormProductDev, junction, application, form, product, deviation, API, version, 61.0, later, Digital, Lending, permission, Calls]
---

# ApplicationFormProductDev

> Represents a junction between an application form product and a
         deviation. This object is available in API version 61.0 and later. Available with
      Digital Lending permission set.

# ApplicationFormProductDev

Represents a junction between an application form product and a deviation. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Applicant who submitted the application.This field is a relationship field.Relationship NameApplicantRefers ToApplicant |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application that's submitted for a product request.This field is a relationship field.Relationship NameApplicationFormRefers ToApplicationForm |
| ApplicationFormProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product that's being applied for in the application.This field is a relationship field.Relationship NameApplicationFormProductRelationship TypeMaster-detailRefers ToApplicationFormProduct (the master object) |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe approval status of the deviation.Possible values are:ApprovedPendingRejected |
| ApproverComments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe approver's comments to the deviation. |
| ApproverId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual or group who approves the deviation.This field is a polymorphic relationship field.Relationship NameApproverRefers ToGroup, User |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the deviation. |
| DeviationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe deviation requested for processing the application form.This field is a relationship field.Relationship NameDeviationRefers ToDeviation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MinimumApproverLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the minimum level of the approver who can approve the deviation.Possible values are:L1L2L3 |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the application form product deviation record. |
| ReviewerComments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reviewer's comments after assessing the deviation. For example, comments from an Underwriter. |
