---
title: "Update the Status of an Action Link or Invoke an Action Link"
domain: chatterapi
topic: update-the-status-of-an-action-link-or-invoke-an-action-link
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.893Z
estimatedTokens: 875
keywords: [Status, Action, Link, Invoke]
---

# Update the Status of an Action Link or Invoke an Action Link

> Update the status of an action link or invoke an action link.

# Update the Status of an Action Link or Invoke an Action Link

Update the status of an action link or invoke an action link.

Usage

Use this resource to update the status property of an action link. To invoke an Api or an ApiAsync action link, set the status to PendingStatus. The status of the action link in combination with the labelKey property of the Action Link Definition Input determines the text that displays in the UI.

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

[/connect/action-links/actionLinkId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_specific.htm#connect_resources_action_links_specific "Get information about or update the status of an action link. The status of the action link in combination with the labelKey property of the Action Link Definition Input determines the text that displays in the UI. To trigger the API request for Api and ApiAsync action links, set the status to PendingStatus.")

HTTP method

PATCH

Request body

[Action Link Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_input.htm#connect_requests_action_link_input "The desired execution status of an action link.")

Request body example

```

```

Request parameter

status

Request parameter example

```

```

Returns

[Platform Action](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link.htm#connect_responses_action_link "A platform action instance with state information for the context user.")

## Code Examples

```
{ "status":"SuccessfulStatus" }
```

```
/services/data/v66.0/connect/action-links/actionLinkId?status=SuccessfulStatus
```

## Related Topics

- /connect/action-links/actionLinkId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_specific.htm)
- Action Link Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_input.htm)
- Platform Action (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link.htm)
