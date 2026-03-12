---
title: "Commerce Subscriptions"
domain: chatterapi
topic: commerce-subscriptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.074Z
estimatedTokens: 473
keywords: [Commerce, Subscriptions, Retrieve, collection, API, registered, shoppers]
---

# Commerce Subscriptions

> Retrieve a collection of Commerce subscriptions. This API is
    available only to registered shoppers.

# Commerce Subscriptions

Retrieve a collection of Commerce subscriptions. This API is available only to registered shoppers.

This API retrieves Commerce subscriptions based on the account ID specified in the effectiveAccountId parameter. If no account ID is provided as a query parameter, the API defaults to the user’s context and returns subscriptions relevant to them.

Resource

```

```

Resource examples

```

```

```

```

Available version

63.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | OptionalThis field is required for the account switcher to view subscriptions associated with other registered shoppers. | 63.0 |
| pageSize | Integer | Number of items per page. Valid values are from 1 through 100. If unspecified, defaults to 25. | Optional | 63.0 |
| pageToken | String | Page token to use to view a page of information. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned. | Optional | 63.0 |
| sortOrder | String | Sort order for subscriptions. Possible values are:CreatedDateAsc—Sort results in ascending order of created date.CreatedDateDesc—Sort results in descending order of created date.If unspecified, defaults to CreatedDateDesc. | Optional | 63.0 |
| state | String | State of the subscription. Possible values are:ActivePastIf unspecified, defaults to Active. | Optional | 63.0 |

Response body for GET

[Commerce Subscription Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_collection.htm "Representation for the Commerce subscriptions collection.")

## Code Examples

```
/commerce/webstores/webstoreId/subscriptions
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000005rGAA/subscriptions
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000005rGAA/subscriptions?effectiveAccountId=001xx000003DMe9&​state=active&sortOrder=CreatedDateDesc
```

## Related Topics

- Commerce Subscription
              Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_collection.htm)
