---
title: "createManagedContentWithMedia(ManagedContentInputParam, contentData)"
domain: apex-reference
topic: createmanagedcontentwithmediamanagedcontentinputparam-contentdata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [createManagedContentWithMedia, ManagedContentInputParam, contentData, Create, managed, content, data., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createManagedContentWithMedia(ManagedContentInputParam, contentData)

> Create managed content with content data.

### createManagedContentWithMedia(ManagedContentInputParam, contentData)

Create managed content with content data.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDocument createManagedContentWithMedia(ConnectApi.ManagedContentDocumentInput ManagedContentInputParam, ConnectApi.BinaryInput contentData)

#### Parameters

ManagedContentInputParam

Type: [ConnectApi.ManagedContentDocumentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content.htm "Input representation for a piece of managed content.")

A ConnectApi.ManagedContentDocumentInput input class with information to create managed content.

contentData

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

A new binary file of the content data for the managed content.

#### Return Value

Type: [ConnectApi.ManagedContentDocument](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_document.htm "Information about a piece of managed content in an authoring space.")