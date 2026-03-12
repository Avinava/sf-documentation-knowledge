---
title: "CallCenterRoutingMap"
domain: metadata-api
topic: callcenterroutingmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.496Z
estimatedTokens: 700
keywords: [CallCenterRoutingMap, Represents, mapping, between, user, queue, Salesforce, org, external, system’s, call, center., Important, Parent, File, Suffix, Directory, Location, Version, Special]
---

# CallCenterRoutingMap

> Represents the mapping between a user or queue in a Salesforce
			org to a user or queue in an external system’s call center.

# CallCenterRoutingMap

Represents the mapping between a user or queue in a Salesforce org to a user or queue in an external system’s call center.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CallCenterRoutingMap components have the suffix .callCenterRoutingMap and are stored in the callCenterRoutingMaps folder.

## Version

CallCenterRoutingMap components are available in API version 52.0 and later.

## Special Access Rules

This type requires Contact Center Admin, Contact Center Admin (Partner Telephony), Contact Center Supervisor, or Manage Call Centers permission.

## Fields

| Field Name | Description |
| --- | --- |
| callCenter | Field TypestringDescriptionRequired.Reference to a call center. |
| developerName | Field TypestringDescriptionRequired.The developer name is a combination of the Salesforce user ID or queue name, and the callCenter value, with an underscore between these two values.[SALESFORCE_USER_ID]_[CALL_CENTER][SALESFORCE_QUEUE_NAME]_[CALL_CENTER] |
| externalId | Field TypestringDescriptionRequired.Unique identifier for the external system’s user or queue. |
| masterLabel | Field TypestringDescriptionRequired.The master label of the CallCenterRoutingMap. |
| quickConnect | Field TypestringDescriptionThe Amazon Connect QuickConnectId ARN used to determine agent availability for Omni-Channel call transfers. Available in API version 56.0 and later. |
| referenceRecord | Field TypestringDescriptionRequired.Lookup field to a Salesforce user or queue. |

## Declarative Metadata Sample Definition

The following is an example of a CallCenterRoutingMap component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CallCenterRoutingMap xmlns="http://soap.sforce.com/2006/04/metadata">
    <callCenter>ExampleCallCenter</callCenter>
<developerName>User_001ABC00000FjYIIA0_04vZ6000000Cagl</developerName>
<externalId>arn:aws:connect:ap-northeast-1:484907484500:instance/examplestring-9c18-4aa5-b5fe-cda6f34d99a0/agent/a69f7afe-5b04-4aa8-b5ee-108a84d0f504</externalId>
    <masterLabel>001ABC00000FjYIIA0</masterLabel>
    <referenceRecord>example.d2b87b8182fa@salesforce.com</referenceRecord>
</CallCenterRoutingMap>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>User_001ABC00000FjYIIA0_04vZ6000000Cagl</members>
        <name>CallCenterRoutingMap</name>
    </types>
    <version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
