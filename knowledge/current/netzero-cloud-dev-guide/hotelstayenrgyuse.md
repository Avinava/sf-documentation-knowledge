---
title: "HotelStayEnrgyUse"
domain: netzero-cloud-dev-guide
topic: hotelstayenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.366Z
estimatedTokens: 2510
keywords: [HotelStayEnrgyUse, energy, consumption, hotel, stay, API, version, 54.0, later, Calls, Associated, Objects]
---

# HotelStayEnrgyUse

> Represents the energy consumption related to hotel stay. This object is
      available in API version 54.0 and later.

# HotelStayEnrgyUse

Represents the energy consumption related to hotel stay. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarbonFootprintReportDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the carbon footprint data of the associated stationary asset is due to be sent to a reporting body. |
| CostCenter | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cost center associated with this energy use record. |
| EmissionFctrKgCo2eRoomPerNight | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions that are calculated based on the impact of staying in a hotel. This value is measured in kg of CO2 equivalents per night. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the values of this energy use record are valid. |
| HotelCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city in which the hotel is located |
| HotelCountry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe country in which the hotel is located.Possible values are:AD—AndorraAE—United Arab EmiratesAF—AfghanistanAG—Antigua and BarbudaAI—AnguillaAL—AlbaniaAM—ArmeniaAO—AngolaAQ—AntarcticaAR—ArgentinaAT—AustriaAU—AustraliaAW—ArubaAX—Aland IslandsAZ—AzerbaijanBA—Bosnia and HerzegovinaBB—BarbadosBD—BangladeshBE—BelgiumBF—Burkina FasoBG—BulgariaBH—BahrainBI—BurundiBJ—BeninBL—Saint BarthélemyBM—BermudaBN—Brunei DarussalamBO—Bolivia, Plurinational State ofBQ—Bonaire, Sint Eustatius and SabaBR—BrazilBS—BahamasBT—BhutanBV—Bouvet IslandBW—BotswanaBY—BelarusBZ—BelizeCA—CanadaCC—Cocos (Keeling) IslandsCD—Congo, the Democratic Republic of theCF—Central African RepublicCG—CongoCH—SwitzerlandCI—Cote d'IvoireCK—Cook IslandsCL—ChileCM—CameroonCN—ChinaCO—ColombiaCR—Costa RicaCU—CubaCV—Cape VerdeCW—CuraçaoCX—Christmas IslandCY—CyprusCZ—CzechiaDE—GermanyDJ—DjiboutiDK—DenmarkDM—DominicaDO—Dominican RepublicDZ—AlgeriaEC—EcuadorEE—EstoniaEG—EgyptEH—Western SaharaER—EritreaES—SpainET—EthiopiaFI—FinlandFJ—FijiFK—Falkland Islands (Malvinas)FO—Faroe IslandsFR—FranceGA—GabonGB—United KingdomGD—GrenadaGE—GeorgiaGF—French GuianaGG—GuernseyGH—GhanaGI—GibraltarGL—GreenlandGM—GambiaGN—GuineaGP—GuadeloupeGQ—Equatorial GuineaGR—GreeceGS—South Georgia and the South Sandwich IslandsGT—GuatemalaGW—Guinea-BissauGY—GuyanaHM—Heard Island and McDonald IslandsHN—HondurasHR—CroatiaHT—HaitiHU—HungaryID—IndonesiaIE—IrelandIL—IsraelIM—Isle of ManIN—IndiaIO—British Indian Ocean TerritoryIQ—IraqIR—Iran, Islamic Republic ofIS—IcelandIT—ItalyJE—JerseyJM—JamaicaJO—JordanJP—JapanKE—KenyaKG—KyrgyzstanKH—CambodiaKI—KiribatiKM—ComorosKN—Saint Kitts and NevisKP—Korea, Democratic People's Republic ofKR—Korea, Republic ofKW—KuwaitKY—Cayman IslandsKZ—KazakhstanLA—Lao People's Democratic RepublicLB—LebanonLC—Saint LuciaLI—LiechtensteinLK—Sri LankaLR—LiberiaLS—LesothoLT—LithuaniaLU—LuxembourgLV—LatviaLY—LibyaMA—MoroccoMC—MonacoMD—Moldova, Republic ofME—MontenegroMF—Saint Martin (French part)MG—MadagascarMK—North MacedoniaML—MaliMM—MyanmarMN—MongoliaMO—MacaoMQ—MartiniqueMR—MauritaniaMS—MontserratMT—MaltaMU—MauritiusMV—MaldivesMW—MalawiMX—MexicoMY—MalaysiaMZ—MozambiqueNA—NamibiaNC—New CaledoniaNE—NigerNF—Norfolk IslandNG—NigeriaNI—NicaraguaNL—NetherlandsNO—NorwayNP—NepalNR—NauruNU—NiueNZ—New ZealandOM—OmanPA—PanamaPE—PeruPF—French PolynesiaPG—Papua New GuineaPH—PhilippinesPK—PakistanPL—PolandPM—Saint Pierre and MiquelonPN—PitcairnPS—PalestinePT—PortugalPY—ParaguayQA—QatarRE—ReunionRO—RomaniaRS—SerbiaRU—Russian FederationRW—RwandaSA—Saudi ArabiaSB—Solomon IslandsSC—SeychellesSD—SudanSE—SwedenSG—SingaporeSH—Saint Helena, Ascension and Tristan da CunhaSI—SloveniaSJ—Svalbard and Jan MayenSK—SlovakiaSL—Sierra LeoneSM—San MarinoSN—SenegalSO—SomaliaSR—SurinameSS—South SudanST—Sao Tome and PrincipeSV—El SalvadorSX—Sint Maarten (Dutch part)SY—Syrian Arab RepublicSZ—EswatiniTC—Turks and Caicos IslandsTD—ChadTF—French Southern TerritoriesTG—TogoTH—ThailandTJ—TajikistanTK—TokelauTL—Timor-LesteTM—TurkmenistanTN—TunisiaTO—TongaTR—TürkiyeTT—Trinidad and TobagoTV—TuvaluTW—TaiwanTZ—Tanzania, United Republic ofUA—UkraineUG—UgandaUS—United StatesUY—UruguayUZ—UzbekistanVA—Holy See (Vatican City State)VC—Saint Vincent and the GrenadinesVE—Venezuela, Bolivarian Republic ofVG—Virgin Islands, BritishVN—VietnamVU—VanuatuWF—Wallis and FutunaWS—SamoaYE—YemenYT—MayotteZA—South AfricaZM—ZambiaZW—Zimbabwe |
| HotelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the hotel. |
| HotelStayEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe hotel stay mission factors that are used to calculate the emissions.This is a relationship field.Relationship NameHotelStayEmssnFctrRelationship TypeLookupRefers ToHotelStayEmssnFctr |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the hotel stay energy use record is locked for editing because the associated carbon footprint is locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this energy use record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RoomCount | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe number of rooms in the hotel. This value is used to calculate the emissions. |
| RoomType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of room. |
| Scope3CrbnFtprntId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 carbon footprint record that's associated with this energy use record.This is a relationship field.Relationship NameScope3CrbnFtprntRelationship TypeLookupRefers ToScope3CrbnFtprnt |
| Scope3EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions in metric tonnes of carbon dioxide equivalent. |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe scope 3 emission source that's associated with this energy use record.This is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the values of this energy use record are valid. |
| StayNightsCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of nights of hotel stay. This value is used to calculate the emissions. |
| SuplScope3Emissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value that’s added to the calculated total scope 3 emissions value. |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| TravelerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the traveler. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HotelStayEnrgyUseChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[HotelStayEnrgyUseFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HotelStayEnrgyUseHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HotelStayEnrgyUseShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HotelStayEnrgyUseChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- HotelStayEnrgyUseFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- HotelStayEnrgyUseHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- HotelStayEnrgyUseShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
