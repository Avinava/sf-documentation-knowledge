---
title: "LoanApplicantLiability"
domain: financial-services-cloud-object-reference
topic: loanapplicantliability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.986Z
estimatedTokens: 505
keywords: [LoanApplicantLiability, junction, borrower, loan, application, liability, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicantLiability

> Represents a junction between a borrower and a loan application
			liability. This object is available in API version 47.0 and later.

# LoanApplicantLiability

Represents a junction between a borrower and a loan application liability. This object is available in API version 47.0 and later.

xxx

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanApplicantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the borrower associated with the liability. |
| LoanApplicationLiabilityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the loan application associated with the liability. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to this record. |
| Role | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies borrower's ownership role for the liability.Possible values are:Co-HolderPrimaryThe default value is Co-Holder. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicantLiabilityHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LoanApplicantLiabilityHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
