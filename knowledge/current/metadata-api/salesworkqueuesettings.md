---
title: "SalesWorkQueueSettings"
domain: metadata-api
topic: salesworkqueuesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.958Z
estimatedTokens: 690
keywords: [SalesWorkQueueSettings, settings, customize, work, queue, options, third-party, scoring, Sales, Engagement, add, custom, number, person, accounts]
---

# SalesWorkQueueSettings

> Represents settings used to customize work queue options for third-party
      scoring. In Sales Engagement, you can add a custom number field on person accounts,
      contacts, or leads. Then, use the custom number field to sort the work queue.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# SalesWorkQueueSettings

Represents settings used to customize work queue options for third-party scoring. In Sales Engagement, you can add a custom number field on person accounts, contacts, or leads. Then, use the custom number field to sort the work queue. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SalesWorkQueueSettings components have the suffix .salesworkqueuesetting and are stored in the salesworkqueuesettings folder.

## Version

SalesWorkQueueSettings components are available in API version 49.0 and later.

## Special Access Rules

You must be a Sales Engagement customer to access this metadata type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| featureName | string | The feature that the SalesWorkQueueSettings record is configuring. The allowed value is ThirdPartyScore. |
| targetEntity | string | The type that the SalesWorkQueueSettings record is configuring. Possible values are:ContactLeadPersonAccount |
| targetField | string | The developer name or ID of the custom number field that is used to sort the work queue. Custom fields must have a custom number data type.To use Einstein Intelligence Score for lead scoring, use ScoreIntelligence.Score for the developer name.To remove custom number fields from the work queue, use None. |

## Declarative Metadata Sample Definition

The following is an example of a SalesWorkQueueSettings component. The value for targetField is set to 00NRM000001g55D as an example of a custom field ID. Replace this value with the ID of your custom field.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

Create one SalesWorkQueueSettings record for each type. For example, suppose that you want to create a work queue to sort leads by your custom field called customLeadScore. Create a SalesWorkQueueSettings record and set featureName to ThirdPartyScore, targetEntity to Lead, and targetField to customLeadScore.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SalesWorkQueueSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <featureName>ThirdPartyScore</featureName>
    <targetEntity>Contact</targetEntity>
    <targetField>00NRM000001g55D</targetField>
</SalesWorkQueueSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>SalesWorkQueueSettings</name>
    </types>
    <version>49.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
