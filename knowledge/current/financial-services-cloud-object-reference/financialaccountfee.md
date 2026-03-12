---
title: "FinancialAccountFee"
domain: financial-services-cloud-object-reference
topic: financialaccountfee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.013Z
estimatedTokens: 1272
keywords: [FinancialAccountFee, fee, that's, applicable, financial, account, service, various, requests, stop, payment, duplicate, card, API, version]
---

# FinancialAccountFee

> Represents information about the fee that's applicable on the financial
         account to service various requests, such as a request for stop payment, duplicate card,
         and more. This object is available in API version 61.0 and later.

# FinancialAccountFee

Represents information about the fee that's applicable on the financial account to service various requests, such as a request for stop payment, duplicate card, and more. This object is available in API version 61.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Financial Account Management Standard Objects setting.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that is charged for the request. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date until when the applicable fee is charged on the financial account. |
| FinancialAccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe financial account to which the fee is charged.This field is a relationship field.Relationship NameFinancialAccountRelationship TypeLookupRefers ToFinancialAccount |
| Frequency | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe frequency at which the applicable fee is charged on the financial account.Possible values are:MonthlyOne TimeYearly |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| Rate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe amount in percentage that is charged for the request. |
| SourceSystemIdentifier | Typeexternal lookupPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the financial account fee in an external system. |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date from when the applicable fee is charged on the financial account. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionSpecifies the type of the financial account fee, such as stop payment fee, new check book fee, duplicate card fee, and more.Possible values are:Duplicate Card FeeNew Cheque Book FeeStop Payment FeeThe default value is Stop Payment Fee. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialAccountFeeChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinancialAccountFeeFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FinancialAccountFeeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FinancialAccountFeeOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FinancialAccountFeeShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FinancialAccountFeeChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinancialAccountFeeFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- FinancialAccountFeeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- FinancialAccountFeeOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FinancialAccountFeeShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
