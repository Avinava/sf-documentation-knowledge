---
title: "getManagedSocialAccounts(socialNetwork)"
domain: apex-reference
topic: getmanagedsocialaccountssocialnetwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [getManagedSocialAccounts, socialNetwork, Get, list, managed, social, accounts, org, assigned, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedSocialAccounts(socialNetwork)

> Get a list of managed social accounts that are in the org and assigned to the
    user.

### getManagedSocialAccounts(socialNetwork)

Get a list of managed social accounts that are in the org and assigned to the user.

#### API Version

44.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedSocialAccounts getManagedSocialAccounts(ConnectApi.SocialNetworkProvider socialNetwork)

#### Parameters

socialNetwork

Type: [ConnectApi.SocialNetworkProvider](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SocialNetworkProviderEnumValues)

Description: Filters results based on the social network. Values are:

-   Facebook
-   GooglePlus
-   Instagram
-   InstagramBusiness
-   KakaoTalk
-   Kik
-   Line
-   LinkedIn
-   Messenger
-   Other
-   Pinterest
-   QQ
-   Rypple
-   SinaWeibo
-   SMS
-   Snapchat
-   Telegram
-   Twitter
-   VKontakte
-   WeChat
-   WhatsApp
-   YouTube

#### Return Value

Type: [ConnectApi.ManagedSocialAccounts](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_social_accounts_setup_output.htm#apex_connectapi_output_managed_social_accounts_setup_output "A list of managed social accounts.")