---
title: "Field Service Flow"
domain: field-service
topic: field-service-flow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.759Z
estimatedTokens: 765
keywords: [Service, Flow, corresponding, resource, REST, API, version, 42.0, later]
---

# Field Service Flow

> Returns information corresponding to a field service flow. This resource is available in
    REST API version 42.0 and later.

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

## Code Examples

```
{
  "flows" : [ {
    "Id" : "301R000000008grIAA",
    "DefinitionId" : "300R00000004OLFIA2",
    "MasterLabel" : "FS_Flow",
    "ManageableState" : "unmanaged",
    "VersionNumber" : 1,
    "Status" : "Draft",
    "Description" : "FS Flow",
    "ProcessType" : "FieldServiceMobile",
    "CreatedDate" : "2017-12-05T19:22:16.000+0000",
    "CreatedById" : "005R0000000J2glIAC",
    "LastModifiedDate" : "2017-12-05T19:22:16.000+0000",
    "LastModifiedById" : "005R0000000J2glIAC",
    "Metadata" : {
      "actionCalls" : null,
      "apexPluginCalls" : null,
      "assignments" : null,
      "choices" : [ {
        "choiceText" : "Choice A",
        "dataType" : "String",
        "description" : null,
        "name" : "Choice_A",
        "processMetadataValues" : null,
        "userInput" : null,
        "value" : null
      }, {
        "choiceText" : "Choice B",
        "dataType" : "String",
        "description" : null,
        "name" : "Choice_B",
        "processMetadataValues" : null,
        "userInput" : null,
        "value" : null
      } ],
      "constants" : null,
      "decisions" : null,
      "description" : "FS Flow",
      "dynamicChoiceSets" : null,
      "formulas" : null,
      "fullName" : "FS_Flow-1",
      "interviewLabel" : "FS_Flow {!$Flow.CurrentDateTime}",
      "label" : "FS Flow",
      "loops" : null,
      "module" : null,
      "processMetadataValues" : null,
      "processType" : "FieldServiceMobile",
      "recordCreates" : null,
      "recordDeletes" : null,
      "recordLookups" : null,
      "recordUpdates" : null,
      "screens" : [ {
        "allowBack" : true,
        "allowFinish" : true,
        "allowPause" : true,
        "connector" : {
          "processMetadataValues" : null,
          "targetReference" : "Screen_2"
        },
        "description" : null,
        "fields" : [ {
          "choiceReferences" : null,
          "dataType" : "String",
          "defaultSelectedChoiceReference" : null,
          "defaultValue" : null,
          "description" : null,
          "extensionName" : null,
          "fieldText" : "Field 1",
          "fieldType" : "InputField",
          "helpText" : "Help Text 1",
          "inputParameters" : [ ],
          "isRequired" : false,
          "isVisible" : null,
          "name" : "Field_1",
          "outputParameters" : [ ],
          "processMetadataValues" : null,
          "scale" : null,
          "validationRule" : null
        }, {
          "choiceReferences" : [ "Choice_A", "Choice_B" ],
          "dataType" : "String",
          "defaultSelectedChoiceReference" : null,
          "defaultValue" : null,
          "description" : null,
          "extensionName" : null,
          "fieldText" : "Pick a choice",
          "fieldType" : "RadioButtons",
          "helpText" : "Pick a Choice help text",
          "inputParameters" : [ ],
          "isRequired" : false,
          "isVisible" : null,
          "name" : "Pick_a_choice",
          "outputParameters" : [ ],
          "processMetadataValues" : null,
          "scale" : null,
          "validationRule" : null
        } ],
        "helpText" : null,
        "label" : "Screen 1",
        "locationX" : 189,
        "locationY" : 178,
        "name" : "Screen_1",
        "pausedText" : null,
        "processMetadataValues" : null,
        "rules" : null,
        "showFooter" : true,
        "showHeader" : true
      }, {
        "allowBack" : true,
        "allowFinish" : true,
        "allowPause" : true,
        "connector" : null,
        "description" : null,
        "fields" : [ {
          "choiceReferences" : null,
          "dataType" : "String",
          "defaultSelectedChoiceReference" : null,
          "defaultValue" : null,
          "description" : null,
          "extensionName" : null,
          "fieldText" : "Field 1",
          "fieldType" : "InputField",
          "helpText" : null,
          "inputParameters" : [ ],
          "isRequired" : false,
          "isVisible" : null,
          "name" : "Field_1",
          "outputParameters" : [ ],
          "processMetadataValues" : null,
          "scale" : null,
          "validationRule" : null
        } ],
        "helpText" : null,
        "label" : "Screen 2",
        "locationX" : 437,
        "locationY" : 289,
        "name" : "Screen_2",
        "pausedText" : null,
        "processMetadataValues" : null,
        "rules" : null,
        "showFooter" : true,
        "showHeader" : true
      } ],
      "startElementReference" : "Screen_1",
      "steps" : null,
      "subflows" : null,
      "textTemplates" : null,
      "urls" : null,
      "variables" : null,
      "waits" : null
    },
    "FullName" : "FS_Flow-1"
  } ]
}
```
