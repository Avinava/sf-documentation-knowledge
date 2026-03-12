---
title: "Using External CSS"
domain: lightning
topic: using-external-css
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.972Z
estimatedTokens: 941
keywords: [External, CSS, resource, upload, <ltng, require>, tag, cmp, app, markup, Styling, Components, Lightning, Experience, Salesforce]
---

# Using External CSS

> To reference an external CSS resource, upload it as a static resource and use a <ltng:require> tag in your .cmp or
      .app markup.

# Using External CSS

To reference an external CSS resource, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.

ltng:require enables you to load external CSS and JavaScript libraries for your component or app.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

You can’t load JavaScript resources from a third-party site, even if it’s a CSP Trusted Site. To use a JavaScript library from a third-party site, add it to a static resource, and then add the static resource to your component. After the library is loaded from the static resource, you can use it as normal.

Here’s an example of using ltng:require:

```

```

resourceName is the Name of the static resource. In a managed package, the resource name must include the package namespace prefix, such as $Resource.yourNamespace\_\_resourceName. For a stand-alone static resource, such as an individual graphic or script, you only need the name of the resource. For example, if you uploaded myScript.js and set the Name to myScript, reference it as $Resource.myScript. To reference an item within an archive static resource, add the rest of the path to the item using string concatenation.

Here are some considerations for loading styles:

Loading Sets of CSS

Specify a comma-separated list of resources in the styles attribute to load a set of CSS.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Due to a quirk in the way $Resource is parsed in expressions, use the join operator to include multiple $Resource references in a single attribute. For example, if you have more than one style sheet to include into a component the styles attribute should be something like the following.

```

```

Loading Order

The styles are loaded in the order that they are listed.

One-Time Loading

The styles load only once, even if they’re specified in multiple <ltng:require> tags in the same component or across different components.

Encapsulation

To ensure encapsulation and reusability, add the <ltng:require> tag to every .cmp or .app resource that uses the CSS resource.

ltng:require also has a scripts attribute to load a list of JavaScript libraries. The afterScriptsLoaded event enables you to call a controller action after the scripts are loaded. It's only triggered by loading of the scripts and is never triggered when the CSS in styles is loaded.

## Styling Components for Lightning Experience or Salesforce for Android, iOS, and mobile web

To prevent styling conflicts in Lightning Experience or Salesforce for Android, iOS, and mobile web, prefix your external CSS with a unique namespace. For example, if you prefix your external CSS declarations with .myBootstrap, wrap your component markup with a <div> tag that specifies the myBootstrap class.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Prefixing your CSS with a unique namespace only applies to external CSS. If you’re using CSS within a component bundle, the .THIS keyword becomes .namespaceComponentName during runtime.

#### See Also

-   [Using External JavaScript Libraries](atlas.en-us.lightning.meta/lightning/js_libs_platform.htm "To reference a JavaScript library, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.")

-   [CSS in Components](atlas.en-us.lightning.meta/lightning/components_css.htm "Style your components with CSS.")

-   [$Resource](atlas.en-us.lightning.meta/lightning/expr_resource_value_provider.htm "The $Resource global value provider lets you reference images, style sheets, and JavaScript code you’ve uploaded in static resources.")

## Code Examples

```
<ltng:require styles="{!$Resource.resourceName}" />
```

```
styles="{!join(',', 
    $Resource.myStyles + '/stylesheetOne.css', 
    $Resource.myStyles + '/moreStyles.css')}"
```

```
<ltng:require styles="{!$Resource.bootstrap}"/>
<div class="myBootstrap">
    <c:myComponent />
    <!-- Other component markup -->
</div>
```

## Related Topics

- Using External JavaScript Libraries (atlas.en-us.lightning.meta/lightning/js_libs_platform.htm)
- CSS in Components (atlas.en-us.lightning.meta/lightning/components_css.htm)
- $Resource (atlas.en-us.lightning.meta/lightning/expr_resource_value_provider.htm)
