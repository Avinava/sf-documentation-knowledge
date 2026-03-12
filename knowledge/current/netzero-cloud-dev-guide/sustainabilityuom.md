---
title: "SustainabilityUom"
domain: netzero-cloud-dev-guide
topic: sustainabilityuom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.444Z
estimatedTokens: 578
keywords: [SustainabilityUom, unit, measure, UOM, custom, fuel, org, Track, consumption, emission, results, flexibility, add, Parent, File, additional, defined, customer, API, version]
---

# SustainabilityUom

> Represents information about the additional unit of measure values defined by
         a customer. This object is available in API version 56.0 and later.

# SustainabilityUom

Represents information about the additional unit of measure values defined by a customer. This object is available in API version 56.0 and later.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the unit of measure. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the record. |
| IsProductUom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the unit of measure is for a product that the company has procured in its supply chain operations (true) or not (false).The default value is false. |
| IsStationaryAssetUom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the unit of measure is used in the stationary asset calculations (true) or (not).The default value is false. |
| IsVehicleAssetUom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the unit of measure is used in vehicle asset calculations (true) or (not).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language associated with this object.Possible values are:af—Afrikaansam—Amharicar—Arabicar_AE—Arabic (United Arab Emirates)ar_BH—Arabic (Bahrain)ar_DZ—Arabic (Algeria)ar_EG—Arabic (Egypt)ar_IQ—Arabic (Iraq)ar_JO—Arabic (Jordan)ar_KW—Arabic (Kuwait)ar_LB—Arabic (Lebanon)ar_LY—Arabic (Libya)ar_MA—Arabic (Morocco)ar_OM—Arabic (Oman)ar_QA—Arabic (Qatar)ar_SA—Arabic (Saudi Arabia)ar_SD—Arabic (Sudan)ar_SY—Arabic (Syria)ar_TN—Arabic (Tunisia)ar_YE—Arabic (Yemen)bg—Bulgarianbn—Bengalibs—Bosnianca—Catalancs—Czechcy—Welshda—Danishde—Germande_AT—German (Austria)de_BE—German (Belgium)de_CH—German (Switzerland)de_LU—German (Luxembourg)el—Greekel_CY—Greek (Cyprus)en_AE—English (United Arab Emirates)en_AU—English (Australian)en_BE—English (Belgium)en_CA—English (Canadian)en_CY—English (Cyprus)en_DE—English (Germany)en_GB—English (UK)en_HK—English (Hong Kong)en_IE—English (Ireland)en_IL—English (Israel)en_IN—English (Indian)en_MT—English (Malta)en_MY—English (Malaysian)en_NL—English (Netherlands)en_NZ—English (New Zealand)en_PH—English (Phillipines)en_SG—English (Singapore)en_US—Englishen_ZA—English (South Africa)eo—Esperanto (Pseudo)es—Spanishes_AR—Spanish (Argentina)es_BO—Spanish (Bolivia)es_CL—Spanish (Chile)es_CO—Spanish (Colombia)es_CR—Spanish (Costa Rica)es_DO—Spanish (Dominican Republic)es_EC—Spanish (Ecuador)es_GT—Spanish (Guatemala)es_HN—Spanish (Honduras)es_MX—Spanish (Mexico)es_NI—Spanish (Nicaragua)es_PA—Spanish (Panama)es_PE—Spanish (Peru)es_PR—Spanish (Puerto Rico)es_PY—Spanish (Paraguay)es_SV—Spanish (El Salvador)es_US—Spanish (United States)es_UY—Spanish (Uruguay)es_VE—Spanish (Venezuela)et—Estonianeu—Basquefa—Farsifi—Finnishfr—Frenchfr_BE—French (Belgium)fr_CA—French (Canadian)fr_CH—French (Switzerland)fr_LU—French (Luxembourg)fr_MA—French (Morocco)ga—Irishgu—Gujaratihaw—Hawaiianhi—Hindihmn—Hmonghr—Croatianht—Haitian Creolehu—Hungarianhy—Armenianin—Indonesianis—Icelandicit—Italianit_CH—Italian (Switzerland)iw—Hebrewiw_EO—Esperanto RTL (Pseudo)ja—Japaneseji—Yiddishka—Georgiankk—Kazakhkl—Greenlandickm—Khmerkn—Kannadako—Koreanlb—Luxembourgishlt—Lithuanianlv—Latvianmi—Te reomk—Macedonianml—Malayalammr—Marathims—Malaymt—Maltesemy—Burmesenl_BE—Dutch (Belgium)nl_NL—Dutchno—Norwegianpa—Punjabipl—Polishpt_BR—Portuguese (Brazil)pt_PT—Portuguese (European)rm—Romanshro—Romanianro_MD—Romanian (Moldova)ru—Russianru_AM—Russian (Armenia)ru_BY—Russian (Belarus)ru_KG—Russian (Kyrgyzstan)ru_KZ—Russian (Kazakhstan)ru_LT—Russian (Lithuania)ru_MD—Russian (Moldova)ru_PL—Russian (Poland)ru_UA—Russian (Ukraine)sh—Serbian (Latin)sh_ME—Montenegrinsk—Slovaksl—Slovenesm—Samoansq—Albaniansr—Serbian (Cyrillic)sv—Swedishsw—Swahilita—Tamilte—Teluguth—Thaitl—Tagalogtr—Turkishuk—Ukrainianur—Urduvi—Vietnamesexh—Xhosazh_CN—Chinese (Simplified)zh_HK—Chinese (Hong Kong)zh_MY—Chinese (Malaysia)zh_SG—Chinese (Singapore)zh_TW—Chinese (Traditional)zu—Zulu |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the flow that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label assigned to this object. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. |
| UnitType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of unit used for conversions or calculations.Possible values are:EnergyOtherVolumeWeight |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SustainabilityUom xmlns="http://soap.sforce.com/2006/04/metadata">
   <description>Weight in Grams</description>
   <isProductUom>true</isProductUom>
   <isProtected>false</isProtected>
   <isStationaryAssetUom>false</isStationaryAssetUom>
   <isVehicleAssetUom>false</isVehicleAssetUom>
   <masterLabel>Grams</masterLabel>
   <unitType>Weight</unitType>
</SustainabilityUom>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <fullName>Pkg</fullName>
   <types>
    <members>Grams</members>
    <name>SustainabilityUom</name>
   </types>
   <version>66.0</version>
</Package>
```
