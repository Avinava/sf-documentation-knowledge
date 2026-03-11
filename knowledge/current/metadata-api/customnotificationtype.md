---
title: "CustomNotificationType"
domain: metadata-api
topic: customnotificationtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.555Z
keywords: [CustomNotificationType, Important, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, CustomNotificationActionGroup, Beta, CustomNotificationActionDefinition, Sample, Definition, Wildcard, Support, Manifest]
---

# CustomNotificationType

# CustomNotificationType

Represents the metadata associated with a custom notification type.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

For more information about custom notifications, see Custom Notification Actions. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Declarative Metadata File Suffix and Directory Location

The file suffix is .notiftype for the notification type definition. Notification types are stored in the notificationtypes directory of the corresponding package directory.

## Version

CustomNotificationType components are available in API version 46.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionGroups (Beta) | CustomNotificationActionGroup[] | Optional. Indicates whether mobile action groups are enabled, allowing users to take actions directly from mobile notifications.actionGroups is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| customNotifTypeName | string | Required. Specifies a notification type name. Maximum number of characters: 80. |
| description | string | Specifies a general description of the notification type, which is displayed with the notification type name. Maximum number of characters: 255. |
| desktop | boolean | Required. Indicates whether the desktop delivery channel is enabled (true) or not (false). |
| masterLabel | string | Required. Specifies the label for the notification type. |
| mobile | boolean | Required. Indicates whether the mobile delivery channel is enabled (true) or not (false). |
| slack | boolean | Reserved for future use. |

## CustomNotificationActionGroup (Beta)

CustomNotificationActionGroup represents the action group.

CustomNotificationActionGroup is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

| Field Name | Description |
| --- | --- |
| actions | Field TypeCustomNotificationActionDefinition[]DescriptionRepresents the actions within a mobile action group. |
| groupName | Field TypestringDescriptionRequired.Unique name of the mobile action group. |

## CustomNotificationActionDefinition

CustomNotificationActionDefinition represents the metadata that define an actionable notification.

CustomNotificationActionDefinition is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

| Field Name | Description |
| --- | --- |
| actionLabel | Field TypestringDescriptionRequired.The name of the action seen in the push notification. |
| actionName | Field TypestringDescriptionRequired.Unique identifier of the action in an action group. |
| actionTarget | Field TypestringDescriptionThe name of the Apex class where the action is implemented. |
| actionType | Field TypeNotificationActionType (enumeration of type string)DescriptionType of action.Required.Values are:NotificationApiAction: Server-side action where client needs to make action API call.Share: Client-side action where the app shares notification content to any channel. |

## Declarative Metadata Sample Definition

The following is a definition of a custom notification type that is enabled for desktop and mobile.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").