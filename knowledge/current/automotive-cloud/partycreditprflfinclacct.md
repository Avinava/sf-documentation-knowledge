---
title: "PartyCreditPrflFinclAcct"
domain: automotive-cloud
topic: partycreditprflfinclacct
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:01.377Z
estimatedTokens: 1317
keywords: [PartyCreditPrflFinclAcct, financial, accounts, credit, card, auto, loan, mortgage, account, reported, bureau, Helps, lenders, review, borrower's]
---

# PartyCreditPrflFinclAcct

> Represents information about financial accounts, such as a credit card, an
         auto loan, or a mortgage account, reported by a credit bureau. Helps lenders to review the
         details of a borrower's accounts, both active and inactive.  This object is available
      in API version 65.0 and later.

# PartyCreditPrflFinclAcct

Represents information about financial accounts, such as a credit card, an auto loan, or a mortgage account, reported by a credit bureau. Helps lenders to review the details of a borrower's accounts, both active and inactive. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountBalance | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe outstanding balance on the financial account. |
| AccountNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the financial account. |
| AccountOwnership | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ownership of the financial account.Possible values are:IndividualJoint |
| ApprovedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe credit limit approved by the lender. |
| ClosingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account was closed. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LenderName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the lender. |
| MonthsReviewed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of months reviewed for the credit report. |
| NinetyDayDelinquencyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times a payment has been 90 days late. |
| OpeningDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account was opened. |
| PartyCreditProfileId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe party credit profile associated with the Financial Account.This field is a relationship field.Relationship NamePartyCreditProfileRelationship TypeMaster-detailRefers ToPartyCreditProfile (the master object) |
| PaymentFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe payment frequency for the financial account.Possible values are:Monthly |
| ReportingDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the financial account was reported to the credit bureau. |
| SixtyDayDelinquencyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times a payment has been 60 days late. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe current status of the financial account.Possible values are:ActiveClosed |
| TermDurationInMonths | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration of the credit in months. |
| ThirtyDayDelinquencyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times a payment has been 30 days late. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of financial account, such as a credit card, home loan, or auto loan.Possible values are:Auto LoanCredit CardHome Loan |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyCreditPrflFinclAcctChangeEvent](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyCreditPrflFinclAcctHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PartyCreditPrflFinclAcctOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PartyCreditPrflFinclAcctShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Related Topics

- PartyCreditPrflFinclAcctChangeEvent (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm)
