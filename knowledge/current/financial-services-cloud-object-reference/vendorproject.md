---
title: "VendorProject"
domain: financial-services-cloud-object-reference
topic: vendorproject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.735Z
estimatedTokens: 752
keywords: [VendorProject, vendor's, proejct, loan, applied, API, version, 61.0, later, Calls]
---

# VendorProject

> Represents information about a vendor's proejct for which the loan was
         applied. This object is available in API version 61.0 and later.

# VendorProject

Represents information about a vendor's proejct for which the loan was applied. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial institutes approval status for the vendor project. |
| ApproverId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe User associated with the vendor project. The user is from the financial institute that approves the project.This field is a relationship field.Relationship NameApproverRefers ToUser |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scheduled end date of the vendor project. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Location associated with the vendor project.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the vendor's project. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of the project's representative. For example, the phone number of project manager or site lead. |
| Price | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the vendor project. |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current stage of this project. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the vendor project. |
| VendorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the vendor project for which the loan was applied.This field is a relationship field.Relationship NameVendorRefers ToAccount |
| VendorName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the vendor. |
| VendorProjectContact | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the project representative. |
