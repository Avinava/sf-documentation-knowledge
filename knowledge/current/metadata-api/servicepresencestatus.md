---
title: "ServicePresenceStatus"
domain: metadata-api
topic: servicepresencestatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.136Z
estimatedTokens: 484
keywords: [ServicePresenceStatus, presence, status, assigned, service, channel, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# ServicePresenceStatus

> Represents a presence status that can be assigned
      to a service channel.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# ServicePresenceStatus

Represents a presence status that can be assigned to a service channel. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ServicePresenceStatus components have the suffix .servicePresenceStatus and are stored in the servicePresenceStatuses folder.

## Version

ServicePresenceStatus components are available in API version 44.0 and later.

## Special Access Rules

This type is available only if Omni-Channel is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| channels | ServiceChannelStatus | Represents the status that’s associated with a specific service channel. |
| label | string | The label of the presence status. |

## ServiceChannelStatus

Represents the status that’s associated with a specific service channel.

| Field Name | Field Type | Description |
| --- | --- | --- |
| channel | string | Represents the channels assigned to the presence status. |

## Declarative Metadata Sample Definition

The following is an example of a ServicePresenceStatus component.

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
<ServicePresenceStatus xmlns="http://soap.sforce.com/2006/04/metadata">
    <channels>
        <channel>Case</channel>
    </channels>
    <label>Available for Cases</label>
</ServicePresenceStatus>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ServicePresenceStatus</name>
    </types>
    <version>44.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
