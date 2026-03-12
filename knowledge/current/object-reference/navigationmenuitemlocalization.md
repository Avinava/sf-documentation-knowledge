---
title: "NavigationMenuItemLocalization"
domain: object-reference
topic: navigationmenuitemlocalization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.104Z
estimatedTokens: 610
keywords: [NavigationMenuItemLocalization, translated, navigation, menu, item, Experience, Cloud, site, API, version, 36.0, later, Calls, Special, Access]
---

# NavigationMenuItemLocalization

> Represents the translated value of a
				navigation menu item in an Experience Cloud site.
		This object is available in API version 36.0 and later.

# NavigationMenuItemLocalization

Represents the translated value of a navigation menu item in an Experience Cloud site. This object is available in API version 36.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Navigation menus are available only in Experience Cloud sites created using Experience Builder templates. To use navigation menus in LWR templates, you must build a custom navigation menu component.

## Fields

| Field Name | Details |
| --- | --- |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language of the translated navigation menu item. The picklist contains the following supported languages:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the navigation menu item that this translated value applies to. |
| Value | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionThe translated text for the navigation menu item. Label is Translation Text. |
