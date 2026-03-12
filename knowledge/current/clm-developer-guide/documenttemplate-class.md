---
title: "DocumentTemplate Class"
domain: clm-developer-guide
topic: documenttemplate-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.017Z
estimatedTokens: 363
keywords: [DocumentTemplate, manage, document, generation, templates, Call, methodName, inputMap]
---

# DocumentTemplate Class

> The DocumentTemplate class provides methods to manage
        document generation
        templates.

# DocumentTemplate Class

The DocumentTemplate class provides methods to manage document generation templates.

## Namespace

[industries\_docgen](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_industries_docgen.htm "The industries_docgen namespace provides classes and methods for document generation and permission management in Salesforce Industries.")

## Example

```

```

This GET request retrieves the Namespace field from the DocumentTemplate entity, using the documentTemplate ID as input.

-   **[DocumentTemplate Methods](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocumentTemplate.htm#apex_industries_docgen_DocumentTemplate_methods)**


## DocumentTemplate Methods

The following are methods for DocumentTemplate.

-   **[Call(methodName, inputMap)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocumentTemplate.htm#apex_industries_docgen_DocumentTemplate_Call)**
    Invokes a method with input parameters to manage document templates.

### Call(methodName, inputMap)

Invokes a method with input parameters to manage document templates.

#### Signature

public Object Call(String methodName, Map<String,ANY> inputMap)

#### Parameters

methodName

Type: String

Name of the method to be called.

inputMap

Type: Map<String,ANY>

Map that contains input parameters for the method that is called.

#### Return Value

Type: Object

## Code Examples

```apex
System.Callable connect = (System.Callable) type.newInstance();
Map<String, Object> inputMap = new Map<String, Object>();
inputMap.put('documentTemplateId', templateId);
docTemplate = SObjectProxy.of(DocGenObjectMappings.getSObjectType(DocGenObjectMappings.DOCUMENT_TEMPLATE_STR).newSObject());
Map<String, Object> mapData = (Map<String, Object>)connect.Call('getNamespaceByDocumentTemplateId', inputMap);
```

## Related Topics

- industries_docgen (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_industries_docgen.htm)
- DocumentTemplate Methods (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocumentTemplate.htm)
- Call(methodName, inputMap) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocumentTemplate.htm)
