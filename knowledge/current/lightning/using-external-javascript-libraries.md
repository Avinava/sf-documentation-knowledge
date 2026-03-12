---
title: "Using External JavaScript Libraries"
domain: lightning
topic: using-external-javascript-libraries
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.170Z
estimatedTokens: 1687
keywords: [External, JavaScript, Libraries, library, upload, resource, <ltng, require>, tag, cmp, app, markup, Client-Side, Controller, Troubleshooting]
---

# Using External JavaScript Libraries

> To reference a JavaScript library, upload it as a static resource and use a <ltng:require> tag in your .cmp or
      .app markup.

# Using External JavaScript Libraries

To reference a JavaScript library, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Before you use a third-party JavaScript library, we recommend that you check [AppExchange](https://appexchange.salesforce.com/) for components or apps from Salesforce partners that match your requirements. Alternatively, check if a [base component](https://developer.salesforce.com/docs/component-library) provides your desired functionality.

The framework’s content security policy mandates that external JavaScript libraries must be uploaded to Salesforce static resources.

You can’t use a <script\> tag in a component. This restriction mitigates the risk of cross-site scripting attacks. You can add a <script\> tag to an application’s template, which is a special type of component that extends aura:template.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Only third-party JavaScript libraries that are loaded via ltng:require are supported. Documentation and examples that demonstrate using a third-party JavaScript library don't constitute an endorsement of that library. We recommend that you check the third-party JavaScript library documentation for usage information.

Here’s an example of using ltng:require.

```

```

resourceName is the Name of the static resource. In a managed package, the resource name must include the package namespace prefix, such as $Resource.yourNamespace\_\_resourceName. For a stand-alone static resource, such as an individual graphic or script, you only need the name of the resource. For example, if you uploaded myScript.js and set the Name to myScript, reference it as $Resource.myScript. To reference an item within an archive static resource, add the rest of the path to the item using string concatenation.

The afterScriptsLoaded action in the client-side controller is called after the scripts are loaded and the component is rendered. Don’t use the init event to access scripts loaded by ltng:require. These scripts load asynchronously and are most likely not available when the init event handler is called.

Here are some considerations for loading scripts:

Loading Sets of Scripts

Specify a comma-separated list of resources in the scripts attribute to load a set of resources.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Due to a quirk in the way $Resource is parsed in expressions, use the join operator to include multiple $Resource references in a single attribute. For example, if you have more than one JavaScript library to include into a component the scripts attribute should be something like the following.

```

```

Loading Order

The scripts are loaded in the order that they are listed.

One-Time Loading

Scripts load only once, even if they’re specified in multiple <ltng:require> tags in the same component or across different components.

Parallel Loading

Use separate <ltng:require> tags for parallel loading if you have multiple sets of scripts that are not dependent on each other.

Encapsulation

To ensure encapsulation and reusability, add the <ltng:require> tag to every .cmp or .app resource that uses the JavaScript library.

ltng:require also has a styles attribute to load a list of CSS resources. You can set the scripts and styles attributes in one <ltng:require> tag.

## Using a Client-Side Controller with External JavaScript Libraries

If you’re using an external library to work with your HTML elements after rendering, use afterScriptsLoaded to wire up a client-side controller. The following example sets up a chart using the Chart.js library, which is uploaded as a static resource.

```

```

The component’s client-side controller sets up the chart after component initialization and rendering.

```

```

## Troubleshooting Errors from ltng:require

Let’s say your component references a custom JavaScript library with ltng:require. When you try to load the component, a modal dialog interrupts and displays information about an error.

For example, the dialog could show a message like the following.

```

```

The dialog could also include a stack trace. If it doesn’t, check the browser’s JavaScript console for more information. If the component didn't load, the console doesn’t show much and the problem is likely in the library you referenced.

Use the [Locker Console](https://developer.salesforce.com/docs/component-library/tools/locker-service-console "HTML (New Window)") to evaluate the JavaScript from the library to see if it’s affected by Locker restrictions.

If ltng:require encounters errors in your script, you see an error in the JavaScript console that includes details about the problem. The JavaScript console could show a message such as the following.

```

```

This also indicates the problem is in the static resource, myLib.js in this case. If the Locker Console gives you the same message when you evaluate the JavaScript from myLib.js, this confirms that the script is attempting to perform an action that is not allowed by Locker.

#### See Also

-   [*Salesforce Help*: Static Resources](https://help.salesforce.com/apex/HTViewHelpDoc?id=pages_static_resources.htm&language=en_US "Salesforce Help: Static Resources - HTML (New Window)")

-   [$Resource](atlas.en-us.lightning.meta/lightning/expr_resource_value_provider.htm "The $Resource global value provider lets you reference images, style sheets, and JavaScript code you’ve uploaded in static resources.")

-   [Using External CSS](atlas.en-us.lightning.meta/lightning/apps_css_external_platform.htm "To reference an external CSS resource, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.")

-   [Lightning Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker.")

-   [*Security for Lightning Components:* Content Security Policy Overview](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/content-security-policy-intro.html "Security for Lightning Components: Content Security Policy
    Overview - HTML (New Window)")

-   [Creating App Templates](atlas.en-us.lightning.meta/lightning/apps_template_overview.htm "An app template bootstraps the loading of the framework and the app. Customize an app’s template by creating a component that extends the default aura:template template.")

## Code Examples

```
<ltng:require scripts="{!$Resource.resourceName}"
    afterScriptsLoaded="{!c.afterScriptsLoaded}" />
```

```
scripts="{!join(',', 
    $Resource.jsLibraries + '/jsLibOne.js', 
    $Resource.jsLibraries + '/jsLibTwo.js')}"
```

```
<ltng:require scripts="{!$Resource.chart}" 
              afterScriptsLoaded="{!c.setup}"/>
<canvas aura:id="chart" id="myChart" width="400" height="400"/>
```

```
setup : function(component, event, helper) {
    var data = {
        labels: ["January", "February", "March"],
        datasets: [{
            data: [65, 59, 80, 81, 56, 55, 40]
        }]
    };
    var el = component.find("chart").getElement();
    var ctx = el.getContext("2d");
    var myNewChart = new Chart(ctx).Line(data);
}
```

```
Custom Script Eval error in 'ltng:require' [SecureDOMEvent: [object Event] {key: {namespace":"c"}}]
```

## Related Topics

- $Resource (atlas.en-us.lightning.meta/lightning/expr_resource_value_provider.htm)
- Using External CSS (atlas.en-us.lightning.meta/lightning/apps_css_external_platform.htm)
- Lightning Component Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
- Creating App Templates (atlas.en-us.lightning.meta/lightning/apps_template_overview.htm)
