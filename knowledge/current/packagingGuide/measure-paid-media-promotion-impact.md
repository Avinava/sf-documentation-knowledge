---
title: "Measure Paid Media Promotion Impact"
domain: packagingGuide
topic: measure-paid-media-promotion-impact
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.047Z
estimatedTokens: 1168
keywords: [Measure, Paid, Media, Promotion, Impact, co-marketing, formula, provided, Salesforce, data, AppExchange, Marketplace, Analytics, compares, listing]
---

# Measure Paid Media Promotion Impact

> To measure the impact of a co-marketing Paid Media Promotion, use a formula provided by
  Salesforce and data from AppExchange Marketplace Analytics. The formula compares listing visits
  during a time period with a Paid Media Promotion to an equivalent period without a
  promotion.

# Measure Paid Media Promotion Impact

To measure the impact of a co-marketing Paid Media Promotion, use a formula provided by Salesforce and data from AppExchange Marketplace Analytics. The formula compares listing visits during a time period with a Paid Media Promotion to an equivalent period without a promotion.


| User Permissions Needed |
| --- |
| To view Marketplace Analytics: | Manage Listings |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

To view promotion data, you must participate in the Partner Co-Marketing Program. Learn more about the program on [AppExchange](https://appexchange.salesforce.com/mktcollections/curated/appexchange-marketing-program-amp).

The formula for measuring the impact of a Partner Co-Marketing Paid Media Promotion is:

impact = 100 \* (((visitsSponsoredWeb + visitsSponsoredGoogle) - (visitsWebControl + visitsGoogleControl)) / (visitsWebControl + visitsGoogleControl))

The value that you calculate for impact provides the percentage increase or decrease in visits to your listing during the promotion compared to the period without the promotion. For example, if impact is 30, that means your listing received 30% more visits during the promotion period.

The steps in this task walk you through how to find the data that replaces the placeholder values in the formula for a Paid Media Promotion.

1.  Log in to the [Salesforce Partner Community](https://partners.salesforce.com/).
2.  Click **Publishing** | **Home** | **Analytics**
3.  Select a listing with a Paid Media Promotion.
4.  Compile activity data for the promotion period.
    1.  For Time Period, select **Custom**, and then specify the start and end dates of the paid media promotion.
    2.  Go to the Activity Sources visualization.
    3.  For Activity, select all sources but **Visits** to remove from visualization.
    4.  In the visualization, hover over the Web segment, and then note the number of visits as visitsSponsoredWeb.
    5.  In the visualization, hover over the Google segment, and then note the number of visits as visitsSponsoredGoogle.
5.  Compile activity for the control period.
    1.  For Time Period, select **Custom**, and then specify a date range with the same length as the promotion.

        Avoid date ranges that overlap with a promotion.

        For example, if your promotion ran for 30 days, specify another 30-day period.

    2.  Go to the Activity Sources visualization.
    3.  For Activity, select all sources but **Visits** to remove from visualization.
    4.  In the visualization, hover over the Web segment, and then note the number of visits as visitsWebControl.
    5.  In the visualization, hover over the Google segment, and then note the number of visits as visitsGoogleControl.
6.  Calculate the impact of the promotion using the compiled data and this formula:

    impact = 100 \* (((visitsSponsoredWeb + visitsSponsoredGoogle) - (visitsWebControl + visitsGoogleControl)) / (visitsWebControl + visitsGoogleControl))


## Example

Emi, a social media manager at Codey’s DevOps Toolkit, wants to measure the impact of a Paid Media Promotion that ran for 30 days in the first quarter (Q1) of the current fiscal year.

In Marketplace Analytics, Emi starts by compiling data for the promotion period. He adjusts the time period to match the start and end dates of the promotion. In the Activity Sources visualization, he notes that the DevOps Toolkit listing received 466 visits from Web sources (visitsSponsoredWeb = 466) and 33 visits from Google sources (visitsSponsoredGoogle = 33).

Next, Emi compiles data for the control period. For the control period, he chooses 30 days from Q1 of the previous fiscal year. He adjusts the time period to match the start and end dates of the 30-day period. In the Activity Sources visualization, he notes that the listing received 192 visits from Web sources (visitsWebControl = 192) and 50 visits from Google sources (visitsGoogleControl = 50).

Using the promotion and control period data, he calculates the impact:

impact = 100 \* (((visitsSponsoredWeb + visitsSponsoredGoogle) - (visitsWebControl + visitsGoogleControl)) / (visitsWebControl + visitsGoogleControl))

impact = 100 \* (((466 + 33) - (192 + 50)) / (192 + 50))

impact = 106.2

This impact score means Codey’s DevOps Toolkit received about 106% more visits during the promotion compared to the control period.

After you calculate the impact of a promotion, you can compare it to Partner Co-Marketing Program historical averages. See the [Salesforce Partner Community](https://partners.salesforce.com/pdx/s/partnercomarketing-landing).
