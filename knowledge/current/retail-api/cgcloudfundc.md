---
title: "cgcloud__Fund__c"
domain: retail-api
topic: cgcloudfundc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.647Z
estimatedTokens: 4040
keywords: [cgcloud__Fund__c, fund, amount, money, that's, employee, special, reason, specific, business, period, pay, activities, promotion, campaigns]
---

# cgcloud__Fund__c

> A fund is the amount of money that's given to an employee for a
         special reason during a specific business period. This money is used to pay special
         activities such as promotion campaigns. This object is available in API version 54.0
      and later.

# cgcloud\_\_Fund\_\_c

A fund is the amount of money that's given to an employee for a special reason during a specific business period. This money is used to pay special activities such as promotion campaigns. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Actual_RBF__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal Actual Rate Based Funding (RBF) that's calculated from Fund Grid. |
| cgcloud__Amount__c | TypedoublePropertiesFilter, Nillable, SortDescriptionFund Amount - Sum of all Transaction.Amount from Transaction_Row (where Transaction_Row.Target_Fund = #Fund#).This is a calculated field. |
| cgcloud__Anchor_Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to an account.This is a relationship field.Relationship Namecgcloud__Anchor_Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Anchor_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Product.This is a relationship field.Relationship Namecgcloud__Anchor_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Available_to_Plan__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Pending Budget amount minus the Spending (Pending) amount.This is a calculated field.Formulacgcloud__Pending_Budget__c  +  cgcloud__Current_Budget__c |
| cgcloud__Commitments_Total__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of Spending Committed and LE Spend Pending.This is a calculated field.Formulacgcloud__Spending_Committed__c +  cgcloud__LE_Spend_Pending__c |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFund currency.Possible values are:CADCHFEURGBPJPYNOKRUBUSD |
| cgcloud__Current_Balance__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Credit/Debit Balance (Approved) amount and the Actual RBF amountThis is a calculated field.Formulacgcloud__Total_Credits_Approved_Earned__c  -  cgcloud__Total_Debits_Approved__c |
| cgcloud__Current_Budget__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Current Balance amount and the Actual RBF amount.This is a calculated field.Formulacgcloud__Current_Balance__c  -  cgcloud__Spending_Committed__c |
| cgcloud__Deposits_Approved__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThis field rolls up Fund transaction Rows in which the transaction type is Deposit.This is a calculated field. |
| cgcloud__Deposits_Pending__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThis field rolls up pending fund transactions (in which Target funds are credited) and sums up the approved amount of Deposits. |
| cgcloud__Deposits_Total__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of Approved Deposits and Pending Deposits.This is a calculated field.Formulacgcloud__Deposits_Approved__c +  cgcloud__Deposits_Pending__c |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__External_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionExternal ID that's used to maintain unique fund records during data loads. |
| cgcloud__Fixed_Based_Overdraw__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis field is used to make this calculation: Deposits (Approved) * (Fixed-Based Overdraw Allowance/100). |
| cgcloud__Fund_Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the description of the selected fund template.This is a calculated field.Formulacgcloud__Fund_Template__r.cgcloud__Description__c |
| cgcloud__Fund_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the fund template.This is a relationship field.Relationship Namecgcloud__Fund_Template__rRelationship TypeLookupRefers Tocgcloud__Fund_Template__c |
| cgcloud__Invoice_Based_Costs__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of Tactic_Fund.OI_Costs_c of records whose Phase is Committed.This is a calculated field. |
| cgcloud__LE_RBF__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal LE RBF that's calculated from Fund Grid. |
| cgcloud__LE_Revenue__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal LE Revenue that's calculated from Fund Grid. |
| cgcloud__LE_Spend_Approved__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of Tactic_Fund.LE_Spend__c of records whose Phase is Committed.This is a calculated field. |
| cgcloud__LE_Spend_Pending__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of Tactic_Fund.LE_Spend__c of records whose Phase isn't Committed or Cancelled.This is a calculated field. |
| cgcloud__LE_Spend_Total__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of spend approved and spend pending.This is a calculated field.Formulacgcloud__LE_Spend_Approved__c + cgcloud__LE_Spend_Pending__c |
| cgcloud__LE_Volume__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal LE Volume that's calculated from Fund Grid. |
| cgcloud__Liabilities_Accrued__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of Tactic_Fund.Liabilities__c of records whose Phase is Committed.This is a calculated field. |
| cgcloud__Liabilities_Unpaid__c | TypedoublePropertiesFilter, Nillable, SortDescriptionLiabilities_Accrued__c minus Payments_Approved__c.This is a calculated field.Formulacgcloud__Liabilities_Accrued__c - cgcloud__Payments_Approved__c |
| cgcloud__Payments_Approved__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of all Payment_Tactic_Fund.Amount from Payment_Tactic_Fund (where Payment_Tactic_Fund.Payment_Status = Closed).This is a calculated field. |
| cgcloud__Payments_Pending__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of all Payment_Tactic_Fund.Amount from Payment_Tactic_Fund (where Payment_Tactic_Fund.Payment_Status <> Closed).This is a calculated field. |
| cgcloud__Payments_Total__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of approved payments and pending payments.This is a calculated field.Formulacgcloud__Payments_Approved__c +  cgcloud__Payments_Pending__c |
| cgcloud__Payouts_Approved__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of the Payments (Approved) amount and the Invoice Based Costs amount.This is a calculated field.Formulacgcloud__Payments_Approved__c + cgcloud__Invoice_Based_Costs__c |
| cgcloud__Pending_Balance__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Credit/Debit Balance (Pending) amount and the LE RBF amount.This is a calculated field.Formulacgcloud__Total_Credits_Pending_Estimated__c  -  cgcloud__Total_Debits_Pending__c |
| cgcloud__Pending_Budget__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Pending Balance amount and the Remaining RBF amount.This is a calculated field.Formulacgcloud__Pending_Balance__c  -  cgcloud__LE_Spend_Pending__c |
| cgcloud__Product_Count__c | TypedoublePropertiesFilter, Nillable, SortDescriptionUsage in validation rule for one or more products in the related list when locking the fund.This is a calculated field. |
| cgcloud__RBF_Based_Overdraw__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis field is to calculate: RBF (Remaining) * (RBF-Based Overdraw Allowance/ 100). |
| cgcloud__Remaining_RBF__c | TypedoublePropertiesFilter, Nillable, SortDescriptionDifference of LE RBF and Actual RBF.This is a calculated field.Formulacgcloud__LE_RBF__c  -  cgcloud__Actual_RBF__c |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionSales org of the fund.This is a calculated field.FormulaTEXT( cgcloud__Fund_Template__r.cgcloud__Sales_Org__c ) |
| cgcloud__Spending_Committed__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of Tactic_Fund.LE_Spend__c of records whose Phase is Committed minus the sum of Payment_Tactic_Funds.Payment_Status__c of records whose Payments_Status__c is Closed.This is a calculated field.Formulacgcloud__LE_Spend_Approved__c - cgcloud__Payouts_Approved__c |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the status of the fund.Possible values are:ActiveClosedInitialOn HoldThe default value is Active. |
| cgcloud__Total_Available_Overdraw__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThis field is calculate: Fixed-Based Overdraw + RBF-Based Overdraw.This is a calculated field.Formulacgcloud__Fixed_Based_Overdraw__c  +  cgcloud__RBF_Based_Overdraw__c |
| cgcloud__Total_Balance__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of the current balance and pending balance.This is a calculated field.Formulacgcloud__Current_Balance__c +  cgcloud__Pending_Balance__c |
| cgcloud__Total_Budget__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of the current budget and pending budget.This is a calculated field.Formulacgcloud__Current_Budget__c +  cgcloud__Pending_Budget__c |
| cgcloud__Total_Credits_Approved_Earned__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Deposits (Approved) amount and the Actual RBF amount.This is a calculated field.Formulacgcloud__Deposits_Approved__c + cgcloud__Actual_RBF__c |
| cgcloud__Total_Credits_Pending_Estimated__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Deposits (Pending) amount and the LE RBF amount.This is a calculated field.Formulacgcloud__Deposits_Pending__c +  cgcloud__Remaining_RBF__c |
| cgcloud__Total_Debits_Approved__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Withdraws/Payments (Approved) amount and the Invoice Based Costs amount.This is a calculated field.Formulacgcloud__Withdraws_Payments_Approved__c + cgcloud__Invoice_Based_Costs__c |
| cgcloud__Total_Debits_Pending__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Withdraws/Payments (Pending) amount and the Invoice-Based Costs amount.This is a calculated field.Formulacgcloud__Withdraws_Pending__c  +  cgcloud__Payments_Pending__c |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the fund is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the fund is valid. |
| cgcloud__Withdraws_Approved__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThis field rolls up Fund transaction Rows for which transaction type is Withdraws.This is a calculated field. |
| cgcloud__Withdraws_Payments_Approved__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents the sum of the Withdraws (Approved) amount and the Payments (Approved) amount.This is a calculated field.Formulacgcloud__Withdraws_Approved__c + cgcloud__Payments_Approved__c |
| cgcloud__Withdraws_Pending__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThis field rolls up pending fund transactions (in which Target funds are debited) and sums up the approved Withdraws amount. |
| cgcloud__Withdraws_Total__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of the Withdraws (Approved) amount and the Payments (Approved) amount.This is a calculated field.Formulacgcloud__Withdraws_Approved__c  + cgcloud__Withdraws_Pending__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Fund\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Fund\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Fund\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Fund\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Fund\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__Fund__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Fund__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Fund__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Fund__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Fund__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
