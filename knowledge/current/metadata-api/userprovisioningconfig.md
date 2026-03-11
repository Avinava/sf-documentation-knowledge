---
title: "UserProvisioningConfig"
domain: metadata-api
topic: userprovisioningconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.089Z
keywords: [UserProvisioningConfig, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# UserProvisioningConfig

# UserProvisioningConfig

Represents information to use during a user provisioning request flow, such as the attributes for an update. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

UserProvisioningConfig components have the suffix .userProvisioningConfig and are stored in the UserProvisioningConfigs directory.

## Version

UserProvisioningConfig components are available in API version 49.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| approvalRequired | string | Indicates whether approvals are required for provisioning users for the associated connected app. If the value is null, no approval is required. |
| connectedApp | string | The ID of the connected app for which users are being provisioned. |
| enabled | boolean | Indicates whether user provisioning is enabled for the associated connected app (true) or not (false). Default setting is false. |
| enabledOperations | string | Lists the operations, as comma-separated values, that create a user provisioning request for the associated connected app. Allowed values are:CreateUpdateEnableAndDisable (activation and deactivation)SuspendAndRestore (freeze and unfreeze) |
| flow | string | User Provisioning flow type which includes a reference to the Apex UserProvisioningPlugin class. The flow calls the third-party service’s API to manage user account provisioning on that system. |
| masterLabel | string | The primary label for this object. This value is the internal label that doesn’t get translated. |
| namedCredential | string | The Salesforce ID of the named credential that’s used for a request. The named credential identifies the third-party system and the third-party authentication settings. |
| notes | string | Serves as a place for admins to add any additional information about the configuration. This field is for internal reference only, and is not used by any process. |
| onUpdateAttributes | string | Lists the user attributes, as comma-separated values, that generate a user provisioning request during an update. |
| reconFilter | string | When collecting and analyzing users on a third-party system, the plug-in uses this filter to limit the scope of the collection. |
| userAccountMapping | string | Stores the attributes used to link the Salesforce user to the account on the third-party system, in JSON format. For example:{"linkingSalesforceUserAttribute":"Username",  "linkingTargetUserAttribute":"Email"} |

## Declarative Metadata Sample Definition

The following is an example of a UserProvisioningConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").