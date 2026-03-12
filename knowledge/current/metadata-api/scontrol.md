---
title: "Scontrol"
domain: metadata-api
topic: scontrol
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.005Z
estimatedTokens: 1281
keywords: [Scontrol, Deprecated, component, corresponding, s-control, Salesforce, user, Declarative, Metadata, File, Suffix, Directory, Location, Version, Sample]
---

# Scontrol

> Deprecated. Represents an Scontrol component, corresponding
   to an s-control in the Salesforce user interface.

# Scontrol

Deprecated. Represents an Scontrol component, corresponding to an s-control in the Salesforce user interface.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Visualforce pages supersede s-controls. Organizations that haven't previously used s-controls can’t create them. Existing s-controls are unaffected and can still be edited.

This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

## Declarative Metadata File Suffix and Directory Location

The file suffix is .scf for the s-control file. The accompanying metadata file is named ScontrolName\-meta.xml.

Scontrol components are stored in the scontrols folder in the corresponding package directory.

## Version

Scontrols are available in API version 10.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| content | base64Binary | Content of the s-control. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field is inherited from the MetadataWithContent component. |
| contentSource | SControlContentSource (enumeration of type string) | Required. Determines how you plan to use the s-control:HTML: Select this option if you want to enter the content for your s-control in content.URL: Select this option if you want to enter the link or URL of an external website in content.Snippet: Snippets are s-controls that are designed to be included in other s-controls. Select this option if you want to enter the content for your s-control snippet in content. |
| description | string | Optional text that describes the s-control. This only displays to users with View All Data permission (administrator). |
| encodingKey | Encoding (enumeration of type string) | Required. The default encoding setting is Unicode: UTF-8. Change it if you’re passing information to a URL that requires data in a different format. This option is available when you select URL as the value for contentSource. |
| fileContent | base64 | File contents displayed if you add this s-control to a custom link. The file can contain a Java applet, Active-X control, or any other type of content you want. This option only applies to s-controls with a value of HTML for contentSource. |
| fileName | string | The unique name for the s-control. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field can’t be changed for components installed by a managed package. It’s only relevant if the fileContent field also has a value. This field is available in API version 14.0. |
| fullName | string | The s-control developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. If this field contained characters before version 14.0 that are no longer allowed, the characters were stripped out of this field, and the previous value of the field was saved in the name field. This field is inherited from the Metadata component. |
| name | string | Required. The unique name for the s-control. It must contain alphanumeric characters only and begin with a letter. For example example_s_control. |
| supportsCaching | boolean | Required. Indicates whether the s-control supports caching (true) or not (false). Caching optimizes the page so that it remembers which s-controls are on the page when it reloads. This option only applies to HTML s-controls. |

## Declarative Metadata Sample Definition

The following sample creates the Myriad\_Publishing.scf s-control, which creates a link to the website specified in the s-control. The corresponding Myriad\_Publishing.scf-meta.xml metadata file follows the s-control file.

Myriad\_Publishing.scf file:

```

```

Myriad\_Publishing.scf-meta.xml:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
http://www.myriadpubs.com
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Scontrol xmlns="http://soap.sforce.com/2006/04/metadata">
    <contentSource>URL</contentSource>
    <description>s-control to open Myriad Publishing website.</description>
    <encodingKey>UTF-8</encodingKey>
    <name>Myriad Publishing</name>
    <supportsCaching>true</supportsCaching>
</Scontrol>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
