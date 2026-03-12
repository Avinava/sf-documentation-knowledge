---
title: "AssetContactParticipant"
domain: field-service
topic: assetcontactparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.166Z
estimatedTokens: 849
keywords: [AssetContactParticipant, junction, Asset, Contact, objects, describing, association, participating, API, version, 56.0, later, Calls, Associated]
---

# AssetContactParticipant

> Represents a junction between the Asset and Contact objects describing the
         association between a participating contact and an asset. This object is available in
      API version 56.0 and later.

# AssetContactParticipant

Represents a junction between the Asset and Contact objects describing the association between a participating contact and an asset. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe asset associated with the contact.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contact associated with the asset.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the association between the stakeholder and the vehicle ended. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the association between the stakeholder and the vehicle was initiated. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the association between the stakeholder and the vehicle is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the asset contact participant. |
| StakeholderRole | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the role of the associated contact. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the asset contact participant.Possible values are:AutomotiveManufacturingFieldServiceLightning—Field Service Lightning |
| VehicleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe vehicle that's marked as an asset.This field is a relationship field.Relationship NameVehicleRelationship TypeLookupRefers ToVehicle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetContactParticipantChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssetContactParticipantFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AssetContactParticipantHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
