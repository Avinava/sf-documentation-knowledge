---
title: "FinancialDeal"
domain: financial-services-cloud-object-reference
topic: financialdeal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.195Z
estimatedTokens: 1731
keywords: [FinancialDeal, deal, financial, institution, working, API, version, 52.0, later, Calls, Associated, Objects]
---

# FinancialDeal

> Represents the deal that the financial institution is working on. This
      object is available in API version 52.0 and later.

# FinancialDeal

Represents the deal that the financial institution is working on. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account ID of the customer who engaged the financial institution in this deal.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CloseProbability | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe probability of the deal being successfully closed. |
| ConfidentialityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the level of confidentiality of the information that's recorded in the financial deal.Possible values are:ConfidentialPublic |
| ConflictStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the conflict clearance for the financial deal.Possible values are:ApprovedDeclined |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the deal. |
| ExpectedCloseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the deal is expected to close. |
| FinancialDealCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique code that identifies the deal. |
| FinancialDealType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the deal.Possible values are:AdvisoryCapital RaisingDebt Capital MarketInitial Public OfferingMergers and AcquisitionsSecondary Offering |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MandatedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial deal was mandated. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the financial deal. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentFinancialDealId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent financial deal.This is a relationship field.Relationship NameParentFinancialDealRelationship TypeLookupRefers ToFinancialDeal |
| ReceivedFee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total fee received by the financial institution until the current date. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role that the financial institution plays in this deal.Possible values are:AdvisorBookrunnerSyndication Agent |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the stage of the deal.Possible values are:ClosedExecutionMandatePitch |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the deal.Possible values are:ClosedOn HoldOpen |
| TotalExpectedFee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total fee expected by the financial institution until the current date. |
| TotalExpense | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total expense incurred for the financial deal until the current date. |
| TransactionValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total transaction value of the financial deal. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialDealChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinancialDealFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FinancialDealHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FinancialDealOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FinancialDealShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FinancialDealChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinancialDealFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- FinancialDealHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- FinancialDealOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FinancialDealShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
