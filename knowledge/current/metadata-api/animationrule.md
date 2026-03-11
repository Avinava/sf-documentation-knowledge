---
title: "AnimationRule"
domain: metadata-api
topic: animationrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.539Z
keywords: [AnimationRule, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# AnimationRule

# AnimationRule

Represents criteria for determining when an animation is displayed to Path users.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

AnimationRule components have the suffix animationRule and are stored in the animationRules folder.

## Version

AnimationRule components are available in API version 46.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| animationFrequency | picklist | Required. The frequency with which an animation is displayed when a user selects the designated picklist values in a path. Valid values are:alwaysoftensometimesrarelyA value of always triggers an animation every time. The values often, sometimes, and rarely trigger an animation progressively less frequently. |
| developerName | string | Required. The developer name for the animation rule.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| isActive | boolean | Required. Indicates whether the animation rule is active (true) or not (false). |
| masterLabel | string | Required. The label for the animation rule. |
| recordTypeContext | picklist | Required. An enum to track whether this AnimationRule applies to all record types for the associated sObject, or only to a single or main record type. Valid values are All, Master, or Custom. |
| recordTypeName | reference | The record type selected for the sObject in which the animation is displayed. |
| sobjectType | string | The object on which the animation rule is run. |
| targetField | string | Required. Name of the field used to determine when to display an animation. |
| targetFieldChangeToValues | string | Required. Values used to determine when to display an animation. When a user selects a value in targetField that matches a value stored in targetFieldChangeToValues, the animation is displayed. |

## Declarative Metadata Sample Definition

The following is an example of an AnimationRule component.

```

```

The following is an example package.xml that references the AnimationRule component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").