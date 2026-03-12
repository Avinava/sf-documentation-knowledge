---
title: "ShippingCarrier"
domain: object-reference
topic: shippingcarrier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.140Z
estimatedTokens: 1388
keywords: [ShippingCarrier, Shipping, company, carrier, responsible, transporting, goods, packages, Examples, include, UPS, FedEx, USPS, API, version]
---

# ShippingCarrier

> Shipping company or carrier responsible for transporting goods or
      packages. Examples include UPS, FedEx, and USPS. This object is available in API version
    61.0 and later.

# ShippingCarrier

Shipping company or carrier responsible for transporting goods or packages. Examples include UPS, FedEx, and USPS. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The ShippingCarrier object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique code, reference, or identifier for the shipping carrier associated with the delivery. Can be used for internal tracking or integration purposes. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the record was last viewed. |
| ManagedShippingCarrier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSalesforce-managed shipping carrier information that provides estimated transit times. This field is available in API version 65.0 and later.Possible values are:FEDEXUPSUSPS |
| Name | TypetextPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the shipping carrier associated with the delivery. |
| ShipFromCountry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCountry where the shipment originates. This field is available in API version 65.0 and later.Possible values are:AD—AndorraAE—United Arab EmiratesAF—AfghanistanAG—Antigua and BarbudaAI—AnguillaAL—AlbaniaAM—ArmeniaAO—AngolaAQ—AntarcticaAR—ArgentinaAS—American SamoaAT—AustriaAU—AustraliaAW—ArubaAX—Aland IslandsAZ—AzerbaijanBA—Bosnia and HerzegovinaBB—BarbadosBD—BangladeshBE—BelgiumBF—Burkina FasoBG—BulgariaBH—BahrainBI—BurundiBJ—BeninBL—Saint BarthélemyBM—BermudaBN—Brunei DarussalamBO—Bolivia, Plurinational State ofBQ—Bonaire, Sint Eustatius and SabaBR—BrazilBS—BahamasBT—BhutanBV—Bouvet IslandBW—BotswanaBY—BelarusBZ—BelizeCA—CanadaCC—Cocos (Keeling) IslandsCD—Congo, the Democratic Republic of theCF—Central African RepublicCG—CongoCH—SwitzerlandCI—Cote d'IvoireCK—Cook IslandsCL—ChileCM—CameroonCN—ChinaCO—ColombiaCR—Costa RicaCU—CubaCV—Cape VerdeCW—CuraçaoCX—Christmas IslandCY—CyprusCZ—CzechiaDE—GermanyDJ—DjiboutiDK—DenmarkDM—DominicaDO—Dominican RepublicDZ—AlgeriaEC—EcuadorEE—EstoniaEG—EgyptEH—Western SaharaER—EritreaES—SpainET—EthiopiaFI—FinlandFJ—FijiFK—Falkland Islands (Malvinas)FM—MicronesiaFO—Faroe IslandsFR—FranceGA—GabonGB—United KingdomGD—GrenadaGE—GeorgiaGF—French GuianaGG—GuernseyGH—GhanaGI—GibraltarGL—GreenlandGM—GambiaGN—GuineaGP—GuadeloupeGQ—Equatorial GuineaGR—GreeceGS—South Georgia and the South Sandwich IslandsGT—GuatemalaGU—GuamGW—Guinea-BissauGY—GuyanaHK—Hong Kong SAR ChinaHM—Heard Island and McDonald IslandsHN—HondurasHR—CroatiaHT—HaitiHU—HungaryID—IndonesiaIE—IrelandIL—IsraelIM—Isle of ManIN—IndiaIO—British Indian Ocean TerritoryIQ—IraqIR—Iran, Islamic Republic ofIS—IcelandIT—ItalyJE—JerseyJM—JamaicaJO—JordanJP—JapanKE—KenyaKG—KyrgyzstanKH—CambodiaKI—KiribatiKM—ComorosKN—Saint Kitts and NevisKP—Korea, Democratic People's Republic ofKR—Korea, Republic ofKW—KuwaitKY—Cayman IslandsKZ—KazakhstanLA—Lao People's Democratic RepublicLB—LebanonLC—Saint LuciaLI—LiechtensteinLK—Sri LankaLR—LiberiaLS—LesothoLT—LithuaniaLU—LuxembourgLV—LatviaLY—LibyaMA—MoroccoMC—MonacoMD—Moldova, Republic ofME—MontenegroMF—Saint Martin (French part)MG—MadagascarMH—Marshall IslandsMK—North MacedoniaML—MaliMM—MyanmarMN—MongoliaMO—MacaoMP—Northern Mariana IslandsMQ—MartiniqueMR—MauritaniaMS—MontserratMT—MaltaMU—MauritiusMV—MaldivesMW—MalawiMX—MexicoMY—MalaysiaMZ—MozambiqueNA—NamibiaNC—New CaledoniaNE—NigerNF—Norfolk IslandNG—NigeriaNI—NicaraguaNL—NetherlandsNO—NorwayNP—NepalNR—NauruNU—NiueNZ—New ZealandOM—OmanPA—PanamaPE—PeruPF—French PolynesiaPG—Papua New GuineaPH—PhilippinesPK—PakistanPL—PolandPM—Saint Pierre and MiquelonPN—PitcairnPR—Puerto RicoPS—PalestinePT—PortugalPW—PalauPY—ParaguayQA—QatarRE—ReunionRO—RomaniaRS—SerbiaRU—Russian FederationRW—RwandaSA—Saudi ArabiaSB—Solomon IslandsSC—SeychellesSD—SudanSE—SwedenSG—SingaporeSH—Saint Helena, Ascension and Tristan da CunhaSI—SloveniaSJ—Svalbard and Jan MayenSK—SlovakiaSL—Sierra LeoneSM—San MarinoSN—SenegalSO—SomaliaSR—SurinameSS—South SudanST—Sao Tome and PrincipeSV—El SalvadorSX—Sint Maarten (Dutch part)SY—Syrian Arab RepublicSZ—EswatiniTC—Turks and Caicos IslandsTD—ChadTF—French Southern TerritoriesTG—TogoTH—ThailandTJ—TajikistanTK—TokelauTL—Timor-LesteTM—TurkmenistanTN—TunisiaTO—TongaTR—TürkiyeTT—Trinidad and TobagoTV—TuvaluTW—TaiwanTZ—Tanzania, United Republic ofUA—UkraineUG—UgandaUM—U.S. Outlying IslandsUS—United StatesUY—UruguayUZ—UzbekistanVA—Holy See (Vatican City State)VC—Saint Vincent and the GrenadinesVE—Venezuela, Bolivarian Republic ofVG—Virgin Islands, BritishVI—U.S. Virgin IslandsVN—VietnamVU—VanuatuWF—Wallis and FutunaWS—SamoaYE—YemenYT—MayotteZA—South AfricaZM—ZambiaZW—Zimbabwe |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who currently owns this ShippingCarrier object. Default value is the user logged in to the API to perform the create.This is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
