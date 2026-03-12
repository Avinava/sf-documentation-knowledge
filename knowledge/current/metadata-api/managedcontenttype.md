---
title: "ManagedContentType"
domain: metadata-api
topic: managedcontenttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:40.512Z
estimatedTokens: 1739
keywords: [ManagedContentType, definition, custom, content, Salesforce, CMS, forms, defined, File, Suffix, Directory, Location, Version, Special, Access]
---

# ManagedContentType

> Represents the definition of custom content types for use with Salesforce CMS. Custom
    content types are displayed as forms with defined fields.

# ManagedContentType

Represents the definition of custom content types for use with Salesforce CMS. Custom content types are displayed as forms with defined fields.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

ManagedContentType components have the suffix managedContentType and are stored in the managedContentTypes folder.

## Version

ManagedContentType components are available in API version 47.0 and later.

## Special Access Rules

ManagedContentType is only available if Salesforce CMS and digital experiences are enabled for your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | Describes the custom content type defined in this ManagedContentType declaration. |
| developerName | string | Required. Unique name for the custom content type. For example: OurSpecialContent_c |
| isMetadataContent | boolean | When true, any content created from this content type is converted to metadata. Default value is false. Availabe in API version 63.0 and later. |
| managedContentNodeTypes | ManagedContentNodeType[] | Nodes included as part of this custom content type. When rendered as a form in the Digital Experiences app, each node is represented as an individual field. |
| masterLabel | string | Required. Declares the name of the content type as it appears in the UI. |

## ManagedContentNodeType

Represents the structure of individual nodes within the custom content type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| helpText | string | Provides assistive text in the UI, displayed as an info bubble for the field. If this field is empty, no info bubble icon or text is displayed.For example: <IMG?> |
| isLocalizable | boolean | Declares a field as localizable and consumable by <loc MDAPI reference> (true) or not (false). Default is false.NoteNodeTypes IMG, URL, DATE, and DATETIME can’t be localized. |
| isRequired | boolean | Declares a field as required (true) or not (false). Fields declared as required are indicated by a red asterisk. If a value isn’t added to the field in the custom content type, the form can’t be saved and a standard error is displayed. Default is false.NoteWhen nodeType is set to NAMEFIELD on a field, isRequired must also be set to True for that field. |
| nodeLabel | string | Required. Declares the label for the field as it appears in the UI.In enhanced workspaces, the system generates a Title field by default. To prevent having multiple Title fields on the UI when you create a custom content type for use in an enhanced workspace, don't use Title as the label for nodeLabel. |
| nodeName | string | Required. Unique name of the nodeType within the content type. nodeName is a simple text field that allows up to 100 alphanumeric characters and underscores. The name must begin with a letter, not include spaces, can’t have two consecutive underscores, and can’t end with an underscore.In enhanced workspaces, the system generates a Title field by default. To prevent having multiple Title fields on the UI when you create a custom content type for use in an enhanced workspace, don't use Title as the label for nodeName. |
| nodeType | MCNodeType (enumeration of type string) | Required. Identifies the supported type of content in the node. Passed as a string. There’s a maximum of 15 node types per content type. Values are case insensitive but are returned in all capital letters as shown. Valid values are:TEXTSimple text node (max length=255 characters)MTEXTMulti-line text node (max length=2000 characters)RTERich text node (max length=65536 characters)IMGImage nodeNoteIMG node types can’t be localized. Set isLocalizable to false for images.URLURL node (max length=255 characters)NoteURL accepts protocol string values starting with http://, https://, mailto:, tel:, and /.NoteURL node types can’t be localized. Set isLocalizable to false for URLs.DATEDate nodeNoteDATE accepts dates only in the format yyyy-MM-dd.NoteDATE node types can’t be localized. Set isLocalizable to false for dates.DATETIMEDatetime nodeNoteDATETIME accepts date and time in the format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z' (UTC datetime in ISO 8601 format).NoteDATETIME node types can’t be localized. Set isLocalizable to false for datetime notes.NAMEFIELDNoteNAMEFIELD declares the field as the name that represents the content when referenced in the UI. For example, text entered in this field displays as a list of available content in the Digital Experiences app or as a piece of content available for inclusion in a collection in an Experience Cloud site.One, and only one, nodeType in your managed content type must be declared as NAMEFIELD. NAMEFIELD is a string of 200 characters or fewer.In enhanced workspaces, the system generates a Title field by default. To prevent having multiple Title fields on the UI when you create a custom content type for use in an enhanced workspace, don't use Title as the label for nodeName or nodeLabel for the NAMEFIELD node. If you've already named nodeName Title, choose a different label for nodeLabel to prevent confusion on the content creation page.When NAMEFIELD is used, isRequired must also be set to true for the field. |
| placeholderText | string | Provides assistive text in the UI, displayed as placeholder, or ghost text, in a field before any entry is made. For example, Enter a title for your article... |

## Declarative Metadata Sample Definition

The following is an example of a ManagedContentType component.

```

```

## Usage

For each custom content type you create, there must also be a CMS Content page created in any Experience Cloud site that displays the content. Each Content page serves as the detail page for all content of a single content type. See [Create Custom Pages with Experience Builder](https://help.salesforce.com/articleView?id=community_builder_create_page.htm&type=0&language=en_US).

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ManagedContentType xmlns="http://soap.sforce.com/2006/04/metadata">
  <developerName>myContentType</developerName>
	<masterLabel>My Content Type</masterLabel>
	<description>This is the description for my content type</description>
	<managedContentNodeTypes>
		<nodeName>title</nodeName>
		<nodeLabel>Content Title</nodeLabel>
		<nodeType>NAMEFIELD</nodeType>
		<placeholderText>Placeholder Text for title</placeholderText>
		<helpText>Help Text for title</helpText>
		<isLocalizable>true</isLocalizable>
		<isRequired>true</isRequired>
	</managedContentNodeTypes>
	<managedContentNodeTypes>
		<nodeName>textnode</nodeName>
		<nodeLabel>Content Text</nodeLabel>
		<nodeType>TEXT</nodeType>
		<placeholderText>Placeholder Text for Content Text</placeholderText>
		<helpText>Help Text for Content Text</helpText>
		<isLocalizable>true</isLocalizable>
		<isRequired>false</isRequired>
	</managedContentNodeTypes>
	<managedContentNodeTypes>
		<nodeName>richtextnode</nodeName>
		<nodeLabel>Content RichText</nodeLabel>
		<nodeType>RTE</nodeType>

	</managedContentNodeTypes>
	<managedContentNodeTypes>
		<nodeName>multilinetextnode</nodeName>
		<nodeLabel>Content MultilineText</nodeLabel>
		<nodeType>MTEXT</nodeType>
	</managedContentNodeTypes>
	<managedContentNodeTypes>
		<nodeName>imagenode</nodeName>
		<nodeLabel>Content Image</nodeLabel>
		<nodeType>IMG</nodeType>

	</managedContentNodeTypes>
</ManagedContentType>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
