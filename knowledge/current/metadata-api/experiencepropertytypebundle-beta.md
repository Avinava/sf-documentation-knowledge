---
title: "ExperiencePropertyTypeBundle (Beta)"
domain: metadata-api
topic: experiencepropertytypebundle-beta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.490Z
estimatedTokens: 1447
keywords: [ExperiencePropertyTypeBundle, Beta, Represents, type., Replaced, Spring, ’26, updated, LightningPropertyType., create, custom, Lightning, web, component, LightningPropertyType, instead, deploy, bundle, org., Note]
---

# ExperiencePropertyTypeBundle (Beta)

> Represents a property type. Replaced in Spring ’26 by the updated LightningPropertyType.
		When you create a custom property type for a Lightning web component, use
		LightningPropertyType instead, and deploy that bundle to your org.

# ExperiencePropertyTypeBundle (Beta)

Represents a property type. Replaced in Spring ’26 by the updated LightningPropertyType. When you create a custom property type for a Lightning web component, use LightningPropertyType instead, and deploy that bundle to your org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

To create a custom property type, see [LightningPropertyType](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_lightningtypebundle.htm).

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Structure and Directory Location

ExperiencePropertyTypeBundle components are stored in the experiencePropertyTypeBundles folder. Here’s an example of how the folder is structured.

```

```

-   In the experiencePropertyTypeBundles folder (1) is a folder for each custom property type.
-   Each custom property type folder is named in the format propertyTypeName. In this example (2), the name is addressProperty.
-   Each propertyTypeName folder contains a JSON file or files that define the property type.
    -   A schema.json file (3), which is a JSON schema that drives the property type validation
    -   An optional design.json file (4), which provides the user experience and property editor information for that property type

## Version

ExperiencePropertyTypeBundle components are available in API version 58.0 and later.

## Special Access Rules

The ExperiencePropertyTypeBundle metadata type is available only for use with Lightning web components on LWR sites.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionExplanatory text about the property type. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for ExperiencePropertyTypeBundle, which is defined when the ExperiencePropertyTypeBundle is created. |
| resources | Field TypeExperiencePropertyTypeBundleResource[]DescriptionA list of source files in the experiencePropertyTypeBundles folder. |

## ExperiencePropertyTypeBundleResource

Represents a resource inside ExperiencePropertyTypeBundle.

| Field Name | Description |
| --- | --- |
| fileName | Field TypestringDescriptionRequired. The file name of the resource. |
| filePath | Field TypestringDescriptionRequired. The file path of the resource. |
| source | Field Typebase64BinaryDescriptionRequired. The content of the resource. |

## Declarative Metadata Sample Definition

This package.xml file retrieves all the ExperiencePropertyTypeBundle components in an org.

```

```

In the retrieved .zip file, each property type is nested under an experiencePropertyTypeBundles folder.

This example shows the directory structure in the .zip file of a property type named addressProperty.

```

```

Here are the contents of the files in the addressProperty directory. The addressProperty is a complex type that includes subproperties for firstName, lastName, address, city, state, and postal code. Each subproperty is a primitive type.

Contents of schema.json:

{ "title": "Simple Address Type", "lightning:type": "lightning\_\_objectType", "properties": { "firstName": { "lightning:type": "lightning\_\_textType", "title": "First Name" }, "lastName": { "lightning:type": "lightning\_\_textType", "title": "Last Name" }, "address": { "lightning:type": "lightning\_\_textType", "title": "Address Line 1" }, "city": { "lightning:type": "lightning\_\_textType", "title": "City" }, "state": { "lightning:type": "lightning\_\_textType", "title": "State" }, "postalCode": { "lightning:type": "lightning\_\_numberType", "title": "Postal Code" } }, "required": \["firstName", "lastName"\] }

Contents of design.json (an optional file):

{ "definition": "lightning/tabsetLayout", "children": \[ { "definition": "lightning/tabLayout", “attributes”: { “label”: “First Tab” }, “children”: \[ { "definition": "lightning/propertyLayout", "attributes": { "property": "aProperty" } }, { "definition": "lightning/propertyLayout", "attributes": { "property": "bProperty" } }, \] }, { "definition": "lightning/tabLayout", “attributes”: { “label”: “Second Tab” }, “children”: \[ { "definition": "lightning/propertyLayout", "attributes": { "property": "cProperty" } }, \] }, \] }

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [*External Link*: Custom Property Types and Property Editors (Beta)](https://resources.docs.salesforce.com/rel1/doc/en-us/static/pdf/custom_property_types_and_editors.pdf)

## Code Examples

```
+--myMetadataPackage
    +--experiencePropertyTypeBundles (1)
        +--addressProperty (2)
            +--schema.json (3)
            +--design.json (4)
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ExperiencePropertyTypeBundle</name>
    </types>
    <version>58.0</version>
</Package>
```

```
experiencePropertyTypeBundles
    addressProperty
        schema.json
        design.json
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
