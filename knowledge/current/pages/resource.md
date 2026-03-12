---
title: "$Resource"
domain: pages
topic: resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.429Z
estimatedTokens: 320
keywords: [$Resource, merge, referencing, resource, Visualforce, URLFOR, functions, particular, file, archive, Usage, Examples]
---

# $Resource

> A global merge field type to use when referencing an existing static resource by name in
  a Visualforce page. You can also use resource merge fields in URLFOR functions to reference a particular file in a static resource
  archive.

# $Resource

A global merge field type to use when referencing an existing static resource by name in a Visualforce page. You can also use resource merge fields in URLFOR functions to reference a particular file in a static resource archive.

## Usage

Use {!$Resource} to reference an existing static resource. The format is {!$Resource.nameOfResource}, such as {!$Resource.TestImage}.

## Examples

The Visualforce component below references an image file that was uploaded as a static resource and given the name TestImage:

```

```

To reference a file in an archive (such as a .zip or .jar file), use the URLFOR function. Specify the static resource name that you provided when you uploaded the archive with the first parameter, and the path to the desired file within the archive with the second. For example:

```

```

You can also use dynamic references to reference static resources. For example, {!$Resource\[appLogo\]}, assuming there is an appLogo property or getAppLogo() method in your page’s controller.

#### See Also

-   [Styling Visualforce Pages](atlas.en-us.pages.meta/pages/pages_styling.htm "It’s easy to style a Visualforce page, either by mimicking the look and feel of a standard Salesforce page, or by using your own stylesheets or content types.")

## Code Examples

```
<apex:image url="{!$Resource.TestImage}" width="50" height="50"/>
```

```
<apex:image url="{!URLFOR($Resource.TestZip,
                  'images/Bluehills.jpg')}" width="50" height="50"/>
```

## Related Topics

- Styling Visualforce Pages (atlas.en-us.pages.meta/pages/pages_styling.htm)
