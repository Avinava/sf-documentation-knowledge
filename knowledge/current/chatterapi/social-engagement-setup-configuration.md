---
title: "Social Engagement Setup Configuration"
domain: chatterapi
topic: social-engagement-setup-configuration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.665Z
estimatedTokens: 569
keywords: [Social, Engagement, Setup, Configuration, Customer, Service]
---

# Social Engagement Setup Configuration

> Get and update the Social Customer Service
    configuration.

# Social Engagement Setup Configuration

Get and update the Social Customer Service configuration.

Resource

```

```

Available version

45.0–61.0

HTTP methods

GET, PATCH

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| callbackUrl | String | Landing page after you authenticate with Social Studio. | Optional | 45.0 |

Request body for PATCH

Root XML tag

<SocialCustomerServiceConfig>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| callbackUrl | String | Callback URL used to generate tenant setup URL. | Optional | 44.0 |
| inboundApex​HandlerId | String | ID of the inbound Apex handler that is responsible for inserting any records as a result of inbound social data. Default value is null and uses the default inbound Apex handler provided by Social Customer Service. | Optional | 44.0 |
| inboundParent​PostEnabled | Boolean | Indicates whether the parent post of an inbound post should also be sent to your org. The parent post represents the social post that this post is replying to. Default value is false. | Optional | 44.0 |
| inbound​Processing​Concurrency​Enabled | Boolean | Indicates whether your org allows concurrent processing of inbound social posts written by different people (true) or not (false). Social posts written by the same person are processed one at a time instead of simultaneously. Default value is false. | Optional | 53.0 |
| providerSettings | Social Customer Service Provider Settings Input[] | List of Social Customer Service settings related to the behavior of specific social networks. | Optional | 45.0 |
| runAsUserId | String | ID of the user that is executing your inbound Apex handler. Default value is the ID of the context user. | Optional | 44.0 |
| socialPublishing​ApprovalEnabled | Boolean | Indicates whether some agents require approval to publish on social networks. Default value is false. | Optional | 44.0 |

Response body for GET and PATCH

[Social Customer Service Configuration](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scs_config_output.htm "The current configuration of Social Customer Service.")

## Code Examples

```
/connect/social-engagement/setup/config
```

```
{
  "socialPublishingApprovalEnabled" : true,
  "inboundParentPostEnabled" : true,
  "runAsUserId" : "005xxxxxxxxxxxxxxx",
  "inboundApexHandlerId" : "01pxxxxxxxxxxxxxxx",
  "callbackUrl" : "https://after.scsLogin.landingPage.example"
}
```

## Related Topics

- Social Customer Service Provider Settings Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_scs_provider_settings_input.htm)
- Social Customer Service Configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scs_config_output.htm)
