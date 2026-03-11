---
title: "EnhancedNotesSettings"
domain: metadata-api
topic: enhancednotessettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.277Z
keywords: [EnhancedNotesSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Example, Package, Manifest]
---

# EnhancedNotesSettings

# EnhancedNotesSettings

Represents an org’s enhanced note settings, such as enabling enhanced notes and enabling tasks in enhanced notes.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EnhancedNotesSettings values are stored in the EnhancedNotes.settings file in the settings directory.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## Version

EnhancedNotesSettings is available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableEnhancedNotes | boolean | Indicates whether enhanced notes are enabled (true) or not (false). With enhanced notes, users can relate a note to multiple records, access version history, and enjoy enhanced format options. Users must have the Use New Notes permission to use enhanced notes.Default value is true. |
| enableTasksOnEnhancedNotes | boolean | Indicates whether users can create tasks from notes (true) or not (false). In the Salesforce app, users can create a task from a note by swiping a line on the note. Alternatively, they can tap in the toolbar to add or update the status of an action item. Users must have the Use New Notes permission to use enhanced notes.Default value is true. |

## Declarative Metadata Sample Definition

The following is an example of the EnhancedNotesSettings.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the EnhancedNotesSettings metadata:

```

```