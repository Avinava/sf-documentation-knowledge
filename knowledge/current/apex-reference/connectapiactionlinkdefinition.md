---
title: "ConnectApi.ActionLinkDefinition"
domain: apex-reference
topic: connectapiactionlinkdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.125Z
estimatedTokens: 1428
keywords: [ConnectApi.ActionLinkDefinition, definition, action, link, sensitive, third, party, OAuth, bearer, token, reason, calls, made, Apex, created]
---

# ConnectApi.ActionLinkDefinition

> The definition of an action link. Action link definition can be
      sensitive to a third party (for example, OAuth bearer token headers). For this reason, only
      calls made from the Apex namespace that created the action link definition can read, modify,
      or delete the definition. In addition, the user making the call must have created the
      definition or have View All Data permission.

# ConnectApi.ActionLinkDefinition

The definition of an action link. Action link definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actionUrl | String | The action link URL. For example, a Ui action link URL is a Web page. A Download action link URL is a link to the file to download. Ui and Download action link URLs are provided to clients. An Api or ApiAsync action link URL is a REST resource. Api and ApiAsync action link URLs aren’t provided to clients. Links to Salesforce can be relative. All other links must be absolute and start with https://. | 33.0 |
| createdDate | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | 33.0 |
| excludedUserId | String | ID of a single user to exclude from performing the action. If you specify an excludedUserId, you can’t specify a userId. | 33.0 |
| groupDefault | Boolean | true if this action is the default action link in the action link group; false otherwise. There can be only one default action link per action link group. The default action link gets distinct styling in the Salesforce UI. | 33.0 |
| headers | List<ConnectApi.​RequestHeader> | The request headers for the Api and ApiAsync action link types. | 33.0 |
| id | String | The 18-character ID for the action link definition. | 33.0 |
| label | String | A custom label to display on the action link button. A label value can be set only in an action link template.Action links have four statuses: NewStatus, PendingStatus, SuccessStatus, and FailedStatus. These strings are appended to the label for each status:labellabel Pendinglabel Successlabel FailedFor example, if the value of label is “See Example,” the values of the four action link states are: See Example, See Example Pending, See Example Success, and See Example Failed.An action link can use either label or labelKey to generate label names, it can’t use both. If label has a value, the value of labelKey is None. If labelKey has a value other than None, the value of label is null. | 34.0 |
| labelKey | String | Key for the set of labels to show in the user interface. A set includes labels for these states: NewStatus, PendingStatus, SuccessStatus, FailedStatus. For example, if you use the Approve key, you get these labels: Approve, Pending, Approved, Failed.For a complete list of label keys, see Action Links Labels in the Connect REST API Developer Guide. | 33.0 |
| method | ConnectApi.​HttpRequestMethod | The HTTP method. One of these values:HttpDelete—Returns HTTP 204 on success. Response body or output class is empty.HttpGet—Returns HTTP 200 on success.HttpHead—Returns HTTP 200 on success. Response body or output class is empty.HttpPatch—Returns HTTP 200 on success or HTTP 204 if the response body or output class is empty.HttpPost—Returns HTTP 201 on success or HTTP 204 if the response body or output class is empty. Exceptions are the batch posting resources and methods, which return HTTP 200 on success.HttpPut—Return HTTP 200 on success or HTTP 204 if the response body or output class is empty. | 33.0 |
| modifiedDate | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | 33.0 |
| requestBody | String | The request body for Api and ApiAsync action link types.NoteEscape quotation mark characters in the requestBody value. | 33.0 |
| requires​Confirmation | Boolean | true to require the user to confirm the action; false otherwise. | 33.0 |
| templateId | String | The ID of the action link template from which to instantiate this action link. If the action link isn’t associated with a template, the value is null. | 33.0 |
| type | ConnectApi.​ActionLinkType | Defines the type of action link. Values are:Api—The action link calls a synchronous API at the action URL. Salesforce sets the status to SuccessfulStatus or FailedStatus based on the HTTP status code returned by your server.ApiAsync—The action link calls an asynchronous API at the action URL. The action remains in a PendingStatus state until a third party makes a request to /connect/action-links/actionLinkId to set the status to SuccessfulStatus or FailedStatus when the asynchronous operation is complete.Download—The action link downloads a file from the action URL.Ui—The action link takes the user to a web page at the action URL.NoteInvoking ApiAsync action links from an app requires a call to set the status. However, there isn’t currently a way to set the status of an action link using Apex. To set the status, use Connect REST API. See the Action Link resource in the Connect REST API Developer Guidefor more information. | 33.0 |
| userId | String | The ID of the user who can execute the action. If not specified or null, any user can execute the action. If you specify a userId, you can’t specify an excludedUserId. | 33.0 |

#### See Also

-   [ConnectApi.ActionLinkGroupDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_group_definition.htm "The definition of an action link group. Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​RequestHeader (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_request_header.htm)
- ConnectApi.​HttpRequestMethod (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​ActionLinkType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ActionLinkGroupDefinition (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_group_definition.htm)
