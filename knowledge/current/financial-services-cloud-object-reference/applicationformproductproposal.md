---
title: "ApplicationFormProductProposal"
domain: financial-services-cloud-object-reference
topic: applicationformproductproposal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.460Z
estimatedTokens: 884
keywords: [ApplicationFormProductProposal, proposal, presented, financial, institution, applicant, interest, rate, monthly, payment, validity, dates, total, API, version]
---

# ApplicationFormProductProposal

> Represents the proposal presented by the financial institution to the
         applicant with details of interest rate, monthly payment, validity dates, and total
         interest. This object is available in API version 61.0 and later. Available with
      Digital Lending permission set.

# ApplicationFormProductProposal

Represents the proposal presented by the financial institution to the applicant with details of interest rate, monthly payment, validity dates, and total interest. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=financial_services_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalDetails | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional information about the proposal. |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the proposal. |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application form associated with the proposal.This field is a relationship field.Relationship NameApplicationFormRelationship TypeLookupRefers ToApplicationForm |
| ApplicationFormProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe application form product that the proposal is associated with.This field is a relationship field.Relationship NameApplicationFormProductRelationship TypeMaster-detailRefers ToApplicationFormProduct (the master object) |
| InterestRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe interest rate for the product. |
| InterestRateType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of interest rate for the product.Valid values are:FixedVariable |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the offer is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. |
| MonthlyPayment | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe details of the monthly payment. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of theproduct proposal record of an application form. |
| SelectedBy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies who selected the proposal.Valid values are:ApplicantApplicant And LenderLender |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stage of the proposal.alid values are:FinalPre-Qual |
| Term | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe term length in months. |
| TotalInterest | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total interest. |
| ValidEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the proposal. |
| ValidStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the proposal. |
