---
title: "InsPolicyBillingInfo"
domain: financial-services-cloud-object-reference
topic: inspolicybillinginfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:37.656Z
estimatedTokens: 944
keywords: [InsPolicyBillingInfo, Stores, billing, supports, workflows, integration, downstream, financial, systems, API, 66.0]
---

> Stores information related to billing and supports billing workflows and
         integration with downstream financial systems. This object is available in API version
      66.0 and later.

# InsPolicyBillingInfo

Stores information related to billing and supports billing workflows and integration with downstream financial systems. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BillDayOfMonth | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe day of the month when invoice generation starts for installment billing if a customer chooses to pay in installments (1-31). |
| BillStartMonth | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe month when billing begins for recurring billing schedules (1–12, where 1 = January).Possible values are:1—January10—October11—November12—December2—February3—March4—April5—May6—June7—July8—August9—September |
| BillToContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contact related to the insurance policy bill.This field is a relationship field.Relationship NameBillToContactRefers ToContact |
| BillingTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rules that determine how an insurance policy is billed. For example, advance or arrears.This field is a relationship field.Relationship NameBillingTreatmentRefers ToBillingTreatment |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe insurance policy associated with the insurance policy billing item.This field is a relationship field.Relationship NameInsurancePolicyRelationship TypeMaster-detailRefers ToInsurancePolicy (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the insurance policy billing information.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of Billing Item. |
| PaymentTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the timing and conditions for payments and bill settlements for an insurance policy.This field is a relationship field.Relationship NamePaymentTermRefers ToPaymentTerm |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the insurance policy is sold as a one-time or an installment-based sale.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| ProrationPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how charges and refunds are adjusted during billing events such as, mid-cycle changes, cancellations, and upgrades.This field is a relationship field.Relationship NameProrationPolicyRefers ToProrationPolicy |
| TaxTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how taxes are calculated, applied, and reported for billing transactions.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |
