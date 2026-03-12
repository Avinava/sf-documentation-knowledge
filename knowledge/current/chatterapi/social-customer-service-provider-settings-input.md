---
title: "Social Customer Service Provider Settings Input"
domain: chatterapi
topic: social-customer-service-provider-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.775Z
estimatedTokens: 207
keywords: [Social, Customer, Service, Provider, Settings, Input, behavior, specific, networks]
---

# Social Customer Service Provider Settings Input

> Social Customer Service settings related to the behavior of specific
      social networks.

# Social Customer Service Provider Settings Input

Social Customer Service settings related to the behavior of specific social networks.

Root XML tag

<SocialCustomerServiceProviderSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| messageType​Settings | Social Customer Service Message Type Settings Input[] | List of Social Customer Service settings related to the behavior of specific message types. | Required | 45.0 |
| provider | String | Specifies the social network provider, such as Facebook. | Required | 45.0 |

#### See Also

-   [Social Customer Service Configuration Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_scs_config_input.htm "Social Customer Service configuration options to save.")

## Code Examples

```
{
  "messageTypeSettings" : [{
    "enable" : true,
    "messageType" : "PrivateMessage"
    }],
  "provider" : "Facebook"
}
```

## Related Topics

- Social Customer Service Message Type Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_scs_message_type_settings_input.htm)
- Social Customer Service Configuration Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_scs_config_input.htm)
