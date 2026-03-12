---
title: "PresenceDeclineReason"
domain: metadata-api
topic: presencedeclinereason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.282Z
estimatedTokens: 401
keywords: [PresenceDeclineReason, Omni-Channel, decline, reason, agents, select, declining, work, requests, extends, Metadata, inherits, fullName, File, Suffix]
---

# PresenceDeclineReason

> Represents an Omni-Channel decline reason that
      agents can select when declining work requests.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# PresenceDeclineReason

Represents an Omni-Channel decline reason that agents can select when declining work requests. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PresenceDeclineReason components have the suffix .presenceDeclineReason and are stored in the presenceDeclineReasons folder.

## Version

PresenceDeclineReason components are available in API version 44.0 and later.

## Special Access Rules

This type is available only if Omni-Channel is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| label | string | The label for the decline reason. |

## Declarative Metadata Sample Definition

The following is an example of a PresenceDeclineReason component.

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
<PresenceDeclineReason xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Incorrect queue</label>
</PresenceDeclineReason>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PresenceDeclineReason</name>
    </types>
    <version>44.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
