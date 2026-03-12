---
title: "ServicePoint"
domain: sfFieldRef
topic: servicepoint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.484Z
estimatedTokens: 723
keywords: [ServicePoint, entry, point, services, premises, service, provided, separately, metered, measured, Useful, energy, including, electricity, water]
---

# ServicePoint

> Represents an entry point for services to a premises. The service provided to
         each service point is separately metered (or measured). Useful for energy services
         including electricity, water and gas services. This object is available in API version
      62.0 and later.

# ServicePoint

Represents an entry point for services to a premises. The service provided to each service point is separately metered (or measured). Useful for energy services including electricity, water and gas services. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ServicePoint in the Energy and Utilities Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivationDate | Activation Date | date |  |  |  |  |
| AirPressureArea | Air Pressure Area | string |  | 255 |  |  |
| AverageMonthlyUsage | Average Monthly Usage | int | 9 |  |  |  |
| CalorificValueDistrict | CV District | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DisconnectDate | Disconnect Date | date |  |  |  |  |
| DisconnectReason | Disconnect Reason | string |  | 255 |  |  |
| DistributionArea | Distribution Area | picklist |  | 40 |  |  |
| Distributor | Distributor | string |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| FieldServiceClass | Field Service Class | picklist |  | 40 |  |  |
| GasPressureArea | Gas Pressure Area | string |  | 255 |  |  |
| Id | Service Point ID | id |  | 18 |  |  |
| InstallationType | Installation Type | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOkToEnter | Ok to Enter | boolean |  |  |  |  |
| IsPremisesInfoOverridden | Premises Info Overridden | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoadProfile | Load Profile | picklist |  | 40 |  |  |
| MarketIdentifier | Market Identifier | string |  | 255 |  |  |
| MeterReadInstructions | Meter Read Instructions | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PremisesId | Location ID | reference |  | 18 |  |  |
| ReconnectDate | Reconnect Date | date |  |  |  |  |
| ReconnectReason | Reconnect Reason | string |  | 255 |  |  |
| ServiceType | Service Type | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemperatureArea | Temperature Area | string |  | 255 |  |  |
| UtilityProvider | Utility Provider | string |  | 255 |  |  |
| VoltageLevel | Voltage Level | string |  | 255 |  |  |
| WaterPressureArea | Water Pressure Area | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
