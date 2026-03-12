---
title: "Action Link"
domain: chatterapi
topic: action-link
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.540Z
estimatedTokens: 1076
keywords: [Action, Link, status, combination, labelKey, Definition, Input, determines, text, displays, trigger, API, ApiAsync, links, PendingStatus]
---

# Action Link

> Get information about or update the status of an action link. The status of the
      action link in combination with the labelKey property of
      the Action Link Definition Input determines the text that displays in the UI. To trigger the
      API request for Api and ApiAsync action links, set the status to
        PendingStatus.

# Action Link

Get information about or update the status of an action link. The status of the action link in combination with the labelKey property of the Action Link Definition Input determines the text that displays in the UI. To trigger the API request for Api and ApiAsync action links, set the status to PendingStatus.

This image shows two action links. In this image, the status of both action links is NewStatus.

![Action links in the UI](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_status0.png&folder=chatterapi)

If Pam Smith clicks **Confirm**, the action link status is set to SuccessfulStatus and results in the feed item shown in this image.

![Status message in the UI](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Factionlinks_status.png&folder=chatterapi)

Different types of action links have different status workflows.

Api

To invoke an Api action link from an app, make a PATCH request to mark the link PendingStatus. Salesforce handles the call out to the actionUrl that was provided in the Action Link Definition Input. For an Api action link, Salesforce sets the status to SuccessfulStatus or FailedStatus based on the HTTP status code returned by your server.

ApiAsync

To invoke this action from an app, make a PATCH request to mark the link PendingStatus. Salesforce handles the call out to the actionUrl that was provided in the Action Link Definition Input. For an ApiAsync action link, the callout starts an asynchronous operation on your server. Salesforce sets status to PendingStatus unless the call returned an error status code, in which case it sets status to FailedStatus. When your server has finished the asynchronous processing it should call back and PATCH the action link to SuccessfulStatus or FailedStatus.

Download and Ui

Direct the user to download or visit the UI from the link in the actionUrl of the Platform Action response body. Your application must decide when to make a PATCH request to set status to SuccessfulStatus or FailedStatus.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

You can’t PATCH the status of an action link:

-   Back to NewStatus from a different status.
-   From a terminal status (FailedStatus or SuccessfulStatus) to NewStatus or PendingStatus.
-   When the action link belongs to an action link group whose executionsAllowed property is Unlimited.
-   For an Api or ApiAsync action link whose executionsAllowed property is Once, when a user PATCHes the status to PendingStatus for the first time, the callout is made to the action link. If the same user PATCHes it to PendingStatus again, Salesforce returns the current action link information. However, if another user PATCHes the status to PendingStatus, Salesforce throws an error. In both cases, the callout to the action link is not resent.

Resource

```

```

```

```

Available since release

33.0

HTTP methods

GET, PATCH, HEAD

Request body for PATCH

Root XML tag

<actionLink>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | The current status of the action. Values are:FailedStatus—The action link execution failed.NewStatus—The action link is ready to be executed. Available for Download and Ui action links only.PendingStatus—The action link is executing. Choosing this value triggers the API call for Api and ApiAsync action links.SuccessfulStatus—The action link executed successfully. | Required | 33.0 |

Request parameters for PATCH

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| status | String | Values are:FailedStatus—The action link execution failed.NewStatus—The action link is ready to be executed. Available for Download and Ui action links only.PendingStatus—The action link is executing. Choosing this value triggers the API call for Api and ApiAsync action links.SuccessfulStatus—The action link executed successfully. | 33.0 |

Response body for GET or PATCH

[Platform Action](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link.htm "A platform action instance with state information for the context user.")

Example for PATCH

```

```

## Code Examples

```
/connect/action-links/actionLinkId
```

```
/connect/communities/communityId/action-links/actionLinkId
```

```
{  "status" : "SuccessfulStatus"  }
```

```
PATCH /connect/action-links/0AnRR0000004CTS0A2?status=FailedStatus
```

## Related Topics

- Platform Action (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link.htm)
