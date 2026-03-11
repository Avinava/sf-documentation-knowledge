---
title: "ConnectedAppSettings"
domain: metadata-api
topic: connectedappsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.249Z
keywords: [ConnectedAppSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition]
---

# ConnectedAppSettings

# ConnectedAppSettings

Represents settings for connected apps. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ConnectedAppSettings values are stored in a single file named ConnectedApp.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ConnectedAppSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAdminApprovedAppsOnly | boolean | If false (default), any connected app can call the Salesforce API. If true, only apps that have been approved or installed by the admin can call the Salesforce API. To access this field, you must contact Salesforce Customer Support to enable API Access Control. |
| enableAdminApprovedAppsOnlyForExternalUser | boolean | If false (default), authenticated customers or partners can use any unblocked connected app to access the Salesforce API. If true, authenticated customers and partners can’t access the Salesforce API unless they use a connected app that is installed in the org and unblocked. Install and unblock connected apps on the Connected Apps OAuth Usage page. To access this field, you must contact Salesforce Customer Support to enable API Access Control. |
| enableSkipUserProvisioningWizardWelcomePage | boolean | If false (default), the User Provisioning Wizard Welcome page shows up when you access the wizard. To skip the welcome page in the future, you can select Do not show me this next time. If true, the Welcome page doesn’t show up the next time that you access the wizard. |

## Declarative Metadata Sample Definition

The following is an example of a ConnectedAppSettings component.

```

```

The following is an example package.xml manifest that references the previous definition.

```

```