---
title: "FundTransferRequest"
domain: financial-services-cloud-object-reference
topic: fundtransferrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.366Z
estimatedTokens: 878
keywords: [FundTransferRequest, fund, transfer, two, financial, accounts, API, version, 65.0, later, Calls]
---

# FundTransferRequest

> Represents the details of fund transfer request between two financial
         accounts. This object is available in API version 65.0 and later.

# FundTransferRequest

Represents the details of fund transfer request between two financial accounts. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Case that's associated with the fund transfer request.This field is a relationship field.Relationship NameCaseRefers ToCase |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional details or notes about the fund transfer request. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the final transfer of the recurring series is scheduled to be sent. |
| Frequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval at which the fund transfers occur in a recurring fund transfer request. |
| FromId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe source from which the funds are transferred.This field is a relationship field.Relationship NameFromRefers ToFinancialAccount |
| InstallmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of payments to be made in a recurring fund transfer request. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProcessingReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the fund transfer request in an external system. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the first transfer is scheduled to be sent. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the fund transfer request. |
| ToFinancialAccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe financial account to which the funds are being transferred.This field is a relationship field.Relationship NameToFinancialAccountRefers ToFinancialAccount |
| ToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe destination to which the funds are being transferred.This field is a polymorphic relationship field.Relationship NameToRefers ToFinancialAccount |
| TransferFailureReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe specific error or reason provided when the fund transfer failed. |
| TransferType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of the fund transfer request. |
