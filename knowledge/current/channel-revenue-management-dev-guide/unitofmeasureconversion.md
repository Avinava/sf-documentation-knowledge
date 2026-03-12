---
title: "UnitOfMeasureConversion"
domain: channel-revenue-management-dev-guide
topic: unitofmeasureconversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.754Z
estimatedTokens: 388
keywords: [UnitOfMeasureConversion, convert, measurement, unit, measure, another, API, version, 52.0, later, Calls, Associated, Objects]
---

# UnitOfMeasureConversion

> Represents the information used to convert a measurement value from a unit of
         measure to another. This object is available in API version 52.0 and
      later.

# UnitOfMeasureConversion

Represents the information used to convert a measurement value from a unit of measure to another. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConversionFactor | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe conversion factor for the conversion. |
| FromUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unit of measure to be converted.This is a relationship field.Relationship NameFromUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
| ToUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unit of measure to be converted to.This is a relationship field.Relationship NameToUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

UnitOfMeasureConversionFeed

Feed tracking is available for the object.

UnitOfMeasureConversionHistory

History is available for tracked fields of the object.

UnitOfMeasureConversionOwnerSharingRule

Sharing rules are available for the object.

UnitOfMeasureConversionShare

Sharing is available for the object.
