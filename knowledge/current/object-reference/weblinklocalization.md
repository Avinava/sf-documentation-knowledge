---
title: "WebLinkLocalization"
domain: object-reference
topic: weblinklocalization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.416Z
estimatedTokens: 1621
keywords: [WebLinkLocalization, translated, label, custom, link, URL, s-control, Translation, Workbench, enabled, organization, Calls, Special, Access, Rules]
---

# WebLinkLocalization

> Represents the translated value of the field label for a custom link to
   a URL or s-control when the Translation Workbench is enabled for your
  organization.

# WebLinkLocalization

Represents the translated value of the field label for a custom link to a URL or s-control when the Translation Workbench is enabled for your organization.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Your organization must be using Professional, Enterprise, Developer, Unlimited, or Performance Edition and be enabled for the Translation Workbench.
-   To view this object, you must have the “View Setup and Configuration” permission.

## Fields

| Field | Details |
| --- | --- |
| LanguageLocaleKey | TypepicklistPropertiesCreate, Filter, Nillable, Restricted picklistDescriptionThis field is available in API version 16.0 and earlier. It is the same as the Language field. |
| Language | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis field is available in API version 17.0 and later. The combined language and locale ISO code, which controls the language for labels displayed in an application.This picklist contains the following fully-supported languages:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English.The following end-user only languages are available.Arabic: arBulgarian: bgCroatian: hrCzech: csEnglish (UK): en_GBGreek: elHebrew: iwHungarian: huIndonesian: inPolish: plPortuguese (European): pt_PTRomanian: roSlovak: skSlovenian: slTurkish: trUkrainian: ukVietnamese: viThe following platform languages are available for organizations that use Salesforce exclusively as a platform.Albanian: sqAfrikaans: afAmharic: amArabic (Algeria): ar_DZArabic (Bahrain): ar_BHArabic (Egypt): ar_EGArabic (Iraq): ar_IQArabic (Jordan): ar_JOArabic (Kuwait): ar_KWArabic (Lebanon): ar_LBArabic (Libya): ar_LYArabic (Morocco): ar_MAArabic (Oman): ar_OMArabic (Qatar): ar_QAArabic (Saudi Arabia): ar_SAArabic (Sudan): ar_SDArabic (Syria): ar_SYArabic (Tunisia): ar_TNArabic (United Arab Emirates): ar_AEArabic (Yemen): ar_YEArmenian: hyBasque: euBosnian: bsBengali: bnBurmese: myCatalan: caChinese (Hong Kong): zh_HKChinese (Singapore): zh_SGChinese (Malaysia): zh_MYDutch (Belgium): nl_BEEnglish (Australia): en_AUEnglish (Belgium): en_BEEnglish (Canada): en_CAEnglish (Cyprus): en_CYEnglish (Germany): en_DEEnglish (Hong Kong): en_HKEnglish (India): en_INEnglish (Ireland): en_IEEnglish (Israel): en_ILEnglish (Malaysia): en_MYEnglish (Malta): en_MTEnglish (Netherlands): en_NLEnglish (New Zealand): en_NZEnglish (Philippines): en_PHEnglish (Singapore): en_SGEnglish (South Africa): en_ZAEnglish (United Arab Emirates): en_AEEstonian: etFarsi: faFrench (Belgium): fr_BEFrench (Canada): fr_CAFrench (Luxembourg): fr_LUFrench (Morocco): fr_MAFrench (Switzerland): fr_CHGeorgian: kaGerman (Austria): de_ATGerman (Belgium): de_BEGerman (Luxembourg): de_LUGerman (Switzerland): de_CHGreek (Cyprus): el_CYGreenlandic: klGujarati: guHawaiian: hawHaitian Creole: htHindi: hiIcelandic: isIrish: gaItalian (Switzerland): it_CHKannada: knKazakh: kkKhmer: kmLatvian: lvLithuanian: ltLuxembourgish: lbMacedonian: mkMalay: msMalayalam: mlMaltese: mtMarathi: mrMontenegrin: sh_MERomanian (Moldova): ro_MDRomansh: rmRussian (Armenia): ru_AMRussian (Belarus): ru_BYRussian (Kazakhstan): ru_KZRussian (Kyrgyzstan): ru_KGRussian (Lithuania): ru_LTRussian (Moldova): ru_MDRussian (Poland): ru_PLRussian (Ukraine): ru_UASamoan: smSerbian (Cyrillic): srSerbian (Latin): shSpanish (Argentina): es_ARSpanish (Bolivia): es_BOSpanish (Chile): es_CLSpanish (Colombia): es_COSpanish (Costa Rica): es_CRSpanish (Dominican Republic): es_DOSpanish (Ecuador): es_ECSpanish (El Salvador): es_SVSpanish (Guatemala): es_GTSpanish (Honduras): es_HNSpanish (Nicaragua): es_NISpanish (Panama): es_PASpanish (Paraguay): es_PYSpanish (Peru): es_PESpanish (Puerto Rico): es_PRSpanish (United States): es_USSpanish (Uruguay): es_UYSpanish (Venezuela): es_VESwahili: swTagalog: tlTamil: taTe reo: miTelugu: teUrdu: urWelsh: cyXhosa: xhZulu: zuThe values in this field are not related to the default locale selection. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Value | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual translated label of the custom link. Label is Translation. |
| WebLinkId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the WebLink that is being translated. |

## Usage

Use this object to translate your custom links to URLs or s-controls into the different languages supported by Salesforce. Users with the Translation Workbench enabled can view custom link translations, but either the “Customize Application” or “Manage Translation” permission is required to create or update custom link translations.

#### See Also

-   [CategoryNodeLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorynodelocalization.htm "When the Translation Workbench is enabled for your organization, the CategoryNodeLocalization object provides the translation of the label of a solution category.")

-   [ScontrolLocalization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scontrollocalization.htm "The translated value of the field label for an s-control.")

## Related Topics

- CategoryNodeLocalization (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorynodelocalization.htm)
- ScontrolLocalization (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scontrollocalization.htm)
