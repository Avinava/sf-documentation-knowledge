---
title: "ConnectApi.Community"
domain: apex-reference
topic: connectapicommunity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.391Z
keywords: [ConnectApi.Community, See]
---

# ConnectApi.Community

# ConnectApi.Community

Experience Cloud site.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| allowChatter​​AccessWithoutLogin | Boolean | Specifies if guest users can access public groups without logging in. | 31.0 |
| allowMembers​ToFlag | Boolean | Specifies if members can flag content. | 30.0 |
| builderBased​SnaEnabled | Boolean | Specifies whether the Service Not Available page is an auto-generated Experience Builder-based page (true) or a static resource page that’s set in Workspaces \| Administration \| Pages (false). | 52.0 |
| builderUrl | String | Experience Builder URL for the site. | 56.0 |
| contentSpaceId | String | ID of the managed content space associated with the enhanced site. | 62.0 |
| description | String | Site description. | 28.0 |
| guestMember​VisibilityEnabled | Boolean | Specifies whether guest members can see other members (true) or not (false). | 47.0 |
| id | String | Site ID. | 28.0 |
| imageOptimization​CDNEnabled | Boolean | Specifies whether images are optimized for guest users on all devices for sites using Salesforce's CDN for Digital Experiences (true) or not (false). | 56.0 |
| invitationsEnabled | Boolean | Specifies whether users can invite other external users. | 28.0 |
| knowledgeable​​Enabled | Boolean | Specifies whether knowledgeable people and endorsements are available for topics (true), or not (false). | 30.0 |
| loginUrl | String | Login URL for the site. | 36.0 |
| memberVisibility​Enabled | Boolean | Specifies whether members can see other members (true) or not (false). | 45.0 |
| name | String | Site name. | 28.0 |
| nicknameDisplay​Enabled | Boolean | Specifies whether nicknames are displayed. | 32.0 |
| privateMessages​​Enabled | Boolean | Specifies whether members can send and receive private messages to and from other members (true) or not (false). | 30.0 |
| reputationEnabled | Boolean | Specifies whether reputation is calculated and displayed for members. | 31.0 |
| sendWelcomeEmail | Boolean | Specifies whether emails are sent to all new users when they join. | 28.0 |
| siteAsContainer​Enabled | Boolean | Specifies whether the site is an Experience Builder site (true) or a Salesforce Tabs + Visualforce site (false). | 41.0 |
| siteUrl | String | URL for the site, which is your Experience Cloud sites domain plus a URL prefix. For example, MyDomainName.my.site.com/customers. | 30.0 |
| status | ConnectApi.​CommunityStatus Enum | Status of the Experience Cloud site.LiveInactiveUnderConstruction | 28.0 |
| templateName | String | Name of the Experience Builder template. | 46.0 |
| url | String | Connect REST API URL to the site. | 28.0 |
| urlPathPrefix | String | Site-specific URL prefix. For example, in the site URL MyDomainName.my.site.com/customers, customers is the UrlPathPrefix. | 28.0 |

#### See Also

-   [ConnectApi.CommunityPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_communityPage.htm "Page of Experience Cloud sites.")