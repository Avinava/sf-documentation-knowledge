---
title: "CollectionPlan"
domain: omnistudio
topic: collectionplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.856Z
keywords: [CollectionPlan, Supported, Calls, Fields, Associated, Objects]
---

# CollectionPlan

# CollectionPlan

Represents details about the outstanding amounts linked to financial accounts, billing accounts, contacts, accounts, or cases associated with individuals or an organization. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the collection plan record.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AutoDebitRequestCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of the auto debit requests initiated for a collection plan. |
| ClosedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the collection plan was closed. |
| CollectionAgencyAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the recovery agency, which may be a third-party agency, responsible for managing the collection activities associated with this collection plan. Available in API version 65.0 and later.This field is a relationship field.Relationship NameCollectionAgencyAccountRefers ToAccount |
| CollectionPlanReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of collection plan reason associated with the collection plan.This field is a relationship field.Relationship NameCollectionPlanReasonRefers ToCollectionPlanReason |
| CollectionPlanSegment | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies a predefined group associated with the collection plan record. The group is derived based on various criteria, such as collection amount and days past due. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the collection plan record.This field is a relationship field.Relationship NameContactRefers ToContact |
| CurrentDueAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe current outstanding amount for the collection plan. |
| DaysPastDue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days that a payment is past its scheduled or expected due date. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the organization or individuals are expected to make a payment towards the outstanding amount. |
| FirstCallDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the first phone call is made to notify an individual or organization about the repayment of funds. |
| FirstEmailDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the first email is sent to notify an individual or organization about the repayment of funds. |
| FirstSmsDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the first message is sent to notify an individual or organization about the due amount. |
| FinancialAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial account associated with the collection plan record.This field is a relationship field.Relationship NameFinancialAccountRefers ToFinancialAccount |
| InitialDueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe initial due amount of the collection plan. |
| InteractionOutcome | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the result of the collections specialist's interaction with a customer, such as promised to pay, escalated to recovery, legal case created, no commitment, or bankruptcy. Available in API version 64.0 and later. |
| IsClosed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the collection plan is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferencedDate is not null, the user accessed this record or list view indirectly. |
| LegalRepresentativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact details of the borrower's legal representative or attorney. Available in API version 64.0 and later.This field is a relationship field.Relationship NameLegalRepresentativeRefers ToContact |
| MaximumPromisetoPayCount | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of promises to pay allowed for a collection plan. Available in API version 64.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the collection plan record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the collection plan record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PromiseToPayCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of commitments made by an individual or an organization to repay the amount they owe within a specified timeframe. |
| RiskScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numerical score that is computed based on the Einstein model. This score is used to assess an individual's repayment capacity. |
| SourceSystemRecordIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the collection plan in an external system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the collection plan, such as new, in progress, promise to pay registered, promise to pay broken, and closed.Possible values are:CloseInProgressNew |
| TotalFeesAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of any fee amount associated with the collection plan. It includes any applicable surcharges, processing fees, penalties, and any other additional charges incurred. |
| TotalInterestAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cumulative sum of all interest charges accrued over a specified time period. |
| TotalPaymentsReceived | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount of payments received that are associated with a collection plan.Available in API version 63.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total tax amount of the collection plan. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the cloud or the function that uses the Collections feature.Possible values are:AutomotiveBillingFinancial Services Cloud |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CollectionPlanChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CollectionPlanHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CollectionPlanOwnerSharingRule](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CollectionPlanShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.