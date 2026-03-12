---
title: "How to Read App Analytics Package Usage Log Data"
domain: pkg2-dev
topic: how-to-read-app-analytics-package-usage-log-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.990Z
estimatedTokens: 1104
keywords: [How, App, Analytics, Package, Usage, Log, Data, logs, contain, subscribers, interact, managed, packaged, components, line]
---

# How to Read App Analytics Package Usage Log Data

> App Analytics package usage logs contain data about how subscribers interact with your
  managed package. Your managed package contains packaged components, and each package usage log
  line describes an interaction that a user has with one of your packaged components. To understand
  that interaction, analyze each log line—or record—and focus on: what packaged component was
  accessed, who interacted with that packaged component, and how that packaged component interaction
  occurred. Finally, analyze the specific interaction data.

# How to Read App Analytics Package Usage Log Data

App Analytics package usage logs contain data about how subscribers interact with your managed package. Your managed package contains packaged components, and each package usage log line describes an interaction that a user has with one of your packaged components. To understand that interaction, analyze each log line—or record—and focus on: what packaged component was accessed, who interacted with that packaged component, and how that packaged component interaction occurred. Finally, analyze the specific interaction data.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

AppExchange App Analytics is subject to certain usage restrictions as described in the [AppExchange Program Policies](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/alliance-agreements-and-terms/salesforce-partner-program-policies.pdf "HTML (New Window)"). Usage data from [Government Cloud and Government Cloud Plus](https://www.salesforce.com/solutions/industries/government1/products/government-cloud/ "HTML (New Window)") orgs isn’t available in App Analytics.

-   **[Determine What Packaged Component Was Accessed](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_what_component.htm)**
    To analyze a package usage log record, always start with your packaged component.
-   **[Identify Who Interacted with Your Packaged Component](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_who_interacted.htm)**
    After you identify your packaged component, identify both the subscriber org and the user who triggered the interaction.
-   **[Identify How a User Interacted with Your Packaged Component](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_how_user_interacts.htm)**
    After you identify your packaged component and who interacted with it, identify how the user interacted with your packaged component.
-   **[Custom Object and External Object Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_custom_external_objects.htm)**
    When a log record in your package usage log has custom\_entity\_type equal to CustomObject or ExternalObject, it means that a user performed an action that resulted in a create, read, update, or delete (CRUD) interaction on your object.
-   **[Lightning Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_lightning_interactions.htm)**
    Each record in your package usage log that has a custom\_entity\_type of LightningComponent or LightningPage describes an interaction with your packaged Lightning component or page.
-   **[Apex Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_apex_interactions.htm)**
    Each record in your package usage log that has a custom\_entity\_type of ApexClass or ApexTrigger describes an interaction with your packaged Apex class or trigger.
-   **[Visualforce Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_visualforce_interactions.htm)**
    Each record in your package usage log that has a custom\_entity\_type of VisualforcePage describes an interaction with your packaged Visualforce pages.
-   **[CRM Analytics Asset Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_analytics_interactions.htm)**
    Each record in your package usage log that has a custom\_entity\_type of AnalyticsDashboard, AnalyticsLens, or AnalyticsRecipe describes an interaction with your packaged CRM Analytics assets.
-   **[Custom Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_custom_interactions.htm)**
    To understand which features and UI components a subscriber interacted with and how they flow through a user journey, create custom interactions with Apex enums and the IsvPartners.AppAnalytics.logCustomInteraction Apex method.

#### See Also

-   [Package Usage Logs Schema](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.")

## Related Topics

- Determine What Packaged Component Was Accessed (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_what_component.htm)
- Identify Who Interacted with Your Packaged Component (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_who_interacted.htm)
- Identify How a User Interacted with Your Packaged Component (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_how_user_interacts.htm)
- Custom Object and External Object Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_custom_external_objects.htm)
- Lightning Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_lightning_interactions.htm)
- Apex Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_apex_interactions.htm)
- Visualforce Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_visualforce_interactions.htm)
- CRM Analytics Asset Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_analytics_interactions.htm)
- Custom Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_custom_interactions.htm)
- Package Usage Logs Schema (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
