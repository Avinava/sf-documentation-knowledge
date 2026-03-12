---
title: "Integrate Third-Party Libraries Using the Privileged Script Tag"
domain: exp-cloud-lwr
topic: integrate-third-party-libraries-using-the-privileged-script-tag
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.529Z
estimatedTokens: 953
keywords: [Integrate, Third-Party, Libraries, Privileged, Script, Tag, components, LWR, site, encapsulate, their, elements, shadow, DOM, prevents]
---

# Integrate Third-Party Libraries Using the Privileged Script Tag

> Some components within an LWR site encapsulate their elements in shadow DOM, which
    prevents global interaction with those components. As a result, third-party JavaScript libraries
    such as Google Analytics and Google Tag Manager can have trouble querying the DOM globally on an
    LWR site. When programmatic access to an element within the DOM is needed, you can write scripts
    within an <x-oasis-script> privileged script tag.
    Loading third-party libraries using this privileged script tag lets those libraries bypass any
    shadow DOM boundaries.

# Integrate Third-Party Libraries Using the Privileged Script Tag

Some components within an LWR site encapsulate their elements in shadow DOM, which prevents global interaction with those components. As a result, third-party JavaScript libraries such as Google Analytics and Google Tag Manager can have trouble querying the DOM globally on an LWR site. When programmatic access to an element within the DOM is needed, you can write scripts within an <x-oasis-script> privileged script tag. Loading third-party libraries using this privileged script tag lets those libraries bypass any shadow DOM boundaries.

Use the custom <x-oasis-script> tag in place of the standard <script> in the head markup or inline. Scripts loaded within this custom tag run inside a special iframe that’s exempt from shadow DOM and are always executed asynchronously.

<x-oasis-script> uses the same syntax as the <script> tag.

```

```

You can also use the tag to add event listeners and to import and export global variables with the imported-global-names and exported-global-names attributes. If you have custom code within the <x-oasis-script> tag, add the attribute hidden="true" to the tag. This attribute ensures that the custom code within the tag remains hidden from site visitors while the page is loading.

For example, this code sample defines a global variable—testVar—on the outer window, which is then imported for use in the x-oasis-script window. The global variable must be imported to define it in the privileged scope.

```

```

In turn, this example exports the testVar global variable from x-oasis-script.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

If you include a third-party library inline or in the head markup, remember to switch to Relaxed CSP and to allowlist the remote host.

-   **[Examples: Use Google Analytics in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_use_google_analytics.htm)**
    Discover how visitors engage with your LWR site by using Google Analytics to track their interactions. These real-world examples use the <x-oasis-script> privileged script tag. This tag allows Google Analytics to interact with elements within the shadow DOM and attach event handlers such as click events or form submissions.
-   **[Examples: Use Google Tag Manager in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_use_google_tag_manager.htm)**
    Use Google Tag Manager to track customer interactions with your LWR site, which is a single-page application. In these examples, the <x-oasis-script> privileged script tag lets Google Tag Manager interact with elements within the shadow DOM.

#### See Also

-   [*Video:* Use Privileged Scripts for Third-Party Libraries in LWR Sites](https://www.youtube.com/watch?v=6rd7IWmLdbo&list=PLgIMQe2PKPSJXw3x0cPTJhzNyLBgpZV5a&index=8 "Video: Use Privileged Scripts for Third-Party Libraries in LWR
    Sites - HTML (New Window)")

-   [*Salesforce Help:* Add Markup to the Page <head> to Customize Your Site](https://help.salesforce.com/articleView?id=experience.community_builder_page_head.htm&type=5&language=en_US "Salesforce Help: Add Markup to the Page <head> to Customize Your
    Site - HTML (New Window)")

-   [*Salesforce Help:* Select a Security Level in Experience Builder Sites](https://help.salesforce.com/articleView?id=experience.networks_security_csp_scriptlevel.htm&type=5&language=en_US "Salesforce Help: Select a Security Level in Experience Builder
    Sites - HTML (New Window)")

-   [*Salesforce Help:* Where to Allowlist Third-Party Hosts](https://help.salesforce.com/articleView?id=experience.networks_security_csp_allow.htm&type=5&language=en_US "Salesforce Help: Where to Allowlist Third-Party Hosts - HTML (New Window)")

## Code Examples

```
<x-oasis-script src="third_party_library.js"></x-oasis-script>
```

```apex
<script>
    window.testVar = "myTestVar";
</script>

<x-oasis-script hidden="true" imported-global-names="testVar">
    // Custom code to access testVar
    console.log(window.testVar)
</x-oasis-script>
```

```apex
<x-oasis-script hidden="true" exported-global-names="testVar">
    window.testVar = "myTestVar";
</x-oasis-script>

<script>
    // setTimeout is needed in case this script tag is run before oasis script
    setTimeout(function(){
      // Custom code to access testVar
      console.log(window.testVar)
    }, 5000);
</script>
```

## Related Topics

- Examples: Use Google Analytics in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_use_google_analytics.htm)
- Examples: Use Google Tag Manager in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_use_google_tag_manager.htm)
