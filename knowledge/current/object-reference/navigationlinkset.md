---
title: "NavigationLinkSet"
domain: object-reference
topic: navigationlinkset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.091Z
estimatedTokens: 606
keywords: [NavigationLinkSet, navigation, menu, Experience, Cloud, site, consists, items, users, click, parts, API, version, 35.0, later]
---

# NavigationLinkSet

> Represents the navigation menu in an Experience Cloud site. A
			navigation menu consists of items that users can click to go to other parts of the site.
		This object is available in API version 35.0 and later.

# NavigationLinkSet

Represents the navigation menu in an Experience Cloud site. A navigation menu consists of items that users can click to go to other parts of the site. This object is available in API version 35.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

create(), delete(), update(), and upsert() are available in API version 45.0 and later.

## Special Access Rules

Navigation menus are available only in Experience Cloud sites created using Experience Builder templates. To use navigation menus in LWR templates, you must build a custom navigation menu component.

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateCreate and Update are available in API version 45.0 and later.DescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateCreate, Defaulted on create, Nillable, and Update are available in API version 45.0 and later.DescriptionLanguage for the navigation menu. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateCreate and Update are available in API version 45.0 and later.DescriptionLabel for the navigation menu. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortCreate is available in API version 45.0 and later. Update is available in API versions 45.0 to 47.0.DescriptionID of the Experience Cloud site. |
