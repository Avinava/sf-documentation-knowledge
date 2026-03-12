---
title: "GenAiPlugin"
domain: metadata-api
topic: genaiplugin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.280Z
estimatedTokens: 927
keywords: [GenAiPlugin, Represents, agent, topic, which, category, actions, related, particular, job, done, agents., Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# GenAiPlugin

> Represents an agent topic, which is a category of actions related to a
			particular job to be done by AI agents.

# GenAiPlugin

Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

GenAiPlugin components have the suffix .genAiPlugin and are stored in the genAiPlugins folder.

## Version

GenAiPlugin components are available in API version 62.0 and later.

## Special Access Rules

GenAiPlugin is available only if Agents is enabled in your org.

## Fields

| Field Name | Description |
| --- | --- |
| aiPluginUtterances | Field TypeAiPluginUtteranceDef[]DescriptionA list of utterances that can be used to pick a topic during runtime. |
| canEscalate | Field TypebooleanDescriptionIndicates whether this topic is eligible for escalation to a rep. |
| description | Field TypestringDescriptionThe description of the topic. |
| developerName | Field TypestringDescriptionRequired.Represents the API name of the topic. This name must be unique across all custom and customized topics. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| genAiFunctions | Field TypeGenAiPluginFunctionDef[]DescriptionA list of functions in the topic. |
| genAiPluginInstructions | Field TypeGenAiPluginInstructionDef[]DescriptionA list of instructions in the topic. |
| language | Field TypestringDescriptionRequired.The language of the topic. |
| masterLabel | Field TypestringDescriptionRequired.The master label for the topic. |
| plannerField | Field TypestringDescriptionRepresents the topic’s parent planner. |
| pluginType | Field TypePluginType (enumeration of type string)DescriptionRequired.Values are:TopicAPICustomTopic |
| scope | Field TypestringDescriptionA specific job description for a topic. |

## GenAiPluginFunctionDef

A function in the topic.

| Field Name | Description |
| --- | --- |
| functionName | Field TypestringDescriptionRequired.The API name of the function. |

## Usage

In Winter '26 orgs and later, use [GenAiPlannerBundle](atlas.en-us.api_meta.meta/api_meta/meta_genaiplannerbundle.htm "Represents a planner for an agent or agent template. It’s a container for all the topics and actions used to interact with a large language model (LLM).") to retrieve topics that are created within a particular agent. To retrieve topics in the asset library, use GenAiPlugin.

When deploying topic or action metadata to a Summer '25 (version 64.0) org, retrieve the metadata using Metadata API version 64.0, even if your source org is Winter '26 or later (version 65.0). For Winter \`26 and later, use Metadata API version 65.0 and later.

## Declarative Metadata Sample Definition

The following is an example of a GenAiPlugin component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<GenAiPlugin xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <description>Engages and interacts with the user about any request that could be CRM data related.
      This could be tasks such as identify and summarize records, answer queries, aggregate data,
      find and query objects, update records, or drafting and refining emails.</description>
    <developerName>General_CRM_Customized</developerName>
    <genAiFunctions>
        <functionName>EmployeeCopilot__IdentifyObjectByName</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__IdentifyRecordByName</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__QueryRecords</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__QueryRecordsWithAggregate</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__GetActivitiesTimeline</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__GetActivityDetails</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__GetRecordDetails</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__DraftOrReviseEmail</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__UpdateRecordFields</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__WebSearch</functionName>
    </genAiFunctions>
    <genAiFunctions>
        <functionName>EmployeeCopilot__AnswerQuestionsWithKnowledge</functionName>
    </genAiFunctions>
    <genAiPluginInstructions>
        <description>There are multiple available data retrieval functions at your disposal.
          You can use each one of them multiple times if needed. You should use functions
          as many times as necessary until you have all the data required to fulfill the request of the user.
          You can perform extra calls if you think you can get additional relevant information.</description>
        <developerName>therearemu0</developerName>
        <language xsi:nil="true"/>
        <masterLabel>therearemu</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>Do not declare your intent i.e. &quot;I will now retrieve the data&quot; - Just fetch the data.</description>
        <developerName>donotdecla1</developerName>
        <language xsi:nil="true"/>
        <masterLabel>donotdecla</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>Identify the object type (i.e., leads, opportunities, accounts) the user asks about.
           If unclear, confirm with the user and make a suggestion based on the query context and history.</description>
        <developerName>identifyth2</developerName>
        <language xsi:nil="true"/>
        <masterLabel>identifyth</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>When only the name of a record is mentioned in the user request, you MUST call the IdentifyRecordByName action
          to get the necessary IDs.</description>
        <developerName>whenonlyth3</developerName>
        <language xsi:nil="true"/>
        <masterLabel>whenonlyth</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>Always call QueryRecords &amp; QueryRecordsWithAggregate passing plain natural language english as input.
          You must Include the record ID in the input if available.</description>
        <developerName>alwayscall4</developerName>
        <language xsi:nil="true"/>
        <masterLabel>alwayscall</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>For accounts and contacts, combine the WebSearch action with the CRM data retrieval actions.
           MUST maintain citations in the answer.</description>
        <developerName>foraccount5</developerName>
        <language xsi:nil="true"/>
        <masterLabel>foraccount</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>When a user asks for a summary or overview of a record, use GetRecordDetails to get an overview
          of the data of the record, then use other data retrieval actions as needed.</description>
        <developerName>whenausera6</developerName>
        <language xsi:nil="true"/>
        <masterLabel>whenausera</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>When asked for a summary on multiple records, you must iterate over all record IDs and for each one,
          call GetRecordDetails.</description>
        <developerName>whenaskedf7</developerName>
        <language xsi:nil="true"/>
        <masterLabel>whenaskedf</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>If the user asks about activities you must call GetActivitiesTimeline.</description>
        <developerName>iftheusera8</developerName>
        <language xsi:nil="true"/>
        <masterLabel>iftheusera</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>When providing the Activity Types for GetActivitiesTimeline, choose all the types that are relevant
           to the user request. Examples - User Request 1 - &quot;What questions does John Doe have that need addressing?&quot;,
           Activity Types - &quot;Call&quot;, &quot;Email&quot;.
           User Request 2 - &quot;What are the next activities for John Doe?&quot;, Activity Types - &quot;Task&quot;, &quot;Event&quot;.</description>
        <developerName>whenprovid9</developerName>
        <language xsi:nil="true"/>
        <masterLabel>whenprovid</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>When asked about recent activities, you should provide the answer, starting from the last 30 days
          and ending on the current date, unless a specific date range is specified by the user.</description>
        <developerName>whenaskeda10</developerName>
        <language xsi:nil="true"/>
        <masterLabel>whenaskeda</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>When you are asked about a single Call, Meeting, Email or any other single specific activity, call GetActivityDetails.</description>
        <developerName>whenyouare11</developerName>
        <language xsi:nil="true"/>
        <masterLabel>whenyouare</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>Always use DraftOrReviseEmail when asked to generate a new email or revise a previously generated email.</description>
        <developerName>alwaysused12</developerName>
        <language xsi:nil="true"/>
        <masterLabel>alwaysused</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>ExtractRecordFieldsAndValuesFromUserInput must be called prior to UpdateRecordFields.</description>
        <developerName>extractrec13</developerName>
        <language xsi:nil="true"/>
        <masterLabel>extractrec</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>Avoid using structured lists, bullet points, or numbered lists. Instead, present the information in complete sentences
          and paragraphs as if you were writing an article or a report.</description>
        <developerName>avoidusing14</developerName>
        <language xsi:nil="true"/>
        <masterLabel>avoidusing</masterLabel>
    </genAiPluginInstructions>
    <genAiPluginInstructions>
        <description>User questions which can be answered by knowledge articles or documents. These questions usually want information,
          instructions or guidance, including but not limited to customer questions about company information, policies and frequently asked questions.</description>
        <developerName>userquesti15</developerName>
        <language xsi:nil="true"/>
        <masterLabel>userquesti</masterLabel>
    </genAiPluginInstructions>
    <language>en_US</language>
    <masterLabel>General CRM Customized</masterLabel>
    <pluginType>Topic</pluginType>
    <scope>Your job is to interact and answer questions for the user about anything Salesforce or CRM data related,
      combining all data retrieval functions. i.e: QueryRecords(), GetRecordDetails(), GetActivitiesTimeline(), GetActivityDetails(), WebSearch()</scope>
</GenAiPlugin>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>GenAiPlugin</name>
   </types>
   <version>62.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- AiPluginUtteranceDef (atlas.en-us.api_meta.meta/api_meta/meta_aipluginutterancedef.htm)
- GenAiPluginInstructionDef (atlas.en-us.api_meta.meta/api_meta/meta_genaiplugininstructiondef.htm)
- GenAiPlannerBundle (atlas.en-us.api_meta.meta/api_meta/meta_genaiplannerbundle.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
