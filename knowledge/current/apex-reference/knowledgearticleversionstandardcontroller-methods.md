---
title: "KnowledgeArticleVersionStandardController
Methods"
domain: apex-reference
topic: knowledgearticleversionstandardcontroller-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.234Z
keywords: [KnowledgeArticleVersionStandardController, Methods, Returns, source, object, record, creating, new, article, another, object., getSourceId, Signature, Return, Value, setDataCategory, categoryGroup, category, Parameters]
---

# KnowledgeArticleVersionStandardController
Methods

> Returns the ID for the source object record when creating
a new article from another object.

## KnowledgeArticleVersionStandardController Methods

The following are instance methods for KnowledgeArticleVersionStandardController.

-   **[getSourceId()](atlas.en-us.apexref.meta/apexref/apex_pages_knowledgearticleversionstandardcontroller.htm#apex_ApexPages_KnowledgeArticleVersionStandardController_getSourceId)**  
    Returns the ID for the source object record when creating a new article from another object.
-   **[setDataCategory(categoryGroup, category)](atlas.en-us.apexref.meta/apexref/apex_pages_knowledgearticleversionstandardcontroller.htm#apex_ApexPages_KnowledgeArticleVersionStandardController_setDataCategory)**  
    Specifies a default data category for the specified data category group when creating a new article.

### getSourceId()

Returns the ID for the source object record when creating a new article from another object.

#### Signature

public String getSourceId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setDataCategory(categoryGroup, category)

Specifies a default data category for the specified data category group when creating a new article.

#### Signature

public Void setDataCategory(String categoryGroup, String category)

#### Parameters

categoryGroup

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

category

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void