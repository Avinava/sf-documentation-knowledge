---
title: "Themes"
domain: rest-api
topic: themes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.795Z
keywords: [Themes, Syntax, Example]
---

# Themes

# Themes

Gets the list of icons and colors used by themes in the Salesforce application. Theme information is provided for objects in your organization that use icons and colors in the Salesforce UI. This resource is available in REST API version 29.0 and later.

The If-Modified-Since header can be used with this resource, with a date format of EEE, dd MMM yyyy HH:mm:ss z. When this header is used, if the object metadata has not changed since the provided date, a 304 Not Modified status code is returned, with no response body.

## Syntax

URI

/services/data/vXX.X/theme

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None

Request parameters

None

Response data

An array of theme items. Each theme item contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| colors | array of theme colors | Array of theme colors. |
| icons | array of theme icons | Array of theme icons. |
| name | string | Name of the object that the theme colors and icons are associated with. |

Each theme color contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| color | string | The color described in Web color RGB format, for example, “00FF00”. |
| context | string | The color context, which determines whether the color is the main color (“primary”) for the object, or not. |
| theme | string | The associated theme. Possible values include:theme2—Theme used prior to Spring ’10, called the “Salesforce Classic 2005 user interface theme”theme3—Theme introduced in Spring ’10, called the “Salesforce Classic 2010 user interface theme”theme4—Theme introduced in Winter ’14 for the mobile touchscreen version of Salesforce, and in Winter ’16 for Lightning Experiencecustom—Theme associated with a custom icon |

Each theme icon contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| contentType | string | The icon’s content type, for example, “image/png.” |
| height | number | The icon’s height in pixels. If the icon content type is an SVG type, height and width values are not used. |
| theme | string | The associated theme. Possible values include:theme2—Theme used prior to Spring ’10, called the “Salesforce Classic 2005 user interface theme”theme3—Theme introduced in Spring ’10, called the “Salesforce Classic 2010 user interface theme”theme4—Theme introduced in Winter ’14 for the mobile touchscreen version of Salesforce, and in Winter ’16 for Lightning Experiencecustom—Theme associated with a custom icon |
| url | string | The fully qualified URL for this icon. |
| width | number | The icon’s width in pixels. If the icon content type is an SVG type, height and width values are not used. |

## Example

```

```