---
title: "DataSourceBundleDefinition"
domain: tooling-api
topic: datasourcebundledefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.566Z
keywords: [DataSourceBundleDefinition, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# DataSourceBundleDefinition

# DataSourceBundleDefinition

Represents the bundle of streams that a user adds to a data kit. This object is available in API version 52.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

You need Data 360 permission to access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA description of the associated data source bundle. This field is available in API version 55.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionUnique name for the data source bundle. Identical value to FullName. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API. |
| Icon | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe icon used in the deployment flow. This field is available in API version 55.0 and later. |
| IsMultiDeploymentSupported | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the bundle can be deployed multiple times or not. The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguages supported in the deployment.Possible values are:af—Afrikaansam—Amharicar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancac—Chujcak—Kaqchikelcs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greekel_CY—Greek (Cyprus)en_AE—English (United Arab Emirates)en_AU—English (Australian)en_BE—English (Belgium)en_CA—English (Canadian)en_CH—English (Switzerland)en_CY—English (Cyprus)en_CZ—English (Czechia)en_DE—English (Germany)en_DK—English (Denmark)en_ES—English (Spain)en_FR—English (France)en_GB—English (UK)en_HK—English (Hong Kong)en_HU—English (Hungary)en_IE—English (Ireland)en_IL—English (Israel)en_IN—English (Indian)en_IT—English (Italy)en_NL—English (Netherlands)en_NO—English (Norway)en_NZ—English (New Zealand)en_PH—English (Philippines)en_PL—English (Poland)en_RO—English (Romania)en_SE—English (Sweden)en_SG—English (Singapore)en_SK—English (Slovakia)en_US—Englishen_ZA—English (South Africa)eo—Esperanto (Pseudo)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)fr_MA—French (Morocco)ga—Irishgu—Gujaratihaw—Hawaiianhi—Hindihmn—Hmonghr—Croatianht—Haitian Creolehu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewiw_EO—Esperanto RTL (Pseudo)ja—Japaneseji—Yiddishka—Georgiankk—Kazakhkl—Greenlandickm—Khmerkn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpa—Punjabipl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)quc—Kicherm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russianru_AM—Russian (Armenia)ru_BY—Russian (Belarus)ru_KG—Russian (Kyrgyzstan)ru_KZ—Russian (Kazakhstan)ru_LT—Russian (Lithuania)ru_MD—Russian (Moldova)ru_PL—Russian (Poland)ru_UA—Russian (Ukraine)sh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesm—Samoansq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_MY—Chinese (Malaysia)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the state of an entity in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionIndicates the name of the bundle. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionIndicates additional information that's necessary for the data source bundle. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |