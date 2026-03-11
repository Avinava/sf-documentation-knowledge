---
title: "createManagedContent(ManagedContentInputParam)"
domain: apex-reference
topic: createmanagedcontentmanagedcontentinputparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [createManagedContent, ManagedContentInputParam, Create, managed, content., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createManagedContent(ManagedContentInputParam)

> Create managed content.

### createManagedContent(ManagedContentInputParam)

Create managed content.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDocument createManagedContent(ConnectApi.ManagedContentDocumentInput ManagedContentInputParam)

#### Parameters

ManagedContentInputParam

Type: [ConnectApi.ManagedContentDocumentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content.htm "Input representation for a piece of managed content.")

A ConnectApi.ManagedContentDocumentInput input class with information to create managed content.

#### Return Value

Type: [ConnectApi.ManagedContentDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_document.htm "Information about a piece of managed content in an authoring space.")