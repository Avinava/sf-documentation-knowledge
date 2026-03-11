---
title: "Package"
domain: metadata-api
topic: package
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.876Z
keywords: [Package, PackageTypeMembers, Wildcard, Support, Manifest, File, See]
---

# Package

# Package

Specifies which metadata components to retrieve as part of a retrieve() call or defines a package of components.

| Name | Type | Description |
| --- | --- | --- |
| apiAccessLevel | APIAccessLevel (enumeration of type string) | Package components have access via dynamic Apex and the API to standard and custom objects in the organization where they’re installed. Administrators who install packages can restrict this access after installation for improved security. The valid values are:Unrestricted—Package components have the same API access to standard objects as the user who is logged in when the component sends a request to the API.Restricted—The administrator can select which standard objects the components can access. Further, the components in restricted packages can only access custom objects in the current package if the user's permissions allow access to them.For more information, see “API and Dynamic Apex Access in Packages” in Salesforce Help. |
| description | string | A short description of the package. |
| fullName | string | The package name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| namespacePrefix | string | The namespace of the developer organization where the package was created. |
| objectPermissions | ProfileObjectPermissions[] | Indicates which objects are accessible to the package, and the kind of access available (create, read, update, delete). |
| packageType | string | Reserved for future use. |
| postInstallClass | string | The name of the Apex class that specifies the actions to execute after the package has been installed or upgraded. The Apex class must be a member of the package and must implement the Apex InstallHandler interface. In patch upgrades, you can't change the class name in this field but you can change the contents of the Apex class. The class name can be changed in major upgrades.This field is available in API version 24.0 and later. |
| setupWeblink | string | The weblink used to describe package installation. |
| types | PackageTypeMembers[] | The type of component being retrieved. |
| uninstallClass | string | The name of the Apex class that specifies the actions to execute after the package has been uninstalled. The Apex class must be a member of the package and must implement the Apex UninstallHandler interface. In patch upgrades, you can't change the class name in this field but you can change the contents of the Apex class. The class name can be changed in major upgrades.This field is available in API version 25.0 and later. |
| version | string | Required. The version of the component type. |

## PackageTypeMembers

Use to specify the name and type of components to be retrieved in a package.

| Name | Type | Description |
| --- | --- | --- |
| members | string | One or more named components, or the wildcard character (*) to retrieve all metadata components of the type specified in the <name> element. To retrieve a standard object, specify it by name. For example, <members>Account</members> retrieves the standard Account object. |
| name | string | The type of metadata component to be retrieved. For example, <name>CustomObject</name> retrieves one or more custom objects as specified in the <members> element. |

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Sample package.xml Manifest Files](atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm "This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.")