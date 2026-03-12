---
title: "Managed Social Accounts"
domain: chatterapi
topic: managed-social-accounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.713Z
estimatedTokens: 204
keywords: [Managed, Social, Accounts, org, assigned, user]
---

# Managed Social Accounts

> Get a list of managed social accounts that are in the org and assigned
      to the user.

# Managed Social Accounts

Get a list of managed social accounts that are in the org and assigned to the user.

Resource

```

```

Available version

44.0–61.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| socialNetwork | String | Filters results based on the social network.Values are:FacebookGooglePlusInstagramInstagramBusinessKakaoTalkKikLineLinkedInMessengerOtherPinterestQQRyppleSinaWeiboSMSSnapchatTelegramTwitterVKontakteWeChatWhatsAppYouTube | Optional | 44.0 |

Response body for GET

[Managed Social Accounts](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_social_accounts_output.htm "A list of managed social accounts that are in the org and assigned to the user.")

## Code Examples

```
/connect/social-engagement/managed-social-accounts
```

## Related Topics

- Managed Social Accounts (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_social_accounts_output.htm)
- Managed Social Account (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_social_account_output.htm)
