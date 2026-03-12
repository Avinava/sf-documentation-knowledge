---
title: "Legacy Quote Calculator Plugin"
domain: cpq-plugins
topic: legacy-quote-calculator-plugin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.969Z
estimatedTokens: 553
keywords: [Legacy, Quote, Calculator, Plugin, Apex, code, perform, calculations, CPQ, line, editor]
---

# Legacy Quote Calculator Plugin

> Use Apex code to perform calculations within the CPQ quote line editor.

# Legacy Quote Calculator Plugin

Use Apex code to perform calculations within the CPQ quote line editor.

| Available in: All Salesforce CPQ Editions |
| --- |


![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=cpq_plugins)

#### Important

As of Winter ’17, Salesforce CPQ isn’t developing new features for the Legacy Quote Calculator Plugin. Salesforce CPQ continues to support admin-related configuration cases for legacy calculator features. Salesforce Customer Support responds to bugs only for regressions from existing legacy calculator features. For current quote calculator plugin documentation, review [Javascript Quote Calculator Plugin](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_parent.htm "Add extra functionality to the quote line editor in Salesforce CPQ with custom JavaScript code. Seven available methods allow you to change how calculations are performed and manage page-level security such as field visibility.").

To use the Legacy Page Security Plugin, first create an Apex class. Then enter the Apex class name in the Legacy Page Security Plugin setting in the Salesforce CPQ package settings. You can call only one Apex class at a time in the Legacy Page Security Plugin.

-   **[Calculating True End Date and Subscription Term](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_legacy_quote_calculator_plugin_enddate_subterms.htm)**
    The sample JavaScript script can be used in the Quote Line Calculator to calculate values and store maximum values for the custom quote line fields True Effective End Date and True Effective Term.
-   **[Custom Package Total Calculation](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_legacy_quote_calculator_plugin_custom_package_total_calc.htm)**
    The sample Apex class calculates the total price for all components in a quote line and then stores that value in a custom field.
-   **[Find Lookup Records](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_legacy_quote_calculator_plugin_find_lookup_records.htm)**
    The sample Apex class can be used in the Legacy Quote Line Calculator to query records within the plugin and use fields from those records to set each quote line’s Description field.

## Related Topics

- Javascript Quote Calculator Plugin (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_parent.htm)
- Calculating True End Date and Subscription Term (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_legacy_quote_calculator_plugin_enddate_subterms.htm)
- Custom Package Total Calculation (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_legacy_quote_calculator_plugin_custom_package_total_calc.htm)
- Find Lookup Records (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_legacy_quote_calculator_plugin_find_lookup_records.htm)
