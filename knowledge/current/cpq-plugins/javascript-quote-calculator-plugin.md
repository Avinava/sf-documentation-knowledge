---
title: "Javascript Quote Calculator Plugin"
domain: cpq-plugins
topic: javascript-quote-calculator-plugin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.940Z
estimatedTokens: 696
keywords: [Javascript, Quote, Calculator, Plugin, Add, extra, functionality, line, editor, Salesforce, CPQ, custom, code, Seven, allow]
---

# Javascript Quote Calculator Plugin

> Add extra functionality to the quote line editor in Salesforce CPQ with custom
    JavaScript code. Seven available methods allow you to change how calculations are performed and
    manage page-level security such as field visibility.

# Javascript Quote Calculator Plugin

Add extra functionality to the quote line editor in Salesforce CPQ with custom JavaScript code. Seven available methods allow you to change how calculations are performed and manage page-level security such as field visibility.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


JavaScript code is saved in Salesforce CPQ as custom scripts.

-   **[Quote Calculator Plugin Guidelines](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_guidelines.htm)**
    Consider these key guidelines when planning scripts for the Javascript Quote Calculator Plugin.
-   **[Quote Calculator Plugin Methods](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_methods.htm)**
    The Quote Calculator Plugin can reference these seven methods. You can export any, all, or none of them to achieve your desired behavior.
-   **[Calculating True End Date and Subscription Term](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_sub_use_case.htm)**
    Use JavaScript to make a Quote Line Calculator plugin that calculates values and stores maximum values for the custom quote line fields True Effective End Date and True Effective Term.
-   **[Custom Package Total Calculation](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_package_use_case.htm)**
    The sample JavaScript script can be used in the Quote Line Calculator to calculate the total price for all components in a quote line and then store that value in a custom field.
-   **[Find Lookup Records](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_lookup_use_case.htm)**
    Use this sample JavaScript script in the Quote Line Calculator to query records within the plugin and to set each quote line’s Description field using fields from those records.
-   **[Insert Records](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_insert_records.htm)**
    The sample JavaScript script can be used in the Quote Line Calculator to insert records.
-   **[Javascript Page Security Plugin](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_javascript_page_security_plugin.htm)**
    Use Javascript functions to control field visibility and editability on your CPQ quotes.
-   **[Legacy Page Security Plugin (Apex)](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_page_security_plugin.htm)**
    The Salesforce CPQ Apex page security plugins let developers control field-level visibility or data entry mode in Salesforce CPQ VisualForce pages.
-   **[Guidelines for Heroku in Quote Calculator Plugins](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_heroku_guidelines.htm)**
    Salesforce CPQ quote calculator plugins call Heroku to perform asynchronous calculations. When you write a quote calculator plugin, review important guidelines for working with the Heroku service.

## Related Topics

- Quote Calculator Plugin Guidelines (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_guidelines.htm)
- Quote Calculator Plugin Methods (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_methods.htm)
- Calculating True End Date and Subscription Term (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_sub_use_case.htm)
- Custom Package Total Calculation (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_package_use_case.htm)
- Find Lookup Records (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_lookup_use_case.htm)
- Insert Records (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_insert_records.htm)
- Javascript Page Security Plugin (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_javascript_page_security_plugin.htm)
- Legacy Page Security Plugin (Apex) (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_page_security_plugin.htm)
- Guidelines for Heroku in Quote Calculator Plugins (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_heroku_guidelines.htm)
