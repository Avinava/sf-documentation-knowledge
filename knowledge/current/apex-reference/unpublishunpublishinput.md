---
title: "unpublish(unpublishInput)"
domain: apex-reference
topic: unpublishunpublishinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.296Z
keywords: [unpublish, unpublishInput, Unpublish, content., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# unpublish(unpublishInput)

> Unpublish content.

### unpublish(unpublishInput)

Unpublish content.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentUnpublishOutput unpublish(ConnectApi.ManagedContentUnpublishInput unpublishInput)

#### Parameters

unpublishInput

Type: [ConnectApi.ManagedContentUnpublishInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_unpublish.htm "Input for unpublishing content.")

A ConnectApi,ManagedContentUnpublishInput request body specifying the content to unpublish.

#### Return Value

Type: [ConnectApi.ManagedContentUnpublishOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_unpublish_output.htm "Managed content unpublish action.")