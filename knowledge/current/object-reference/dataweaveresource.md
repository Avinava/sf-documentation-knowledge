---
title: "DataWeaveResource"
domain: object-reference
topic: dataweaveresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.104Z
estimatedTokens: 697
keywords: [DataWeaveResource, DataWeaveScriptResource, generated, DataWeave, scripts, API, version, 58.0, later, Calls, Usage]
---

# DataWeaveResource

> Represents the DataWeaveScriptResource class that is generated for all
         DataWeave scripts. This object is available in API version 58.0 and later.

# DataWeaveResource

Represents the DataWeaveScriptResource class that is generated for all DataWeave scripts. This object is available in API version 58.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesFilter, SortDescriptionThe API version of this component. |
| BodyLength | TypeintPropertiesFilter, Group, SortDescriptionSize of the DataWeave script (in bytes). |
| ContentType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionPossible value:dwl: The metadata file for the DataWeave scripts that are deployed to an org. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. |
| IsGlobal | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhen set to true, the generatedDataWeaveScriptResource class is global. The default value is false. |
| IsProtected | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionNot used |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the MasterLabel. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. The name of the resource. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

Although the DataWeaveResource object supports the create and update field properties, a runtime exception occurs if you try to create, update, or delete using the API. Instead, use the Salesforce Extensions for Visual Studio Code.
