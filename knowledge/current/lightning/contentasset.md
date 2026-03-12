---
title: "$ContentAsset"
domain: lightning
topic: contentasset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.944Z
estimatedTokens: 372
keywords: [$ContentAsset, provider, lets, images, style, sheets, JavaScript, asset, files, Lightning, components, Component, Markup]
---

# $ContentAsset

> The $ContentAsset global
            value provider lets you reference images, style sheets, and JavaScript used as asset
            files in your Lightning components.

# $ContentAsset

The $ContentAsset global value provider lets you reference images, style sheets, and JavaScript used as asset files in your Lightning components.

Reference $ContentAsset asset files by name instead of using cumbersome file paths or URLs. $ContentAsset provides sharing, versioning, and access control for all asset files, as well as options for mobile optimization and resizing of image files. You can use $ContentAsset in Lightning components markup and within JavaScript controller and helper code.

## Using $ContentAsset in Component Markup

To reference a specific asset file in component markup, use $ContentAsset.yourNamespace\_\_assetName. Orgs without a namespace can use $ContentAsset.assetDeveloperName. Use this syntax regardless of whether an asset is for authenticated or unauthenticated sessions. To reference a content asset within an archive, add pathinarchive as a parameter appended to the basic syntax: $ContentAsset.yourNamespace\_\_assetName + 'pathinarchive=images/sampleImage.jpg'.

Here are a few examples.

Aura component referencing an image in an archive asset file:

```

```

Include CSS style sheets or JavaScript libraries in a component using the <ltng:require> tag.

Aura component using an asset file to style a div element:

Markup

```

```

Aura component displays data from a testDisplayData JavaScript asset file:

Markup

```

```

Controller

```

```

JavaScript (.js) Asset File with DeveloperName testDisplayData

```

```

## Code Examples

```
<aura:component>
    <img src="{!$ContentAsset.websiteImages + 'pathinarchive=images/logo.jpg'}" "alt="holiday wreath"/>
</aura:component>
```

```
<aura:component>
    <ltng:require styles="{!$ContentAsset.bookStyle}"/>

    <!-- "bookName" is defined in an asset file with DeveloperName of "bookStyle" -->
    <div id="bookTitle" class="bookName">
    </div>
</aura:component>
```

```
<aura:component>
    <ltng:require scripts="{!$ContentAsset.testDisplayData}"
afterScriptsLoaded="{!c.displayData}"/>
...

    <aura:attribute name="TestData" type="String[]" ></aura:attribute>
        <div>
            <input type="text" id="sampleData" value ="{!v.TestData}" />
        </div>
...
</aura:component>
```

```
({
    displayData : function(component, event, helper) {
        var data = _datamap.getData();
        component.set("v.TestData", data);
    }
})
```

```
window._datamap = (function() {
    var data = ["Agree", "Disagree", "Strongly Agree", "Strongly Disagree", "Not Applicable"];
    return {
        getData: function() {
            return data.join(", ");
        }
    };
}());
```
