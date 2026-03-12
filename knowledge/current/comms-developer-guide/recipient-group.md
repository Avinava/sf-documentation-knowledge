---
title: "Recipient Group"
domain: comms-developer-guide
topic: recipient-group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.094Z
estimatedTokens: 275
keywords: [Recipient, Group, adding, removing, recipients, associated, offers, products, share, configuration]
---

# Recipient Group

> Update a recipient group by adding or removing recipients who are
      associated with offers or products that share the same configuration.

# Recipient Group

Update a recipient group by adding or removing recipients who are associated with offers or products that share the same configuration.

Resource

```

```

Example URI

```

```

Available version

64.0

HTTP methods

PATCH

Request body for PATCH

JSON example

```

```

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recipientsAction | String | Recipient action you want to perform, such as adding or removing a recipient from a group. | Required | 64.0 |
| recipientsList | List <String> | List of recipients that you want to add or removed from a group. | Optional | 64.0 |
| additionalParameters | Map<String, String> | Parameter to include additional parameter. | Optional | 64.0 |

Response body for PATCH

[Updating Recipient Group Output](atlas.en-us.comms_developer_guide.meta/comms_developer_guide/connect_responses_update_recipient_group_output.htm "Output representation of synchronous operation that’s executed to add or remove recipients to a recipient group.")

## Code Examples

```
/connect/comms-sales/recipient-group/{recipientGroupId}/recipients
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/media/applications
```

```
{
  "recipientsAction": "Add/Remove",
  "recipientsList": ["recipientId1", "recipientId2"],
  "additionalParameters": {
       "key1": "value1"
  }
}
```

## Related Topics

- Updating Recipient Group Output (atlas.en-us.comms_developer_guide.meta/comms_developer_guide/connect_responses_update_recipient_group_output.htm)
