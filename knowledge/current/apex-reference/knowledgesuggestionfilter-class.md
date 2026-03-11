---
title: "KnowledgeSuggestionFilter Class"
domain: apex-reference
topic: knowledgesuggestionfilter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.267Z
keywords: [KnowledgeSuggestionFilter, Class, Sets, validation, status, narrow, suggestion, results, display, articles, status., filter, optional., setValidationStatus, validationStatus, Signature, Parameters, Return, Value]
---

# KnowledgeSuggestionFilter Class

> Sets a validation status to narrow the suggestion results to display
      articles with that status. This filter is optional.

### setValidationStatus(validationStatus)

Sets a validation status to narrow the suggestion results to display articles with that status. This filter is optional.

#### Signature

public void setValidationStatus(String validationStatus)

#### Parameters

validationStatus

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An article validation status. These values are available in the ValidationStatus field on the KnowledgeArticleVersion object.

#### Return Value

Type: void