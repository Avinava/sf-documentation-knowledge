---
title: "BriefcaseDefinition"
domain: object-reference
topic: briefcasedefinition
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:05.638Z
estimatedTokens: 1210
keywords: [BriefcaseDefinition, briefcase, definition, selected, records, users, view, they’re, offline, Salesforce, Service, mobile, app, iOS, Android]
---

# BriefcaseDefinition

> Represents a briefcase definition. A briefcase makes selected records
			available for users to view when they’re offline in the Salesforce Field Service mobile
			app for iOS and Android. This object is available in API version 50.0 and
		later.

# BriefcaseDefinition

Represents a briefcase definition. A briefcase makes selected records available for users to view when they’re offline in the Salesforce Field Service mobile app for iOS and Android. This object is available in API version 50.0 and later.

## Special Access Rules

This object is read-only.

Briefcase objects are available in orgs that have Briefcase Builder and Field Service enabled.

## Supported Calls

describeSObjects(), query(), retrieve()

## Packaging Considerations

An org can have up to 5 briefcases. Installed briefcases are counted against this limit. You can’t install a package that includes a briefcase if your org already has 5 briefcases. When a managed package includes a briefcase, the only changes allowed for the briefcase are activating or deactivating and assigning users or groups to the briefcase.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionDescription of the briefcase definition. Limited to 1024 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Limited to 80 characters. Label is Name.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the briefcase is available for use (true) or not (false). Label is Active. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language for the briefcase. This field defaults to the user's language unless the org is multi-language enabled. Specifies the language of the labels returned.Possible values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe master label for the briefcase. This internal label doesn’t get translated. Limited to 80 characters. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

Use this object to query a briefcase or a list of briefcases with selected records and user assignments. For example:

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BriefcaseDefinitionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

## Code Examples

```
SELECT Id, Description FROM BriefcaseDefinition
WHERE Id in (SELECT BriefcaseId FROM BriefcaseRule 
WHERE TargetEntity='Account') 
AND Id in (SELECT BriefcaseId FROM BriefcaseAssignment where UserOrGroupId='00GR0000000VtwUMAS')
```

## Related Topics

- BriefcaseDefinitionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
