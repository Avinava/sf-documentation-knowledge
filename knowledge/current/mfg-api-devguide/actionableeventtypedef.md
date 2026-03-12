---
title: "ActionableEventTypeDef"
domain: mfg-api-devguide
topic: actionableeventtypedef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.178Z
estimatedTokens: 441
keywords: [ActionableEventTypeDef, definition, actionable, event, records, migrated, org, another, Parent, File, Suffix, Directory, Location, Version, EventSubtype]
---

# ActionableEventTypeDef

> Represents the definition of an actionable event type so
			that the records can be migrated from one org to another.

# ActionableEventTypeDef

Represents the definition of an actionable event type so that the records can be migrated from one org to another.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActionableEventTypeDef components have the suffix .ActionableEventTypeDef and are stored in the ActionableEventTypeDef folder.

## Version

ActionableEventTypeDef components are available in API version 64.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| apiName | Field TypestringDescriptionRequired.The API name of an actionable event type definiton. |
| eventSubtypes | Field TypeEventSubtype[]DescriptionThe subtype of an actionable event. |
| label | Field TypestringDescriptionRequired.Label of the actionable event type definition. |

## EventSubtype

Represents the subtype of an external or internal event that's processed by the Actionable Event Orchestration framework to trigger different types of actions.

| Field Name | Description |
| --- | --- |
| apiName | Field TypestringDescriptionRequired.The API name of an actionable event subtype. |
| label | Field TypestringDescriptionRequired.Label of the event subtype that represents a specific kind of external or internal actionable event. |

## Declarative Metadata Sample Definition

The following is an example of an ActionableEventTypeDef component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ActionableEventTypeDef xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiName>Create_Registration_Records</apiName>
    <eventSubtypes>
        <apiName>Create_Registration_Records_SubType</apiName>
        <label>reate Registration Records Subtype</label>
    </eventSubtypes>
    <label>Create Registration Records</label>
</ActionableEventTypeDef>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ActionableEventTypeDef</name>
    </types>
<version>64.0</version>
</Package>
```
