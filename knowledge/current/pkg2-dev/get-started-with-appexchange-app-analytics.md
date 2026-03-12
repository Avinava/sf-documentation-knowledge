---
title: "Get Started with AppExchange App Analytics"
domain: pkg2-dev
topic: get-started-with-appexchange-app-analytics
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.927Z
estimatedTokens: 1321
keywords: [Started, AppExchange, App, Analytics, usage, data, how, subscribers, interact, managed, packages, packaged, components, identify, attrition]
---

# Get Started with AppExchange App Analytics

> AppExchange App Analytics provides usage data about how subscribers interact with your
  AppExchange managed packages and packaged components. You can use these details to identify
  attrition risks, inform feature development decisions, and improve user experience.

# Get Started with AppExchange App Analytics

AppExchange App Analytics provides usage data about how subscribers interact with your AppExchange managed packages and packaged components. You can use these details to identify attrition risks, inform feature development decisions, and improve user experience.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

AppExchange App Analytics is subject to certain usage restrictions as described in the [AppExchange Program Policies](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/alliance-agreements-and-terms/salesforce-partner-program-policies.pdf "HTML (New Window)"). Usage data from [Government Cloud and Government Cloud Plus](https://www.salesforce.com/solutions/industries/government1/products/government-cloud/ "HTML (New Window)") orgs isn’t available in App Analytics.

App Analytics is available for first- and second-generation (1GP and 2GP) managed packages that passed security review and are registered to a License Management App. Usage data is provided as package usage logs, monthly package usage summaries, or subscriber snapshots. All usage data is available as downloadable comma-separated value (.csv) files. To view the data in dashboard or visualization format, use [CRM Analytics](https://help.salesforce.com/articleView?id=bi_explorer.htm&language=en_US "HTML (New Window)") or a third-party analytics tool.

In a 24-hour period, you can download a maximum 20 GB of AppExchange App Analytics data.

-   **[App Analytics Use Cases](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_use_cases.htm)**
    To achieve your business objectives, use App Analytics across your teams. Read this guide to understand common use cases and how to map App Analytics data to sample product features.
-   **[Enable App Analytics on Your Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_enable_2gp.htm)**
    Activate AppExchange App Analytics on your second-generation (2GP) managed package to access AppExchange App Analytics package usage logs and subscriber snapshots. Package usage summaries are available by default.
-   **[Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_download_mp_logs.htm)**
    To request package usage logs, monthly package usage summaries, and subscriber snapshots, use the AppAnalyticsQueryRequest object. Usage logs, usage summaries, and subscriber snapshots are downloadable comma-separated value (.csv) files.
-   **[Considerations for Custom Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_interactions.htm#app_analytics_custom_interactions)**
    Easily create and log custom interactions on your managed package using Apex. As subscribers interact with your package and your Apex code is executed, the custom interactions that you defined are logged. Retrieve your custom interactions in your package's AppExchange App Analytics usage logs and usage summaries.
-   **[AppExchange App Analytics Best Practices](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_best_practices.htm)**
    To plan and maximize your AppExchange App Analytics query strategy, follow our best practices. First, use file compression to reduce your data results file size. Second, schedule and automate your regular App Analytics queries. Third, plan, schedule, and automate catch-up queries to supplement your regular query data.
-   **[Package Usage Summaries](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_managed_package_usage_summaries.htm)**
    Package usage summaries provide high-level metrics by calendar month. Discover how many users access your package and which operations they perform.
-   **[Package Usage Logs](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_managed_package_log_files.htm)**
    Analyze adoption and user behavior, then make informed feature development decisions based on data from package usage logs. AppExchange App Analytics tracks UI, API-based, Lightning-based, and Apex operations, and it logs each CRUD operation on components and custom objects in packages. Events from sandbox and trial orgs are tracked in package usage logs. Events from scratch orgs aren’t tracked.
-   **[Subscriber Snapshots](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_subscriber_snapshots.htm)**
    Subscriber snapshots give you a point-in-time summary of subscriber activity. Use subscriber snapshots to see usage trends by org and package.
-   **[Test Custom Integrations](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_test_custom_integrations.htm)**
    To test your custom integrations in a nonproduction environment, use AppExchange App Analytics Simulation Mode. Submit an App Analytics query request and receive sample usage data.
-   **[AppExchange App Analytics Developer Cookbook](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_intro.htm)**
    Delve deeper into your AppExchange App Analytics managed package usage data by creating key performance indicators (KPIs). First, complete some prerequisites and retrieve your App Analytics data. Next, prepare your CRM Analytics environment. Finally, to build your KPIs, complete App Analytics recipes.

## Related Topics

- App Analytics Use Cases (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_use_cases.htm)
- Enable App Analytics on Your Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_enable_2gp.htm)
- Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_download_mp_logs.htm)
- Considerations for Custom Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_interactions.htm)
- AppExchange App Analytics Best Practices (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_best_practices.htm)
- Package Usage Summaries (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_managed_package_usage_summaries.htm)
- Package Usage Logs (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_managed_package_log_files.htm)
- Subscriber Snapshots (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_subscriber_snapshots.htm)
- Test Custom Integrations (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_test_custom_integrations.htm)
- AppExchange App Analytics Developer Cookbook (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_intro.htm)
