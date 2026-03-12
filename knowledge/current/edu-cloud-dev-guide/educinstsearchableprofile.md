---
title: "EducInstSearchableProfile"
domain: edu-cloud-dev-guide
topic: educinstsearchableprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.250Z
estimatedTokens: 3970
keywords: [EducInstSearchableProfile, educational, institution, aggregated, objects, Criteria-Based, Search, Filter, API, version, 64.0, later, Calls, Associated]
---

# EducInstSearchableProfile

> Represents information about an educational institution aggregated from other
         objects for Criteria-Based Search and Filter. This object is available in API version
      64.0 and later.

# EducInstSearchableProfile

Represents information about an educational institution aggregated from other objects for Criteria-Based Search and Filter. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe institution's account related to the educational institution searchable profile.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe address of the educational institution. |
| BusinessProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business profile related to the educational institution searchable profile.This field is a relationship field.Relationship NameBusinessProfileRefers ToBusinessProfile |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the educational institution is located. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the educational institution is located. |
| CountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe country code of the country where the educational institution is located.Possible values are:AD—AndorraAE—United Arab EmiratesAF—AfghanistanAG—Antigua and BarbudaAI—AnguillaAL—AlbaniaAM—ArmeniaAO—AngolaAQ—AntarcticaAR—ArgentinaAT—AustriaAU—AustraliaAW—ArubaAX—Aland IslandsAZ—AzerbaijanBA—Bosnia and HerzegovinaBB—BarbadosBD—BangladeshBE—BelgiumBF—Burkina FasoBG—BulgariaBH—BahrainBI—BurundiBJ—BeninBL—Saint BarthélemyBM—BermudaBN—Brunei DarussalamBO—Bolivia, Plurinational State ofBQ—Bonaire, Sint Eustatius and SabaBR—BrazilBS—BahamasBT—BhutanBV—Bouvet IslandBW—BotswanaBY—BelarusBZ—BelizeCA—CanadaCC—Cocos (Keeling) IslandsCD—Congo, the Democratic Republic of theCF—Central African RepublicCG—CongoCH—SwitzerlandCI—Cote d'IvoireCK—Cook IslandsCL—ChileCM—CameroonCN—ChinaCO—ColombiaCR—Costa RicaCV—Cape VerdeCW—CuraçaoCX—Christmas IslandCY—CyprusCZ—CzechiaDE—GermanyDJ—DjiboutiDK—DenmarkDM—DominicaDO—Dominican RepublicDZ—AlgeriaEC—EcuadorEE—EstoniaEG—EgyptEH—Western SaharaER—EritreaES—SpainET—EthiopiaFI—FinlandFJ—FijiFK—Falkland Islands (Malvinas)FO—Faroe IslandsFR—FranceGA—GabonGB—United KingdomGD—GrenadaGE—GeorgiaGF—French GuianaGG—GuernseyGH—GhanaGI—GibraltarGL—GreenlandGM—GambiaGN—GuineaGP—GuadeloupeGQ—Equatorial GuineaGR—GreeceGS—South Georgia and the South Sandwich IslandsGT—GuatemalaGW—Guinea-BissauGY—GuyanaHM—Heard Island and McDonald IslandsHN—HondurasHR—CroatiaHT—HaitiHU—HungaryID—IndonesiaIE—IrelandIL—IsraelIM—Isle of ManIN—IndiaIO—British Indian Ocean TerritoryIQ—IraqIS—IcelandIT—ItalyJE—JerseyJM—JamaicaJO—JordanJP—JapanKE—KenyaKG—KyrgyzstanKH—CambodiaKI—KiribatiKM—ComorosKN—Saint Kitts and NevisKR—Korea, Republic ofKW—KuwaitKY—Cayman IslandsKZ—KazakhstanLA—Lao People's Democratic RepublicLB—LebanonLC—Saint LuciaLI—LiechtensteinLK—Sri LankaLR—LiberiaLS—LesothoLT—LithuaniaLU—LuxembourgLV—LatviaLY—LibyaMA—MoroccoMC—MonacoMD—Moldova, Republic ofME—MontenegroMF—Saint Martin (French part)MG—MadagascarMK—North MacedoniaML—MaliMM—MyanmarMN—MongoliaMO—MacaoMQ—MartiniqueMR—MauritaniaMS—MontserratMT—MaltaMU—MauritiusMV—MaldivesMW—MalawiMX—MexicoMY—MalaysiaMZ—MozambiqueNA—NamibiaNC—New CaledoniaNE—NigerNF—Norfolk IslandNG—NigeriaNI—NicaraguaNL—NetherlandsNO—NorwayNP—NepalNR—NauruNU—NiueNZ—New ZealandOM—OmanPA—PanamaPE—PeruPF—French PolynesiaPG—Papua New GuineaPH—PhilippinesPK—PakistanPL—PolandPM—Saint Pierre and MiquelonPN—PitcairnPS—PalestinePT—PortugalPY—ParaguayQA—QatarRE—ReunionRO—RomaniaRS—SerbiaRU—Russian FederationRW—RwandaSA—Saudi ArabiaSB—Solomon IslandsSC—SeychellesSE—SwedenSG—SingaporeSH—Saint Helena, Ascension and Tristan da CunhaSI—SloveniaSJ—Svalbard and Jan MayenSK—SlovakiaSL—Sierra LeoneSM—San MarinoSN—SenegalSO—SomaliaSR—SurinameSS—South SudanST—Sao Tome and PrincipeSV—El SalvadorSX—Sint Maarten (Dutch part)SZ—EswatiniTC—Turks and Caicos IslandsTD—ChadTF—French Southern TerritoriesTG—TogoTH—ThailandTJ—TajikistanTK—TokelauTL—Timor-LesteTM—TurkmenistanTN—TunisiaTO—TongaTR—TürkiyeTT—Trinidad and TobagoTV—TuvaluTW—TaiwanTZ—Tanzania, United Republic ofUA—UkraineUG—UgandaUS—United StatesUY—UruguayUZ—UzbekistanVA—Holy See (Vatican City State)VC—Saint Vincent and the GrenadinesVE—Venezuela, Bolivarian Republic ofVG—Virgin Islands, BritishVN—VietnamVU—VanuatuWF—Wallis and FutunaWS—SamoaXK—KosovoYE—YemenYT—MayotteZA—South AfricaZM—ZambiaZW—Zimbabwe |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to theeducational institution searchable profile.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EducInstitutionOfferingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe institution offering related to the educational institution searchable profile.This field is a relationship field.Relationship NameEducInstitutionOfferingRefers ToEducInstitutionOffering |
| EducationalInstitutionFormat | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe education format at the educational institution. |
| EducationalInstitutionImageUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the image for the educational institution. |
| EducationalInstitutionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the educational institution. |
| EducationalInstitutionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the educational institution.Possible values are:CharterPrivatePublic |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe accuracy rating for the geocode of the educational institution. The accuracy rating contains information about the location of a latitude and longitude.Possible values are:AddressBlockCityCountyExtendedZip—Extended ZipNearAddress—Near AddressNeighborhoodStateStreetUnknownZip |
| GradesOffered | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe grades offered by the educational institution. |
| GradesOfferedSummary | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of grades the educational institution offers. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude where the educational institution is located. |
| LearningAcademicLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the academic level offered by the educational institution.Possible values are:Adult EducationDoctoralElementaryGraduateHigh SchoolMiddle SchoolPost-Baccalaureate CertificatePre-K/PreschoolProfessional EducationUndergraduate |
| LearningCategory | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe learning category of the educational institution. |
| LearningFormat | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe learning format of the educational institution. |
| LearningGrade | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe learning grade of the educational institution. |
| LearningId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learning record related to the educational institution searchable profile.This field is a relationship field.Relationship NameLearningRefers ToLearning |
| LearningImageUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the image for the learning record related to the educational institution. |
| LearningProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learning program related to the educational institution searchable profile.This field is a relationship field.Relationship NameLearningProgramRefers ToLearningProgram |
| LearningProgramName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the learning program offered by the educational institution. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude where the educational institution is located. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe autonumbered name of the educational institution searchable profile. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who is the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the educational institution. |
| ProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider related to the educational institution searchable profile.This field is a relationship field.Relationship NameProviderRefers ToAccount |
| ProviderName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the provider for the educational institution. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the educational institution is located. |
| StateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state code of the state where the educational institution is located.Possible values are:01—Hokkaido02—Akita03—Iwate04—Miyagi05—Aichi06—Yamagata07—Fukushima08—Ibaraki09—Tochigi10—Gunma11—Saitama12—Tianjin13—Tokyo14—Shanxi15—Niigata16—Toyama17—Ishikawa18—Fukui19—Yamanashi20—Nagano21—Liaoning22—Shizuoka23—Heilongjiang24—Mie25—Shiga26—Kyoto27—Osaka28—Hyogo29—Nara30—Wakayama31—Tottori32—Shimane33—Zhejiang34—Hiroshima35—Yamaguchi36—Tokushima37—Shandong38—Ehime39—Kochi40—Fukuoka41—Saga42—Nagasaki43—Kumamoto44—Oita45—Miyazaki46—Kagoshima47—Okinawa50—Chongqing51—Sichuan52—Guizhou53—Yunnan54—Xizang61—Shaanxi62—Gansu63—Qinghai64—Ningxia65—Xinjiang71—Taiwan91—Hong Kong92—MacaoAB—AlbertaAC—AcreACT—Australian Capital TerritoryAG—AguascalientesAK—AlaskaAL—AlessandriaAM—AmazonasAN—Andaman and Nicobar IslandsAO—AostaAP—Ascoli PicenoAQ—L'AquilaAR—Arunachal PradeshAS—AssamAT—AstiAV—AvellinoAZ—ArizonaBA—BariBC—British ColumbiaBG—BergamoBI—BiellaBL—BellunoBN—BeneventoBO—BolognaBR—BrindisiBS—BresciaBT—Barletta-Andria-TraniBZ—BolzanoCA—CaliforniaCB—CampobassoCE—ClareCH—ChihuahuaCI—Carbonia-IglesiasCL—ColimaCM—CampecheCN—CuneoCO—CorkCR—CremonaCS—CosenzaCT—ConnecticutCW—CarlowCZ—CatanzaroD—DublinDC—District of ColumbiaDD—Daman and DiuDE—DelawareDF—Federal DistrictDG—DurangoDL—DonegalDN—Dadra and Nagar HaveliEN—EnnaES—Espírito SantoFC—Forlì-CesenaFE—FerraraFG—FoggiaFI—FlorenceFL—FloridaFM—FermoFR—FrosinoneG—GalwayGA—GoaGE—GenoaGJ—GujaratGO—GoriziaGR—GuerreroGT—GuanajuatoHG—HidalgoHI—HawaiiHP—Himachal PradeshHR—HaryanaIA—IowaID—IdahoIL—IllinoisIM—ImperiaIN—IndianaIS—IserniaJA—JaliscoJH—JharkhandJK—Jammu and KashmirKA—KarnatakaKE—KildareKK—KilkennyKL—KeralaKR—CrotoneKS—KansasKY—KerryLA—LouisianaLC—LeccoLD—LongfordLE—LecceLH—LouthLI—LivornoLK—LimerickLM—LeitrimLO—LodiLS—LaoisLT—LatinaLU—LuccaMA—MassachusettsMB—Monza and BrianzaMC—MacerataMD—MarylandME—Mexico StateMG—Minas GeraisMH—MeathMI—MilanML—MeghalayaMN—MonaghanMO—MorelosMP—Madhya PradeshMS—MississippiMT—MontanaMZ—MizoramNA—NayaritNB—New BrunswickNC—North CarolinaND—North DakotaNE—NebraskaNH—New HampshireNJ—New JerseyNL—Nuevo LeónNM—New MexicoNO—NovaraNS—Nova ScotiaNSW—New South WalesNT—Northwest TerritoriesNU—NuoroNV—NevadaNY—New YorkOA—OaxacaOG—OgliastraOH—OhioOK—OklahomaON—OntarioOR—OristanoOT—Olbia-TempioOY—OffalyPA—PennsylvaniaPB—PunjabPC—PiacenzaPD—PaduaPE—Prince Edward IslandPG—PerugiaPI—PisaPN—PordenonePO—PratoPR—ParmaPT—PistoiaPU—Pesaro and UrbinoPV—PaviaPY—PuducherryPZ—PotenzaQC—QuebecQE—QuerétaroQLD—QueenslandQR—Quintana RooRA—RavennaRC—Reggio CalabriaRE—Reggio EmiliaRG—RagusaRI—RietiRJ—Rio de JaneiroRM—RomeRN—RoscommonRO—RovigoRR—RoraimaRS—Rio Grande do SulSA—South AustraliaSC—South CarolinaSD—South DakotaSE—SergipeSI—SinaloaSK—SikkimSL—San Luis PotosíSO—SonoraSP—São PauloSR—SyracuseSS—SassariSV—SavonaTA—TipperaryTAS—TasmaniaTB—TabascoTE—TeramoTG—TelanganaTL—TlaxcalaTM—TamaulipasTN—TrentoTO—TurinTP—TrapaniTR—TripuraTS—TriesteTV—TrevisoTX—TexasUD—UdineUP—Uttar PradeshUT—UttarakhandVA—VirginiaVB—Verbano-Cusio-OssolaVC—VercelliVE—VeracruzVI—VicenzaVIC—VictoriaVR—VeronaVS—Medio CampidanoVT—ViterboVV—Vibo ValentiaWA—Western AustraliaWB—West BengalWD—WaterfordWH—WestmeathWI—WisconsinWV—West VirginiaWW—WicklowWX—WexfordWY—WyomingYT—Yukon TerritoriesYU—YucatánZA—Zacatecas |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street where the educational institution is located. |
| SupportProgramFormat | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe format of the support program at the educational institution. |
| SupportProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe support program related to the educational institution searchable profile.This field is a relationship field.Relationship NameSupportProgramRefers ToProgram |
| SupportProgramImageUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the image for the educational institution's support program. |
| SupportProgramName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the support program at the educational institution. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EducInstSearchableProfileHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EducInstSearchableProfileOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[EducInstSearchableProfileShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EducInstSearchableProfileHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EducInstSearchableProfileOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- EducInstSearchableProfileShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
