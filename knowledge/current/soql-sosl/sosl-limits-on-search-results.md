---
title: "SOSL Limits on Search Results"
domain: soql-sosl
topic: sosl-limits-on-search-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.877Z
estimatedTokens: 753
keywords: [SOSL, Limits, Search, Results, engine, number, records, analyzed, stage, process, Sometimes, cause, matching, record, excluded]
---

# SOSL Limits on Search Results

> The search engine limits the number of records analyzed at each stage of the search
		process. Sometimes, these limits cause a matching record to be excluded from a user’s
		results.

# SOSL Limits on Search Results

The search engine limits the number of records analyzed at each stage of the search process. Sometimes, these limits cause a matching record to be excluded from a user’s results.

This image illustrates how the search engine processes SOSL searches and limits results. Each color represents an object, and each raindrop represents some records. The numbers correspond to this flow:

1.  The search engine looks for matches to the search term across a maximum of 2,000 records (this limit starts with API version 28.0).
2.  If you query one object only, a maximum of 250 records are returned. To return up to 2,000 results, include either the WHERE clause or ORDER BY clause.
3.  If you query multiple objects, each object returns up to the minimum number between 2,000/**n** (where **n**\=number of objects) and 250. For example, if you query 2 objects, the value of 2,000/2 is higher than 250, so up to 250 results are returned. If you query 10 objects, the value of 2,000/10 is lower than 250, so up to 200 results are returned.
4.  Admins (users with the View All Data permission) see the full set of results returned.
5.  For all other users, SOSL applies user permission filters. Individual users see only those records that they have access to. Results sets and order vary by the user issuing the search and can change throughout the day as records are added or removed from the index.

![truncation and sharing rules can limit results users see](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsoql_sosl%2Fimages%2Ftruncation.gif&folder=soql_sosl)

## Example

Joe Smith, a sales executive at Acme, Inc., wants to find the account record for Industrial Computing. He types Industrial into the search bar. Because so many records match the search term Industrial, a limit is imposed on the results. Unfortunately for Joe, the record he wanted is outside the limit. This concept is illustrated in the image as the single raindrop outside of the filter. Because Joe used a global search, limits are applied to each object type to make up the 2,000 record limit. The illustration shows five blue raindrops going into the filter, but only three make it to the next stage. If Joe limits his search to just one object, the limit applies to only that object, increasing the chance that the record he wants is returned. Joe retries his search by typing Industrial Computing San Francisco. With a more specific search term, the search engine returns better matches, even with the same limits applied. In this scenario, the record Joe’s looking for is one of the blue raindrops that makes it from the top of the filter all the way through to Joe’s search results page.

For other SOSL limits, see [SOQL and SOSL Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_soslsoql.htm "HTML (New Window)") in the Salesforce Developer Limits and Allocations Quick Reference.
