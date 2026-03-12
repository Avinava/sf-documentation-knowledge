---
title: "$Resource"
domain: lightning
topic: resource
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:49.012Z
estimatedTokens: 1009
keywords: [$Resource, provider, lets, images, style, sheets, JavaScript, code, you’ve, uploaded, resources, Component, Markup, Considerations]
---

# $Resource

> The $Resource global value
      provider lets you reference images, style sheets, and JavaScript code you’ve uploaded in
      static resources.

# $Resource

The $Resource global value provider lets you reference images, style sheets, and JavaScript code you’ve uploaded in static resources.

Using $Resource lets you reference assets by name, without worrying about the gory details of URLs or file paths. You can use $Resource in Aura component markup and within JavaScript controller and helper code.

## Using $Resource in Component Markup

To reference a specific resource in component markup, use $Resource.resourceName within an expression. resourceName is the Name of the static resource. In a managed package, the resource name must include the package namespace prefix, such as $Resource.yourNamespace\_\_resourceName. For a stand-alone static resource, such as an individual graphic or script, you only need the name of the resource. For example, if you uploaded myScript.js and set the Name to myScript, reference it as $Resource.myScript. To reference an item within an archive static resource, add the rest of the path to the item using string concatenation. Here are a few examples.

```

```

Include CSS style sheets or JavaScript libraries into a component using the <ltng:require> tag. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Due to a quirk in the way $Resource is parsed in expressions, use the join operator to include multiple $Resource references in a single attribute. For example, if you have more than one JavaScript library to include into a component the scripts attribute should be something like the following.

```

```

## Using $Resource in JavaScript

To obtain a reference to a static resource in JavaScript code, use $A.get('$Resource.resourceName').

resourceName is the Name of the static resource. In a managed package, the resource name must include the package namespace prefix, such as $Resource.yourNamespace\_\_resourceName. For a stand-alone static resource, such as an individual graphic or script, you only need the name of the resource. For example, if you uploaded myScript.js and set the Name to myScript, reference it as $Resource.myScript. To reference an item within an archive static resource, add the rest of the path to the item using string concatenation. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Static resources referenced in JavaScript aren’t automatically added to packages. If your JavaScript depends on a resource that isn’t referenced in component markup, add it manually to any packages the JavaScript code is included in.

## $Resource Considerations

Global value providers in the Aura Components programming model are, behind the scenes, implemented quite differently from global variables in Salesforce. Although $Resource looks like the global variable with the same name available in Visualforce, formula fields, and elsewhere, there are important differences. Don’t use other documentation as a guideline for its use or behavior.

Here are two specific things to keep in mind about $Resource in the Aura Components programming model.

First, $Resource isn’t available until the Aura Components programming model is loaded on the client. Some very simple components that are composed of only markup can be rendered server-side, where $Resource isn’t available. To avoid this, when you create a new app, stub out a client-side controller to force components to be rendered on the client.

Second, if you’ve worked with the $Resource global variable, in Visualforce or elsewhere, you’ve also used the URLFOR() formula function to construct complete URLs to specific resources. There’s nothing similar to URLFOR() in the Aura Components programming model. Instead, use simple string concatenation, as illustrated in the preceding examples.

#### See Also

-   [*Salesforce Help*: Static Resources](https://help.salesforce.com/apex/HTViewHelpDoc?id=pages_static_resources.htm&language=en_US "Salesforce Help: Static Resources - HTML (New Window)")

## Code Examples

```
<aura:component>
    <!-- Stand-alone static resources -->
    <img src="{!$Resource.generic_profile_svg}"/>
    <img src="{!$Resource.yourNamespace__generic_profile_svg}"/>

    <!-- Asset from an archive static resource -->
    <img src="{!$Resource.yourGraphics + '/images/logo.jpg'}"/>
    <img src="{!$Resource.yourNamespace__yourGraphics + '/images/logo.jpg'}"/>
</aura:component>
```

```
<aura:component>
  <ltng:require 
    styles="{!$Resource.jsLibraries  + '/styles/jsMyStyles.css'}"
    scripts="{!$Resource.jsLibraries + '/jsLibOne.js'}"
    afterScriptsLoaded="{!c.scriptsLoaded}" />
</aura:component>
```

```
scripts="{!join(',', 
    $Resource.jsLibraries + '/jsLibOne.js', 
    $Resource.jsLibraries + '/jsLibTwo.js')}"
```

```
({
    profileUrl: function(component) {
        var profUrl = $A.get('$Resource.yourGraphics') + '/images/avatar1.jpg';
        alert("Profile URL: " + profUrl);
    }
})
```
