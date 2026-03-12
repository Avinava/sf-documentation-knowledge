---
title: "ConnectApi.SocialPostCapability"
domain: apex-reference
topic: connectapisocialpostcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.064Z
estimatedTokens: 569
keywords: [ConnectApi.SocialPostCapability, feed, element, capability, interact, social, post, network]
---

# ConnectApi.SocialPostCapability

> If a feed element has this capability, it can interact with a social
      post on a social network.

# ConnectApi.SocialPostCapability

If a feed element has this capability, it can interact with a social post on a social network.

Subclass of [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| author | ConnectApi.SocialAccount | Social account that authored the social post. | 36.0 |
| content | String | Content body of the social post. | 36.0 |
| deletedBy | ConnectApi.UserSummary | User who deleted the social post. | 38.0 |
| hiddenBy | ConnectApi.UserSummary | User who hid the social post. | 41.0 |
| icon | ConnectApi.Icon | Icon of the social network. | 36.0 |
| id | String | ID associated with the social post Salesforce record. | 36.0 |
| isOutbound | Boolean | If true, the social post originated from the Salesforce application. | 36.0 |
| likedBy | String | External social account who liked the social post. | 40.0 |
| messageType | ConnectApi.​SocialPost​MessageType | Message type of the social post. Values are:CommentDirectPostPrivateMessageReplyRetweetTweet | 38.0 |
| name | String | Title or heading of the social post. | 36.0 |
| postUrl | String | External URL to the social post on the social network. | 36.0 |
| provider | ConnectApi.​SocialNetwork​Provider | Social network that this social post belongs to. Values are:FacebookGooglePlusInstagramInstagramBusinessKakaoTalkKikLineLinkedInMessengerOtherPinterestQQRyppleSinaWeiboSMSSnapchatTelegramTwitterVKontakteWeChatWhatsAppYouTube | 36.0 |
| recipient | ConnectApi.SocialAccount | Social account that is the recipient of the social post. | 36.0 |
| recipientId | String | ID of the recipient of the social post. | 38.0 |
| reviewScale | Double | Review scale of the social post. | 40.0 |
| reviewScore | Double | Review score of the social post. | 40.0 |
| status | ConnectApi.SocialPostStatus | Status of the social post. | 36.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
- ConnectApi.SocialAccount (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_account.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.Icon (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_icon.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​SocialPost​MessageType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​SocialNetwork​Provider (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- ConnectApi.SocialPostStatus (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_post_status.htm)
