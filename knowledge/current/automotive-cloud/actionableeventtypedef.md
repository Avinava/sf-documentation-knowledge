---
title: "ActionableEventTypeDef"
domain: automotive-cloud
topic: actionableeventtypedef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.704Z
estimatedTokens: 441
keywords: [ActionableEventTypeDef, definition, actionable, event, records, migrated, org, another, Parent, File, Suffix, Directory, Location, Version, EventSubtype, API, version, 62.0, later, Calls]
---

# ActionableEventTypeDef

> Represents the definition of an actionable event type so that the records can
         be migrated from one org to another. This object is available in API version 62.0 and
      later.

# ActionableEventTypeDef

Represents the definition of an actionable event type so that the records can be migrated from one org to another. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the actionable event type definition. |
| FullName | TypestringPropertiesGroup, NillableDescriptionThe name of the actionable event type definition.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language in which this actionable event type definition is created.Possible values are:af—Afrikaansam—Amharicar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancac—Chujcak—Kaqchikelcs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greekel_CY—Greek (Cyprus)en_AE—English (United Arab Emirates)en_AU—English (Australian)en_BE—English (Belgium)en_CA—English (Canadian)en_CY—English (Cyprus)en_DE—English (Germany)en_GB—English (UK)en_HK—English (Hong Kong)en_IE—English (Ireland)en_IL—English (Israel)en_IN—English (Indian)en_IT—English (Italy)en_MT—English (Malta)en_MY—English (Malaysian)en_NL—English (Netherlands)en_NZ—English (New Zealand)en_PH—English (Phillipines)en_SG—English (Singapore)en_US—Englishen_ZA—English (South Africa)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)fr_MA—French (Morocco)ga—Irishgu—Gujaratihaw—Hawaiianhi—Hindihmn—Hmonghr—Croatianht—Haitian Creolehu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewja—Japaneseji—Yiddishka—Georgiankk—Kazakhkl—Greenlandickm—Khmerkn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpa—Punjabipl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)quc—Kicherm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russianru_AM—Russian (Armenia)ru_BY—Russian (Belarus)ru_KG—Russian (Kyrgyzstan)ru_KZ—Russian (Kazakhstan)ru_LT—Russian (Lithuania)ru_MD—Russian (Moldova)ru_PL—Russian (Poland)ru_UA—Russian (Ukraine)sh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesm—Samoansq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_MY—Chinese (Malaysia)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the actionable event type definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that aren’t Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ActionableEventTypeDef xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiName>Create_Registration_Records</apiName>
    <eventSubtypes>
        <apiName>Create_Registration_Records_SubType</apiName>
        <label>reate Registration Records Subtype</label>
    </eventSubtypes>
    <label>Create Registration Records</label>
</ActionableEventTypeDef>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ActionableEventTypeDef</name>
    </types>
<version>64.0</version>
</Package>
```
