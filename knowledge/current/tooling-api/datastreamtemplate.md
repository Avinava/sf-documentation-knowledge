---
title: "DataStreamTemplate"
domain: tooling-api
topic: datastreamtemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.122Z
estimatedTokens: 2278
keywords: [DataStreamTemplate, Represents, metadata, data, stream, user, adds, kit., API, version, 52.0, later., Supported, SOAP, Calls, REST, Special, Access, Rules, Fields]
---

# DataStreamTemplate

> Represents metadata about the data stream that a user adds to a data kit.
         This object is available in API version 52.0 and later.

# DataStreamTemplate

Represents metadata about the data stream that a user adds to a data kit. This object is available in API version 52.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

You need Data 360 permission to access this object.

## Fields

| Field | Details |
| --- | --- |
| DataSourceBundleDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the DataSourceBundleDefinition, which refers to the data stream bundle to which a data stream template belongs.This field is a relationship field.Relationship NameDataSourceBundleDefinitionRelationship TypeLook up |
| DataSourceObjectId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the DataSourceObject, which represents the object from where the data was sourced.This field is a relationship field.Relationship NameDataSourceObjectRelationship TypeLook up |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionUnique name for the data stream template. Identical value to FullName. |
| FilterCriteria | TypetextareaPropertiesNillableDescriptionDescribes the filter applied to the data stream before the information is sent to Data 360. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguages supported in the deployment.Possible values are:af—Afrikaansam—Amharicar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancac—Chujcak—Kaqchikelcs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LI—German (Liechtenstein)de_LU—German (Luxembourg)el—Greekel_CY—Greek (Cyprus)en_AD—English (Andorra)en_AE—English (United Arab Emirates)en_AG—English (Antigua and Barbuda)en_AL—English (Albania)en_AT—English (Austria)en_AU—English (Australian)en_BA—English (Bosnia and Herzegovina)en_BB—English (Barbados)en_BE—English (Belgium)en_BG—English (Bulgaria)en_BS—English (Bahamas)en_BZ—English (Belize)en_CA—English (Canadian)en_CH—English (Switzerland)en_CY—English (Cyprus)en_CZ—English (Czechia)en_DE—English (Germany)en_DK—English (Denmark)en_DM—English (Dominica)en_EE—English (Estonia)en_ES—English (Spain)en_FI—English (Finland)en_FR—English (France)en_GB—English (UK)en_GD—English (Grenada)en_GI—English (Gibraltar)en_GR—English (Greece)en_GY—English (Guyana)en_HK—English (Hong Kong)en_HR—English (Croatia)en_HU—English (Hungary)en_IE—English (Ireland)en_IL—English (Israel)en_IN—English (Indian)en_IS—English (Iceland)en_IT—English (Italy)en_JM—English (Jamaica)en_JP—English (Japan)en_KN—English (St. Kitts and Nevis)en_KR—English (South Korea)en_LC—English (St. Lucia)en_LI—English (Liechtenstein)en_LT—English (Lithuania)en_LU—English (Luxembourg)en_LV—English (Latvia)en_MC—English (Monaco)en_ME—English (Montenegro)en_MK—English (North Macedonia)en_MT—English (Malta)en_MY—English (Malaysian)en_NL—English (Netherlands)en_NO—English (Norway)en_NZ—English (New Zealand)en_PH—English (Phillipines)en_PL—English (Poland)en_PT—English (Portugal)en_RO—English (Romania)en_RS—English (Serbia)en_SE—English (Sweden)en_SG—English (Singapore)en_SI—English (Slovenia)en_SK—English (Slovakia)en_TH—English (Thailand)en_TR—English (Turkey)en_TT—English (Trinidad and Tobago)en_TW—English (Taiwan)en_US—Englishen_VC—English (St. Vincent and the Grenadines)en_ZA—English (South Africa)eo—Esperanto (Pseudo)es—Spanishes_AD—Spanish (Andorra)es_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_HT—French (Haiti)fr_LU—French (Luxembourg)fr_MA—French (Morocco)ga—Irishgu—Gujaratihaw—Hawaiianhi—Hindihmn—Hmonghr—Croatianht—Haitian Creolehu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewiw_EO—Esperanto RTL (Pseudo)ja—Japaneseji—Yiddishka—Georgiankk—Kazakhkl—Greenlandickm—Khmerkn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchnl_SR—Dutch (Suriname)no—Norwegianpa—Punjabipl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)quc—Kicherm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russianru_AM—Russian (Armenia)ru_BY—Russian (Belarus)ru_KG—Russian (Kyrgyzstan)ru_KZ—Russian (Kazakhstan)ru_LT—Russian (Lithuania)ru_MD—Russian (Moldova)ru_PL—Russian (Poland)ru_UA—Russian (Ukraine)sh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesm—Samoansq—Albaniansr—Serbian (Cyrillic)sv—Swedishsv_FI—Swedish (Finland)sw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_MY—Chinese (Malaysia)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the state of an entity in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionIndicates the name of the bundle. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionDescribes additional information that's necessary for the data stream template. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| RefreshDayOfMonth | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe duration of the day of the month after which the data stream template must be refreshed. |
| RefreshDayOfWeek | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe duration of the day of the week after which the data stream must be refreshed. |
| RefreshFrequency | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe frequency with which the data stream must be refreshed.Possible values are:BATCH—BatchDAILY—DailyEVERY_12_HOURS—Every 12 HoursEVERY_4_HOURS—Every 4 HoursHOURLY—HourlyMINUTES_15—15 MinutesMINUTES_30—30 MinutesMINUTES_5—5 MinutesMONTHLY—MonthlyNONE—NoneNOT_APPLICABLE—Not ApplicableSTREAMING—StreamingWEEKLY—Weekly |
| RefreshHours | TypemultipicklistPropertiesFilter, NillableDescriptionThe duration after which the data stream template must be refreshed.Possible values are:01101112131415161718192202122233456789 |
| RefreshMode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe mode of refresh.Possible values are:FULL_REFRESH—Full RefreshINCREMENTAL—IncrementalNEAR_REAL_TIME_INCREMENTAL—Near Real-time IncrementalNOT_APPLICABLE—Not ApplicablePARTIAL_UPDATE—Partial UpdateREPLACE—Replace By DateUPSERT—Upsert |
| RefreshStartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date to retrieve data based on the refresh frequency data. Available in API version 62.0 and later. |
| SourceObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the source object from which data is streamed. Available in API version 62.0 and later. |
| StreamType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of data stream. Available in API version 62.0 and later.Possible values are:DIRECT_ACCESS—Direct AccessDIRECT_ACCESS_ACCELERATED—Direct Access (Accelerated)INGEST—Ingest |
| StreamingAppDataConnectorType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe connector app for data streaming. Available in API version 63.0 and later.Possible values are:MobileApp—Mobile AppWebApp—Web App |
| TemplateVersion | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe version number of the template. Available in API version 62.0 and later. |
