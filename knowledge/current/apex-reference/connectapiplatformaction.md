---
title: "ConnectApi.PlatformAction"
domain: apex-reference
topic: connectapiplatformaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.450Z
estimatedTokens: 1058
keywords: [ConnectApi.PlatformAction, platform, action, instance, state, context, user]
---

# ConnectApi.PlatformAction

> A platform action instance with state information for the context
      user.

# ConnectApi.PlatformAction

A platform action instance with state information for the context user.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actionUrl | String | For action links of subtype Ui or Download, direct the user to download or visit the UI from this link. Salesforce issues a Javascript redirect for the link in this format: /action-link-redirect/communityId​/actionLinkId?_bearer=bearerToken.For Api action links and for all platform actions, this value is null and Salesforce handles the call. | 33.0 |
| apiName | String | The API name. The value may be null. | 33.0 |
| confirmation​Message | String | If this action requires a confirmation and has a status of NewStatus, this is a default localized message that should be shown to an end user prior to invoking the action. Otherwise, this is null. | 33.0 |
| executingUser | ConnectApi.UserSummary | The user who initiated execution of this platform action. | 33.0 |
| groupDefault | Boolean | true if this platform action is the default or primary platform action in the platform action group; false otherwise. There can be only one default platform action per platform action group. | 33.0 |
| iconUrl | String | The URL of the icon for the platform action. This value may be null. | 33.0 |
| id | String | The ID for the platform action.If the type is QuickAction and the subtype is Create, this value is null. | 33.0 |
| label | String | The localized label for this platform action. | 33.0 |
| modifiedDate | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | 33.0 |
| platformAction​Group | ConnectApi.Reference | A reference to the platform action group containing this platform action. | 33.0 |
| status | ConnectApi.​PlatformAction​Status | The execution status of the platform action. Values are:FailedStatus—The action link execution failed.NewStatus—The action link is ready to be executed. Available for Download and Ui action links only.PendingStatus—The action link is executing. Choosing this value triggers the API call for Api and ApiAsync action links.SuccessfulStatus—The action link executed successfully. | 33.0 |
| subtype | String | The subtype of a platform action or null.If the type property is ActionLink, possible values are:Api—The action link calls a synchronous API at the action URL. Salesforce sets the status to SuccessfulStatus or FailedStatus based on the HTTP status code returned by your server.ApiAsync—The action link calls an asynchronous API at the action URL. The action remains in a PendingStatus state until a third party makes a request to /connect/action-links/actionLinkId to set the status to SuccessfulStatus or FailedStatus when the asynchronous operation is complete.Download—The action link downloads a file from the action URL.Ui—The action link takes the user to a web page at the action URL.NoteInvoking ApiAsync action links from an app requires a call to set the status. However, there isn’t currently a way to set the status of an action link using Apex. To set the status, use Connect REST API. See the Action Link resource in the Connect REST API Developer Guidefor more information. | 33.0 |
| type | ConnectApi.​PlatformActionType | The type of platform action. Values are:ActionLink—An indicator on a feed element that targets an API, a web page, or a file, represented by a button in the Salesforce UI.CustomButton—When clicked, opens a URL or a Visualforce page in a window or executes JavaScript.ProductivityAction—Productivity actions are predefined and attached to a limited set of objects. Productivity actions include Send Email, Call, Map, View Website, and Read News. Except for the Call action, you can’t edit productivity actions.QuickAction—A global or object-specific action.StandardButton—A predefined Salesforce button such as New, Edit, or Delete. | 33.0 |
| url | String | The URL for this platform action.If the type is QuickAction and the subtype is Create, this value is null. | 33.0 |

#### See Also

-   [ConnectApi.PlatformActionGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action_group.htm "A platform action group instance with state appropriate for the context user.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- ConnectApi.​PlatformAction​Status (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​PlatformActionType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.PlatformActionGroup (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action_group.htm)
