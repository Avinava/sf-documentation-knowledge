---
title: "DocumentCategory"
domain: financial-services-cloud-object-reference
topic: documentcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.055Z
estimatedTokens: 445
keywords: [DocumentCategory, document, category, that's, group, checklist, items, API, version, 59.0, later, Calls]
---

# DocumentCategory

> Represents a document category that's used to group the document checklist
         items. This object is available in API version 59.0 and later.

# DocumentCategory

Represents a document category that's used to group the document checklist items. This object is available in API version 59.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description for the document category. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the document category. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the document category. |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe master label of the document category. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
