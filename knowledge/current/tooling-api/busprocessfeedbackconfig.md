---
title: "BusProcessFeedbackConfig"
domain: tooling-api
topic: busprocessfeedbackconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.832Z
estimatedTokens: 1333
keywords: [BusProcessFeedbackConfig, Represents, information, configuration, feedback, collection., collection, triggers, against, pre-determined, conditions, gather, feedback., API, version, 51.0, later., Supported, SOAP, Calls]
---

# BusProcessFeedbackConfig

> Represents information about the configuration for feedback collection. The
      feedback collection method triggers against pre-determined conditions on object to gather
      feedback. This object is available in API version 51.0 and later.

# BusProcessFeedbackConfig

Represents information about the configuration for feedback collection. The feedback collection method triggers against pre-determined conditions on object to gather feedback. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API Methods

GET, HEAD, Query

## Fields

| Field | Details |
| --- | --- |
| ActionName | TypestringPropertiesFilter, Group, SortDescriptionName of the method used to gather feedback. |
| ActionType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionMethod of collecting feedback.Possible values are:PHONE_CALLSURVEY |
| ConfigurationDescription | TypetextareaPropertiesNillableDescriptionDescribes the experience step configuration. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionUnique name of the object.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Field | TypestringPropertiesFilter, Group, SortDescriptionRepresents the picklist field whose value triggers the feedback collection. |
| FieldValue | TypestringPropertiesFilter, Group, SortDescriptionRepresents the field value that triggers the feedback collection. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the feedback configuration is active (true) or not (false). |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionLanguage of the MasterLabelPossible values are:af—Afrikaansam—Amharicar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greeken_AU—English (Australian)en_CA—English (Canadian)en_GB—English (UK)en_HK—English (Hong Kong)en_IE—English (Ireland)en_IN—English (Indian)en_MY—English (Malaysian)en_NZ—English (New Zealand)en_PH—English (Philippines)en_SG—English (Singapore)en_US—Englishen_ZA—English (South Africa)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)ga—Irishgu—Gujaratihi—Hindihr—Croatianhu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewja—Japaneseka—Georgiankm—Khmerkn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)rm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russiansh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionName of the resource, limited up to 100 characters. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| Object | TypestringPropertiesFilter, Group, SortDescriptionRepresents the entity on which the feedback collection triggering condition depends. |
| Recipient | TypestringPropertiesFilter, Group, SortDescriptionRepresents the recipient who is contacted for the feedback collection. |
| RecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the record type of the entity on which the feedback collection triggering condition depends. |
| TriggerAction | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionAction available with the business process feedback object.Possible values are:CreateCreateAndUpdateUpdate |
