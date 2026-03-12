---
title: "StnryAssetEnvrSrc"
domain: netzero-cloud-dev-guide
topic: stnryassetenvrsrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.106Z
estimatedTokens: 3546
keywords: [StnryAssetEnvrSrc, assets, stationary, nature, energy, recorded, source, greenhouse, gas, emissions, API, version, 54.0, later, Calls]
---

# StnryAssetEnvrSrc

> Represents assets that are stationary in nature, use energy that can
         be recorded, and are the source of greenhouse gas emissions. This object is available
      in API version 54.0 and later.

# StnryAssetEnvrSrc

Represents assets that are stationary in nature, use energy that can be recorded, and are the source of greenhouse gas emissions. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the company, it's subsidiary, or it's business unit for which you are doing carbon accounting. This field is available in API version 57.0 and later.This field is a relationship field.Relationship NameAccountNameRelationship TypeLookupRefers ToAccount |
| BusinessRegion | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business region where this stationary asset is located.Possible values are:AMERANZAPACAfricaCentral AmericaCentral AsiaEMEAEuropeLATAMMiddle EastNorth AmericaSouth AmericaSoutheast Asia |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where this stationary asset is located. |
| Country | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe country where this stationary asset is located.Possible values are:AD—AndorraAE—United Arab EmiratesAF—AfghanistanAG—Antigua and BarbudaAI—AnguillaAL—AlbaniaAM—ArmeniaAO—AngolaAQ—AntarcticaAR—ArgentinaAT—AustriaAU—AustraliaAW—ArubaAX—Aland IslandsAZ—AzerbaijanBA—Bosnia and HerzegovinaBB—BarbadosBD—BangladeshBE—BelgiumBF—Burkina FasoBG—BulgariaBH—BahrainBI—BurundiBJ—BeninBL—Saint BarthélemyBM—BermudaBN—Brunei DarussalamBO—Bolivia, Plurinational State ofBQ—Bonaire, Sint Eustatius and SabaBR—BrazilBS—BahamasBT—BhutanBV—Bouvet IslandBW—BotswanaBY—BelarusBZ—BelizeCA—CanadaCC—Cocos (Keeling) IslandsCD—Congo, the Democratic Republic of theCF—Central African RepublicCG—CongoCH—SwitzerlandCI—Cote d'IvoireCK—Cook IslandsCL—ChileCM—CameroonCN—ChinaCO—ColombiaCR—Costa RicaCU—CubaCV—Cape VerdeCW—CuraçaoCX—Christmas IslandCY—CyprusCZ—CzechiaDE—GermanyDJ—DjiboutiDK—DenmarkDM—DominicaDO—Dominican RepublicDZ—AlgeriaEC—EcuadorEE—EstoniaEG—EgyptEH—Western SaharaER—EritreaES—SpainET—EthiopiaFI—FinlandFJ—FijiFK—Falkland Islands (Malvinas)FO—Faroe IslandsFR—FranceGA—GabonGB—United KingdomGD—GrenadaGE—GeorgiaGF—French GuianaGG—GuernseyGH—GhanaGI—GibraltarGL—GreenlandGM—GambiaGN—GuineaGP—GuadeloupeGQ—Equatorial GuineaGR—GreeceGS—South Georgia and the South Sandwich IslandsGT—GuatemalaGW—Guinea-BissauGY—GuyanaHK—Hong KongHM—Heard Island and McDonald IslandsHN—HondurasHR—CroatiaHT—HaitiHU—HungaryID—IndonesiaIE—IrelandIL—IsraelIM—Isle of ManIN—IndiaIO—British Indian Ocean TerritoryIQ—IraqIR—Iran, Islamic Republic ofIS—IcelandIT—ItalyJE—JerseyJM—JamaicaJO—JordanJP—JapanKE—KenyaKG—KyrgyzstanKH—CambodiaKI—KiribatiKM—ComorosKN—Saint Kitts and NevisKP—Korea, Democratic People's Republic ofKR—Korea, Republic ofKW—KuwaitKY—Cayman IslandsKZ—KazakhstanLA—Lao People's Democratic RepublicLB—LebanonLC—Saint LuciaLI—LiechtensteinLK—Sri LankaLR—LiberiaLS—LesothoLT—LithuaniaLU—LuxembourgLV—LatviaLY—LibyaMA—MoroccoMC—MonacoMD—Moldova, Republic ofME—MontenegroMF—Saint Martin (French part)MG—MadagascarMK—North MacedoniaML—MaliMM—MyanmarMN—MongoliaMO—MacaoMQ—MartiniqueMR—MauritaniaMS—MontserratMT—MaltaMU—MauritiusMV—MaldivesMW—MalawiMX—MexicoMY—MalaysiaMZ—MozambiqueNA—NamibiaNC—New CaledoniaNE—NigerNF—Norfolk IslandNG—NigeriaNI—NicaraguaNL—NetherlandsNO—NorwayNP—NepalNR—NauruNU—NiueNZ—New ZealandOM—OmanPA—PanamaPE—PeruPF—French PolynesiaPG—Papua New GuineaPH—PhilippinesPK—PakistanPL—PolandPM—Saint Pierre and MiquelonPN—PitcairnPR—Puerto RicoPS—PalestinePT—PortugalPY—ParaguayQA—QatarRE—ReunionRO—RomaniaRS—SerbiaRU—Russian FederationRW—RwandaSA—Saudi ArabiaSB—Solomon IslandsSC—SeychellesSD—SudanSE—SwedenSG—SingaporeSH—Saint Helena, Ascension and Tristan da CunhaSI—SloveniaSJ—Svalbard and Jan MayenSK—SlovakiaSL—Sierra LeoneSM—San MarinoSN—SenegalSO—SomaliaSR—SurinameSS—South SudanST—Sao Tome and PrincipeSV—El SalvadorSX—Sint Maarten (Dutch part)SY—Syrian Arab RepublicSZ—EswatiniTC—Turks and Caicos IslandsTD—ChadTF—French Southern TerritoriesTG—TogoTH—ThailandTJ—TajikistanTK—TokelauTL—Timor-LesteTM—TurkmenistanTN—TunisiaTO—TongaTR—TürkiyeTT—Trinidad and TobagoTV—TuvaluTW—TaiwanTZ—Tanzania, United Republic ofUA—UkraineUG—UgandaUS—United StatesUY—UruguayUZ—UzbekistanVA—Holy See (Vatican City State)VC—Saint Vincent and the GrenadinesVE—Venezuela, Bolivarian Republic ofVG—Virgin Islands, BritishVN—VietnamVU—VanuatuWF—Wallis and FutunaWS—SamoaXK—KosovoYE—YemenYT—MayotteZA—South AfricaZM—ZambiaZW—Zimbabwe |
| CrbnEmssnScopeAllocId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe carbon emissions scope allocation record to override the default scope assignments for all the fuel types.This is a relationship field.Relationship NameCrbnEmssnScopeAllocRelationship TypeLookupRefers ToCrbnEmssnScopeAlloc |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the stationary asset environmental source. |
| ElectricityEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe electricity emissions factor set record that's used to calculate emissions associated with the electricity consumed by this stationary asset.This is a relationship field.Relationship NameElectricityEmssnFctrRelationship TypeLookupRefers ToElectricityEmssnFctrSet |
| EnvironmentalRiskId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe risk that's associated with the stationary asset environmental source.This field is a relationship field.Relationship NameEnvironmentalRiskRelationship TypeLookupRefers ToEnvironmentalRisk |
| IsCompanyOwnedAsset | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the asset is owned by your company (true) or not (false). Asset ownership by the company impacts the scope allocation of associated emissions.The default value is false. |
| IsLeedCertified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stationary asset is certified as a green building (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LeaseExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the lease of the stationary asset expires. |
| LeaseIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique external identifier for the lease of the stationary asset. |
| MktBsdElectriEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe electricity emissions factor set record that's used to calculate market-based emissions associated with the electricity consumed by this stationary asset.This field is a relationship field.Relationship NameMktBsdElectriEmssnFctrRelationship TypeLookupRefers ToElectricityEmssnFctrSet |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OccupiedFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe building floor area occupied by your organization. This value is used in associated carbon footprint or energy use records. |
| OccupiedFloorAreaUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the occupied floor area.Possible values are:m2sqftThe default value is sqft. |
| OtherEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe other emissions factor set record containing emissions factors for the consumption of other fuel types.This is a relationship field.Relationship NameOtherEmssnFctrRelationship TypeLookupRefers ToOtherEmssnFctrSet |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentEnvironmentalSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent asset that stores the aggregated emissions data of all the related assets.This is a relationship field.Relationship NameParentEnvironmentalSourceRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of this stationary asset. |
| PremiseIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique external identifier for the building. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the record type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| RefrigerantEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe refrigerant emissions factor record that's used to calculate emissions based on the refrigerant values.This is a relationship field.Relationship NameRefrigerantEmssnFctrRelationship TypeLookupRefers ToRefrigerantEmssnFctr |
| RegionalBldgEnergyIntensityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe building energy intensity record is automatically populated when the country is the United States, the postal code is valid, and the total building floor area is entered.This is a relationship field.Relationship NameRegionalBldgEnergyIntensityRelationship TypeLookupRefers ToBldgEnrgyIntensity |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where this stationary asset is located. |
| StationaryAssetIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique external identifier for the stationary asset. |
| StationaryAssetType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of stationary asset. You can enter the selected asset type as the building asset type in the associated building energy intensity record.Possible values are:Data CenterEquipmentFactoryGeneratorHotelManufacturingMultifamily ResidentialOfficeOtherRestaurantRetailWarehouseThe default value is Office. |
| StreetAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address where this stationary asset is located. |
| StreetAddress2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe second line of the street address where this stationary asset is located. |
| TotalFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total building floor area of your organization. This value is used in associated carbon footprint or energy use records. |
| TotalFloorAreaUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the total floor area.Possible values are:m2sqftThe default value is sqft. |
| WstDispoEmssnFctrSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe waste disposal emissions factors set that's associated with the stationary asset environmental source.This field is a relationship field.Relationship NameWstDispoEmssnFctrSetRelationship TypeLookupRefers ToWstDispoEmssnFctrSet |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StnryAssetEnvrSrcChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 65.0)

Change events are available for the object.

[StnryAssetEnvrSrcFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[StnryAssetEnvrSrcHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[StnryAssetEnvrSrcShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- StnryAssetEnvrSrcChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- StnryAssetEnvrSrcFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- StnryAssetEnvrSrcHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- StnryAssetEnvrSrcShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
