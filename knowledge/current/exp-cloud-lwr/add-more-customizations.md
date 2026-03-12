---
title: "Add More Customizations"
domain: exp-cloud-lwr
topic: add-more-customizations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.507Z
estimatedTokens: 482
keywords: [Add, Customizations, several, advanced, creating, custom, record, components, Apex, SOQL, search]
---

# Add More Customizations

> This section describes several advanced customizations, such as creating custom record
    components and using Apex and SOQL for search.

# Add More Customizations

This section describes several advanced customizations, such as creating custom record components and using Apex and SOQL for search.

-   **[Create Custom Record Components](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_custom_records.htm)**
    The Build Your Own (LWR) template doesn’t include record components, but you can use the User Interface API to construct your own custom components.
-   **[Use Apex and SOQL for Search](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_custom_search.htm)**
    Create a theme layout search component that sends the user to a search results page.
-   **[Use Expressions to Add Dynamic Data to LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_expressions.htm)**
    With expressions, you can make calculations and access property values and other data from Salesforce or content from Salesforce CMS to pass into a component’s attributes. Use expressions for dynamic output or for passing values into components by assigning them to attributes.
-   **[Create a Logout Link Component](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_custom_logout.htm)**
    To log out your users, you can create a custom logout link component.
-   **[Integrate Third-Party Libraries Using the Privileged Script Tag](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_privileged_script.htm)**
    Some components within an LWR site encapsulate their elements in shadow DOM, which prevents global interaction with those components. As a result, third-party JavaScript libraries such as Google Analytics and Google Tag Manager can have trouble querying the DOM globally on an LWR site. When programmatic access to an element within the DOM is needed, you can write scripts within an <x-oasis-script> privileged script tag. Loading third-party libraries using this privileged script tag lets those libraries bypass any shadow DOM boundaries.

## Related Topics

- Create Custom Record Components (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_custom_records.htm)
- Use Apex and SOQL for Search (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_custom_search.htm)
- Use Expressions to Add Dynamic Data to LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_expressions.htm)
- Create a Logout Link Component (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_custom_logout.htm)
- Integrate Third-Party Libraries Using the Privileged Script Tag (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_privileged_script.htm)
