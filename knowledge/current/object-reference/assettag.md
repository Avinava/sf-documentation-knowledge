---
title: "AssetTag"
domain: object-reference
topic: assettag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.065Z
estimatedTokens: 353
keywords: [AssetTag, Associates, word, short, phrase, Asset, Calls, Usage]
---

# AssetTag

> Associates a word or short phrase with an Asset.

# AssetTag

Associates a word or short phrase with an Asset.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| ItemId | TypereferencePropertiesCreate, FilterDescriptionID of the tagged item. |
| Name | TypestringPropertiesCreate, FilterDescriptionName of the tag. If this value does not already exist, a new TagDefinition is created and becomes the parent of this Tag object. Otherwise, a TagDefinition with the same name becomes the parent of this Tag object. Parent relationships are created automatically. |
| TagDefinitionId | TypereferencePropertiesFilterDescriptionID of the parent TagDefinition object that owns the tag. |
| Type | TypepicklistPropertiesCreate, Filter, Restricted picklistDescriptionDefines the visibility of a tag.Valid values:Public—The tag can be viewed and manipulated by all users in an organization.Personal—The tag can be viewed or manipulated only by a user with a matching OwnerId. |

## Usage

AssetTag stores the relationship between its parent TagDefinition and the Asset being tagged. Tag objects act as metadata, allowing users to describe and organize their data.

When a tag is deleted, its parent TagDefinition will also be deleted if the name is not being used; otherwise, the parent remains. Deleting a TagDefinition sends it to the Recycle Bin, along with any associated tag entries.
