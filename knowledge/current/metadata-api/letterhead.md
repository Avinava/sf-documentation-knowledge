---
title: "Letterhead"
domain: metadata-api
topic: letterhead
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.306Z
estimatedTokens: 1043
keywords: [Letterhead, formatting, options, email, template, logo, color, text, settings, HTML, templates, letterheads, ensure, consistent, look]
---

# Letterhead

> Represents formatting options for the letterhead in an
            email template. A letterhead defines the logo, page color, and text settings for your
            HTML email templates. Use letterheads to ensure a consistent look and feel in your
            company’s emails.

# Letterhead

Represents formatting options for the letterhead in an email template. A letterhead defines the logo, page color, and text settings for your HTML email templates. Use letterheads to ensure a consistent look and feel in your company’s emails.

For more information, see “Create Classic Letterheads for Email Templates” in the Salesforce online help. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

The file suffix for letterheads is .letter and components are stored in the letterhead directory of the corresponding package directory.

## Version

Letterheads are available in API version 12.0 and later.

## Fields

With the exception of logo, and horizontal and vertical alignment, all of these fields are required.

| Field Name | Field Type | Description |
| --- | --- | --- |
| available | boolean | Required. Indicates whether this letterhead can be used (true) or not (false), for example, in an email template. |
| backgroundColor | string | Required. The background color, in hexadecimal, for example #FF6600. |
| bodyColor | string | Required. The body color in hexadecimal. |
| bottomLine | LetterheadLine (enumeration of type string) | Required. The style for the bottom line. Valid style values include:color. The color of the line in hexadecimal, as a string value.height. The height of the line, as an int value. |
| description | string | Text description of how this letterhead differs from other letterheads. |
| fullName | string | The internal name of the letterhead, based on the name, but with white spaces and special characters escaped out for validity. |
| footer | LetterheadHeaderFooter | Required. The style for the footer. |
| header | LetterheadHeaderFooter | Required. The style for the header. |
| middleLine | LetterheadLine | Required. The style for the middle border line in your letterhead. Valid style values include:color. The color of the line in hexadecimal, as a string value.height. The height of the line, as an int value. |
| name | string | Required. The name of the letterhead. |
| topLine | LetterheadLine | Required. The style for the top horizontal line below the header. Valid style values include:color. The color of the line in hexadecimal, as a string value.height. The height of the line, as an int value. |

## LetterheadHeaderFooter

LetterheadHeaderFooter represents the properties of a header or footer.

| Field | Field Type | Description |
| --- | --- | --- |
| backgroundColor | string | Required. The background color of the header or footer in hexadecimal format. |
| height | DashboardComponent[] | Required. The height of the header or footer. |
| horizontalAlignment | LetterheadHorizontalAlignment (enumeration of type string) | The horizontal alignment of the header or footer. Valid values are:NoneLeftCenterRight |
| logo | string | The logo which is a reference to a document, for example MyFolder/MyDocument.gif. |
| verticalAlignment | LetterheadVerticalAlignment (enumeration of type string) | The vertical alignment of the header or footer. Valid values are:NoneTopMiddleBottom |

## LetterheadLine

LetterheadLine represents the properties of a line.

| Field | Field Type | Description |
| --- | --- | --- |
| color | string | Required. The color of the line in hexadecimal format. |
| height | int | Required. The height of the line. |

## Declarative Metadata Sample Definition

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Letterhead xmlns="http://soap.sforce.com/2006/04/metadata">
    <available>true</available>
    <backgroundColor>#CCCCCC</backgroundColor>
    <bodyColor>#33FF33</bodyColor>
    <bottomLine>
        <color>#3333FF</color>
        <height>5</height>
    </bottomLine>
    <description>INITIAL</description>
    <footer>
        <backgroundColor>#FFFFFF</backgroundColor>
        <height>100</height>
        <horizontalAlignment>Left</horizontalAlignment>
        <verticalAlignment>Top</verticalAlignment>
    </footer>
    <header>
        <backgroundColor>#FFFFFF</backgroundColor>
        <height>100</height>
        <horizontalAlignment>Left</horizontalAlignment>
        <verticalAlignment>Top</verticalAlignment>
    </header>
    <middleLine>
        <color>#AAAAFF</color>
        <height>5</height>
    </middleLine>
    <name>SimpleLetterheadLabel</name>
    <topLine>
        <color>#FF99FF</color>
        <height>5</height>
    </topLine>
</Letterhead>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- DashboardComponent (atlas.en-us.api_meta.meta/api_meta/meta_dashboard.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
