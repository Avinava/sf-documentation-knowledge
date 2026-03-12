---
title: "AccountFinancialSummary"
domain: financial-services-cloud-object-reference
topic: accountfinancialsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.322Z
estimatedTokens: 2160
keywords: [AccountFinancialSummary, summary, financial, associated, account, API, version, 62.0, later, Calls, Special, Access, Rules, Objects]
---

# AccountFinancialSummary

> Represents the summary of financial details associated with an account.
      This object is available in API version 62.0 and later.

# AccountFinancialSummary

Represents the summary of financial details associated with an account. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Financial Summary Rollup settings.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated account for which the financial summary is computed.This field is a relationship field.Relationship NameAccountRelationship TypeMaster-detailRefers ToAccount (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| LatestTransactionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the latest transaction related to any of the financial accounts was recorded. |
| LatestTransactionUpdatedDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the latest transaction was last updated. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account financial summary record. |
| PartyRelationshipGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe party relationship group associated with the account.NoteThis field is auto populated, if the account record type is a business account and has an associated PartyRelationshipGroupID.This field is a relationship field.Relationship NamePartyRelationshipGroupRefers ToPartyRelationshipGroup |
| TotalFinancialAccountBal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net balance of all the financial accounts associated with the account. |
| TotFinclAcctBalanceUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total financial account balance was last updated. |
| TotalHeldFinclAcctValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total combined value of all financial accounts held with the financial institution. |
| TotHldFinclAcctValUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total held financial account value was last updated. |
| TotalInsurancePolicyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of active insurance policies associated with the account. |
| TotInsurancePlcyCntUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total insurance policy count was last updated. |
| TotalLiabilityValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all the liabilities associated with the account. |
| TotLiabilityValueUpdtDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total liability value was last updated. |
| TotalNonFinancialAssetVal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all the non-financial assets associated with the account. |
| TotNonFinclAssetValUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total non-financial asset value was last updated. |
| TotalBankDepositValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all the bank deposits associated with the account. |
| TotalBankDepositValUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total bank deposit value was last updated. |
| TotalClaimCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of insurance claims associated with the account. |
| TotalClaimCountUpdtDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total claim count was last updated. |
| TotalFinancialAccountCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total count of all the financial accounts associated with the account. |
| TotalFinclAcctCountUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total financial account count was last updated. |
| TotalGrossWrittenPremAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all gross premium amounts for all active insurance policies associated with the account. |
| TotalGrWrtPremAmtUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total gross written premium amount was last updated. |
| TotalInvestmentValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all the investment accounts associated with the account. |
| TotalInvestmentValUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total investment value was last updated. |
| TotalManagedInvestmentValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total managed investment value of all the investment accounts managed by the financial institution. |
| TotalMngInvstValUpdtDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total managed investment value was last computed. |
| TotalOtsdCreditAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of the outstanding amounts of automotive loans, credit cards, home equity line of credits, mortgages, and loan accounts associated with the account. |
| TotalOtsdCreditAmtUpdtDt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total outstanding credit amount was last updated. |
| TotalPaidClaimAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all the claim amounts paid for the claims associated with the account. |
| TotalPaidClaimAmtUpdtDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total paid claim amount was last updated. |
| TotalPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of premium amounts of all the active policies associated with the account. |
| TotalPremiumAmountUpdtDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total premium amount was last updated. |
| TotalSumInsured | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of the insured values of all the active policies associated with the account. |
| TotalSumInsuredUpdtDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the total sum insured was last updated. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountFinancialSummaryChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[AccountFinancialSummaryHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API Version 63.0)

History is available for tracked fields of the object.

## Related Topics

- AccountFinancialSummaryChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- AccountFinancialSummaryHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
