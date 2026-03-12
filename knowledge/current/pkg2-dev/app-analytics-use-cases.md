---
title: "App Analytics Use Cases"
domain: pkg2-dev
topic: app-analytics-use-cases
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.062Z
estimatedTokens: 1853
keywords: [App, Analytics, Cases, achieve, business, objectives, across, teams, understand, common, how, map, data, sample, product]
---

# App Analytics Use Cases

> To achieve your business objectives, use App Analytics across your teams. Read this
  guide to understand common use cases and how to map App Analytics data to sample product
  features.

# App Analytics Use Cases

To achieve your business objectives, use App Analytics across your teams. Read this guide to understand common use cases and how to map App Analytics data to sample product features.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


## App Analytics Use Cases

While there are various use cases for App Analytics, these cases tend to be the most common.

| Partner User | Goal | How App Analytics Helps |
| --- | --- | --- |
| Presales Engineer or Account Executive | Provide a great customer trial experience and close deals | App Analytics provides detailed package usage logs for sandboxes and trial orgs.Use log data to know how many users are trialing your package and which features they’re actively testing.Analyze log data to provide customized recommendations to your prospective subscribers.Help prospective subscribers try more features or further configure the trial experience to demonstrate how your solutions can address their use cases. |
| Customer Success Representative | Drive feature adoption and minimize subscriber attrition | App Analytics provides package usage logs, package usage summaries, and subscriber snapshots in production for subscribers.Use comprehensive usage data from all three data types to know how and when the various users for a subscriber are employing your solutions.Provide tailored recommendations to drive feature adoption, identify upsell opportunities, and forecast attrition risk.Track a user’s activity across multiple packages to help you determine where opportunities and risks lie within a particular package.Combine your App Analytics data with license usage data from the License Management App to get a better picture of how your subscriber is adopting your product. |
| Product Manager | Obtain product insights and drive roadmap prioritization | App Analytics provides you with usage data from your entire subscriber base so that you can carry out high-level and detailed user-level analysis.As a product manager, you can analyze usage data to:Identify your most-used features.Identify incomplete user journeys.Identify user pain points.Identify unexpected usage patterns or validate expected behavior.Retire rarely used or end-of-life features.These insights help you design and build product improvements and fixes. Then you can prioritize and adjust your product roadmap accordingly. |
| Software Engineer | Optimize code | App Analytics provides usage data on Apex. Use your data on its own or combine it with more data to optimize your code, making it more performant and reliable.Consider using your Apex data in combination with these products.Use the Subscriber Support Console to troubleshoot subscriber issues and access logs as code is executed in real time.Use the Salesforce Code Analyzer to identify and fix problems in your code while you develop. |

There are other use cases where App Analytics isn’t a good fit. For example, we don’t recommend that you use App Analytics to audit customer license usage based on the user\_id\_token in package usage logs. We provide usage data for users licensed to use your package, for users who indirectly interact with it, and for automated processes.

## Mapping App Analytics Data to Product Features

For the most common App Analytics use cases, analyze App Analytics usage data at a feature level. Feature-level analysis supports conversations about those features that you have with subscribers and with your teams.

App Analytics data is organized around the concept of a custom\_entity, which is the developer name of the components that are included in your managed package. custom\_entity information is included in package usage summaries, package usage logs, and subscriber snapshots.

## Example

Imagine that you want to understand how subscribers are using a new feature in your solution that enables them to easily manage newsletter subscriptions from Salesforce. To build this feature, your developers add these components to your managed package.

-   A new custom object, Newsletter\_Subscription
-   A new Lightning Page, SubscriptionPage
-   A new Lightning Component, SubscriptionComponent
-   A new Apex Class, SubscriptionHandler

As subscribers interact with your components, interaction data flows through in App Analytics.

| Component | Package Usage Log (Daily) | Package Usage Summary (Monthly) | Subscriber Snapshot (Daily) |
| --- | --- | --- | --- |
| Newsletter_Subscription | Create Read Update and Delete (CRUD) events | CRUD events | Record Counts |
| SubscriptionPage | Lightning interactions | Lightning interactions | — |
| SubscriptionComponent | Lightning component interactions | Lightning component interactions | — |
| SubscriptionHandler | Apex executions | Apex executions | — |

The volume of total App Analytics data from your feature’s data mixed with data for your entire solution across all subscribers can be vast. To make it easier for you to analyze, employ one of these strategies.

-   Select a single component that best represents usage for this feature, and look solely at the data where it appears under custom\_entity. In this example, the custom object Newsletter\_Subscription is a good candidate because it tracks CRUD events from all sources, not only from the other components.
-   Select a combination of components for a user journey that you care about. Using our example, select an interaction for SubscriptionPage, followed by SubscriptionComponent, SubscriptionHandler and CRUD for Newsletter\_Subscription.

Package usage logs and subscriber snapshots are updated daily so that you can track subscriber usage more closely and more frequently. Package usage summaries are updated monthly. To understand how we gather and make this data available to you, read [How Does AppExchange App Analytics Data Flow?](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_data_flow.htm "HTML (New Window)")

#### See Also

-   [How to Read App Analytics Package Usage Log Data](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_intro.htm "App Analytics package usage logs contain data about how subscribers interact with your managed package. Your managed package contains packaged components, and each package usage log line describes an interaction that a user has with one of your packaged components. To understand that interaction, analyze each log line—or record—and focus on: what packaged component was accessed, who interacted with that packaged component, and how that packaged component interaction occurred. Finally, analyze the specific interaction data.")

-   [Customer Success Recipes](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_csm_intro.htm "Customer success is a relationship-focused method of ensuring that your customers achieve their desired outcomes while using your managed packages.")

-   [Troubleshoot Subscriber Issues](atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_subscriber_support_overview.htm "Use the Subscriber Support Console to access information about your subscribers. Subscribers can also grant you login access to troubleshoot issues directly within your app. After you’re granted access, you can log in to the subscriber’s org and view their configuration and data to troubleshoot and resolve issues.")

## Related Topics

- How to Read App Analytics Package Usage Log Data (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_intro.htm)
- Customer Success Recipes (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_csm_intro.htm)
- Troubleshoot Subscriber Issues (atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_subscriber_support_overview.htm)
