---
title: "ElectricityEmssnFctrSet"
domain: sfFieldRef
topic: electricityemssnfctrset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.724Z
estimatedTokens: 1465
keywords: [ElectricityEmssnFctrSet, factors, convert, electricity, usage, CO₂e, CO₂, CH₄, N₂O, record, holds, data, breakdown, sources, fuel]
---

# ElectricityEmssnFctrSet

> Represents the factors that are used to convert electricity usage into CO₂e,
         CO₂, CH₄, and N₂O values. This record holds data on the breakdown of sources of electricity
         by fuel type (grid mixes).

# ElectricityEmssnFctrSet

Represents the factors that are used to convert electricity usage into CO₂e, CO₂, CH₄, and N₂O values. This record holds data on the breakdown of sources of electricity by fuel type (grid mixes).

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ElectricityEmssnFctrSet in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Ch4EmissionRate | CH4 Emissions Rate | double |  |  | 18 | 6 |
| Ch4EmissionRateInTgwh | CH4 Emissions Rate (tonnes/GWh) | double |  |  | 18 | 6 |
| Ch4EmissionRateUnit | CH4 Emissions Rate Unit | picklist |  | 255 |  |  |
| City | City | string |  | 255 |  |  |
| Co2EmissionRate | CO2 Emissions Rate | double |  |  | 18 | 6 |
| Co2EmissionRateInTmwh | CO2 Emissions Rate (tonnes/MWh) | double |  |  | 18 | 6 |
| Co2EmissionRateUnit | CO2 Emissions Rate Unit | picklist |  | 255 |  |  |
| Co2eEmissionRate | CO2e Emissions Rate | double |  |  | 18 | 6 |
| Co2eEmissionRateInTmwh | CO2e Emissions Rate (tonnes/MWh) | double |  |  | 18 | 6 |
| Co2eEmissionRateUnit | CO2e Emissions Rate Unit | picklist |  | 255 |  |  |
| Country | Country | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionFactorDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmissionFactorUpdateYear | Emissions Factor Update Year | picklist |  | 255 |  |  |
| EmissionsFactorType | Emissions Factor Type | picklist |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| GenlConversionFctrRevisionDate | Emissions Factor Revision Date | date |  |  |  |  |
| GridSubregion | Grid Subregion | string |  | 255 |  |  |
| Id | Electricity Emissions Factor Set ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocBasedGeothermalMixPct | Location-Based Geothermal Mix Percentage | percent |  |  | 18 | 2 |
| LocBasedOtherFossilFuelMixPct | Location-Based Other Fossil Fuel Mix Percentage | percent |  |  | 18 | 2 |
| LocBasedRenewableEnergyPct | Location-Based Renewable Energy Percentage | percent |  |  | 18 | 2 |
| LocBsdRenewableEnrgyNonHydro | Location-Based Renewable Energy Excluding Hydroelectricity Percentage | percent |  |  | 18 | 2 |
| LocationBasedBiomassMixPct | Location-Based Biomass Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedCoalMixPct | Location-Based Coal Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedGasMixPct | Location-Based Gas Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedHydroMixPct | Location-Based Hydroelectricity Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedMixPct | Location-Based Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedNuclearMixPct | Location-Based Nuclear Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedOilMixPct | Location-Based Oil Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedOtherFuelMixPct | Location-Based Other Fuel Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedSolarMixPct | Location-Based Solar Mix Percentage | percent |  |  | 18 | 2 |
| LocationBasedWindMixPct | Location-Based Wind Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedBiomassMixPct | Market-Based Biomass Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedCoalMixPct | Market-Based Coal Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedGasMixPct | Market-Based Gas Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedHydroMixPct | Market-Based Hydroelectric Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedMixPct | Market-Based Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedNuclearMixPct | Market-Based Nuclear Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedOilMixPct | Market-Based Oil Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedOtherFuelMixPct | Market-Based Other Fuel Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedSolarMixPct | Market-Based Solar Mix Percentage | percent |  |  | 18 | 2 |
| MarketBasedWindMixPct | Market-Based Wind Mix Percentage | percent |  |  | 18 | 2 |
| MktBasedGeothermalMixPct | Market-Based Geothermal Mix Percentage | percent |  |  | 18 | 2 |
| MktBasedOtherFossilFuelMixPct | Market-Based Other Fossil Fuel Mix Percentage | percent |  |  | 18 | 2 |
| MktBasedRenewableEnergyPct | Market-Based Renewable Energy Percentage | percent |  |  | 18 | 2 |
| MktBsdCo2eEmissionRate | Market-Based CO2e Emissions Rate | double |  |  | 18 | 6 |
| MktBsdCo2eEmissionRateInTmwh | Market-Based CO2e Emissions Rate (tonnes/MWh) | double |  |  | 18 | 6 |
| MktBsdCo2eEmissionRateUnit | Market-Based CO2e Emissions Rate Unit | picklist |  | 255 |  |  |
| MktBsdRenewableEnrgyNonHydro | Market-Based Renewable Energy Excluding Hydroelectricity Percentage | percent |  |  | 18 | 2 |
| N2oEmissionRate | N2O Emissions Rate | double |  |  | 18 | 6 |
| N2oEmissionRateInTgwh | N2O Emissions Rate (tonnes/GWh) | double |  |  | 18 | 6 |
| N2oEmissionRateUnit | N2O Emissions Rate Unit | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OtherEmssnFctrId | Other Emissions Factor Set ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PostalCodeSet | Postal Code Set | textarea |  | 32768 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| State | State | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
