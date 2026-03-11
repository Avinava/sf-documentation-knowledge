---
title: "publish(publishInput)"
domain: apex-reference
topic: publishpublishinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [publish, publishInput, Publish, content., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# publish(publishInput)

> Publish content.

### publish(publishInput)

Publish content.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentPublishOutput publish(ConnectApi.ManagedContentPublishInput publishInput)

#### Parameters

publishInput

Type: [ConnectApi.ManagedContentPublishInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_publish.htm "Input for publishing content.")

A ConnectApi.ManagedContentPublishInput request body specifying the content to publish.

#### Return Value

Type: [ConnectApi.ManagedContentPublishOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_publish_output.htm "Information about a Publish action")