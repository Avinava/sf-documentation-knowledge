---
title: "ConnectApi.BaseManagedSocialAccount"
domain: apex-reference
topic: connectapibasemanagedsocialaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.920Z
estimatedTokens: 373
keywords: [ConnectApi.BaseManagedSocialAccount, Base, information, describing, managed, social, account, fan, page, network.]
---

# ConnectApi.BaseManagedSocialAccount

> Base information describing a managed social account or fan page of
      a social network.

# ConnectApi.BaseManagedSocialAccount

Base information describing a managed social account or fan page of a social network.

This class is abstract.

Superclass of [ConnectApi.ManagedSocialAccount](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_social_account_output.htm "Information describing a managed social account or fan page of a social network.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| defaultResponse​AccountId | String | Default response account to use when replying to posts sent to this account. | 44.0 |
| displayName | String | Real name (or user name if real name not available) for this account on the social network. | 44.0 |
| externalPictureUrl | String | URL to the account's avatar image. | 44.0 |
| id | String | Internal SFDC ID for this managed social account. | 44.0 |
| label | String | Label for the social account. | 44.0 |
| profileUrl | String | URL to the account's profile. | 44.0 |
| socialNetwork | ConnectApi.​SocialNetworkProvider | Social network that this account belongs to. Values are:FacebookGooglePlusInstagramInstagramBusinessKakaoTalkKikLineLinkedInMessengerOtherPinterestQQRyppleSinaWeiboSMSSnapchatTelegramTwitterVKontakteWeChatWhatsAppYouTube | 44.0 |
| uniqueName | String | Unique name used for distinguishing same name fan pages; acts like a user name for a fan page. | 44.0 |
| username | String | Unique user name or handle for this account on the social network. | 44.0 |

## Related Topics

- ConnectApi.ManagedSocialAccount (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_social_account_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​SocialNetworkProvider (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
