---
title: "Metadata"
domain: metadata-api
topic: metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:43.258Z
estimatedTokens: 757
namespace: Account.FirstName
keywords: [Metadata, base, can’t, edit, component, instance, Version, Wildcard, Support, Manifest, File]
---

# Metadata

> The base class for all metadata types. You can’t edit this
      object. A component is an instance of a metadata type.

**Namespace:** `Account.FirstName`

# Metadata

The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.

Metadata is analogous to sObject, which represents all standard objects. Metadata represents all components and fields in the Metadata API. Instead of identifying each component with an ID, each custom object or custom field has a unique fullName, which must be distinct from standard object names, as it must be when you create custom objects or custom fields in the Salesforce user interface.

## Version

Metadata components are available in API version 10.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| fullName | string | Required. The name of the component. For components with parent objects, such as fields and list views, the name must specify the name of the parent, for example Account.FirstName. The __c suffix must be appended to custom object names and custom field names when you’re setting the fullName. For example, a custom field in a custom object could have a fullName of MyCustomObject__c.MyCustomField__c.To reference a component in a package, prepend the package’s namespace prefix to the component name in the fullName field. Use the following syntax: namespacePrefix__ComponentName. For example, for the custom field component MyCustomObject__c.MyCustomField__c and the namespace MyNS, the full name is MyNS__MyCustomObject__c.MyCustomField__c.A namespace prefix is a 1-character to 15-character alphanumeric identifier that distinguishes your package and its contents from other publishers’ packages. For more information, see Create and Register Your Namespace for Second-Generation Managed Packages. |

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")

-   [CustomField](atlas.en-us.api_meta.meta/api_meta/customfield.htm "Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects.")

-   [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.")

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
- CustomField (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
