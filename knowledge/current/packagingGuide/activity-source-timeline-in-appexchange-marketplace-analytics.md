---
title: "Activity Source Timeline in AppExchange Marketplace Analytics"
domain: packagingGuide
topic: activity-source-timeline-in-appexchange-marketplace-analytics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.086Z
estimatedTokens: 1227
keywords: [Activity, Source, Timeline, AppExchange, Marketplace, Analytics, how, internal, external, traffic, sources, contribute, listing, time, period]
---

# Activity Source Timeline in AppExchange Marketplace Analytics

> See how internal and external traffic sources contribute to activity on your AppExchange
    listing for a time period that you specify. For example, compare how many times customers viewed
    your listing tile on AppExchange’s search page versus the home page.

# Activity Source Timeline in AppExchange Marketplace Analytics

See how internal and external traffic sources contribute to activity on your AppExchange listing for a time period that you specify. For example, compare how many times customers viewed your listing tile on AppExchange’s search page versus the home page.

Internal traffic originates on the AppExchange website, such as a customer who clicks a personalized recommendation to reach your listing. External traffic originates outside of AppExchange, such as a customer who clicks a Facebook ad to reach your listing.

![The Activity Source Timeline visualization with highlights around the local filter menu and an individual datapoint](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fdashboard%2Fimages%2Factivity_timeline.png&folder=packagingGuide)

To change activities, adjust the local filter (1). The y-axis resizes based on the traffic sources and activities that you select. To see exact values, hover over a line in the chart (2).

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

If the visualization doesn’t display data, filter by a different activity or change the time period.

## Definitions

Here’s how we define the metrics that appear in this visualization.

| Metric | Description |
| --- | --- |
| Installs | Installs of your solution initiated on AppExchange, your website, or from a code repository. For AppExchange installs, we count the number of successful completions of the Get It Now installation flow. Includes installs in production and sandbox orgs. |
| Lead Events | Lead events on your listing. Events include: demos, test drives, chat interactions, Learn More clicks, and Get It Now clicks or installs. A customer who clicks Get It Now and then installs your solution is counted as a single lead event. |
| Tile Hovers | Hovers over your listing tile. To qualify as a hover, the customer must pause long enough over the tile to display the listing detail popover. The count includes repeat hovers by the customer.Hover is available only on the Consultants page. |
| Tile Views | Views of your listing tile. To qualify as a view, the entire tile must be visible in the customer’s browser. Includes any repeat views by the customer. |
| Visits | Visits to your listing. Includes repeat visits by the customer. |

These internal traffic sources are associated with activities.

| Traffic Source | Description |
| --- | --- |
| AppExchange Browse | Activity by customers who reached your listing from areas of AppExchange that aren’t included in other sources. For example, a customer who browses a collection or the AppExchange home page. |
| AppExchange Categories | Activity by customers who reached your listing from one of AppExchange’s Solutions by Type categories.March 26, 2024 is the last date for which AppExchange Categories data is available. After this date, Solutions by Type categories are retired from AppExchange. |
| AppExchange Explore | Activity by customers who reached your listing from an AppExchange Explore page. |
| AppExchange Learn | Activity by customers who reached your listing from an AppExchange Learn page. |
| AppExchange Sponsored | Activity by customers who reached your listing from an AppExchange Sponsored Solutions section.After March 26, 2024, this traffic source includes data only from the Sponsored Solutions section on the AppExchange home page or the Consultants page. |
| AppExchange Sponsored Explore | Activity by customers who reached your listing from the Sponsored Solutions section on an AppExchange Explore page. |
| AppExchange Sponsored Search | Activity by customers who reached your listing from the Sponsored Solutions section on an AppExchange search results page. |
| AppExchange Recommended | Activity by customers who reached your listing from an AppExchange personalized recommendation. |
| AppExchange Search | Activity by customers who reached your listing from a search made using the AppExchange search bar. |

These external traffic sources are associated with activities.

| Traffic Source | Description |
| --- | --- |
| Facebook | Activity by customers who reached your listing from a Facebook page or ad. Includes organic traffic and traffic from ads shown on the Facebook site or Facebook’s Audience Network. |
| Google | Activity by customers who reached your listing from a Google search or ad. Includes organic search traffic and traffic from ads shown on the Google Search Network or Google Display Network. |
| LinkedIn | Activity by customers who reached your listing from a LinkedIn post or ad. |
| Web | Activity by customers who reached your listing from a web source that isn’t affiliated with Facebook or Google. Includes traffic from your company’s website. |
| X (Twitter) | Activity by customers who reached your listing from an X (formerly Twitter) post or ad. |
