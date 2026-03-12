---
title: "UserCustomBadgeLocalization"
domain: object-reference
topic: usercustombadgelocalization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.727Z
estimatedTokens: 581
keywords: [UserCustomBadgeLocalization, translated, version, custom, badge, user, API, 38.0, later, Calls, Special, Access, Rules]
---

# UserCustomBadgeLocalization

> Represents the translated version of a custom badge for a user.
		This object is available in API version 38.0 and later.

# UserCustomBadgeLocalization

Represents the translated version of a custom badge for a user. This object is available in API version 38.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

-   Translation Workbench must be enabled for your org.
-   Users with the “Customize Application” or “Manage Translation” permission can create or update UserCustomBadge translations.

## Fields

| Field Name | Details |
| --- | --- |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language the UserCustomBadge is translated into.This picklist contains these fully supported languages.Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the UserCustomBadge. |
| Value | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionThe translated text for the UserCustomBadge. Label is Translation Text. |
