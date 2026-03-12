---
title: "PresenceUserConfig"
domain: metadata-api
topic: presenceuserconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.293Z
estimatedTokens: 1491
keywords: [PresenceUserConfig, configuration, determines, presence, user’s, settings, File, Suffix, Directory, Location, Version, Special, Access, Rules, PresenceConfigAssignments]
---

# PresenceUserConfig

> Represents a configuration that determines a presence
      user’s settings.

# PresenceUserConfig

Represents a configuration that determines a presence user’s settings.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PresenceUserConfig components have the suffix .presenceUserConfig and are stored in the presenceUserConfigs folder.

## Version

PresenceUserConfig components are available in API version 44.0 and later.

## Special Access Rules

This type is available only if Omni-Channel is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| acwExtensionDuration | int | The maximum length of time, measured in seconds, an agent can spend on After Conversation Work (ACW) each time they extend the timer. You must set this field if hasAcwExtensionEnabled is set to true. Specify a value from 10 through 3600. Available in API version 65.0 and later. |
| afterConvoWorkMaxTime | int | The maximum length of time, measured in seconds, an agent has to complete After Conversation Work (ACW). You must set this field if hasAfterConvoWorkTimer is set to true. Specify a value from 10 through 3600. Available in API version 65.0 and later. |
| assignments | PresenceConfigAssignments | Specifies how presence configurations are assigned to Omni-Channel users. Presence configurations can be assigned to sets of users or to sets of profiles. |
| capacity | int | Required. The maximum number of work units an agent can be assigned at one time. |
| declineReasons | string | Specifies the list of decline reasons that an agent can select when they decline a work. |
| enableAutoAccept | boolean | Indicates whether work items that are routed to agents are automatically accepted (true) or not (false). Available only if enableDecline is set to false. |
| enableDecline | boolean | Indicates whether agents can decline work items that are routed to them (true) or not (false). Available only if enableAutoAccept is set to false. |
| enableDeclineReason | boolean | Indicates whether agents can select a reason for declining work requests (true) or not (false). This can be selected only if decline reasons are enabled. |
| enableDisconnectSound | boolean | Indicates whether a sound is played when agents are disconnected from Omni-Channel (true) or not (false). |
| enableRequestSound | boolean | Indicates whether a sound plays with incoming work requests (true) or not (false). Set to true by default. |
| hasAcwExtensionEnabled | boolean | If set to true, agents can extend their After Conversation Work (ACW) time. Available only if hasAfterConvoWorkTimer is set to true. If set to true, you must also set the acwExtensionDuration and maxExtensions fields. The default value is falseAvailable in API version 65.0 and later.. |
| hasAfterConvoWorkTimer | boolean | If set to true, After Conversation Work (ACW) time can be configured for the user. If set to true, you must also set the afterConvoWorkMaxTime field. The default value is falseAvailable in API version 65.0 and later.. |
| interruptibleCapacity | int | Indicates the maximum number of work units using interruptible capacity that can be pushed to an agent at a time. An empty value defaults this field to the value set in the capacity field. Available in API version 57.0 and later when the Interruptible Capacity feature is enabled. |
|  |  |  |
| label | string | The label of the presence configuration. |
| maxExtensions | string | The maximum number of times an agent can extend their After Work Conversation (ACW) time. Specify a value from 1 through 10. You must set this field if hasAcwExtensionEnabled is set to true. Available in API version 65.0 and later. |
| presenceStatusOnDecline | string | The presence status that’s automatically assigned to the agent when the agent declines a work item. Available only if enableDecline is set to true. |
| presenceStatusOnPushTimeout | string | The presence status that’s automatically assigned to the agent when the agent doesn’t respond to a work item before push timeout occurs. |

## PresenceConfigAssignments

Represents the assignments of an org’s profiles and users to a Presence configuration.

| Field Name | Field Type | Description |
| --- | --- | --- |
| profiles | PresenceConfigProfileAssignments | Specifies the profiles that are associated with a specific presence configuration. |
| users | PresenceConfigUserAssignments | Specifies the users that are associated with a specific presence configuration. |

## PresenceConfigProfileAssignments

Represents the profiles associated with a specific presence configuration.

| Field Name | Field Type | Description |
| --- | --- | --- |
| profile | string | Specifies the name of the profile associated with a specific presence configuration. |

## PresenceConfigUserAssignments

Represents the users associated with a specific presence configuration.

| Field Name | Field Type | Description |
| --- | --- | --- |
| user | string | Specifies the username of the user associated with a specific presence configuration. |

## Declarative Metadata Sample Definition

The following is an example of a PresenceUserConfig component.

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
<PresenceUserConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <assignments>
        <profiles>
            <profile>standard</profile>
        </profiles>
        <users>
            <user>jdoe@example.com</user>
        </users>
    </assignments>
    <capacity>5</capacity>
    <declineReasons>Incorrect_queue</declineReasons>
    <enableAutoAccept>false</enableAutoAccept>
    <enableDecline>true</enableDecline>
    <enableDeclineReason>true</enableDeclineReason>
    <enableDisconnectSound>true</enableDisconnectSound>
    <enableRequestSound>true</enableRequestSound>
    <label>My presence configuration</label>
    <presenceStatusOnDecline>Away</presenceStatusOnDecline>
    <presenceStatusOnPushTimeout>Break</presenceStatusOnPushTimeout>
</PresenceUserConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PresenceUserConfig</name>
    </types>
    <version>44.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
