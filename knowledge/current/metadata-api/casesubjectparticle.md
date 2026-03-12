---
title: "CaseSubjectParticle"
domain: metadata-api
topic: casesubjectparticle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.615Z
estimatedTokens: 432
keywords: [CaseSubjectParticle, Represents, Social, Business, Rules, custom, format, Case, Subject, field, cases, created, inbound, social, posts., File, Suffix, Directory, Location, Version]
---

# CaseSubjectParticle

> Represents the Social Business Rules custom
            format for the Case Subject field on cases created from inbound
            social posts.

# CaseSubjectParticle

Represents the Social Business Rules custom format for the **Case Subject** field on cases created from inbound social posts.

## File Suffix and Directory Location

CaseSubjectParticle components have the suffix .CaseSubjectParticle and are stored in the CaseSubjectParticles folder.

## Version

CaseSubjectParticle is available in API version 41.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| index | int | Required. The order in which the custom Case Subject is generated, meaning if the social network is 0 and the social message is 1, then the subject generates as Twitter \| Tweet. |
| textField | string | Specifies inbound social content added to Case Subject in case records. |
| type | CaseSubjectParticleType (enumeration of type string) | Required. Specifies the custom Case Subject format from which inbound social content appears in case records. Valid values are:ProvidedStringSourceMessageTypeSocialHandleSocialNetworkSentimentRealNameContentPipeSeparatorColonSeparatorHyphenSeparator |

## Declarative Metadata Sample Definition

This is a sample of a .CaseSubjectParticle file.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns=http://soap.sforce.com/2006/04/metadata"">
    <types>
        <members>*</members> 
        <name>CaseSubjectParticle</name>
    </types>
    <version>41.0</version>
</Package>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
