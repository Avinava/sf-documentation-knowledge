---
title: "BusinessProcessDefinition"
domain: tooling-api
topic: businessprocessdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.337Z
keywords: [BusinessProcessDefinition, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# BusinessProcessDefinition

# BusinessProcessDefinition

Represents information about stages in a customer lifecycle map. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| BusinessProcessGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique identifier of the customer lifecycle map that is associated with the stage. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDeveloper name of the stage.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLanguage of the MasterLabel.Possible values are:af—Afrikaansam—Amharicar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greeken_AU—English (Australian)en_CA—English (Canadian)en_GB—English (UK)en_HK—English (Hong Kong)en_IE—English (Ireland)en_IN—English (Indian)en_MY—English (Malaysian)en_NZ—English (New Zealand)en_PH—English (Philippines)en_SG—English (Singapore)en_US—Englishen_ZA—English (South Africa)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)ga—Irishgu—Gujaratihi—Hindihr—Croatianhu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewja—Japaneseka—Georgiankm—Khmerkn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)rm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russiansh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the stage. |
| ProcessDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the stage. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionPosition of the stage in the associated customer lifecycle map. |