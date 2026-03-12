---
title: "DeploymentSettings"
domain: metadata-api
topic: deploymentsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.439Z
estimatedTokens: 687
keywords: [DeploymentSettings, settings, affecting, how, deployments, behave, org, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location]
---

# DeploymentSettings

> Represents the settings affecting how deployments behave in
      the org.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# DeploymentSettings

Represents the settings affecting how deployments behave in the org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

DeploymentSettings values are stored in the Deployment.settings file in the settings directory. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

DeploymentSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |  |
| --- | --- | --- | --- |
| doesSkipAsyncApexValidation | boolean | Indicates whether deployments from this org skip asynchronous Apex validations (true) or not (false). The default value is true.Set this field to false when an Apex class in the package you’re deploying is used by an Apex batch job that could run during the deployment. The deployment of a package containing an Apex class that is used by a running batch job fails without validation. |  |

## Declarative Metadata Sample Definition

The following is an example of a DeploymentSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DeploymentSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <doesSkipAsyncApexValidation>true</doesSkipAsyncApexValidation>
</DeploymentSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>Deployment</members>
      <name>Settings</name>
   </types>
   <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
