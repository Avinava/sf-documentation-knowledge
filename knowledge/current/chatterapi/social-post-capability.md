---
title: "Social Post Capability"
domain: chatterapi
topic: social-post-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.171Z
estimatedTokens: 550
keywords: [Social, Post, Capability, feed, element, interact, network]
---

# Social Post Capability

> If a feed element has this capability, it can interact with a social post on a social
    network.

# Social Post Capability

If a feed element has this capability, it can interact with a social post on a social network.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| author | Social Account | Social account that authored the social post. | Small, 36.0 | 36.0 |
| content | String | Content body of the social post. | Medium, 36.0 | 36.0 |
| deletedBy | User Summary | User who deleted the social post. | Small, 38.0 | 38.0 |
| hiddenBy | User Summary | User who hid the social post. | Small, 41.0 | 41.0 |
| icon | Icon | Icon of the social network. | Small, 36.0 | 36.0 |
| id | String | ID associated with the social post Salesforce record. | Small, 36.0 | 36.0 |
| isOutbound | Boolean | If true, the social post originated from the Salesforce application. | Small, 36.0 | 36.0 |
| likedBy | String | External social account who liked the social post. | Small, 40.0 | 40.0 |
| messageType | String | Message type of the social post. Values are:CommentDirectPostPrivateMessageReplyRetweetTweet | Small, 38.0 | 38.0 |
| name | String | Title or heading of the social post. | Small, 36.0 | 36.0 |
| postUrl | String | External URL to the social post on the social network. | Small, 36.0 | 36.0 |
| provider | String | Social network that this social post belongs to. Values are:FacebookGooglePlusInstagramInstagramBusinessKakaoTalkKikLineLinkedInMessengerOtherPinterestQQRyppleSinaWeiboSMSSnapchatTelegramTwitterVKontakteWeChatWhatsAppYouTube | Small, 36.0 | 36.0 |
| recipient | Social Account | Social account that is the recipient of the social post. | Small, 36.0 | 36.0 |
| recipientId | String | ID of the recipient of the social post. | Small, 38.0 | 38.0 |
| reviewScale | Double | Review scale of the social post. | Small, 40.0 | 40.0 |
| reviewScore | Double | Review score of the social post. | Small, 40.0 | 40.0 |
| status | Social Post Status | Status of the social post. | Small, 36.0 | 36.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Social Account (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_account.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Icon (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_icon.htm)
- Social Post Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_post_status.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
