---
title: "Updating Recipient Group Output"
domain: comms-developer-guide
topic: updating-recipient-group-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.112Z
estimatedTokens: 165
keywords: [Updating, Recipient, Group, Output, representation, synchronous, operation, that’s, executed, add, remove, recipients]
---

# Updating Recipient Group Output

> Output representation of synchronous operation that’s executed to
      add or remove recipients to a recipient group.

# Updating Recipient Group Output

Output representation of synchronous operation that’s executed to add or remove recipients to a recipient group.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isSuccessful | Boolean | Indicates whether the request was successfully completed (true) or not (false). | Small, 64.0 | 64.0 |
| statusMessage | String | The status of the synchronous operation. | Small, 64.0 | 64.0 |
| errorsList | List Updating Recipient Group Error Output | A list of errors, including detailed information about each one. | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "isSuccessful": true,
  "statusMessage": "<A success message>",
  "errorsList": []
}
```

## Related Topics

- Updating Recipient Group Error Output (atlas.en-us.comms_developer_guide.meta/comms_developer_guide/connect_responses_update_recipient_group_error_output.htm)
