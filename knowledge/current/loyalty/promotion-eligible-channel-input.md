---
title: "Promotion Eligible Channel Input"
domain: loyalty
topic: promotion-eligible-channel-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.964Z
estimatedTokens: 261
keywords: [Promotion, Eligible, Channel, Input, representation]
---

# Promotion Eligible Channel Input

> Input representation details of the channel eligible for the promotion.

# Promotion Eligible Channel Input

Input representation details of the channel eligible for the promotion.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| channel | Name And Id Input [] | ID or name of the channel eligible for the promotion.This field takes the IDs or names of EngagementChannelType configured in your org.Possible names for the online channel type are:AppMobileWebPossible names for the social channel type are:FacebookInstagramTwitterWhatsApp | Optional | 60.0 |
| channelType | String | Type of the channel eligible for the promotion. Possible values are:OfflineOnlineSocial | Optional | 60.0 |
| retail​LocationGroup | Name And Id Input [] | ID or name of the retail location group eligible for the promotion.This field is valid only for the offline channel type. | Optional | 60.0 |
| store | Name And Id Input [] | ID or name of the retail store eligible for the promotion.This field is valid only for the offline channel type. | Optional | 60.0 |

## Related Topics

- Name And Id Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_name_and_id_input.htm)
