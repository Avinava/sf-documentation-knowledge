---
title: "Measure Sponsored Search Promotion Impact"
domain: packagingGuide
topic: measure-sponsored-search-promotion-impact
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.061Z
estimatedTokens: 1113
keywords: [Measure, Sponsored, Search, Promotion, Impact, co-marketing, formula, provided, Salesforce, data, AppExchange, Marketplace, Analytics, compares, listing]
---

# Measure Sponsored Search Promotion Impact

> To measure the impact of a co-marketing Sponsored Search Promotion, use a formula
  provided by Salesforce and data from AppExchange Marketplace Analytics. The formula compares
  listing visits during a time period with a Sponsored Search Promotion to an equivalent period
  without a promotion.

# Measure Sponsored Search Promotion Impact

To measure the impact of a co-marketing Sponsored Search Promotion, use a formula provided by Salesforce and data from AppExchange Marketplace Analytics. The formula compares listing visits during a time period with a Sponsored Search Promotion to an equivalent period without a promotion.


| User Permissions Needed |
| --- |
| To view Marketplace Analytics: | Manage Listings |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

To view promotion data, you must participate in the Partner Co-Marketing Program. Learn more about the program on [AppExchange](https://appexchange.salesforce.com/mktcollections/curated/appexchange-marketing-program-amp).

The formula for measuring the impact of a Partner Co-Marketing Sponsored Search Promotion is:

impact = 100 \* (((visitsSponsoredSearch + visitsSearchPromotion) - visitsSearchControl) / visitsSearchControl)

The value that you calculate for impact provides the percentage increase or decrease in visits to your listing during the promotion compared to the period without the promotion. For example, if impact is 10, that means your listing received 10% more visits during the promotion period.

The steps in this task walk you through how to find the data that replaces the placeholder values in the formula for a Sponsored Search Promotion.

1.  Log in to the [Salesforce Partner Community](https://partners.salesforce.com/).
2.  Click **Publishing** | **Home** | **Analytics**.
3.  Select a listing with a Sponsored Search Promotion.
4.  Compile activity data for the promotion period.
    1.  For Time Period, select **Custom**, and then specify the start and end dates of the sponsored search promotion.
    2.  Go to the Activity Sources visualization.
    3.  For Activity, select all sources but **Visits** to remove them from visualization.
    4.  In the visualization, hover over the AppExchange Search segment, and then note the number of visits as visitsSearchPromotion.
    5.  Hover over the AppExchange Sponsored Search segment, and then note the number of visits as visitsSponsoredSearch.
5.  Compile activity data for the control period.
    1.  For Time Period, select **Custom**, and then specify a date range with the same length as the promotion.

        Avoid date ranges that overlap with a promotion.

        For example, if your promotion ran for 30 days, specify another 30-day period.

    2.  Go to the Activity Sources visualization.
    3.  For Activity, select all sources but **Visits** to remove them from visualization.
    4.  In the visualization, hover over the AppExchange Search segment, and then note the number of visits as visitsSearchControl.
6.  Calculate the impact of the promotion using the compiled data and this formula:

    impact = 100 \* (((visitsSponsoredSearch + visitsSearchPromotion) - visitsSearchControl) / visitsSearchControl)


## Example

Jona, a search engine optimization consultant, wants to measure the impact of a Sponsored Search Promotion that his client purchased in the second quarter (Q2) of the previous fiscal year.

In Marketplace Analytics, Jona starts by compiling data for the promotion period. He adjusts the time period to match the start and end dates of the quarter. In the Activity Sources visualization, he notes that his client’s listing received 413 visits from Search sources (visitsSearchPromotion = 413) and 224 visits from Sponsored Search sources (visitsSponsoredSearch = 224).

Next, Jona compiles data for the control period. For the control period, he chooses Q2 of the current fiscal year. He adjusts the time period to match the start and end dates of the quarter. In the Activity Sources visualization, he notes that the listing received 436 visits from Search sources (visitsSearchControl = 436).

Using the promotion and control period data, he calculates the impact:

impact = 100 \* (((visitsSponsoredSearch + visitsSearchPromotion) - visitsSearchControl) / visitsSearchControl)

impact = 100 \* (((224 + 413) - 436) / 436)

impact = 46.1

This impact value means the client’s listing received about 46% more visits during the promotion compared to the control period.

After you calculate the impact of a promotion, you can compare it to Partner Co-Marketing Program historical averages. See the [Salesforce Partner Community](https://partners.salesforce.com/pdx/s/partnercomarketing-landing).
