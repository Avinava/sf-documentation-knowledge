---
title: "ContentTypeBundle"
domain: metadata-api
topic: contenttypebundle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.268Z
keywords: [ContentTypeBundle, Important, Parent, Type, Structure, Directory, Location, Version, Special, Access, Rules, Fields, ContentTypeBundleResource, Declarative, Metadata, Sample, Definition, Usage, Wildcard, Support]
---

# ContentTypeBundle

# ContentTypeBundle

Represents the definition of enhanced custom content types for use with enhanced CMS workspaces. When you create an enhanced custom content type, deploy this bundle to your org. Enhanced custom content types are displayed as forms with defined fields. When deployed, enhanced custom content types are available for use with enhanced LWR site channels. To use enhanced custom content types with Aura and non-enhanced LWR site channels, use enhanced CMS workspaces resources.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") type and inherits its fullName field.

## ContentTypeBundle Structure and Directory Location

ContentTypeBundle components are stored in the contentTypes folder. Here’s an example of how the folder is structured.

```

```

-   The contentTypes folder (1) contains a folder for each enhanced custom content type.
-   Each enhanced custom content type folder is named in the format contentTypeName. In this example (2), the name is bbHost.
-   Each contentTypeName folder contains a JSON file, schema.json (3), that defines the enhanced custom content type. The JSON file contains a title and one or more Lightning property types. Use this file to edit the properties of the enhanced custom content type on your local machine or scratch org and then deploy it.

## Version

ContentTypeBundle components are available in version 64.0 and later.

## Special Access Rules

ContentTypeBundle is available only when Salesforce CMS and digital experiences are enabled for your org.

## Fields

| Name | Description |
| --- | --- |
| description | TypestringDescriptionExplanatory text about the content type. |
| masterLabel | TypestringDescriptionRequired.A name for ContentTypeBundle, which is defined when the ContentTypeBundle is created. |
| resources | TypeContentTypeBundleResource[]DescriptionA list of source files in the ContentTypeBundle folder. |

## ContentTypeBundleResource

Represents the resource file inside the ContentTypeBundle.

| Name | Description |
| --- | --- |
| fileName | TypestringDescriptionRequired.The name of the resource file. |
| filePath | TypestringDescriptionRequired.The path to the resource. |
| source | Typebase64BinaryDescriptionRequired.The content of the resource. |

## Declarative Metadata Sample Definition

This package.xml retrieves all of the ContentTypeBundle components in an org.

```

```

In the retrieved .zip file, each enhanced custom content type is nested under a contentTypes folder.

This example shows the directory structure in the .zip file of an enhanced custom content type. The enhaced custom content type is named bbHost and in this example it represents the profile of a bed and breakfast host.

```

```

Here are the example contents of the schema.json file in the contentTypes directory. The bbHost is a complex type that includes subproperties for fullName, aboutMe, interests, profilePicture, dateOfBirth, lastModified, personalWebsite, hostIdentityVerified, hostingExperienceInYears, rating, residenceCountry, and preferredModeOfContact. Each subproperty is a primitive type. The subproperty types included in the schema.json file are completely configurable and must include a lightning:type for each property.

{ "title": "Bed & Breakfast Host", "description": "Schema for capturing B&B host details", "lightning:type": "lightning\_\_objectType", "lightning:mixinTypes": { "sfdc\_cms:metadataContent": {} }, "properties": { "fullName": { "title": "Full Name", "lightning:type": "lightning\_\_textType", "lightning:textIndexed": true, "minLength": 5, "maxLength": 50, "lightning:uiOptions": { "placeholderText": "Enter your full name (e.g., John Doe)" }, "lightning:localizable": false }, "aboutMe": { "title": "About Me", "lightning:type": "lightning\_\_richTextType", "minLength": 10, "maxLength": 3000, "lightning:textIndexed": false, "lightning:uiOptions": { "placeholderText": "Write something about yourself" }, "lightning:localizable": true }, "interests": { "title": "Interests and Hobbies", "lightning:type": "lightning\_\_multilineTextType", "lightning:textIndexed": true, "minLength": 10, "maxLength": 500, "lightning:uiOptions": { "placeholderText": "Summarize your interests and hobbies in a few lines" }, "lightning:localizable": true }, "profilePicture": { "title": "Profile Picture", "lightning:type": "lightning\_\_imageType", "lightning:uiOptions": { "placeholderText": "Upload a professional headshot" }, "lightning:localizable": false }, "dateOfBirth": { "title": "Date of Birth", "lightning:type": "lightning\_\_dateType", "lightning:localizable": true, "lightning:uiOptions": { "placeholderText": "Select your date of birth" } }, "lastModified": { "title": "Last Profile Update", "lightning:type": "lightning\_\_dateTimeType", "lightning:localizable": false, "lightning:uiOptions": { "placeholderText": "Auto-filled on profile update" } }, "personalWebsite": { "title": "Personal Website", "lightning:type": "lightning\_\_urlType", "lightning:localizable": false, "lightning:uiOptions": { "placeholderText": "https://yourwebsite.com" } }, "hostIdentityVerified": { "title": "Host Identity Verified", "lightning:type": "lightning\_\_booleanType", "lightning:uiOptions": { "placeholderText": "Check if host identity is verified" } }, "hostingExperienceInYears": { "title": "Years of Experience hosting B&B", "lightning:type": "lightning\_\_integerType", "minimum": 0, "maximum": 50, "lightning:localizable": false, "lightning:uiOptions": { "placeholderText": "Enter total years of experience being a B&B host" } }, "rating": { "title": "Rating", "lightning:type": "lightning\_\_numberType", "minimum": 0.0, "maximum": 5.0, "lightning:localizable": false, "lightning:uiOptions": { "placeholderText": "e.g., 4.5" } }, "residenceCountry": { "title": "Country of Residence", "lightning:type": "lightning\_\_textType", "const": \["India"\] }, "preferredModeOfContact": { "title": "Preferred Mode of Contact", "lightning:type": "lightning\_\_textType", "enum": \["email", "SMS", "phone"\], "lightning:uiOptions": { "placeholderText": "Choose your preferred mode of contact" } } }, "required": \["fullName", "hostIdentityVerified"\]

## Usage

For each custom content type that you create, you must also create a CMS content page created in the enhanced LWR, LWR, or Aura site that displays the content. Each content page serves as the detail page for all content of a single content type. See [Create Custom Site Pages with Experience Builder](https://help.salesforce.com/articleView?id=community_builder_create_page.htm&language=en_US).

To use enhanced custom content types with Aura and non-enhanced LWR site channels, use the enhanced CMS workspaces resources for [CMS Delivery Contents](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_cms_delivery_contents.htm) and [CMS Delivery Content](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_cms_delivery_content.htm).

## Wildcard Support in the Manifest

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving with the Zip](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.") .