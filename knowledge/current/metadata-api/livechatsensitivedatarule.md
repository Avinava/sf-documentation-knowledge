---
title: "LiveChatSensitiveDataRule"
domain: metadata-api
topic: livechatsensitivedatarule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.947Z
estimatedTokens: 687
keywords: [LiveChatSensitiveDataRule, Represents, rule, masking, deleting, data, specified, pattern., Written, regular, expression, regex, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata]
---

# LiveChatSensitiveDataRule

> Represents a rule for masking or deleting
   data of a specified pattern. Written as a regular expression (regex).

# LiveChatSensitiveDataRule

Represents a rule for masking or deleting data of a specified pattern. Written as a regular expression (regex).

Use this object to mask or delete data of specified patterns, such as credit card, social security, phone and account numbers, or even profanity. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

LiveChatSensitiveDataRule components have the suffix .liveChatSensitiveDataRule and are stored in the liveChatSensitiveDataRule folder.

## Version

LiveChatSensitiveDataRule components are available in API version 35.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | SensitiveDataActionType (enumeration of type string) | Required. The action to take on the text when the sensitive data rule is triggered. Possbile values are:RemoveReplace |
| description | string | The description of the sensitive data rule—for example, “Block social security numbers.” |
| enforceOn | int | Required. Determines the roles on which the rule is enforced. The value is determined using bitwise OR operation. There are seven possible values:Rule enforced on AgentRule enforced on VisitorRule enforced on Agent and VisitorRule enforced on SupervisorRule enforced on Agent and SupervisorRule enforced on Visitor and SupervisorRule enforced on Agent, Visitor, and Supervisor |
| isEnabled | boolean | Required. Specifies whether a sensitive data rule is active (true) or not (false). Default value (if none is provided) is false. |
| pattern | string | Required. The pattern of text blocked by the rule. Written as a JavaScript regular expression (regex). |
| replacement | string | The string of characters that replaces the blocked text (if ActionType Replace is selected). |

## Declarative Metadata Sample Definition

The following is an example of a LiveChatSensitiveDataRule component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<LiveChatSensitiveDataRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionType>REPLACE</actionType>
    <enforceOn>7</enforceOn> 
    <isEnabled>true</isEnabled> 
    <pattern>[aeiou]</pattern> 
    <replacement>œ</replacement>
</LiveChatSensitiveDataRule>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <!-- To be used from support.liveagent.testsuite.unifiedouting.testDeployButtonMDAPIWithExistingQueue -->
    <apiAccessLevel>Unrestricted</apiAccessLevel>

    <types>        
        <members>Change_For_all</members>    
        <name>LiveChatSensitiveDataRule</name>
    </types>

    <version>35.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
