---
title: "PartyFinancialAssetTerm"
domain: financial-services-cloud-object-reference
topic: partyfinancialassetterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.190Z
estimatedTokens: 1395
keywords: [PartyFinancialAssetTerm, term, condition, associated, financial, asset, Aids, identifying, tracking, terms, lender, legal, regulatory, around, asset's]
---

# PartyFinancialAssetTerm

> Represents a term or condition associated with a financial asset. Aids in
         identifying and tracking the terms set by a lender or the legal or regulatory terms around
         a financial asset's ownership, usage, maintenance, and monitoring. This object is
      available in API version 65.0 and later. Available with Digital Lending permission
      set.

# PartyFinancialAssetTerm

Represents a term or condition associated with a financial asset. Aids in identifying and tracking the terms set by a lender or the legal or regulatory terms around a financial asset's ownership, usage, maintenance, and monitoring. This object is available in API version 65.0 and later. Available with Digital Lending permission set.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe additional details about the term or condition. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the party financial asset term remains effective. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the party financial asset term becomes effective. |
| IsLegallyEnforceable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party financial asset term is enforceable under regulations (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| PartyFinancialAssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe party financial asset asssociated with the party financial asset term.This field is a relationship field.Relationship NamePartyFinancialAssetRelationship TypeMaster-detailRefers ToPartyFinancialAsset (the master object) |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference record associated with the party financial asset term.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToPartyFinancialAssetLien, PartyFinclAssetAddlOwner |
| TermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe term or condition associated with the party financial asset term.This field is a relationship field.Relationship NameTermRefers ToTerm |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of term associated with the party financial asset term. For example, term related to lien repayment, additional ownership, or title related.Possible values are:Loan to Value Ratio not to go above 75%Restriction on Sale if Lien Exists |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyFinancialAssetTermChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyFinancialAssetTermFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyFinancialAssetTermHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyFinancialAssetTermOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartyFinancialAssetTermShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyFinancialAssetTermChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PartyFinancialAssetTermFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PartyFinancialAssetTermHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PartyFinancialAssetTermOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PartyFinancialAssetTermShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
