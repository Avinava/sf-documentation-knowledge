---
title: "Field Service Flow"
domain: field-service
topic: field-service-flow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.194Z
keywords: [Field, Service, Flow, Response, Body, Example]
---

# Field Service Flow

# Field Service Flow

Returns information corresponding to a field service flow. This resource is available in REST API version 42.0 and later.

This resource accepts the API name of a flow definition and returns information about the active flow version. If no flow version is activated, the most recent version is returned. Flow elements can be translated to the language of the user invoking this API by using Translation Workbench. If a particular flow version’s elements have been translated, the data returned uses the language of the query. To learn more, see [Flow Components in Translation Workbench](https://help.salesforce.com/articleView?id=workbench_flow_components.htm&language=en_US).

This resource is available to API users with Field Service mobile app user permissions and the Run Flows user permission.

URI

/services/data/vXX.X/support/fieldservice/Flow?developerNames=Flow Unique Name

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| developerNames | The unique name for the flow definition. Currently, you can specify only one unique name using this parameter. |

## Response Body

The following table describes the main elements of the response body.

| Field | Type | Description |
| --- | --- | --- |
| Flows | Array | List of flows |
| CreatedDate | String | Date the flow was created |
| Description | String | Description of the flow |
| FullName | String | Full name for the flow |
| Id | String | Unique ID for the flow |
| LastModifiedDate | String | Date the flow was last modified |
| Metadata |  |
|  | Choices | Array | List of choices used by fields |
|  |  | ChoiceText | String | Text of choice |
|  |  | DataType | String | Data type of choice |
|  |  | Name | String | Name for the choice |
|  | Screens | Array of objects | List of screens for the flow |
|  |  | AllowBack | Boolean | Whether you can go back from the screen |
|  |  | AllowFinish | Boolean | Whether you can finish the flow from the screen |
|  |  | AllowPause | Boolean | Whether you can pause from the screen |
|  |  | Fields | Array of objects | List of fields used by the screen |
|  |  | HelpText | String | Help text for the screen |
|  |  | Label | String | Label for the screen |
|  |  | LocationX | Number | X coordinate for the screen |
|  |  | LocationY | Number | Y coordinate for the screen |
|  |  | Name | String | Name of the screen |
| ProcessType | String | Type of process for the flow; in this case, it should be “FieldServiceMobile” |
| Status | String | Status of the flow |
| VersionNumber | Number | Version number for the flow |

## Example

This sample request uses the unique name “FS\_Flow” for the flow definition.

The response contains two screens:

-   Screen 1
-   Screen 2

Screen 1 has two fields:

-   Field 1: a text field
-   RadioButton: a field with two choices

Screen 2 has one field:

-   Field 2: a text field

Request

GET

/services/data/v42.0/support/fieldservice/Flow?developerNames=FS\_Flow

Response

```

```