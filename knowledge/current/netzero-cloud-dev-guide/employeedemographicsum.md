---
title: "EmployeeDemographicSum"
domain: netzero-cloud-dev-guide
topic: employeedemographicsum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.026Z
estimatedTokens: 2457
keywords: [EmployeeDemographicSum, statistics, employees, their, demographic, employee, count, age, group, gender, region, API, version, 57.0, later]
---

# EmployeeDemographicSum

> Represents statistics about employees based on their demographic
         information, such as employee count by age group, by gender, and by region. This
      object is available in API version 57.0 and later.

# EmployeeDemographicSum

Represents statistics about employees based on their demographic information, such as employee count by age group, by gender, and by region. This object is available in API version 57.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

Our platform provides you with the option to track data that you deem appropriate. We don't mandate or require you to enter any specific data. The decision to enter and track information, as well as the nature and extent of that data, rests solely with you.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AgeGroup | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the age group of an employee.Possible values are:30-50 years< 30 years> 50 years |
| Country | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the country for which the demographic information is added.Possible values are:AD—AndorraAE—United Arab EmiratesAF—AfghanistanAG—Antigua and BarbudaAI—AnguillaAL—AlbaniaAM—ArmeniaAO—AngolaAQ—AntarcticaAR—ArgentinaAT—AustriaAU—AustraliaAW—ArubaAX—Aland IslandsAZ—AzerbaijanBA—Bosnia and HerzegovinaBB—BarbadosBD—BangladeshBE—BelgiumBF—Burkina FasoBG—BulgariaBH—BahrainBI—BurundiBJ—BeninBL—Saint BarthélemyBM—BermudaBN—Brunei DarussalamBO—Bolivia, Plurinational State ofBQ—Bonaire, Sint Eustatius and SabaBR—BrazilBS—BahamasBT—BhutanBV—Bouvet IslandBW—BotswanaBY—BelarusBZ—BelizeCA—CanadaCC—Cocos (Keeling) IslandsCD—Congo, the Democratic Republic of theCF—Central African RepublicCG—CongoCH—SwitzerlandCI—Côte d'IvoireCK—Cook IslandsCL—ChileCM—CameroonCN—ChinaCO—ColombiaCR—Costa RicaCU—CubaCV—Cape VerdeCW—CuraçaoCX—Christmas IslandCY—CyprusCZ—CzechiaDE—GermanyDJ—DjiboutiDK—DenmarkDM—DominicaDO—Dominican RepublicDZ—AlgeriaEC—EcuadorEE—EstoniaEG—EgyptEH—Western SaharaER—EritreaES—SpainET—EthiopiaFI—FinlandFJ—FijiFK—Falkland Islands (Malvinas)FO—Faroe IslandsFR—FranceGA—GabonGB—United KingdomGD—GrenadaGE—GeorgiaGF—French GuianaGG—GuernseyGH—GhanaGI—GibraltarGL—GreenlandGM—GambiaGN—GuineaGP—GuadeloupeGQ—Equatorial GuineaGR—GreeceGS—South Georgia and the South Sandwich IslandsGT—GuatemalaGW—Guinea-BissauGY—GuyanaHK—Hong KongHM—Heard Island and McDonald IslandsHN—HondurasHR—CroatiaHT—HaitiHU—HungaryID—IndonesiaIE—IrelandIL—IsraelIM—Isle of ManIN—IndiaIO—British Indian Ocean TerritoryIQ—IraqIR—Iran, Islamic Republic ofIS—IcelandIT—ItalyJE—JerseyJM—JamaicaJO—JordanJP—JapanKE—KenyaKG—KyrgyzstanKH—CambodiaKI—KiribatiKM—ComorosKN—Saint Kitts and NevisKP—Korea, Democratic People's Republic ofKR—Korea, Republic ofKW—KuwaitKY—Cayman IslandsKZ—KazakhstanLA—Lao People's Democratic RepublicLB—LebanonLC—Saint LuciaLI—LiechtensteinLK—Sri LankaLR—LiberiaLS—LesothoLT—LithuaniaLU—LuxembourgLV—LatviaLY—LibyaMA—MoroccoMC—MonacoMD—Moldova, Republic ofME—MontenegroMF—Saint Martin (French part)MG—MadagascarMK—North MacedoniaML—MaliMM—MyanmarMN—MongoliaMO—MacaoMQ—MartiniqueMR—MauritaniaMS—MontserratMT—MaltaMU—MauritiusMV—MaldivesMW—MalawiMX—MexicoMY—MalaysiaMZ—MozambiqueNA—NamibiaNC—New CaledoniaNE—NigerNF—Norfolk IslandNG—NigeriaNI—NicaraguaNL—NetherlandsNO—NorwayNP—NepalNR—NauruNU—NiueNZ—New ZealandOM—OmanPA—PanamaPE—PeruPF—French PolynesiaPG—Papua New GuineaPH—PhilippinesPK—PakistanPL—PolandPM—Saint Pierre and MiquelonPN—PitcairnPR—Puerto RicoPS—PalestinePT—PortugalPY—ParaguayQA—QatarRE—ReunionRO—RomaniaRS—SerbiaRU—Russian FederationRW—RwandaSA—Saudi ArabiaSB—Solomon IslandsSC—SeychellesSD—SudanSE—SwedenSG—SingaporeSH—Saint Helena, Ascension and Tristan da CunhaSI—SloveniaSJ—Svalbard and Jan MayenSK—SlovakiaSL—Sierra LeoneSM—San MarinoSN—SenegalSO—SomaliaSR—SurinameSS—South SudanST—Sao Tome and PrincipeSV—El SalvadorSX—Sint Maarten (Dutch part)SY—Syrian Arab RepublicSZ—EswatiniTC—Turks and Caicos IslandsTD—ChadTF—French Southern TerritoriesTG—TogoTH—ThailandTJ—TajikistanTK—TokelauTL—Timor-LesteTM—TurkmenistanTN—TunisiaTO—TongaTR—TürkiyeTT—Trinidad and TobagoTV—TuvaluTW—TaiwanTZ—Tanzania, United Republic ofUA—UkraineUG—UgandaUS—United StatesUY—UruguayUZ—UzbekistanVA—Holy See (Vatican City State)VC—Saint Vincent and the GrenadinesVE—Venezuela, Bolivarian Republic ofVG—Virgin Islands, BritishVN—VietnamVU—VanuatuWF—Wallis and FutunaWS—SamoaXK—KosovoYE—YemenYT—MayotteZA—South AfricaZM—ZambiaZW—Zimbabwe |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the employee statistics. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reporting period for which the employee statistics are generated.This field is a relationship field.Relationship NameDisclsReportingPeriodRelationship TypeLookupRefers ToDisclsReportingPeriod |
| EmployeeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of employees based on a combination of employment type, work type, gender, age group, and region. |
| EmploymentType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of employment.Possible values are:AllFull-TimeFull-Time EquivalentNon-Guaranteed HoursPart-TimePermanentTemporaryProvided By UndertakingsNon-Employee or Self-Employed |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the gender of an employee.Possible values are:FemaleMaleNon-BinaryNot DisclosedOther |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Month | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the month for which the demographic information is added.Possible values are:AprilAugustDecemberFebruaryJanuaryJulyJuneMarchMayNovemberOctoberSeptember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Percentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of employees based on a combination of employment type, work type, gender, age group, and region. |
| Region | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the region of an employee.Possible values are:AMERANZAPACAfricaCentral AmericaCentral AsiaEMEAEuropeLATAMMiddle EastNorth AmericaSouth AmericaSoutheast Asia |
| ReportType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of report that uses the employee statistics.Possible values are:HeadcountNew HireTurnover |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRelationship TypeLookupRefers ToAccount |
| WorkType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of work done by the employee.Possible values are:AccountingHuman Resource |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmployeeDevelopmentSumChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[EmployeeDevelopmentSumFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EmployeeDevelopmentSumHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EmployeeDevelopmentSumShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EmployeeDevelopmentSumChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- EmployeeDevelopmentSumFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EmployeeDevelopmentSumHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EmployeeDevelopmentSumShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
