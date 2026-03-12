---
title: "EmailTemplate"
domain: metadata-api
topic: emailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.818Z
estimatedTokens: 2025
keywords: [EmailTemplate, template, email, mass, Sales, Engagement, first-generation, managed, packages, File, Suffix, Directory, Location, Retrieving, Templates]
---

# EmailTemplate

> Represents a template for an email, mass email, list
            email, or Sales Engagement email. Supported in first-generation managed packages
            only.

# EmailTemplate

Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.

This type extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

First-generation packaging only is supported for Lightning email templates.

## File Suffix and Directory Location

The file suffix is .email for the template file. The accompanying metadata file is named EmailTemplateName\-meta.xml.

EmailTemplate components are stored in the email folder in the corresponding package directory. For example, for an email template named SampleTemplate in the sampleFolder folder, there’s a SampleTemplate-meta.xml in the email/sampleFolder of the package.

## Retrieving Email Templates

You can’t use the wildcard (\*) symbol with email templates in package.xml. To retrieve the list of email templates for populating package.xml with explicit names, call listMetadata() and pass in EmailTemplate as the type.

The following example shows folders in package.xml:

```

```

## Version

Email templates are available in API version 12.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| apiVersion | double | The API version if it's a Visualforce email template. Every Visualforce email template has an API version specified at creation. This field is available in API version 16.0 and later. |
| attachedDocuments | string[] | A list of references to documents in your organization. These documents are included as attachments in the email template. Each document is referenced by its path, for example MyFolder/MyDocument.txt. |
| attachments | Attachment[] | A list of attachments for the email template. |
| available | boolean | Required. Indicates whether this template is offered to users when sending an email (true) or not (false). |
| content | base64Binary | Content of the email template. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. This field contains:Binary content of the email body if type is set to textHTML email content if type is set to htmlHTML body if type is set to customVisualforce body if type is set to visualforceThis field is inherited from the MetadataWithContent component. |
| description | string | The email template description describes the reason for creating the template. |
| encodingKey | Encoding (enumeration of type string) | Required for Classic email templates. The default encoding setting is Unicode: UTF-8. Change it if your template requires data in a different format.Valid values include:UTF-8—Unicode (UTF-8)ISO-8859-1—General US & Western Europe (ISO-8859–1, ISO-LATIN-1)Shift_JIS—Japanese (Shift-JIS)ISO-2022-JP—Japanese (JIS)EUC-JP—Japanese (EUC-JP)x-SJIS_0213—Japanese (Shift-JIS_2004)ks_c_5601-1987—Korean (ks_c_5601-1987)Big5—Traditional Chinese (Big5)GB2312—Simplified Chinese (GB2312)Big5-HKSCS—Traditional Chinese Hong Kong (Big5–HKSCS)Lightning email templates don’t use this field. Instead, the encoding values are taken directly from the user’s encoding settings. |
| fullName | string | The email template developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. If this field contained characters before version 14.0 that are no longer allowed, the characters were stripped out of this field, and the previous value of the field was saved in the name field. This field is inherited from the Metadata component. |
| letterhead | string | The letterhead name associated with this email template. Only available when type is set to html. |
| name | string | Required. Email template name. The list of characters allowed in the fullName field has been reduced for versions 14.0 and later. This field contains the value contained in the fullName field before version 14.0. |
| packageVersions | PackageVersion[] | The list of package versions for any managed packages containing components that are referenced by this email template. This field is only relevant for Visualforce email templates.For more information about managed packages, see Second-Generation Managed Packages in the Salesforce DX Developer Guide. This field is available in API version 16.0 and later. |
| relatedEntityType | Object Name (enumeration of type string) | Reserved for future use with Lightning Experience. |
| style | EmailTemplateStyle (enumeration of type string) | Required. The style of the template. This field is only available when type is set to html.Valid style values include:nonefreeFormformalLetterpromotionRightpromotionLeftnewsletterproducts |
| subject | string | The email subject.The limit is 1,000 characters for Lightning email templates and 230 characters for Classic email templates. |
| textOnly | string | The text of the email body if type is set to html or custom. |
| type | EmailTemplateType (enumeration of type string) | Required. The email template type.The valid values are:text - all users can create or change text email templates.html - administrators and users with the “Edit HTML Templates” permission can create HTML email templates based on a letterhead.custom - administrators and users with the “Edit HTML Templates” permission can create custom HTML email templates without using a letterhead. You must either know HTML or obtain the HTML code to insert in your email template.visualforce - administrators and users with the Customize Application permission can create email templates using Visualforce. |
| UiType | EmailTemplateUiType (enumeration of type string) | Indicates the user interface where this template is usable. Valid values are:Aloha (Salesforce Classic)SFX (Lightning Experience)SFX_Sample (Lightning Experience Sample)If UiType is SFX, the type must be custom.Packaging is supported for Salesforce Classic email templates only. |

## Example

```

```

## Attachment

Attachment represents an email attachment.

| Field | Field Type | Description |
| --- | --- | --- |
| content | base64Binary | Required. The attachment content. Base 64-encoded binary data. Before making an API call, client applications must encode the binary attachment data as base64. Upon receiving a response, client applications must decode the base64 data to binary. This conversion is handled for you by a SOAP client. |
| name | string | Required. The attachment file name. |

## Declarative Metadata Sample Definition

Here's a sample XML definition of an email template.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Letterhead](atlas.en-us.api_meta.meta/api_meta/meta_letterhead.htm "Represents formatting options for the letterhead in an email template. A letterhead defines the logo, page color, and text settings for your HTML email templates. Use letterheads to ensure a consistent look and feel in your company’s emails.")

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyDBFolder/MyDBName</members>
        <name>Dashboard</name>
    </types>
    <types>
        <members>MyDocumentFolder/MyDocumentName</members>
        <name>Document</name>
    </types>
    <types>
        <members>unfiled$public/MarketingProductInquiryResponse</members>
        <members>unfiled$public/SalesNewCustomerEmail</members>
        <name>EmailTemplate</name>
    </types>
    <types>
        <members>MyReportFolder/MyReportName</members>
        <name>Report</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<EmailTemplate>
    <available>true</available>
    <description>Notification that user has been added to a community.</description>
    <encodingKey>UTF-8</encodingKey>
    <name>Communities: New Member Welcome Email</name>
    <style>none</style>
    <subject>Welcome to {!Community_Name}</subject>
    <type>custom</type>
    <uiType>Aloha</uiType>
</EmailTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<EmailTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
    <available>true</available>
    <description>Sample Email Template</description>
    <encodingKey>ISO-8859-1</encodingKey>
    <name>Sample Email Template</name>
    <style>none</style>
    <subject>Sample email subject</subject>
    <textOnly>Your case has been resolved.</textOnly>
    <type>custom</type>
</EmailTemplate>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- PackageVersion (atlas.en-us.api_meta.meta/api_meta/meta_classes.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Letterhead (atlas.en-us.api_meta.meta/api_meta/meta_letterhead.htm)
