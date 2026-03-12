---
title: "Managed Social Account"
domain: chatterapi
topic: managed-social-account
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.700Z
estimatedTokens: 99
keywords: [Managed, Social, Account, org, assigned, user, describing, fan, network]
---

# Managed Social Account

> Information describing the managed social account or fan page of a
      social network.

# Managed Social Account

Information describing the managed social account or fan page of a social network.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| defaultResponse​AccountId | String | Default response account to use when replying to posts sent to this account. | Small, 44.0 | 44.0 |
| displayName | String | Real name (or user name if real name not available) for this account on the social network. | Small, 44.0 | 44.0 |
| externalPicture​Url | String | URL to the account's avatar image. | Small, 44.0 | 44.0 |
| id | String | Internal SFDC ID for this managed social account. If the account has not been added, it doesn't have an ID value. | Small, 44.0 | 44.0 |
| label | String | Label for the social account. | Small, 44.0 | 44.0 |
| profileUrl | String | URL to the account's profile. | Small, 44.0 | 44.0 |
| socialNetwork | String | Social network that this account belongs to. Values are:FacebookGooglePlusInstagramInstagramBusinessKakaoTalkKikLineLinkedInMessengerOtherPinterestQQRyppleSinaWeiboSMSSnapchatTelegramTwitterVKontakteWeChatWhatsAppYouTube | Small, 44.0 | 44.0 |
| uniqueName | String | Unique name used for distinguishing same name fan pages; acts like a user name for a fan page. | Small, 44.0 | 44.0 |
| username | String | Unique user name or handle for this account on the social network. | Small, 44.0 | 44.0 |

## Code Examples

```
/connect/social-engagement/managed-social-accounts/id
```

## Related Topics

- Managed Social Account (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_social_account_output.htm)
