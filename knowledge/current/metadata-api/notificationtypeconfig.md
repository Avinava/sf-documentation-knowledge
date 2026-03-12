---
title: "NotificationTypeConfig"
domain: metadata-api
topic: notificationtypeconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.434Z
estimatedTokens: 889
keywords: [NotificationTypeConfig, Represents, metadata, associated, org-level, notification, settings, standard, custom, types., extends, Metadata, inherits, its, fullName, field., File, Suffix, Directory, Location]
---

# NotificationTypeConfig

> Represents the metadata associated with
            org-level notification settings for standard and custom notification types.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# NotificationTypeConfig

Represents the metadata associated with org-level notification settings for standard and custom notification types. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

NotificationTypeConfig components have the suffix .config and are stored in the notificationTypeConfig folder.

## Version

NotificationTypeConfig components are available in API version 48.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| notificationTypeSettings | NotificationTypeSettings[] | An array of delivery settings for an org’s notification types. |

## NotificationTypeSettings

Represents the delivery settings for a standard or custom notification type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| notificationType | string | Required. Specifies a notification type’s API name.For standard notification types, this is the predefined API name of the standard notification type. For custom notification types, this is the API name of the custom notification type. If a custom notification type was installed with a managed package, it includes the namespace prefix.Retrieve NotificationTypeConfig to see the API names of the notification types available in your org. |
| appSettings | AppSettings[] | An array of settings for the connected apps supported for a notification type. |
| notificationChannels | NotificationChannels | Defines the delivery channels for a notification type. |

## AppSettings

Represents the settings for the connected apps supported for a notification type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| connectedAppName | string | Required. Specifies the API name of a connected app. If a connected app was installed with a managed package, it includes the namespace prefix.Retrieve NotificationTypeConfig to see the API names of the connected apps supported for a notification type. |
| enabled | boolean | Indicates whether a connected app is enabled (true) or not (false) for the notification type. |

## NotificationChannels

Represents the settings for the delivery channels for a notification type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| desktopEnabled | boolean | Indicates whether desktop notifications are enabled (true) or not (false). |
| mobileEnabled | boolean | Indicates whether mobile notifications are enabled (true) or not (false). |
| slackEnabled | boolean | Indicates whether Slack notifications are enabled (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of a NotificationTypeConfig component.

```

```

The following is an example of a package manifest used to retrieve all the available notification settings for an organization, using a wildcard:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<NotificationTypeConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <notificationTypeSettings>
        <notificationType>chatter_mention</notificationType>
        <notificationChannels>
            <desktopEnabled>false</desktopEnabled>
            <mobileEnabled>true</mobileEnabled>
        </notificationChannels>
        <appSettings>
            <connectedAppName>Datawatch</connectedAppName>
            <enabled>false</enabled>
        </appSettings>
            <appSettings>
            <connectedAppName>package2__ConnectedApp2</connectedAppName>
            <enabled>true</enabled>
        </appSettings>
    </notificationTypeSettings>
   <notificationTypeSettings>
        <notificationType>namespace__Custom_Notification</notificationType>
        <notificationChannels>
            <desktopEnabled>true</desktopEnabled>
            <mobileEnabled>true</mobileEnabled>
        </notificationChannels>
        <appSettings>
            <connectedAppName>namespace__Connected_App</connectedAppName>
            <enabled>false</enabled>
        </appSettings>
        <appSettings>
            <connectedAppName>namespace2__ConnectedApp2</connectedAppName>
            <enabled>true</enabled>
        </appSettings>
    </notificationTypeSettings>
</NotificationTypeConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>NotificationTypeConfig</name>
    </types>
    <version>48.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
