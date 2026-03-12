---
title: "ElectricityEmssnFctrSet"
domain: netzero-cloud-dev-guide
topic: electricityemssnfctrset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:58.891Z
estimatedTokens: 5789
keywords: [ElectricityEmssnFctrSet, factors, convert, electricity, usage, CO₂e, CO₂, CH₄, N₂O, record, holds, data, breakdown, sources, fuel]
---

# ElectricityEmssnFctrSet

> Represents the factors that are used to convert electricity usage into CO₂e,
         CO₂, CH₄, and N₂O values. This record holds data on the breakdown of sources of electricity
         by fuel type (grid mixes). This object is available in API version 54.0 and later.

# ElectricityEmssnFctrSet

Represents the factors that are used to convert electricity usage into CO₂e, CO₂, CH₄, and N₂O values. This record holds data on the breakdown of sources of electricity by fuel type (grid mixes). This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Ch4EmissionRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions rate. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| Ch4EmissionRateInTgwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CH4 emissions rate in tonnes per gigawatt hour. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| Ch4EmissionRateUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the CH4 output emission rate.Possible values are:G_PER_KWH—g/kWhKG_PER_KWH—kg/kWhKG_PER_MWH—kg/MWhLBS_PER_GWH—lbs/GWhLBS_PER_MWH—lbs/MWhTONNES_PER_KWH—tonnes/kWhTONNES_PER_MWH—tonnes/MWhThe default value is 'KG_PER_KWH'. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city for which this electricity emissions factor set is valid. |
| Co2EmissionRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions rate. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| Co2EmissionRateInTmwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CO2 emissions rate in tonnes per megawatt-hour. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| Co2EmissionRateUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the CO2 output emission rate.Possible values are:G_PER_KWH—g/kWhKG_PER_KWH—kg/kWhKG_PER_MWH—kg/MWhLBS_PER_GWH—lbs/GWhLBS_PER_MWH—lbs/MWhTONNES_PER_KWH—tonnes/kWhTONNES_PER_MWH—tonnes/MWhThe default value is 'KG_PER_KWH'. |
| Co2eEmissionRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total annual CO2 equivalent output emission rate for a grid subregion that’s calculated using the location-based method. This value will override the value calculated by using CO2, CH4, and N2O factors. |
| Co2eEmissionRateInTmwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total annual CO2 equivalent output emission rate in tonnes per megawatt-hour. |
| Co2eEmissionRateUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the total CO2 equivalent output emission rate.Possible values are:G_PER_KWH—g/kWhKG_PER_KWH—kg/kWhKG_PER_MWH—kg/MWhLBS_PER_GWH—lbs/GWhLBS_PER_MWH—lbs/MWhTONNES_PER_KWH—tonnes/kWhTONNES_PER_MWH—tonnes/MWhThe default value is 'KG_PER_KWH'. |
| Country | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe country for which this electricity emissions factor set is valid.Possible values are:AD—AndorraAE—United Arab EmiratesAF—AfghanistanAG—Antigua and BarbudaAI—AnguillaAL—AlbaniaAM—ArmeniaAO—AngolaAQ—AntarcticaAR—ArgentinaAT—AustriaAU—AustraliaAW—ArubaAX—Aland IslandsAZ—AzerbaijanBA—Bosnia and HerzegovinaBB—BarbadosBD—BangladeshBE—BelgiumBF—Burkina FasoBG—BulgariaBH—BahrainBI—BurundiBJ—BeninBL—Saint BarthélemyBM—BermudaBN—Brunei DarussalamBO—Bolivia, Plurinational State ofBQ—Bonaire, Sint Eustatius and SabaBR—BrazilBS—BahamasBT—BhutanBV—Bouvet IslandBW—BotswanaBY—BelarusBZ—BelizeCA—CanadaCC—Cocos (Keeling) IslandsCD—Congo, the Democratic Republic of theCF—Central African RepublicCG—CongoCH—SwitzerlandCI—Cote d'IvoireCK—Cook IslandsCL—ChileCM—CameroonCN—ChinaCO—ColombiaCR—Costa RicaCU—CubaCV—Cape VerdeCW—CuraçaoCX—Christmas IslandCY—CyprusCZ—CzechiaDE—GermanyDJ—DjiboutiDK—DenmarkDM—DominicaDO—Dominican RepublicDZ—AlgeriaEC—EcuadorEE—EstoniaEG—EgyptEH—Western SaharaER—EritreaES—SpainET—EthiopiaFI—FinlandFJ—FijiFK—Falkland Islands (Malvinas)FO—Faroe IslandsFR—FranceGA—GabonGB—United KingdomGD—GrenadaGE—GeorgiaGF—French GuianaGG—GuernseyGH—GhanaGI—GibraltarGL—GreenlandGM—GambiaGN—GuineaGP—GuadeloupeGQ—Equatorial GuineaGR—GreeceGS—South Georgia and the South Sandwich IslandsGT—GuatemalaGW—Guinea-BissauGY—GuyanaHM—Heard Island and McDonald IslandsHN—HondurasHR—CroatiaHT—HaitiHU—HungaryID—IndonesiaIE—IrelandIL—IsraelIM—Isle of ManIN—IndiaIO—British Indian Ocean TerritoryIQ—IraqIR—Iran, Islamic Republic ofIS—IcelandIT—ItalyJE—JerseyJM—JamaicaJO—JordanJP—JapanKE—KenyaKG—KyrgyzstanKH—CambodiaKI—KiribatiKM—ComorosKN—Saint Kitts and NevisKP—Korea, Democratic People's Republic ofKR—Korea, Republic ofKW—KuwaitKY—Cayman IslandsKZ—KazakhstanLA—Lao People's Democratic RepublicLB—LebanonLC—Saint LuciaLI—LiechtensteinLK—Sri LankaLR—LiberiaLS—LesothoLT—LithuaniaLU—LuxembourgLV—LatviaLY—LibyaMA—MoroccoMC—MonacoMD—Moldova, Republic ofME—MontenegroMF—Saint Martin (French part)MG—MadagascarMK—North MacedoniaML—MaliMM—MyanmarMN—MongoliaMO—MacaoMQ—MartiniqueMR—MauritaniaMS—MontserratMT—MaltaMU—MauritiusMV—MaldivesMW—MalawiMX—MexicoMY—MalaysiaMZ—MozambiqueNA—NamibiaNC—New CaledoniaNE—NigerNF—Norfolk IslandNG—NigeriaNI—NicaraguaNL—NetherlandsNO—NorwayNP—NepalNR—NauruNU—NiueNZ—New ZealandOM—OmanPA—PanamaPE—PeruPF—French PolynesiaPG—Papua New GuineaPH—PhilippinesPK—PakistanPL—PolandPM—Saint Pierre and MiquelonPN—PitcairnPS—PalestinePT—PortugalPY—ParaguayQA—QatarRE—ReunionRO—RomaniaRS—SerbiaRU—Russian FederationRW—RwandaSA—Saudi ArabiaSB—Solomon IslandsSC—SeychellesSD—SudanSE—SwedenSG—SingaporeSH—Saint Helena, Ascension and Tristan da CunhaSI—SloveniaSJ—Svalbard and Jan MayenSK—SlovakiaSL—Sierra LeoneSM—San MarinoSN—SenegalSO—SomaliaSR—SurinameSS—South SudanST—Sao Tome and PrincipeSV—El SalvadorSX—Sint Maarten (Dutch part)SY—Syrian Arab RepublicSZ—EswatiniTC—Turks and Caicos IslandsTD—ChadTF—French Southern TerritoriesTG—TogoTH—ThailandTJ—TajikistanTK—TokelauTL—Timor-LesteTM—TurkmenistanTN—TunisiaTO—TongaTR—TürkiyeTT—Trinidad and TobagoTV—TuvaluTW—TaiwanTZ—Tanzania, United Republic ofUA—UkraineUG—UgandaUS—United StatesUY—UruguayUZ—UzbekistanVA—Holy See (Vatican City State)VC—Saint Vincent and the GrenadinesVE—Venezuela, Bolivarian Republic ofVG—Virgin Islands, BritishVN—VietnamVU—VanuatuWF—Wallis and FutunaWS—SamoaYE—YemenYT—MayotteZA—South AfricaZM—ZambiaZW—Zimbabwe |
| EmissionFactorDataSource | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe source of the emissions factor reference data. |
| EmissionFactorUpdateYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this reference data for the emissions factor was most recently updated.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| EmissionsFactorType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates if this Electricity Emissions Factor is Location-based, Market-Based, or both.Possible values are:LocationAndMarketBased—Location and Market-BasedLocationBased—Location-BasedMarketBased—Market-BasedThe default value is LocationAndMarketBased. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal Id of this emissions factor |
| GenlConversionFctrRevisionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the electricity grid reference data for the emissions factors record is revised by the publishing authority. |
| GridSubregion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe electricity grid subregion for which this electricity emissions factor set is valid. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LocBasedGeothermalMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from geothermal source based on the region's grid mix data from governmental or non-governmental organizations. |
| LocBasedOtherFossilFuelMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from other fossil fuels based on the region's grid mix data from governmental or non-governmental organizations. |
| LocBasedRenewableEnergyPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of electricity generated from renewable resources such as biomass, geothermal, solar, wind, and hydroelectricity that's calculated based on the location-based data. |
| LocBsdRenewableEnrgyNonHydro | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of electricity generated from renewable resources such as biomass, geothermal, solar, and wind that's calculated based on the location-based data. |
| LocationBasedBiomassMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from biomass based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedCoalMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from coal based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedGasMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from gas based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedHydroMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from hydroelectric power source based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedMixPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of electricity generated from all sources based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedNuclearMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from nuclear power source based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedOilMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from oil based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedOtherFuelMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from other fuels based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedSolarMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from solar photovoltaic cells based on the region's grid mix data from governmental or non-governmental organizations. |
| LocationBasedWindMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from wind based on the region's grid mix data from governmental or non-governmental organizations. |
| MarketBasedBiomassMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from biomass based on the grid mix data from the electricity supplier. |
| MarketBasedCoalMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from coal based on the grid mix data from the electricity supplier. |
| MarketBasedGasMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from gas based on the grid mix data from the electricity supplier. |
| MarketBasedHydroMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from hydroelectric power source based on the grid mix data from the electricity supplier. |
| MarketBasedMixPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of electricity generated from all sources based on the grid mix data from the electricity supplier. |
| MarketBasedNuclearMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from nuclear power source based on the grid mix data from the electricity supplier. |
| MarketBasedOilMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from oil based on the grid mix data from the electricity supplier. |
| MarketBasedOtherFuelMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from other fuels based on the grid mix data from the electricity supplier. |
| MarketBasedSolarMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from solar photovoltaic cells based on the grid mix data from the electricity supplier. |
| MarketBasedWindMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from wind based on the grid mix data from the electricity supplier. |
| MktBasedGeothermalMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from geothermal power source based on the grid mix data from the electricity supplier. |
| MktBasedOtherFossilFuelMixPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of electricity generated from other fossil fuels based on the grid mix data from the electricity supplier. |
| MktBasedRenewableEnergyPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of electricity generated from renewable resources such as biomass, geothermal, solar, wind, and hydroelectricity that's calculated based on the market-based data. |
| MktBsdCh4EmssnRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate of market-based CH4 emissions. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| MktBsdCh4EmssnRateUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure for the rate of market-based CH4 emissions output.Possible values are:G_PER_KWH—g/kWhKG_PER_KWH—kg/kWhKG_PER_MWH—kg/MWhLBS_PER_GWH—lbs/GWhLBS_PER_MWH—lbs/MWhTONNES_PER_KWH—tonnes/kWhTONNES_PER_MWH—tonnes/MWhThe default value is KG_PER_KWH. |
| MktBsdCh4EmssnRtInTgwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe rate of market-based CH4 emissions in tonnes per gigawatt hour. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| MktBsdCo2EmssnRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate of market-based CO2 emissions. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| MktBsdCo2EmssnRateUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure for the rate of market-based CO2 emissions output.Possible values are:G_PER_KWH—g/kWhKG_PER_KWH—kg/kWhKG_PER_MWH—kg/MWhLBS_PER_GWH—lbs/GWhLBS_PER_MWH—lbs/MWhTONNES_PER_KWH—tonnes/kWhTONNES_PER_MWH—tonnes/MWhThe default value is KG_PER_KWH. |
| MktBsdCo2EmssnRtInTmwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe rate of market-based CO2 emissions in tonnes per megawatt hour. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| MktBsdCo2eEmissionRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual carbon dioxide equivalent output emission rate that's calculated based on the market-based data of the electricity grid subregion. |
| MktBsdCo2eEmissionRateInTmwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe annual carbon dioxide equivalent output emission rate that's calculated based on the market-based data. |
| MktBsdCo2eEmissionRateUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the carbon dioxide equivalent market-based output emission rate.Possible values are:G_PER_KWH—g/kWhKG_PER_KWH—kg/kWhKG_PER_MWH—kg/MWhLBS_PER_GWH—lbs/GWhLBS_PER_MWH—lbs/MWhTONNES_PER_KWH—tonnes/kWhTONNES_PER_MWH—tonnes/MWhThe default value is 'KG_PER_KWH'. |
| MktBsdDataSrcType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of data source of the market-based conversion factor for the electricity emissions factor.Possible values are:ContractsForElectricityPurchase—Contracts for Electricity PurchaseEnergyAttributeCertificate—Energy Attribute CertificateResidualMixData—Residual Mix DataSupplierOrUtilityEmissionRates—Supplier or Utility Emission Rates |
| MktBsdElectrSupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier of electricity associated with this electricity emissions factor.This field is a relationship field.Relationship NameMktBsdElectrSupplierRelationship TypeLookupRefers ToSupplier |
| MktBsdN2oEmssnRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate of market-based N2O emissions. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| MktBsdN2oEmssnRateUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure for the rate of market-based N2O emissions output.Possible values are:G_PER_KWH—g/kWhKG_PER_KWH—kg/kWhKG_PER_MWH—kg/MWhLBS_PER_GWH—lbs/GWhLBS_PER_MWH—lbs/MWhTONNES_PER_KWH—tonnes/kWhTONNES_PER_MWH—tonnes/MWhThe default value is KG_PER_KWH. |
| MktBsdN2oEmssnRtInTgwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe rate of market-based N2O emissions in tonnes per gigawatt hour. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| MktBsdRenewableEnrgyNonHydro | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of electricity generated from renewable resources such as biomass, geothermal, solar, and wind that's calculated based on the market-based data. |
| N2oEmissionRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions rate. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| N2oEmissionRateInTgwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe N2O emissions rate in tonnes per gigawatt hour. This field is informational only and doesn’t impact the carbon dioxide equivalent calculations. |
| N2oEmissionRateUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the N2O output emission rate.Possible values are:G_PER_KWH—g/kWhKG_PER_KWH—kg/kWhKG_PER_MWH—kg/MWhLBS_PER_GWH—lbs/GWhLBS_PER_MWH—lbs/MWhTONNES_PER_KWH—tonnes/kWhTONNES_PER_MWH—tonnes/MWhThe default value is 'KG_PER_KWH'. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OtherEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe other emissions factor set record containing global warming potential values for CH4 and N2O.This is a relationship field.Relationship NameOtherEmssnFctrRelationship TypeLookupRefers ToOtherEmssnFctrSet |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PostalCodeSet | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe valid postal codes for this electricity emissions factor set. |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state for which this electricity emissions factor set is valid. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ElectricityEmssnFctrSetFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ElectricityEmssnFctrSetHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ElectricityEmssnFctrSetShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ElectricityEmssnFctrSetFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ElectricityEmssnFctrSetHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- ElectricityEmssnFctrSetShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
