---
title: "FinancialDealInteraction"
domain: financial-services-cloud-object-reference
topic: financialdealinteraction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.223Z
estimatedTokens: 844
keywords: [FinancialDealInteraction, junction, interaction, financial, deal, API, version, 53.0, later, Calls, Associated, Objects]
---

# FinancialDealInteraction

> Represents a junction between an interaction and a financial deal. This
      object is available in API version 53.0 and later.

# FinancialDealInteraction

Represents a junction between an interaction and a financial deal. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes about the financial deal associated with the interaction. |
| FinancialDealId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe financial deal associated with the interaction.This is a relationship field.Relationship NameFinancialDealRelationship TypeLookupRefers ToFinancialDeal |
| InteractionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe interaction associated with the financial deal interaction record.This is a relationship field.Relationship NameInteractionRelationship TypeLookupRefers ToInteraction |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the financial deal interaction record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialDealInteractionChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinancialDealInteractionFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FinancialDealInteractionHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- FinancialDealInteractionChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinancialDealInteractionFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- FinancialDealInteractionHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
