---
title: "TopicLocalization"
domain: object-reference
topic: topiclocalization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.259Z
estimatedTokens: 1358
keywords: [TopicLocalization, translated, version, topic, localization, navigational, featured, topics, Experience, Cloud, sites, API, 33.0, later, Calls]
---

# TopicLocalization

> Represents the translated version of a topic name. Topic
			localization applies only to navigational and featured topics in Experience Cloud
			sites. This object is available in API version 33.0 and later.

# TopicLocalization

Represents the translated version of a topic name. Topic localization applies only to navigational and featured topics in Experience Cloud sites. This object is available in API version 33.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Users with the Translation Workbench enabled can view topic translations, but the Customize Application, Manage Translation, or Manage Categories permission is required to create or update them.

## Fields

| Field Name | Details |
| --- | --- |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe combined language and locale ISO code, which controls the language for labels displayed in an application. (The values in this field are not related to the default locale selection.)This picklist contains the following fully-supported languages:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English.The following end-user only languages are available.Arabic: arBulgarian: bgCroatian: hrCzech: csEnglish (UK): en_GBGreek: elHebrew: iwHungarian: huIndonesian: inPolish: plPortuguese (European): pt_PTRomanian: roSlovak: skSlovenian: slTurkish: trUkrainian: ukVietnamese: viThe following platform languages are available for organizations that use Salesforce exclusively as a platform.Albanian: sqAfrikaans: afAmharic: amArabic (Algeria): ar_DZArabic (Bahrain): ar_BHArabic (Egypt): ar_EGArabic (Iraq): ar_IQArabic (Jordan): ar_JOArabic (Kuwait): ar_KWArabic (Lebanon): ar_LBArabic (Libya): ar_LYArabic (Morocco): ar_MAArabic (Oman): ar_OMArabic (Qatar): ar_QAArabic (Saudi Arabia): ar_SAArabic (Sudan): ar_SDArabic (Syria): ar_SYArabic (Tunisia): ar_TNArabic (United Arab Emirates): ar_AEArabic (Yemen): ar_YEArmenian: hyBasque: euBosnian: bsBengali: bnBurmese: myCatalan: caChinese (Hong Kong): zh_HKChinese (Singapore): zh_SGChinese (Malaysia): zh_MYDutch (Belgium): nl_BEEnglish (Australia): en_AUEnglish (Belgium): en_BEEnglish (Canada): en_CAEnglish (Cyprus): en_CYEnglish (Germany): en_DEEnglish (Hong Kong): en_HKEnglish (India): en_INEnglish (Ireland): en_IEEnglish (Israel): en_ILEnglish (Malaysia): en_MYEnglish (Malta): en_MTEnglish (Netherlands): en_NLEnglish (New Zealand): en_NZEnglish (Philippines): en_PHEnglish (Singapore): en_SGEnglish (South Africa): en_ZAEnglish (United Arab Emirates): en_AEEstonian: etFarsi: faFrench (Belgium): fr_BEFrench (Canada): fr_CAFrench (Luxembourg): fr_LUFrench (Morocco): fr_MAFrench (Switzerland): fr_CHGeorgian: kaGerman (Austria): de_ATGerman (Belgium): de_BEGerman (Luxembourg): de_LUGerman (Switzerland): de_CHGreek (Cyprus): el_CYGreenlandic: klGujarati: guHawaiian: hawHaitian Creole: htHindi: hiIcelandic: isIrish: gaItalian (Switzerland): it_CHKannada: knKazakh: kkKhmer: kmLatvian: lvLithuanian: ltLuxembourgish: lbMacedonian: mkMalay: msMalayalam: mlMaltese: mtMarathi: mrMontenegrin: sh_MERomanian (Moldova): ro_MDRomansh: rmRussian (Armenia): ru_AMRussian (Belarus): ru_BYRussian (Kazakhstan): ru_KZRussian (Kyrgyzstan): ru_KGRussian (Lithuania): ru_LTRussian (Moldova): ru_MDRussian (Poland): ru_PLRussian (Ukraine): ru_UASamoan: smSerbian (Cyrillic): srSerbian (Latin): shSpanish (Argentina): es_ARSpanish (Bolivia): es_BOSpanish (Chile): es_CLSpanish (Colombia): es_COSpanish (Costa Rica): es_CRSpanish (Dominican Republic): es_DOSpanish (Ecuador): es_ECSpanish (El Salvador): es_SVSpanish (Guatemala): es_GTSpanish (Honduras): es_HNSpanish (Nicaragua): es_NISpanish (Panama): es_PASpanish (Paraguay): es_PYSpanish (Peru): es_PESpanish (Puerto Rico): es_PRSpanish (United States): es_USSpanish (Uruguay): es_UYSpanish (Venezuela): es_VESwahili: swTagalog: tlTamil: taTe reo: miTelugu: teUrdu: urWelsh: cyXhosa: xhZulu: zu |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID that identifies the topic. After a TopicLocalization record is created, this ID can’t be modified. |
| Value | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionThe translated text for the topic name. Label is Topic Name Translation. |
