---
title: "Recipient List"
domain: clm-developer-guide
topic: recipient-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.544Z
estimatedTokens: 65
keywords: [Recipient, recipients]
---

# Recipient List

> List of recipients.

# Recipient List

List of recipients.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| recipients | Recipient Details[] | List of recipients. | Big, 56.0 | 56.0 |

## Code Examples

```
{
    "recipients":[
                        {
                            "id": "xxxx",
                            "name": "somename",
                            "email": "someemail",
                            "additionalFields": {
                                "key1": "value1"
                            }
                        },
                        ..............................
                        {
                            "id": "yyyy",
                            "name": "somename1",
                            "email": "someemail1",
                            "additionalFields": {
                                "key1": "value1"
                            }
                        }
                ]
}
```

## Related Topics

- Recipient
                                    Details[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_recipient_respons.htm)
