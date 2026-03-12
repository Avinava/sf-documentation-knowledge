---
title: "apex:includeScript"
domain: pages
topic: apexincludescript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.526Z
estimatedTokens: 512
keywords: [apex, includeScript, link, JavaScript, library, Visualforce, component, injects, script, <head>, element, generated, HTML, Attributes]
---

# apex:includeScript

> A link to a JavaScript library that can be used in the Visualforce page. When specified, this component injects a script reference into the <head> element of the generated HTML page.

# apex:includeScript

A link to a JavaScript library that can be used in the Visualforce page. When specified, this component injects a script reference into the <head\> element of the generated HTML page.

Multiple references to the same script are de-duplicated, making this component safe to use inside an iteration component. This might occur if, for example, you use an <apex:includeScript\> inside a custom component, and then use that component inside an <apex:repeat\> iteration.

For performance reasons, you might choose to use a static JavaScript tag before your closing <apex:page\> tag, rather than this component. If you do, you'll need to manage de-duplication yourself.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <script\> tag.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows other components in the page to reference the component. |  | 13.0 | global |
| loadOnReady | Boolean | Specify whether the script resource is loaded immediately, or after the document model is constructed. The default value of "false" loads the script immediately. Set to "true" to cause JavaScript referenced by the component to wait to be loaded until the page is "ready."Scripts loaded this way will be added to the DOM after the onload event is triggered, instead of immediately. This event occurs after the DOM is constructed, but might be before child frames or external resources, such as images, have finished loading. |  | 29.0 |  |
| value | Object | The URL to the JavaScript file. This can be a reference to a static resource, a best practice, but can also be a plain URL. | Yes | 13.0 | global |

## Code Examples

```
<apex:includeScript value="{!$Resource.example_js}"/>
```

```
<script type='text/javascript' src='/resource/1233160164000/example_js'>
```
