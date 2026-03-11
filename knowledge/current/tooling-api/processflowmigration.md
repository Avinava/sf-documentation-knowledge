---
title: "ProcessFlowMigration"
domain: tooling-api
topic: processflowmigration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.550Z
keywords: [ProcessFlowMigration, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# ProcessFlowMigration

# ProcessFlowMigration

Represents a process's migrated criteria and the resulting migrated flow. This object is available in API version 58.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API Methods

GET, HEAD, Query

## Fields

| Field | Details |
| --- | --- |
| DestinationFlowDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the resulting migrated flow.This field is a relationship field.Relationship NameDestinationFlowDefinitionRelationship TypeLookupRefers ToFlowDefinition |
| DestinationFlowVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe version ID of the migrated flow.This field is a relationship field.Relationship NameDestinationFlowVersionRelationship TypeLookupRefers ToFlow |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionLanaguage of the MasterLabel.Possible values are:af—Afrikaansam—Amharicar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greekel_CY—Greek (Cyprus)en_AE—English (United Arab Emirates)en_AU—English (Australian)en_BE—English (Belgium)en_CA—English (Canadian)en_CY—English (Cyprus)en_DE—English (Germany)en_GB—English (UK)en_HK—English (Hong Kong)en_IE—English (Ireland)en_IL—English (Israel)en_IN—English (Indian)en_MT—English (Malta)en_MY—English (Malaysian)en_NL—English (Netherlands)en_NZ—English (New Zealand)en_PH—English (Phillipines)en_SG—English (Singapore)en_US—Englishen_ZA—English (South Africa)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)fr_MA—French (Morocco)ga—Irishgu—Gujaratihaw—Hawaiianhi—Hindihmn—Hmonghr—Croatianht—Haitian Creolehu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewja—Japaneseji—Yiddishka—Georgiankk—Kazakhkl—Greenlandickm—Khmerkn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpa—Punjabipl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)rm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russianru_AM—Russian (Armenia)ru_BY—Russian (Belarus)ru_KG—Russian (Kyrgyzstan)ru_KZ—Russian (Kazakhstan)ru_LT—Russian (Lithuania)ru_MD—Russian (Moldova)ru_PL—Russian (Poland)ru_UA—Russian (Ukraine)sh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesm—Samoansq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_MY—Chinese (Malaysia)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for the ProcessFlowMigration. |
| MigratedCriteriaLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the criteria that was migrated. |
| MigratedCriteriaName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the criteria that was migrated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package containing the process flow migration object. |
| ProcessVersionId | TypereferencePropertiesFilter, Group, SortDescriptionThe version ID of the originating process.This field is a relationship field.Relationship NameProcessVersionRelationship TypeLookupRefers ToFlow |