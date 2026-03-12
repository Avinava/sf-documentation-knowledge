---
title: "Dynamically Display Your Top Five Reps with Windowing"
domain: bi-dev-guide-saql
topic: dynamically-display-your-top-five-reps-with-windowing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.299Z
estimatedTokens: 207
keywords: [Dynamically, Display, Top, Five, Reps, Windowing, functions, perform, calculations, over, dynamic, range]
---

# Dynamically Display Your Top Five Reps with Windowing

> Windowing functions perform calculations over a dynamic range.

# Dynamically Display Your Top Five Reps with Windowing

Windowing functions perform calculations over a dynamic range.

## Example - Dynamically Display Your Top Five Reps

Use windowing to create a chart that dynamically displays your top-five reps for each country. The chart updates continuously as opportunities are won. The example uses windowing to calculate:

-   Percentage contribution that each rep made to the total amount, partitioned by country
-   Ranking of the rep’s contribution, partitioned by country

These calculations let us display the top-five reps in each country.

```

```

The resulting graph shows the top-five reps in each country and displays each rep’s ranking.

![Diagram showing the meeting dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_top5.png&folder=bi_dev_guide_saql)

## Code Examples

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by ('Billing_Country', 'Account_Owner');

q = foreach q generate 'Billing_Country', 'Account_Owner', 

-- sum(Amount) is the total amount for a single rep in the current country
-- sum(sum('Amount') is the total amount for ALL reps in the current country
-- sum(Amount) / sum(sum('Amount') calculates the percentage that each rep contributed
-- to the total amount in the current country
((sum('Amount')/sum(sum('Amount')) 


-- [..] means "include all records in the partition"
-- "by Billing_Country" means partition, or group, by country
over ([..] partition by 'Billing_Country')) * 100) as 'Percent_AmountContribution', 

-- rank the percent contribution and partition by the country
rank() over ([..] partition by ('Billing_Country') order by sum('Amount') desc ) as 'Rep_Rank';

-- filter to include only the top 5 reps
q = filter q by 'Rep_Rank' <=5;
```
