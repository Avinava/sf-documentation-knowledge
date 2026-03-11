---
title: "TimelineObjectDefinition"
domain: metadata-api
topic: timelineobjectdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.870Z
keywords: [TimelineObjectDefinition, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# TimelineObjectDefinition

# TimelineObjectDefinition

Represents the container that stores the details of a timeline configuration. You can use this resource with Salesforce objects to see their records' related events in a linear time-sorted view.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

TimelineObjectDefinition components have the suffix .timelineObjectDefinition and are stored in the timelineObjectDefinitions folder.

## Version

TimelineObjectDefinition components are available in API version 55.0 and later.

## Special Access Rules

TimelineObjectDefinition is available in any org that has the Timeline org preference enabled.

## Fields

| Field Name | Description |
| --- | --- |
| baseObject | Field TypestringDescriptionRequired.The object on which a timeline is based. Information displayed in a timeline comes from objects that are related to the base object. The base object can be a Salesforce object or custom object. |
| definition | Field TypestringDescriptionRequired.The timeline definition in JSON format. |
| isActive | Field TypebooleanDescriptionIndicates whether the timeline is active (true) or not (false). |
| masterLabel | Field TypestringDescriptionRequired.The user interface label of the timeline object definition record. |

## Declarative Metadata Sample Definition

The following is an example of a TimelineObjectDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").