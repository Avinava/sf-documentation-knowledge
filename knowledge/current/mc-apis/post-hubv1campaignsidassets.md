---
title: "POST /hub/v1/campaigns/{id}/assets"
domain: mc-apis
topic: post-hubv1campaignsidassets
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.253Z
estimatedTokens: 364
keywords: [POST, hub, campaigns, assets, Associates, asset, collection, campaign, **Overview**]
---

> Associates an asset or collection of assets to a campaign.

# POST /hub/v1/campaigns/{id}/assets

## **Overview**

Associates an asset or collection of assets to a campaign.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | Campaign ID |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| ids | array | Required | String array of asset ids from Content Builder. When associating a Template Based Email created using the Classic editor to a campaign, use the legacyID as the ID. Retrieve the legacyID using the advanced asset query. |
| type | string | Required | Options for the array: EMAIL, automation_definition, calendar_event, triggered, list, group, data_extension, sendable_custom_object, landing_page, facebook_tab, ct_facebook_post, ct_twitter_post, sms_message, push_message, CMS_asset. CMS_ASSET refers to Content Builder assets. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/campaigns/301/assets
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ids": [
        "7897",
        "7888"
    ],
    "type": "EMAIL"
}
```

**Example Response**

```js
HTTP/1.1 202 Accepted
[
  {
    "id": "16",
    "campaignId": 330,
    "type": "EMAIL",
    "itemID": 7897,
    "createdDate": "2013-01-07T10:49:45"
  },
  {
    "id": "17",
    "campaignId": 330,
    "type": "EMAIL",
    "itemID": 7888,
    "createdDate": "2013-01-07T10:49:45"
  }
]
```

Last Updated: Jun 8, 2021

## Related Topics

- advanced asset query (atlas.en-us.noversion.mc-apis.meta/mc-apis/assetAdvancedQuery.htm)
