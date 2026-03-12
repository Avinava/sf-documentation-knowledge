---
title: "ExplainabilityMsgTemplateLocalization"
domain: omnistudio
topic: explainabilitymsgtemplatelocalization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.410Z
estimatedTokens: 1207
keywords: [ExplainabilityMsgTemplateLocalization, translated, message, explainability, template, expression, step, element, API, version, 56.0, later, Calls, Special, Access]
---

# ExplainabilityMsgTemplateLocalization

> Represents the translated value of the message in an explainability message
         template for an expression set step element. This object is available in API version
      56.0 and later.

# ExplainabilityMsgTemplateLocalization

Represents the translated value of the message in an explainability message template for an expression set step element. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Users need the System Administrator permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language of the translated explainability message template.Possible values are:af—Afrikaansam—Amharicar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greekel_CY—Greek (Cyprus)en_AE—English (United Arab Emirates)en_AU—English (Australian)en_BE—English (Belgium)en_CA—English (Canadian)en_CY—English (Cyprus)en_DE—English (Germany)en_GB—English (UK)en_HK—English (Hong Kong)en_IE—English (Ireland)en_IL—English (Israel)en_IN—English (Indian)en_MT—English (Malta)en_MY—English (Malaysian)en_NL—English (Netherlands)en_NZ—English (New Zealand)en_PH—English (Phillipines)en_SG—English (Singapore)en_US—Englishen_ZA—English (South Africa)eo—Esperanto (Pseudo)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)fr_MA—French (Morocco)ga—Irishgu—Gujaratihaw—Hawaiianhi—Hindihmn—Hmonghr—Croatianht—Haitian Creolehu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewiw_EO—Esperanto RTL (Pseudo)ja—Japaneseji—Yiddishka—Georgiankk—Kazakhkl—Greenlandickm—Khmerkn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpa—Punjabipl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)rm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russianru_AM—Russian (Armenia)ru_BY—Russian (Belarus)ru_KG—Russian (Kyrgyzstan)ru_KZ—Russian (Kazakhstan)ru_LT—Russian (Lithuania)ru_MD—Russian (Moldova)ru_PL—Russian (Poland)ru_UA—Russian (Ukraine)sh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesm—Samoansq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_MY—Chinese (Malaysia)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. This is a required field.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Id of the related explainability message template.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToExplainabilityMsgTemplate |
| Value | TypetextareaPropertiesCreate, Filter, Sort, UpdateDescriptionThe translated label of the explainability message template. |
