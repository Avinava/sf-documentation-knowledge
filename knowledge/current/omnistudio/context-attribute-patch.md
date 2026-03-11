---
title: "Context Attribute (PATCH)"
domain: omnistudio
topic: context-attribute-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:09.009Z
keywords: [Context, Attribute, PATCH, Note]
---

# Context Attribute (PATCH)

# Context Attribute (PATCH)

Update attributes of a context record.

Resource

```

```

Example for PATCH

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

PATCH

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| updateContextAttributesInput | Object | Input object for updating context attributes. | Required | 59.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

When a context definition is mapped to Account and a field is mapped to Account.RecordType.Name, updating the RecordType's ID does not update the mapped field. This is because updating the RecordType ID does not cause updates to other fields of the RecordType record.

Response body for PATCH

[Context Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_output.htm "Output Representation of attributes associated with defined context.")