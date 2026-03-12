---
title: "ServiceTerritoryRelationship"
domain: life-sciences-dev-guide
topic: serviceterritoryrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.387Z
estimatedTokens: 1059
keywords: [ServiceTerritoryRelationship, relationship, service, territories, work, performed, API, version, 56.0, later, Calls, Usage, Associated, Objects]
---

# ServiceTerritoryRelationship

> Represents the relationship between service territories based on work types
         performed. This object is available in API version 56.0 and later.

# ServiceTerritoryRelationship

Represents the relationship between service territories based on work types performed. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the service territory relationship. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe related service territory that's associated with a work type.This field is a relationship field.Relationship NameRelatedServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service territory that's associated with a work type.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe work type that's performed at a service territory.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Usage

Create a service territory relationship record to map affiliated sites where consecutive work types are performed. Select a service territory where a work type—such as apheresis—is held. In Related Service Territory, select the service territory where the next work type—such as manufacturing—is held.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceTerritoryRelationshipChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[ServiceTerritoryRelationshipFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ServiceTerritoryRelationshipHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ServiceTerritoryRelationshipShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ServiceTerritoryRelationshipChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ServiceTerritoryRelationshipFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ServiceTerritoryRelationshipHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ServiceTerritoryRelationshipShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
