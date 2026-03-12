---
title: "DocumentGenerationProcess Class"
domain: clm-developer-guide
topic: documentgenerationprocess-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.011Z
estimatedTokens: 413
keywords: [DocumentGenerationProcess, manage, document, generation, processes, Call, methodName, inputMap]
---

# DocumentGenerationProcess Class

> The DocumentGenerationProcess class provides methods
        to manage document generation processes.

# DocumentGenerationProcess Class

The DocumentGenerationProcess class provides methods to manage document generation processes.

## Namespace

[industries\_docgen](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_industries_docgen.htm "The industries_docgen namespace provides classes and methods for document generation and permission management in Salesforce Industries.")

## Example

```

```

This Apex code creates a DocumentGenerationProcess record for server-side document generation. This code uses a Map as input that contains all the required fields to create an entry in the database.

-   **[DocumentGenerationProcess Methods](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocumentGenerationProcess.htm#apex_industries_docgen_DocumentGenerationProcess_methods)**


## DocumentGenerationProcess Methods

The following are methods for DocumentGenerationProcess.

-   **[Call(methodName, inputMap)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocumentGenerationProcess.htm#apex_industries_docgen_DocumentGenerationProcess_Call)**
    Invokes a method with specified input parameters for the document generation process.

### Call(methodName, inputMap)

Invokes a method with specified input parameters for the document generation process.

#### Signature

public Object Call(String methodName, Map<String,Object> inputMap)

#### Parameters

methodName

Type: String

Name of the method to be called.

inputMap

Type: Map<String,Object\>

Map that contains input parameters for the method that is called.

#### Return Value

Type: Object

## Code Examples

```apex
Map<String, Object> parameters = new Map<String, Object>();
parameters.put('requestText','{}');
parameters.put('type','GenerateAndConvert');
parameters.put('status','InProgress');
parameters.put('title','TestTitle');
//industries_docgen.DocumentGenerationProcess.createDocumentGenerationProcess(parameters);
Type type = Type.forName('industries_docgen.DocumentGenerationProcess');
System.Callable docgen = (System.Callable) type.newInstance();
docgen.Call('createDocumentGenerationProcess',parameters);
```

## Related Topics

- industries_docgen (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_industries_docgen.htm)
- DocumentGenerationProcess Methods (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocumentGenerationProcess.htm)
- Call(methodName, inputMap) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_industries_docgen_DocumentGenerationProcess.htm)
