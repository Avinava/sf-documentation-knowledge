---
title: "EmssnReductionTarget"
domain: netzero-cloud-dev-guide
topic: emssnreductiontarget
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:59.129Z
estimatedTokens: 3680
keywords: [EmssnReductionTarget, science-based, non-science-based, target, company, fulfill, emissions, reduction, commitment, company’s, goal, reduce, carbon, increase, renewable]
---

# EmssnReductionTarget

> Represents information about the science-based or non-science-based target set by a company to fulfill its emissions reduction commitment. This target indicates the company’s emissions reduction goal. A company’s emissions reduction goal could be to reduce carbon emissions or increase renewable energy for reaching a target metric tonnes of CO2e (tCO2e) within a specific timeframe. This object is available in API version 54.0 and later.

# EmssnReductionTarget

Represents information about the science-based or non-science-based target set by a company to fulfill its emissions reduction commitment. This target indicates the company’s emissions reduction goal. A company’s emissions reduction goal could be to reduce carbon emissions or increase renewable energy for reaching a target metric tonnes of CO2e (tCO2e) within a specific timeframe. This object is available in API version 54.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| AbsoluteContractionPercentage | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe percentage of annual contraction when using the SBTI's absolute contraction method of target-setting. 2.5% annual linear reduction is recommended for SBTi WB2C targets and 4.2% annual linear reduction is recommended for SBTi 1.5C targets.Possible values are:2.5PERCENTANNUALREDUCTION—2.5% Annual Linear Reduction4.2PERCENTANNUALREDUCTION—4.2% Annual Linear ReductionCUSTOM—Custom |
| ActivityUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit used for measuring the base year activity and target year activity.Possible values are:DOLLAR_VALUE_ADDED—Dollar Value AddedMEGAWATT_HOUR_OF_ELECTRICITY—Megawatt-hour of ElectricityREVENUE_PASSENGER_KILOMETER—Revenue Passenger KilometerSQUARE_METER—Square MeterTONS_OF_ALUMINUM—Tons of AluminumTONS_OF_CEMENT—Tons of CementTONS_OF_PAPER_AND_CARDBOARD—Tons of Paper and CardboardTONS_OF_STEEL—Tons of Steel |
| AnnualEmissionsInventoryId | TypereferencePropertiesFilter, Group, SortDescriptionThe base year’s annual emissions inventory record that’s related to the emission reduction target record.This is a relationship field.Relationship NameAnnualEmissionsInventoryRelationship TypeLookupRefers ToAnnualEmssnInventory |
| BaseYear | TypedoublePropertiesFilter, Nillable, SortDescriptionThe year of the related annual emissions inventory record. |
| BaseYearActivity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of activity in the base year that’s used to calculate emission reduction using the economic intensity or sectoral decarbonization methods. |
| BaseYearEmissionIntensity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe level of emissions per unit of economic activity in the base year. This value is usually the dollar value added or the unit of production in the base year that’s derived from the related annual emissions inventory record. |
| BaseYearEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe base year’s emissions value in the related annual emissions inventory record. |
| BusinessLine | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe line of business for which the emissions reduction target is being set when the selected target level is Business Line. |
| BusinessRegion | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe business region for which the emissions reduction target is being set when the selected target level is Business Region.Possible values are:AMERANZAPACAfricaCentral AmericaCentral AsiaEMEAEuropeLATAMMiddle EastNorth AmericaSouth AmericaSoutheast Asia |
| Category | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe category of the emissions reduction target.Possible values are:OTHER—OtherSCIENCEBASED—Science-Based |
| Country | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe country for which the emissions reduction target is being set when the selected target level is Country.Possible values are:AD—AndorraAE—United Arab EmiratesAF—AfghanistanAG—Antigua and BarbudaAI—AnguillaAL—AlbaniaAM—ArmeniaAO—AngolaAQ—AntarcticaAR—ArgentinaAT—AustriaAU—AustraliaAW—ArubaAX—Aland IslandsAZ—AzerbaijanBA—Bosnia and HerzegovinaBB—BarbadosBD—BangladeshBE—BelgiumBF—Burkina FasoBG—BulgariaBH—BahrainBI—BurundiBJ—BeninBL—Saint BarthélemyBM—BermudaBN—Brunei DarussalamBO—Bolivia, Plurinational State ofBQ—Bonaire, Sint Eustatius and SabaBR—BrazilBS—BahamasBT—BhutanBV—Bouvet IslandBW—BotswanaBY—BelarusBZ—BelizeCA—CanadaCC—Cocos (Keeling) IslandsCD—Congo, the Democratic Republic of theCF—Central African RepublicCG—CongoCH—SwitzerlandCI—Côte d'IvoireCK—Cook IslandsCL—ChileCM—CameroonCN—ChinaCO—ColombiaCR—Costa RicaCU—CubaCV—Cape VerdeCW—CuraçaoCX—Christmas IslandCY—CyprusCZ—CzechiaDE—GermanyDJ—DjiboutiDK—DenmarkDM—DominicaDO—Dominican RepublicDZ—AlgeriaEC—EcuadorEE—EstoniaEG—EgyptEH—Western SaharaER—EritreaES—SpainET—EthiopiaFI—FinlandFJ—FijiFK—Falkland Islands (Malvinas)FO—Faroe IslandsFR—FranceGA—GabonGB—United KingdomGD—GrenadaGE—GeorgiaGF—French GuianaGG—GuernseyGH—GhanaGI—GibraltarGL—GreenlandGM—GambiaGN—GuineaGP—GuadeloupeGQ—Equatorial GuineaGR—GreeceGS—South Georgia and the South Sandwich IslandsGT—GuatemalaGW—Guinea-BissauGY—GuyanaHM—Heard Island and McDonald IslandsHN—HondurasHR—CroatiaHT—HaitiHU—HungaryID—IndonesiaIE—IrelandIL—IsraelIM—Isle of ManIN—IndiaIO—British Indian Ocean TerritoryIQ—IraqIR—Iran, Islamic Republic ofIS—IcelandIT—ItalyJE—JerseyJM—JamaicaJO—JordanJP—JapanKE—KenyaKG—KyrgyzstanKH—CambodiaKI—KiribatiKM—ComorosKN—Saint Kitts and NevisKP—Korea, Democratic People's Republic ofKR—Korea, Republic ofKW—KuwaitKY—Cayman IslandsKZ—KazakhstanLA—Lao People's Democratic RepublicLB—LebanonLC—Saint LuciaLI—LiechtensteinLK—Sri LankaLR—LiberiaLS—LesothoLT—LithuaniaLU—LuxembourgLV—LatviaLY—LibyaMA—MoroccoMC—MonacoMD—Moldova, Republic ofME—MontenegroMF—Saint Martin (French part)MG—MadagascarMK—North MacedoniaML—MaliMM—MyanmarMN—MongoliaMO—MacaoMQ—MartiniqueMR—MauritaniaMS—MontserratMT—MaltaMU—MauritiusMV—MaldivesMW—MalawiMX—MexicoMY—MalaysiaMZ—MozambiqueNA—NamibiaNC—New CaledoniaNE—NigerNF—Norfolk IslandNG—NigeriaNI—NicaraguaNL—NetherlandsNO—NorwayNP—NepalNR—NauruNU—NiueNZ—New ZealandOM—OmanPA—PanamaPE—PeruPF—French PolynesiaPG—Papua New GuineaPH—PhilippinesPK—PakistanPL—PolandPM—Saint Pierre and MiquelonPN—PitcairnPS—PalestinePT—PortugalPY—ParaguayQA—QatarRE—ReunionRO—RomaniaRS—SerbiaRU—Russian FederationRW—RwandaSA—Saudi ArabiaSB—Solomon IslandsSC—SeychellesSD—SudanSE—SwedenSG—SingaporeSH—Saint Helena, Ascension and Tristan da CunhaSI—SloveniaSJ—Svalbard and Jan MayenSK—SlovakiaSL—Sierra LeoneSM—San MarinoSN—SenegalSO—SomaliaSR—SurinameSS—South SudanST—Sao Tome and PrincipeSV—El SalvadorSX—Sint Maarten (Dutch part)SY—Syrian Arab RepublicSZ—EswatiniTC—Turks and Caicos IslandsTD—ChadTF—French Southern TerritoriesTG—TogoTH—ThailandTJ—TajikistanTK—TokelauTL—Timor-LesteTM—TurkmenistanTN—TunisiaTO—TongaTR—TürkiyeTT—Trinidad and TobagoTV—TuvaluTW—TaiwanTZ—Tanzania, United Republic ofUA—UkraineUG—UgandaUS—United StatesUY—UruguayUZ—UzbekistanVA—Holy See (Vatican City State)VC—Saint Vincent and the GrenadinesVE—Venezuela, Bolivarian Republic ofVG—Virgin Islands, BritishVN—VietnamVU—VanuatuWF—Wallis and FutunaWS—SamoaYE—YemenYT—MayotteZA—South AfricaZM—ZambiaZW—Zimbabwe |
| CustomAbsoluteContractionPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe custom percentage of annual emission contraction when using the SBTI's absolute contraction method of target-setting. |
| CustomTargetSettingMethod | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe method used for setting the target when target setting method is Custom. |
| CustomTargetType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of emissions reduction target when the target type is Custom. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the emissions reduction target record. |
| EmissionsActivityId | TypereferencePropertiesFilter, Group, SortDescriptionThe emissions activity record that’s related to the emissions reduction target record.This is a relationship field.Relationship NameEmissionsActivityRelationship TypeLookupRefers ToEmissionsActivity |
| EmssnRdctnCommitmentId | TypereferencePropertiesFilter, Group, SortDescriptionThe emissions-reduction commitment record for which target is being set.This is a relationship field.Relationship NameEmssnRdctnCommitmentRelationship TypeLookupRefers ToEmssnRdctnCommitment |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record is locked or not.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Level | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe level at which the emissions reduction target is being set.Possible values are:BUSINESSLINE—Business LineBUSINESSREGION—Business RegionCOMPANY—CompanyCOUNTRY—Country |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record can be edited or not.The default value is 'false'. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the emissions reduction target record. |
| OtherTargetKpi | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe key performance indicator (KPI) of targets when the target setting method is Other.Possible values are:Renewable Energy Electricity PercentageSupplier Engagement Percentage |
| OtherTargetKpiChangePercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe targeted percentage of change in the key performance indicators (KPI) from the base year to the target year. |
| OtherTargetKpiInBaseYear | TypedoublePropertiesFilter, Nillable, SortDescriptionThe key performance indicator (KPI) of targets in the base year when the target setting method is Other. |
| OtherTargetKpiInTargetYear | TypedoublePropertiesFilter, Nillable, SortDescriptionThe key performance indicator (KPI) of targets in the target year when the target setting method is Other. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TargetEmissionsCalculator | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe application that’s used to calculate the emissions target.Possible values are:OTHER—OtherSBTITOOL—SBTi ToolSUSTAINABILITYCLOUD—Salesforce Net Zero Cloud |
| TargetEmssnChangePercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe targeted percentage of change in emissions from the base year to the target year. |
| TargetEmssnIntensityChangePct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe targeted percentage of change in emissions intensity from the base year to the target year. |
| TargetSettingMethod | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe method used for setting the target.Possible values are:ABSOLUTECONTRACTION—Absolute ContractionCUSTOM—CustomECONOMICINTENSITY—Economic IntensityPHYSICALINTENSITY—Physical IntensitySECTORALDECARBONIZATION—Sectoral Decarbonization |
| TargetType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of emissions reduction target.Possible values are:CUSTOM—CustomEMISSIONREDUCTIONTARGET—Emission Reduction TargetNETZEROEMISSIONSTARGET—Net Zero Emissions TargetRENEWABLEENERGYTARGET—Renewable Energy TargetSUPPLIERENGAGEMENTTARGET—Supplier Engagement Target |
| TargetYear | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe year for which the emissions reduction target is set. The target year is determined by adding the number of years for which the target is set to the base year.Possible values are:2015201620172018201920202021202220232024202520262027202820292030203120322033203420352036203720382039204020412042204320442045204620472048204920502051205220532054205520562057205820592060 |
| TargetYearActivity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of activity in the target year that’s used to calculate emission reduction using economic intensity or sectoral decarbonization methods. |
| TargetYearEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions targeted for in the target year. |
| TargetYearEmissionsIntensity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe level of emissions per unit of economic activity in the target year. This value is usually the dollar value added or the unit of production in the target year. |
| TargetYearOutputCalcType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe measure that’s used to calculate the company’s output in the target year when the selected target setting method is Economic Intensity or Sectoral Decarbonization. The output can be calculated by aligning the company’s growth with its market sector or based on the company's projected activity growth in the target year.Possible values are:FIXEDMARKETSHARE—Fixed Market ShareTARGETMARKETSHARE—Target Market Share |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmssnReductionTargetFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EmssnReductionTargetHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EmssnReductionTargetShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EmssnReductionTargetFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EmssnReductionTargetHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EmssnReductionTargetShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
