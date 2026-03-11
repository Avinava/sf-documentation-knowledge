---
title: "Regulation"
domain: omnistudio
topic: regulation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:12.162Z
keywords: [Regulation, Supported, Calls, Fields, Associated, Objects]
---

# Regulation

# Regulation

Represents the information on laws and regulations as specified by the regulatory agencies and authorities. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional comments about the regulation. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the regulation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a relationship field.Relationship NameOwnerRefers ToUser |
| ReferenceDocumentList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe links to official texts and relevant documents, such as regulatory texts, guidance documents, interpretations or official communications from regulatory authorities. |
| RegulationManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual within the organization responsible for and associated with the regulation.This field is a polymorphic relationship field.Relationship NameRegulationManagerRefers ToContact, User |
| ReferenceDocumentList | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URLs to the supporting document for the regulation. |
| RegulatoryAuthorityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe regulatory authority associated with the regulation.This field is a relationship field.Relationship NameRegulatoryAuthorityRefers ToRegulatoryAuthority |
| Scope | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the areas or domains covered by the regulation, including securities, banking, and data privacy.Possible values are:AutomobileBanking & FinanceEquity MarketHealthcare |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RegulationChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[RegulationFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RegulationHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[RegulationShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.