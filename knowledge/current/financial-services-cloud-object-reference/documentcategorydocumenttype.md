---
title: "DocumentCategoryDocumentType"
domain: financial-services-cloud-object-reference
topic: documentcategorydocumenttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.061Z
estimatedTokens: 691
keywords: [DocumentCategoryDocumentType, junction, Document, Category, API, version, 59.0, later, Calls]
---

# DocumentCategoryDocumentType

> Represents a junction between Document Category and Document Type.  This
      object is available in API version 59.0 and later.

# DocumentCategoryDocumentType

Represents a junction between Document Category and Document Type. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| DocumentCategoryId | TypereferencePropertiesFilter, Group, SortDescriptionThe Document Category associated with this record.This field is a relationship field.Relationship NameDocumentCategoryRelationship TypeLookupRefers ToDocumentCategory |
| DocumentTypeId | TypereferencePropertiesFilter, Group, SortDescriptionThe Document Type associated with this recordThis field is a relationship field.Relationship NameDocumentTypeRelationship TypeLookupRefers ToDocumentType |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the document category. |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe label for the picklist value that appears in the UI. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
