---
title: "Platform Action"
domain: chatterapi
topic: platform-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.097Z
estimatedTokens: 1215
keywords: [Platform, Action, instance, state, context, user]
---

# Platform Action

> A platform action instance with state information for the context
      user.

# Platform Action

A platform action instance with state information for the context user.

Action links are one type of platform action and are therefore represented as platform action response bodies.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionUrl | String | For action links of subtype Ui or Download, direct the user to download or visit the UI from this link. Salesforce issues a Javascript redirect for the link in this format: /action-link-redirect/communityId/​actionLinkId?_bearer=bearerToken.For Api and ApiAsync action links and for all platform actions, this value is null.Salesforce handles the callout to Api or and ApiAsync action links.To call an Api or an ApiAsync action link, you can also make a PATCH request to the /connect/action-links/actionLinkId resource and set status to PendingStatus. | Medium, 33.0 | 33.0 |
| apiName | String | The API name. This value may be null. | Medium, 33.0 | 33.0 |
| confirmation​Message | String | If this action requires a confirmation and has a status of NewStatus, this is a default localized message that should be shown to an end user prior to invoking the action. Otherwise, this is null. | Medium, 33.0 | 33.0 |
| created​Records | Record Summary[] | The collection of records that this action created after it was invoked by the context user. This collection is empty if the action hasn’t been performed yet by the context user or if the action doesn’t create a record. Only records created by the context user are shown. | Medium, 33.0 | 33.0 |
| executingUser | User Summary | User who initiated execution of the platform action. | Medium, 33.0 | 33.0 |
| groupDefault | Boolean | true if this platform action is the default or primary platform action in the platform action group; false otherwise. There can be only one default platform action per platform action group. | Small, 33.0 | 33.0 |
| iconUrl | String | The URL of the icon for the platform action. This value may be null. | Medium, 33.0 | 33.0 |
| id | String | The ID of the platform action.If the type is QuickAction and the subtype is Create, this value is null. | Small, 33.0 | 33.0 |
| label | String | The localized label for this platform action. | Small, 33.0 | 33.0 |
| modifiedDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z | Small, 33.0 | 33.0 |
| platformAction​Group | Reference | A reference to the platform action group containing this platform action. | Small, 33.0 | 33.0 |
| status | String | The execution status of the platform action. Values are:FailedStatus—The action link execution failed.NewStatus—The action link is ready to be executed. Available for Download and Ui action links only.PendingStatus—The action link is executing. Choosing this value triggers the API call for Api and ApiAsync action links.SuccessfulStatus—The action link executed successfully.For action links only, you can update the status by making a PATCH request to the /connect/action-links/actionLinksId resource. | Small, 33.0 | 33.0 |
| subtype | String | The subtype of a platform action or null.If the type property is ActionLink, possible values are:Api—The action link calls a synchronous API at the action URL. Salesforce sets the status to SuccessfulStatus or FailedStatus based on the HTTP status code returned by your server.ApiAsync—The action link calls an asynchronous API at the action URL. The action remains in a PendingStatus state until a third party makes a request to /connect/action-links/actionLinkId to set the status to SuccessfulStatus or FailedStatus when the asynchronous operation is complete.Download—The action link downloads a file from the action URL.Ui—The action link takes the user to a web page at the action URL. | Small, 33.0 | 33.0 |
| type | String | The type of platform action. Values are:ActionLink—An indicator on a feed element that targets an API, a web page, or a file, represented by a button in the Salesforce UI.CustomButton—When clicked, opens a URL or a Visualforce page in a window or executes JavaScript.ProductivityAction—Productivity actions are predefined and attached to a limited set of objects. Productivity actions include Send Email, Call, Map, View Website, and Read News. Except for the Call action, you can’t edit productivity actions.QuickAction—A global or object-specific action.StandardButton—A predefined Salesforce button such as New, Edit, or Delete. | Small, 33.0 | 33.0 |
| url | String | Connect REST API resource URL for the platform action.If the type is QuickAction and the subtype is Create, this value is null. | Small, 33.0 | 33.0 |

#### See Also

-   [Platform Action Group](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group.htm "A platform action group instance with state appropriate for the context user.")

## Related Topics

- /connect/action-links/actionLinkId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_specific.htm)
- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- /connect/action-links/actionLinksId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_action_links_specific.htm)
- Platform Action Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group.htm)
