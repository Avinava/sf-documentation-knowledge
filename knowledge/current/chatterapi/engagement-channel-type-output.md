---
title: "Engagement Channel Type Output"
domain: chatterapi
topic: engagement-channel-type-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.071Z
estimatedTokens: 92
keywords: [Engagement, Channel, Output, representation]
---

# Engagement Channel Type Output

> Output representation of the list of the engagement channel
      types.

# Engagement Channel Type Output

Output representation of the list of the engagement channel types.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | Get Engagement Channel Type List Result | List that contains the engagement channel types. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "result": {
    "engagementChannelTypes": [
      {
        "id": "0eFRM0000004CBs2AM",
        "name": "Inperson-2",
        "workTypeGroupIds": [
          "0VSRM0000000BgX4AU"
        ],
        "workTypeIds": []
      },
      {
        "contactPointType": "InPerson",
        "id": "0eFRM00000000BL2AY",
        "name": "A Channel",
        "workTypeGroupIds": [
          "0VSRM0000000BgX4AU"
        ],
        "workTypeIds": []
      },
      {
        "contactPointType": "InPerson",
        "id": "0eFRM00000000Bk2AI",
        "name": "Test",
        "workTypeGroupIds": [
          "0VSRM0000000BgX4AU"
        ],
        "workTypeIds": []
      }
    ]
  }
}
```

## Related Topics

- Get Engagement Channel Type List Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_get_engagement_channel_type_list_resul.htm)
