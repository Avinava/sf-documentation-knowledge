---
title: "Social Customer Service Message Type Settings Input"
domain: chatterapi
topic: social-customer-service-message-type-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.770Z
estimatedTokens: 204
keywords: [Social, Customer, Service, Message, Settings, Input, behavior, specific]
---

# Social Customer Service Message Type Settings Input

> Social Customer Service settings related to the behavior of specific
      message types.

# Social Customer Service Message Type Settings Input

Social Customer Service settings related to the behavior of specific message types.

Root XML tag

<SocialCustomerServiceMessageTypeSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enable | Boolean | Specifies whether to send the message type to Social Customer Service (true) or not (false). | Required | 45.0 |
| messageType | String | Specifies the message type, such as PrivateMessage. | Required | 45.0 |

#### See Also

-   [Social Customer Service Provider Settings Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_scs_provider_settings_input.htm "Social Customer Service settings related to the behavior of specific social networks.")

## Code Examples

```
{
  "enable" : true,
  "messageType" : "PrivateMessage"
}
```

## Related Topics

- Social Customer Service Provider Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_scs_provider_settings_input.htm)
