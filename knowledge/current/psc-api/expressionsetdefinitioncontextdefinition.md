---
title: "ExpressionSetDefinitionContextDefinition"
domain: psc-api
topic: expressionsetdefinitioncontextdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.658Z
estimatedTokens: 322
keywords: [relationship, expression, definition, context, API, version, 58.0, later]
---

# ExpressionSetDefinitionContextDefinition

> Represents a relationship between an expression set definition and a
         context definition. This object is available in API version 58.0 and
      later.

# ExpressionSetDefinitionContextDefinition

Represents a relationship between an expression set definition and a context definition. This object is available in API version 58.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

You can’t add records to this object.

## Fields

| Field | Details |
| --- | --- |
| ContextDefinitionApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAPI name of the context definition. |
| ContextDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the context definition.This field is a relationship field.Relationship NameContextDefinitionRelationship TypeLookupRefers ToContextDefinition |
| ExecutableContextDefinition | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionDeveloper name of the file-based context definition. |
| ExpressionSetApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAPI name of the expression set. |
| ExpressionSetDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the expression set definition.This field is a relationship field.Relationship NameExpressionSetDefinitionRelationship TypeLookupRefers ToExpressionSetDefinition |
