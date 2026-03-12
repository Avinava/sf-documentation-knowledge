---
title: "PartyFinclLiabAddlBrwr"
domain: financial-services-cloud-object-reference
topic: partyfinclliabaddlbrwr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.116Z
estimatedTokens: 1126
keywords: [PartyFinclLiabAddlBrwr, additional, party, associated, financial, liability, API, version, 61.0, later, Calls, Special, Access, Rules, Objects]
---

# PartyFinclLiabAddlBrwr

> Represents information about an additional party associated with a
         financial liability. This object is available in API version 61.0 and
      later.

# PartyFinclLiabAddlBrwr

Represents information about an additional party associated with a financial liability. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Financial Account Management Standard Objects setting.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the financial liability additional party.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe applicant associated with the additional borrower of the financial liability.This field is a relationship field.Relationship NameApplicantRelationship TypeLookupRefers ToApplicant |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the financial liability additional party.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| PartyFinancialLiabilityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe financial liability held by the additional party.This field is a relationship field.Relationship NamePartyFinancialLiabilityRelationship TypeLookupRefers ToPartyFinancialLiability |
| PartyProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party profile associated with the additional borrower of the financial liability.This field is a relationship field.Relationship NamePartyProfileRelationship TypeLookupRefers ToPartyProfile |
| SharePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the financial liability held by the additional party. |
| SourceSystemIdentifier | Typeexternal lookupPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the additional party associated with the financial liability in an external system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyFinclLiabAddlBrwrChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyFinclLiabAddlBrwrFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyFinclLiabAddlBrwrHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PartyFinclLiabAddlBrwrChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PartyFinclLiabAddlBrwrFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PartyFinclLiabAddlBrwrHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
