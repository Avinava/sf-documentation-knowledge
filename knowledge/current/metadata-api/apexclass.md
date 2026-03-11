---
title: "ApexClass"
domain: metadata-api
topic: apexclass
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:51.123Z
keywords: [ApexClass, Note, Supported, Calls, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, PackageVersion, Sample, Definition, Wildcard, Support, Manifest, See]
---

# ApexClass

# ApexClass

Represents an Apex class. An Apex class is a template or blueprint from which Apex objects are created. Classes consist of other classes, user-defined methods, variables, exception types, and static initialization code.

For more information, see the [Lightning Platform Apex Code Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "html (New Window)"). This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

By default, you can’t deploy updates to an Apex class if there are one or more active jobs for that class. To deploy updates in this case, do one of the following.

-   Cancel Apex jobs before deploying changes to Apex code. Reschedule the jobs after the deployment.
-   Enable deployments with Apex jobs in the Salesforce user interface in the Deployment Settings page.

## Supported Calls

All Metadata API calls except [CRUD-Based Calls](atlas.en-us.api_meta.meta/api_meta/meta_crud_based_calls_intro.htm "Use CRUD-based calls to work with metadata components in a manner similar to how synchronous API calls in the enterprise WSDL act upon objects."), which prevents deployment outside of proper deployment lifecycle and test-execution constraints.

## Declarative Metadata File Suffix and Directory Location

The file suffix is .cls for the class file. The accompanying metadata file is named ClassName.cls-meta.xml.

Apex classes are stored in the classes folder in the corresponding package directory.

## Version

Apex classes are available in API version 10.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| apiVersion | double | The API version for this class. Every class has an API version specified at creation. |
| content | base64 | The Apex class definition. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| fullName | string | The Apex class name. The name can only contain characters, letters, and the underscore (_) character, must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters. This field is inherited from the Metadata component. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that are referenced by this Apex class.For more information about managed packages, see Second-Generation Managed Packages in the Salesforce DX Developer Guide. This field is available in API version 16.0 and later. |
| status | ApexCodeUnitStatus (enumeration of type string) | The status of the Apex class. The following string values are valid:Active - The class is active.Deleted - The class is marked for deletion. This value is useful for managed packages, because it allows a class to be deleted when a managed package is updated.ApexCodeUnitStatus includes an Inactive option, but it’s only supported for ApexTrigger; it isn’t supported for ApexClass. |

## PackageVersion

PackageVersion identifies a version of a managed package. A package version is a number that identifies the set of components included in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every major release. The patchNumber is generated and updated only for a patch release. It’s available in API version 16.0 and later.

See [Set Package Versions for Apex Classes and Triggers](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_manpkgs_subscriber_version.htm "HTML (New Window)") in the Apex Developer Guide.

| Field Name | Field Type | Description |
| --- | --- | --- |
| namespace | string | Required. In a packaging context, a namespace prefix is a one to 15-character alphanumeric identifier that distinguishes your package and its contents from packages of other developers on AppExchange. Namespace prefixes are case-insensitive. For example, ABC and abc aren’t recognized as unique. Your namespace prefix must be globally unique across all Salesforce orgs.Salesforce automatically prepends your namespace prefix, followed by two underscores (“__”), to all unique component names in your Salesforce organization. A unique package component is one that requires a name that no other component has within Salesforce, such as custom objects, custom fields, custom links, s-controls, and validation rules. For more information about namespaces, see Create and Register Your Namespace in the Second-Generation Managed Packaging Developer Guide. |
| majorNumber | int | Required. The major number of the package version. A package version number has a majorNumber.minorNumber format. |
| minorNumber | int | Required. The minor number of the package version. A package version number has a majorNumber.minorNumber format. |

## Declarative Metadata Sample Definition

The following sample creates the MyhelloWorld.cls class, and the corresponding MyHelloWorld.cls-meta.xml metadata file.

MyHelloWorld.cls file:

```

```

MyHelloWorld.cls-meta.xml:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [ApexTrigger](atlas.en-us.api_meta.meta/api_meta/meta_triggers.htm "Represents an Apex trigger. A trigger is Apex code that executes before or after specific data manipulation language (DML) events occur, such as before object records are inserted into the database, or after records have been deleted.")