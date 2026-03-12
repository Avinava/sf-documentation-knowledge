---
title: "Custom Metadata Types (CustomObject)"
domain: metadata-api
topic: custom-metadata-types-customobject
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:38.281Z
estimatedTokens: 1336
namespace: CustomMetadata
keywords: [Custom, Metadata, Types, CustomObject, Represents, metadata, associated, custom, type., File, Suffix, Directory, Location, Version, Special, Access, Rules, Note, Fields, Declarative]
---

# Custom Metadata Types (CustomObject)

> Represents the metadata associated with a
   custom metadata type.

**Namespace:** `CustomMetadata`

# Custom Metadata Types (CustomObject)

Represents the metadata associated with a custom metadata type.

For more information, see [Custom Metadata Types](https://help.salesforce.com/s/articleView?id=platform.custommetadatatypes_overview.htm&language=en_US "HTML (New Window)").

## File Suffix and Directory Location

A custom metadata type is defined as a custom object and is stored in the objects folder. Custom metadata types have a suffix of \_\_mdt (instead of \_\_c for custom objects). Custom metadata type field names have a suffix of \_\_c, like other custom fields. Custom metadata type field names must be dot-qualified with the name of the custom metadata type to which they belong.

Names of custom metadata types must be unique within their namespace. All custom metadata types belong to the CustomMetadata namespace and can optionally belong to a second namespace. In your organization, you can use custom metadata types with your namespace and also other organizations’ namespaces.

## Version

Custom metadata type components are available in API version 31.0 and later.

## Special Access Rules

To create custom metadata types, you must have the “Author Apex” permission. Apex code can create, read, and update (but not delete) custom metadata records, as long as the metadata is subscriber-controlled and visible from within the code's namespace. You can edit records in memory but not upsert or delete them. Apex code can deploy custom metadata records, but not via a DML operation. Moreover, DML operations aren’t allowed on custom metadata in the Partner or Enterprise APIs. Customers who install a managed custom metadata type can’t add new custom fields to it. With unpackaged metadata, both developer-controlled and subscriber-controlled access behave the same: like subscriber-controlled access. Refer to [Trust, but Verify: Apex Metadata API and Security](https://developer.salesforce.com/blogs/engineering/2017/06/apex-metadata-api-security.html) to learn more.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Audit fields (CreatedDate, CreatedBy, LastModifiedDate, LastModifiedBy, SystemModStamp) remain uneditable.

## Fields

Custom metadata types can contain the following CustomObject fields.

To make the fields on your custom metadata types unique and indexable, mark your fields as Unique and ExternalId.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | A description of the custom metadata type. This field can contain a maximum of 1,000 characters. |
| fields | CustomField[] | Represents one or more custom fields in the custom metadata type. |
| gender | Gender | Indicates the gender of the noun that represents the object. This field is used for languages where words need different treatment depending on their gender. |
| label | string | A label that represents the object throughout the Salesforce Setup user interface. Custom metadata types are visible only through the recently used objects list on the Lightning Platform Home Page and in the packaging user interface. |
| pluralLabel | string | The plural version of the label value. |
| startsWith | StartsWith (enumeration of type string) | Indicates whether the noun starts with a vowel, a consonant, or a special character. This field is used for languages where words need different treatment depending on their first character. |
| visibility | SetupObjectVisibility (enumeration of type string) | This field returns the visibility of a custom metadata type. The following values are valid:Public—If the custom setting or custom metadata type is packaged, it’s accessible to all subscribing organizations.Protected—If the custom object, custom setting, or custom metadata type is in a managed package, it’s accessible only to the developer org. Subscribing orgs can’t access it.PackageProtected—If the custom metadata type is PackageProtected, it’s only accessible by the custom Apex code in the package. Use this value to secure secrets such as API access keys and security tokens. Available in API version 47.0 and later.The default value is Public. |

## Declarative Metadata Sample Definition

In this example, Picklists R Us creates its Reusable Picklist custom metadata type by deploying a file in the objects folder, named ReusablePicklistOption\_\_mdt.object, with these contents.

```

```

This excerpt from a package.xml file shows the use of dot notation and the \_\_mdt suffix. If you’re using a namespace, for example picklist1234,​ the full name of ReusablePicklistOption\_\_mdt would be picklist1234​\_\_ReusablePicklistOption\_\_mdt.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

1.  [CustomMetadata](atlas.en-us.api_meta.meta/api_meta/meta_custommetadata.htm)
    Represents a record of a custom metadata type.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
   <fields>
      <fullName>AlphaSort__c</fullName>
      <defaultValue>false</defaultValue>
      <externalId>false</externalId>
      <label>Sorted Alphabetically</label>
      <type>Checkbox</type>
   </fields>
   <label>Reusable Picklist</label>
   <pluralLabel>Reusable Picklist</pluralLabel>
   <visibility>Public</visibility>
</CustomObject>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
...
   <types>
      <members>PicklistTest__c.PicklistTestField__c</members>
      <members>ReusablePicklistOption__mdt.Picklist__c</members>
      <members>ReusablePicklistOption__mdt.SortOrder__c</members>
      <members>PicklistUsage__mdt.Field__c</members>
      <members>PicklistUsage__mdt.Picklist__c</members>
      <members>PicklistUsage__mdt.SObjectType__c</members>
      <members>ReusablePicklist__mdt.AlphaSort__c</members>
      <name>CustomField</name>
   </types>
...
   <types>
      <members>PicklistTest__c</members>
      <members>ReusablePicklistOption__mdt</members>
      <members>PicklistUsage__mdt</members>
      <members>ReusablePicklist__mdt</members>
      <name>CustomObject</name>
   </types>
...
   <version>66.0</version>
</Package>
```

## Related Topics

- CustomField[] (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- CustomMetadata (atlas.en-us.api_meta.meta/api_meta/meta_custommetadata.htm)
