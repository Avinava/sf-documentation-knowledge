---
title: "ServiceAISetupDefinition"
domain: metadata-api
topic: serviceaisetupdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.726Z
estimatedTokens: 592
keywords: [ServiceAISetupDefinition, Represents, settings, Einstein, Service, feature, such, Article, Recommendations., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location]
---

# ServiceAISetupDefinition

> Represents settings for an Einstein for Service
    feature such as Einstein Article Recommendations. This type extends the Metadata metadata type 
    and inherits its fullName field.

# ServiceAISetupDefinition

Represents settings for an Einstein for Service feature such as Einstein Article Recommendations. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ServiceAISetupDefinition components have the suffix .serviceAISetupDescription and are stored in the serviceAISetupDescriptions folder.

## Version

ServiceAISetupDefinition components are available in API version 51.0 and later.

## Special Access Rules

This type is available only when an org is configured to access the application in the appSourceType field. For example, if appSourceType is set to ARTICLE\_RECOMMENDATION, this type is available only if Einstein Article Recommendations is enabled in the org and the Main Services Agreement has been accepted.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| appSourceType | ApplicationSourceType (enumeration of type string) | Required. The target application for the configuration. Valid values are:REPLY_RECOMMENDATION—Einstein Reply RecommendationsARTICLE_RECOMMENDATION—Einstein Article RecommendationsUTTERANCE_RECOMMENDATION—Einstein Bot utterancesFAQ—Einstein Bot frequently asked questions |
| name | string | Required. A reference to the configuration. |
| setupStatus | ServiceAISetupDefStatus (enumeration of type string) | Required. The status of the configuration. Valid values are:FIELDS_SELECTEDTRAININGREADY_TO_ACTIVATESERVINGRETIREDARCHIVEDREADY_FOR_REVIEW |
| supportedLanguages | string | Required when appSourceType is ARTICLE_RECOMMENDATION. Language codes for selected and supported languages. |

## Declarative Metadata Sample Definition

Here’s an example of a ServiceAISetupDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ServiceAISetupDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <appSourceType>ARTICLE_RECOMMENDATION</appSourceType>
    <name>SA1601228426202</name>
    <setupStatus>ARCHIVED</setupStatus>
    <supportedLanguages>en,de,fr,it,es,pt,nl</supportedLanguages>
</ServiceAISetupDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ServiceAISetupDefinition</name>
    </types>
</Package>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
