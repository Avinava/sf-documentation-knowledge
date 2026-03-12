---
title: "PartyBusinessRegion"
domain: financial-services-cloud-object-reference
topic: partybusinessregion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.076Z
estimatedTokens: 839
keywords: [PartyBusinessRegion, trading, regions, party, covering, domestic, international, locations, business, entity, actively, involved, activities, API, version]
---

# PartyBusinessRegion

> Represents the trading regions of a party, covering both domestic and
         international locations, where the business entity is actively involved in trading
         activities. This object is available in API version 61.0 and later.

# PartyBusinessRegion

Represents the trading regions of a party, covering both domestic and international locations, where the business entity is actively involved in trading activities. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessRegionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the name of the region where business activities are conducted. |
| BusinessRegionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of geographical region where business activities are conducted. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party stopped the trade activities with the country. |
| IsActiveTradeRegion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a business entity is currently trading in the region (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA unique number that represents the party business region. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyProfileId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party profile associated with the party business region.This field is a relationship field.Relationship NamePartyProfileRelationship TypeLookupRefers ToPartyProfile |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type associated with the relationship.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| RegionReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country or state where the business activities are conducted.This field is a polymorphic relationship field.Relationship NameRegionReferenceObjectRelationship TypeLookupRefers ToGeoCountry, GeoState |
| RegionRevenuePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the overall revenue contributed by the party trading region. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party started the trade activities with the country. |
| TradeType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the type of financial transfer associated with the party. |
