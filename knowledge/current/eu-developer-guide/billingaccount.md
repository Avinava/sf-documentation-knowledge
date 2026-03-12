---
title: "BillingAccount"
domain: eu-developer-guide
topic: billingaccount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.139Z
estimatedTokens: 1200
keywords: [BillingAccount, customer's, billing, backend, system, maintain, bill, frequency, autopay, API, version, 62.0, later, Calls]
---

# BillingAccount

> Represents the customer's billing controls in the backend system. Used to set
         up and maintain details such as bill frequency, bill format, and autopay details. This
      object is available in API version 62.0 and later.

# BillingAccount

Represents the customer's billing controls in the backend system. Used to set up and maintain details such as bill frequency, bill format, and autopay details. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BillCopiesRequested | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of bill copies per month requested by the customer. |
| BillingEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address to use for email delivery of bills. |
| ContactPreferenceType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the preferred method of communications to the contacts in this account such as mail, email or phone.Possible values are:EmailPhoneSMS |
| CreditRating | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe credit rating of the customer |
| CreditScore | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe credit score of the customer |
| CustomerClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpeficies the grouping of accounts by attributes such as residential, small or medium businesses etc. Used to drive accounting processes, business logic, and validation rules.Possible values are:CommercialIndustrialRetailSmall Scale |
| ExtlBillCycle | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the grouping that controls when a bill is produced.Possible values are:AnnualMonthlyQuarterly |
| ExtlBillDeliveryMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the chosen method to receive bills.Possible values are:EBillPaperSMS |
| ExtlBillFormat | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the format of the bill that the customer receives, such as a detailed or a summary bill.Possible values are:Detailed StatementGroup BillSummary Bill |
| ExtlBillFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the the frequency at which bills are generated such as Monthly, Quarterly or Weekly.Possible values are:MonthlyQuarterlyWeekly |
| ExtlReferenceIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the billing system. |
| ExtlTaxExmpEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until which the tax exemption is valid. |
| ExtlTaxExmpPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTax exemption percentage the account is eligible for. |
| ExtlTaxExmpStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the tax exemption is valid. |
| ExtlTaxExmpType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of tax exemption the account is eligible for.Possible values are:Energy Tax IncentivesLower Income Group |
| ExtlTaxIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external tax identifier number for this customer. |
| IsAutopayEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the customer has opted for automatic payment.The default value is false. |
| IsBillingHold | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether billing is suspended on this customer's accountThe default value is false. |
| PrimaryBillAddr | TypeaddressPropertiesFilter, NillableDescriptionAddress to which bills are to be sent |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the customer billing account.Possible values are:ActiveInactiveSuspendedThe default value is Active. |
| TmpBillingAddr | TypeaddressPropertiesFilter, NillableDescriptionThe alternative address if the bill should not be sent to the customer's primary address |
| TmpBillingAddrEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date when the alternate billing address should be used |
| TmpBillingAddrStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date when the alternate billing address should be used |
