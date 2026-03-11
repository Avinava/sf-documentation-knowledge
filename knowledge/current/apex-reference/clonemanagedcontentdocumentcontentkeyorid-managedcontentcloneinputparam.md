---
title: "cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)"
domain: apex-reference
topic: clonemanagedcontentdocumentcontentkeyorid-managedcontentcloneinputparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [cloneManagedContentDocument, contentKeyOrId, ManagedContentCloneInputParam, Clone, piece, managed, content., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)

> Clone a piece of managed content.

### cloneManagedContentDocument(contentKeyOrId, ManagedContentCloneInputParam)

Clone a piece of managed content.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDocumentClone cloneManagedContentDocument(String contentKeyOrId, ConnectApi.ManagedContentDocumentCloneInput ManagedContentCloneInputParam)

#### Parameters

contentKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Content key or ID of the managed content to clone.

ManagedContentCloneInputParam

Type: [ConnectApi.ManagedContentDocumentCloneInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_document_clone.htm "Managed content clone input.")

ConnectApi.ManagedContentDocumentCloneInput class specifying the details for the cloned content.

#### Return Value

Type: [ConnectApi.ManagedContentDocumentClone](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_document_clone.htm "Managed content document clone.")