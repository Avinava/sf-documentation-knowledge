---
title: "Measure Listing Sponsorship Promotion Impact"
domain: packagingGuide
topic: measure-listing-sponsorship-promotion-impact
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.054Z
estimatedTokens: 1291
keywords: [Measure, Listing, Sponsorship, Promotion, Impact, Partner, Co-Marketing, formula, provided, Salesforce, data, AppExchange, Marketplace, Analytics, compares]
---

# Measure Listing Sponsorship Promotion Impact

> To measure the impact of a Partner Co-Marketing Listing Sponsorship Promotion, use a
  formula provided by Salesforce and data from AppExchange Marketplace Analytics. The formula
  compares listing visits during a time period with a Listing Sponsorship Promotion to an equivalent
  period without a promotion. You can apply this formula to Home Page, Consultant Page, Business
  Need , or Industry Promotions.

# Measure Listing Sponsorship Promotion Impact

To measure the impact of a Partner Co-Marketing Listing Sponsorship Promotion, use a formula provided by Salesforce and data from AppExchange Marketplace Analytics. The formula compares listing visits during a time period with a Listing Sponsorship Promotion to an equivalent period without a promotion. You can apply this formula to Home Page, Consultant Page, Business Need , or Industry Promotions.


| User Permissions Needed |
| --- |
| To view Marketplace Analytics: | Manage Listings |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

To view promotion data, you must participate in the Partner Co-Marketing Program. Learn more about the program on [AppExchange](https://appexchange.salesforce.com/mktcollections/curated/appexchange-marketing-program-amp).

The formula for measuring the impact of a Partner Co-Marketing Listing Sponsorship Promotion is:

impact = 100 \* (((visitsSponsoredListing + visitsBrowsePromotion) - visitsBrowseControl) / visitsBrowseControl)

The value that you calculate for impact provides the percentage increase or decrease in visits to your listing during the promotion compared to the period without the promotion. For example, if impact is 25, that means your listing received 25% more visits during the promotion period.

The steps in this task walk you through how to find the data that replaces the placeholder values in the formula for a Home Page Promotion.

1.  Log in to the [Salesforce Partner Community](https://partners.salesforce.com/).
2.  Click **Publishing** | **Home** | **Analytics**.
3.  Select a listing with a co-marketing promotion.
4.  Compile activity data for the promotion period.
    1.  For Time Period, select **Custom**, and then specify the start and end dates of the home page promotion.
    2.  Go to the Activity Sources visualization.
    3.  For Activity, select all sources but **Visits** to remove them from visualization.
    4.  In the visualization, hover over the AppExchange Browse segment, and then note the number of visits as visitsBrowsePromotion.
    5.  Go to the Co-Marketing Performance Timeline visualization.
    6.  For Activity, select **Visits**.
    7.  Find the home page promotion that you want to measure, and then note the number of visits as visitsSponsoredListing.
5.  Compile activity data for the control period.
    1.  For Time Period, select **Custom**, and then specify a date range with the same length as the promotion.

        Avoid date ranges that overlap with a promotion.

        For example, if your promotion ran for 30 days, specify another 30-day period.

    2.  Go to the Activity Sources visualization.
    3.  For Activity, select all sources but **Visits** to remove from visualization.
    4.  In the visualization, hover over the AppExchange Browse segment, and then note the number of visits as visitsBrowseControl.
6.  Calculate the impact of the promotion using the compiled data and this formula:

    impact = 100 \* (((visitsSponsoredListing + visitsBrowsePromotion) - visitsBrowseControl) / visitsBrowseControl)


## Example

Ciara, a marketing specialist at Appy’s Maps, wants to measure the impact of a Home Page Promotion that her company purchased in the first month of the third quarter (Q3) of the current fiscal year.

In Marketplace Analytics, Ciara starts by compiling data for the promotion period. She adjusts the time period to match the start and end dates of the first month of Q3. In the Activity Sources visualization, she notes that the Appy’s Maps listing received 160 visits from Browse sources (visitsBrowsePromotion = 160). In the Co-Marketing Performance Timeline visualization, she notes that the listing received 379 visits from the home page promotion for the same period (visitsSponsoredListing = 379).

Next, Ciara compiles data for the control period. For the control period, she chooses the first month of Q3 of the previous fiscal year. She adjusts the time period to match the start and end dates of the month. In the Activity Sources visualization, she notes that the listing received 215 visits from Browse sources (visitsBrowseControl = 215).

Using the promotion and control period data, she calculates the impact:

impact = 100 \*(((visitsSponsoredListing + visitsBrowsePromotion) - visitsBrowseControl) / visitsBrowseControl)

impact = 100 \* (((379 + 160) - 215) / 215)

impact = 150.6

This impact score means Appy’s Maps received about 151% more visits during the promotion compared to the control period.

After you calculate the impact of a promotion, you can compare it to Partner Co-Marketing Program historical averages. See the [Salesforce Partner Community](https://partners.salesforce.com/pdx/s/partnercomarketing-landing).

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

You can use a similar formula to measure the impact of Business Need, Industry, and Consultant Page Promotions. Instead of using home page visits for visitsSponsoredListing, substitute visits for the promotion type that you’re interested in.
