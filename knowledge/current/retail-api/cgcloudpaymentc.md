---
title: "cgcloud__Payment__c"
domain: retail-api
topic: cgcloudpaymentc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:39.316Z
estimatedTokens: 3205
keywords: [cgcloud__Payment__c, stores, retailers, expect, compensation, running, promotions, executed, tactics, API, version, 54.0, later, cgcloud, _Payment]
---

# cgcloud__Payment__c

> This object stores the value that retailers expect as compensation
         for running promotions, which are executed by using tactics. This object is available
      in API version 54.0 and later.

# cgcloud\_\_Payment\_\_c

This object stores the value that retailers expect as compensation for running promotions, which are executed by using tactics. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionMost recent date on which a user performed an action on the record |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Addendum_Reference__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReference to the previous deduction addendum, if applicable. |
| cgcloud__Adjustment_Reference__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReference to the adjusted payment or deduction on the original payment. |
| cgcloud__Adjustment_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of adjustment.Possible values are:Deduction AddendumDeduction ReplacementPayment Reversal |
| cgcloud__Balance__c | TypedoublePropertiesFilter, Nillable, SortDescriptionBalance of the remaining payment amount.This is a calculated field.Formulacgcloud__Payment_Amount__c  -  (  cgcloud__Total_Tactic_Payout_Amount__c  +  cgcloud__Rejected_Amount__c  ) |
| cgcloud__Currency__c | TypestringPropertiesFilter, Nillable, SortDescriptionCurrency that the sales org of the payment template determines.This is a calculated field.Formulacgcloud__Payment_Template__r.cgcloud__Currency__c |
| cgcloud__Date_From_Reference_Date__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionUsed for the Link Tactics feature: linkable tactics must overlap with the time range [payment.reference_date__c - Date_From_Offset__c:payment.reference_Date__c + Date_Thru_Offset__c] (calculated helper value defining ther start of the time range).This is a calculated field.Formulacgcloud__Reference_Date__c + cgcloud__Payment_Template__r.cgcloud__Date_From_Offset__c |
| cgcloud__Date_Thru_Reference_Date__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionUsed for the Link Tactics feature: linkable tactics must overlap with the time range [payment.reference_date__c - Date_From_Offset__c:payment.reference_Date__c + Date_Thru_Offset__c] (calculated helper value defining the end of the time range).This is a calculated field.Formulacgcloud__Reference_Date__c +  cgcloud__Payment_Template__r.cgcloud__Date_Thru_Offset__c |
| cgcloud__Default_Anchor__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the default anchor.This is a relationship field.Relationship Namecgcloud__Default_Anchor__rRelationship TypeLookupRefers ToAccount |
| cgcloud__ERP_Status_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the payment was received. |
| cgcloud__ERP_Status__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionReference ID of the received payment. |
| cgcloud__Ext_Ref_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal reference date. |
| cgcloud__External_ID__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionExternal ID. |
| cgcloud__Family_Status__c | TypestringPropertiesFilter, Nillable, SortDescriptionStatus that defines whether the payment has an associated parent payment.This is a calculated field.FormulaIF( RecordType.Name == 'Parent' , 'Parent', (IF(ISBLANK(cgcloud__Parent_Payment__c), 'Orphan', 'Adopted'))) |
| cgcloud__Int_Ref_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInternal reference date. |
| cgcloud__Internal_ID__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionInternal ID. |
| cgcloud__KPI_Set__c | TypestringPropertiesFilter, Nillable, SortDescriptionKPI set that's assigned to the payment template.This is a calculated field.Formulacgcloud__Payment_Template__r.cgcloud__KPI_Set__r.Name |
| cgcloud__KPIs_Outdated__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionChecks whether the version of the Salesforce org and the corresponding version for Off-Platform are in sync.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Version__c <> cgcloud__Offplatform_Version__c |
| cgcloud__Linked_Tactics_Count__c | TypedoublePropertiesFilter, Nillable, SortDescriptionCount of the Payment Tactic records.This is a calculated field. |
| cgcloud__Offplatform_Version__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionOffplatform version of the payment. |
| cgcloud__Offset_Summary__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSummary of the Payment Tactic records.This is a calculated field. |
| cgcloud__Original_Reference__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReference to the original payment. |
| cgcloud__Parent_Payment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Parent Payment of the record.This is a relationship field.Relationship Namecgcloud__Parent_Payment__rRelationship TypeLookupRefers Tocgcloud__Payment__c |
| cgcloud__Payment_Age__c | TypedoublePropertiesFilter, Nillable, SortDescriptionAge of the payment: Number of days that have passed since the payment request was created.This is a calculated field.FormulaTODAY()  -  cgcloud__Reference_Date__c |
| cgcloud__Payment_Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of the payment. |
| cgcloud__Payment_Anchor_Number__c | TypestringPropertiesFilter, Nillable, SortDescriptionCustomer number of the Payment Anchor, which is populated based on the selected payment anchor.This is a calculated field.Formulacgcloud__Payment_Anchor__r.cgcloud__Account_Number__c |
| cgcloud__Payment_Anchor__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the anchor customer of the payment.This is a relationship field.Relationship Namecgcloud__Payment_Anchor__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Payment_Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrent status of the payment.Possible values are:AdjustedCancelledClosed—ApprovedErrorInitial—OpenPending Approval—Submitted for ApprovalToBeClosed—To Be ClosedThe default value is Initial. |
| cgcloud__Payment_Tactic_Fund_Summary__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionSummary of the Payment Tactic Funds. |
| cgcloud__Payment_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the payment template.This is a relationship field.Relationship Namecgcloud__Payment_Template__rRelationship TypeLookupRefers Tocgcloud__Payment_Template__c |
| cgcloud__Payment_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionType of the payment.This is a calculated field.FormulaTEXT(cgcloud__Payment_Template__r.cgcloud__Payment_Type__c) |
| cgcloud__Planning_Anchor_Number__c | TypestringPropertiesFilter, Nillable, SortDescriptionCustomer number of the Planning Anchor, which is populated based on the selected planning anchor.This is a calculated field.Formulacgcloud__Planning_Anchor__r.cgcloud__Account_Number__c |
| cgcloud__Planning_Anchor__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Planning Anchor.This is a relationship field.Relationship Namecgcloud__Planning_Anchor__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Pre_Adjustment_Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of deduction prior to the adjustment and creation of the deduction addendum. |
| cgcloud__Reference_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference date of the payment. |
| cgcloud__Rejected_Amount__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionRejected amount of the payment. |
| cgcloud__Rejected_Reason_Codes__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReasons for the rejected amount of the payment.Possible values are:Reason 1—Authorized ReturnReason 10—Other ReasonReason 2—Automatic Write-Off of less than $50Reason 3—DamagesReason 4—Freight ClaimReason 5—Post AuditReason 6—Pricing ErrorsReason 7—Rejected-Charge back to customerReason 8—Transfer to BrokerReason 9—UCD - Unearned Cash Discount |
| cgcloud__Total_Tactic_Payout_Amount__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of the Payment Tactic records.This is a calculated field. |
| cgcloud__Vendor_Anchor_Number__c | TypestringPropertiesFilter, Nillable, SortDescriptionCustomer number of the vendor anchor, which is populated based on the selected vendor anchor.This is a calculated field.Formulacgcloud__Vendor_Anchor__r.cgcloud__Account_Number__c |
| cgcloud__Vendor_Anchor__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the vendor anchor.This is a relationship field.Relationship Namecgcloud__Vendor_Anchor__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Version__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionVersion of the payment. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Payment\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Payment\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Payment\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Payment\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Payment\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Payment__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Payment__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Payment__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Payment__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Payment__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
