---
title: "PartyExpense"
domain: psc-api
topic: partyexpense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.070Z
estimatedTokens: 1761
keywords: [PartyExpense, expense, incurred, individual, account, API, version, 58.0, later, Calls, Associated, Objects]
---

# PartyExpense

> Represents the expense incurred by an individual or account.
      This object is available in API version 58.0 and later.

# PartyExpense

Represents the expense incurred by an individual or account. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the application form.This field is a relationship field.Relationship NameApplicationFormRelationship TypeLookupRefers ToApplicationForm |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the expense. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the expense. |
| ExpensesAsOfDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party expense is documented. |
| IsReadOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party expense is read only (true) or not (false).The default value is false. |
| IsSelfPaid | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the expense is paid by the party (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the expense. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyFinancialLiabilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party financial liability that's associated with the party expense.This field is a relationship field.Relationship NamePartyFinancialLiabilityRelationship TypeLookupRefers ToPartyFinancialLiability |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party associated with the expense.This field is a relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount |
| PartyProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the party profile.This field is a relationship field.Relationship NamePartyProfileRelationship TypeLookupRefers ToPartyProfile |
| PayeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party that receives the payment towards the expense.This field is a polymorphic relationship field.Relationship NamePayeeRelationship TypeLookupRefers ToAccount, Contact |
| PayerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party that’s obligated to pay for the expense.This field is a polymorphic relationship field.Relationship NamePayerRelationship TypeLookupRefers ToAccount, Contact |
| RecurrenceInterval | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval after which the expense is incurred.Possible values are:Bi-WeeklyMonthlyOne TimeWeeklyYearly |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the expense. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the expense.Valid values are:ActiveInactive |
| TotalAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe total expense amount. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of expense.Valid values are:Child CareChild SupportGarnishmentsHealth and Hospitalization Insurance PremiumsMedical Prescriptions and ExpensesReimbursementRepresentative PayeeSpousal Support |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe usage type of the party expense.Valid value is PublicSector for Program and Benefit Management.Available in API version 60.0 and later. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe verification status of the party expense. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyExpenseChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[PartyExpenseFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyExpenseHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyExpenseOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API Version 60.0)

Sharing rules are available for the object.

[PartyExpenseShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API Version 60.0)

Sharing is available for the object.

## Related Topics

- PartyExpenseChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- PartyExpenseFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PartyExpenseHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PartyExpenseOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PartyExpenseShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
