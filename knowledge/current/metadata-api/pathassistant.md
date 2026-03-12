---
title: "PathAssistant"
domain: metadata-api
topic: pathassistant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.115Z
estimatedTokens: 832
keywords: [PathAssistant, Path, records.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, PathAssistantStep, Declarative, Sample]
---

# PathAssistant

> Represents Path records.This type extends the Metadata metadata type and inherits its
                        fullName field.

# PathAssistant

Represents Path records.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Note the following when working with PathAssistant:

-   Only one path can be created per record type for each object, including \_\_Master\_\_ record type.
-   Rich text guidance information cannot be retrieved or deployed from or to translation workbench.
-   The preference does not need to be on to retrieve or deploy PathAssistant.

## File Suffix and Directory Location

PathAssistant components have the suffix .pathAssistant and are stored in the pathAssistants folder.

## Version

PathAssistant components are available in API version 34.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the path is active (true) or not (false). |
| entityName | string | Required. The entity name. This is hard coded for Opportunity, Lead, and Quote. For a custom object, this field must be specified and should be the name of the custom object. This field is not updateable. |
| fieldName | string | Required. The field name. This is hard coded for StageName and Status. For a custom object, this field must be specified and should be the name of the picklist field that determines the steps in the path. This field is not updateable. |
| masterLabel | string | Required. The label of the path. |
| pathAssistantSteps | PathAssistantStep[] | List of all the steps that have been configured with fields and guidance information. Note that a missing step in the .xml file means it has not been configured, not that it doesn’t exist. |
| recordTypeName | string | Required. The name of the record type associated with the path. This field is not updateable. |

## PathAssistantStep

Represents the steps or stages in a Path.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fieldNames | string | All the fields in entityName that will display in this step. |
| info | string | The guidance information displayed in this step. |
| picklistValueName | string | Required. The picklist value associated with the step. |

## Declarative Metadata Sample Definition

The following is an example of a PathAssistant component.

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
<PathAssistant xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <entityName>Opportunity</entityName>
    <fieldName>StageName</fieldName>
    <masterLabel>Test Path</masterLabel>
    <pathAssistantSteps>
        <fieldNames>Amount</fieldNames>
        <fieldNames>CloseDate</fieldNames>
        <info>Some Text</info>
        <picklistValueName>Id. Decision Makers</picklistValueName>
    </pathAssistantSteps>
    <pathAssistantSteps>
        <fieldNames>Amount</fieldNames>
        <fieldNames>CloseDate</fieldNames>
        <info>Some Text</info>
        <picklistValueName>Proposal/Price Quote</picklistValueName>
    </pathAssistantSteps>
    <recordTypeName>Test_Record_Type</recordTypeName>
</PathAssistant>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
        <members>Opportunity.Test_Busines_Process</members>
        <name>BusinessProcess</name>
    </types>
    <types>
        <members>Opportunity.StageName</members>
        <members>Lead.LeadSource</members>
        <members>Opportunity.Type</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>Test_Path</members>
        <name>PathAssistant</name>
    </types>
    <types>
        <members>Opportunity.Test_Record_Type</members>
        <name>RecordType</name>
    </types>
    <types>
        <members>PathAssistant</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
