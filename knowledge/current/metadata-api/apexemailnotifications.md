---
title: "ApexEmailNotifications"
domain: metadata-api
topic: apexemailnotifications
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.544Z
keywords: [ApexEmailNotifications, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, ApexEmailNotification, Note, Usage, Sample, Definition, Wildcard, Support, Manifest]
---

# ApexEmailNotifications

# ApexEmailNotifications

The ApexEmailNotifications type allows you to define users and email addresses that receive email for unhandled Apex errors. Flow errors can also use this metadata type.

## Declarative Metadata File Suffix and Directory Location

The component filename is apexEmailNotifications.notifications. The Apex email notification file is stored in the apexEmailNotifications folder in the corresponding package directory.

## Version

ApexEmailNotifications components are available in API version 49.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| apexEmailNotification | ApexEmailNotification | A specific Apex email notification. You can specify multiple notifications. |

## ApexEmailNotification

Represents an Apex email notification.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Each ApexEmailNotification can contain an email or a user but not both.

| Field Name | Field Type | Description |
| --- | --- | --- |
| email | string | The external email address to which the notification is sent. Mutually exclusive with the user field. |
| user | string | The username of the Salesforce user to be notified. Mutually exclusive with the email field. |

## Usage

Deploying ApexEmailNotifications deletes all previous notifications in the org. For example, consider two notifications, test1@example.com and test2@example.com, that are deployed in an org. When the following apexEmailNotifications.notifications is deployed, test1@example.com is deleted, because it's not in the deployed list.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The ApexEmailNotifications metadata type isn't supported in destructiveChanges.xml. To delete specific ApexEmailNotification items, deploy a new ApexEmailNotifications without those items. To delete all Apex email notifications in an org, deploy an empty list of ApexEmailNotifications.

## Declarative Metadata Sample Definition

To deploy Apex email notifications, you can specify either the exact file name or use a wildcard in package.xml.

This example specifies the exact file name in package.xml.

```

```

This example uses a wildcard in package.xml.

```

```

This sample deploys an Apex email notification that notifies a Salesforce user in the org.

```

```

This sample deploys an Apex email notification that notifies an external email address.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").