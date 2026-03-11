---
title: "RemoteSiteSetting"
domain: metadata-api
topic: remotesitesetting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.332Z
keywords: [RemoteSiteSetting, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, Sample, Definition]
---

# RemoteSiteSetting

# RemoteSiteSetting

Represents a remote site setting. Before any Visualforce page, Apex callout, or JavaScript code using XmlHttpRequest in an s-control or custom button can call an external site, that site must be registered in the Remote Site Settings page, or the call fails.

[RemoteSiteSetting](#meta_remotesitesetting "Represents a remote site setting. Before any Visualforce page, Apex callout, or JavaScript code using XmlHttpRequest in an s-control or custom button can call an external site, that site must be registered in the Remote Site Settings page, or the call fails.") extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Declarative Metadata File Suffix and Directory Location

[RemoteSiteSetting](#meta_remotesitesetting "Represents a remote site setting. Before any Visualforce page, Apex callout, or JavaScript code using XmlHttpRequest in an s-control or custom button can call an external site, that site must be registered in the Remote Site Settings page, or the call fails.") components are stored in the remoteSiteSettings directory of the corresponding package directory. The file name matches the unique name of the remote site setting, and the extension is .remoteSite.

## Version

[RemoteSiteSetting](#meta_remotesitesetting "Represents a remote site setting. Before any Visualforce page, Apex callout, or JavaScript code using XmlHttpRequest in an s-control or custom button can call an external site, that site must be registered in the Remote Site Settings page, or the call fails.") components are available in API version 19.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The description explaining what this remote site setting is used for. |
| disableProtocolSecurity | boolean | Required. Indicates whether code within Salesforce can access the remote site regardless of whether the user's connection is over HTTP or HTTPS (true) or not (false). When true, code within Salesforce can pass data from an HTTPS session to an HTTP session, and vice versa.Only set to true if you understand the security implications. |
| fullName | string | The name can only contain characters, letters, and the underscore (_) character. The name must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |
| isActive | boolean | Required. Indicates if the remote site setting is active (true) or not (false). |
| url | string | Required. The URL for the remote site. |

## Declarative Metadata Sample Definition

A sample XML definition of a remote site setting is shown in this code block.

```

```