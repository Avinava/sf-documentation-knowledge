---
title: "ServicePoint"
domain: eu-developer-guide
topic: servicepoint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.372Z
estimatedTokens: 1409
keywords: [ServicePoint, entry, point, services, premises, service, provided, separately, metered, measured, Useful, energy, including, electricity, water]
---

# ServicePoint

> Represents an entry point for services to a premises. The service provided to
         each service point is separately metered (or measured). Useful for energy services
         including electricity, water and gas services. This object is available in API version
      62.0 and later.

# ServicePoint

Represents an entry point for services to a premises. The service provided to each service point is separately metered (or measured). Useful for energy services including electricity, water and gas services. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the service point was activated |
| AirPressureArea | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group of service points according to regions with similar air pressures where the service point is located. |
| AverageMonthlyUsage | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe average monthly usage of the commodity being distributed through this service point |
| CalorificValueDistrict | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group of service points according to regions with similar calorific values where the service point is located. |
| DisconnectDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the service point was disconnected from the grid |
| DisconnectReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason a commodity service has been disconnected. |
| Distributor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe distributor supplying service to the premises. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number that is used as an external identifier for the Service Point. |
| FieldServiceClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the classification of the service point for field service.Possible values are:LinesMeterTransformer |
| GasPressureArea | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group of service points according to regions with similar gas pressures where the service point is located. |
| InstallationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of meter installation at this service point. This field may be used by field service technicians when determining the correct crew to work on a job at this service point.Possible values are:High VoltageMulti MeterSmart Meter |
| IsOkToEnter | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a field service representative has the permission to enter the premises for reading the meter or other field service activitiesThe default value is false. |
| IsPremisesInfoOverridden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the details on the premises are overridden by the corresponding details on the service point.The default value is false. |
| LoadProfile | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the kind of load profile for the service point.Possible values are:High LoadNighttime LoadResidential Load |
| MarketIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| MeterReadInstructions | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Market Identifier value from an external system. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe name of the Service Point.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PremisesId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Premise associated with the Service Point.This field is a relationship field.Relationship NamePremisesRefers ToLocation |
| ReconnectDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the service was reconnected |
| ReconnectReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason that the service was reconnected. |
| ServiceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of service being delivered at this service point.Possible values are:ElectricityGasWater |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the Service Point.Possible values are:AbolishedActiveDisconnected |
| TemperatureArea | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group of service points according to regions with similar air temperatures where the service point is located. |
| UtilityProvider | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe utility or energy provider supplying service to the premises. |
| VoltageLevel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe level of voltage supplied to a service point through the installed electric meter |
| WaterPressureArea | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group of service points according to regions with similar water pressures where the service point is located. |
