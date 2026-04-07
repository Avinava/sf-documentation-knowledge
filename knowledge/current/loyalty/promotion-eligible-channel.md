---
title: "Promotion Eligible Channel"
domain: loyalty
topic: promotion-eligible-channel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:08.166Z
estimatedTokens: 244
keywords: [Promotion, Eligible, Channel]
---

> Output representation of the eligible channel for a promotion.

# Promotion Eligible Channel

Output representation of the eligible channel for a promotion.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| channel | Name And Id Output [] | ID or name of the channel eligible for the promotion. Possible names for the online channel type are:AppMobileWebPossible names for the social channel type are:FacebookInstagramTwitterWhatsApp | Small, 60.0 | 60.0 |
| channelType | String | Type of the channel eligible for the promotion. Possible values are:OfflineOnlineSocial | Small, 60.0 | 60.0 |
| retail​LocationGroup | Name And Id Output [] | ID or name of the retail location group eligible for the promotion.This field is applicable only for the offline channel type. | Small, 60.0 | 60.0 |
| store | Name And Id Output [] | ID or name of the retail store eligible for the promotion.This field is applicable only for the offline channel type. | Small, 60.0 | 60.0 |

## Related Topics

- Name
                  And Id Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_name_and_id_output.htm)
