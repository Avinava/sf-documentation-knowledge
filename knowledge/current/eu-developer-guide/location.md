---
title: "Location"
domain: eu-developer-guide
topic: location
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.278Z
estimatedTokens: 1489
keywords: [Location, warehouse, service, vehicle, work, site, element, region, team, performs, API, version, 59.0, later, Calls]
---

# Location

> Represents a warehouse, service vehicle, work site, or other element of the region
      where your team performs field service work. This object is available in API version 59.0 and
      later.

# Location

Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. This object is available in API version 59.0 and later.

The standard fields are documented in the [Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_location.htm) object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which service was started at this location. |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Business Hours object associated with the LocationThis field is a relationship field.Relationship NameBusinessHoursRefers ToBusinessHours |
| DistributionArea | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe electricity, gas, or water distribution area this location belongs to. |
| GrossFloorArea | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the sum of the floor area of the spaces within the location |
| GrossFloorAreaUom | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the unit of measure for Gross Floor Area of the locationPossible values are:Square FeetSquare Meters |
| HasLifeSupport | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location has life-support equipment.The default value is false. |
| HasSensitiveLoad | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location has sensitive load equipment.The default value is false. |
| IsKeyAtPremises | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the key is available at the locationThe default value is false. |
| IsOkToEnter | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the field service representative has permission to enter the locationThe default value is false. |
| IsSupplyGuaranteed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether supply is guaranteed at the locationThe default value is false. |
| MeterReadInstructions | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe instructions for the field service representative on where to find the meter in this location |
| MeterReadWarning | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe warnings for the field service representative of potentially dangerous situations or conditions at this location |
| NumberOfOccupants | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of occupants at this location. |
| PrimaryPropertyFunction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the primary use of the locationPossible values are:BankEducationGroceryHotelManufacturingPublic AssemblyRecreationResidentialRestaurant |
| PropertyOwnerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account object associated with the LocationThis field is a relationship field.Relationship NamePropertyOwnerAccountRefers ToAccount |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the location.Possible values are:ActiveDemolishedInactiveUnder Construction |
| SupplyGuaranteeReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for which supply is guaranteed at the location |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of a location. |
| IsInventoryLocation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location stores parts. This field must be selected if you want to associate the location with product items.The default value is false. |
| IsMobile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the location moves. For example, a truck or tool box.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the location was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the location was last viewed. |
| LocationType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionPicklist of location types. It has no default values, so you must populate it before creating any location records. |
| LogoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA ContentAsset representing a logo for the location.This field is a relationship field.Relationship NameLogoRelationship TypeLookupRefers ToContentAsset |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the location. For example, Service Van #4. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe location’s owner or driver.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RootLocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read Only) The top-level location in the location’s hierarchy.This field is a relationship field.Relationship NameRootLocationRelationship TypeLookupRefers ToLocation |
