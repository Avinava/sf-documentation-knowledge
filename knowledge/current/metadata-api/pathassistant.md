---
title: "PathAssistant"
domain: metadata-api
topic: pathassistant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.899Z
keywords: [PathAssistant, Important, File, Suffix, Directory, Location, Version, Fields, PathAssistantStep, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# PathAssistant

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