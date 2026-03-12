---
title: "ListViewEvent Policies"
domain: securityImplGuide
topic: listviewevent-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.744Z
estimatedTokens: 481
keywords: [ListViewEvent, Policies, View, event, monitor, data, viewed, downloaded, views, Salesforce, Classic, Lightning, Experience, API, Policy]
---

# ListViewEvent Policies

> List View event policies monitor when data is viewed or downloaded from your list views
  using Salesforce Classic, Lightning Experience, or the API.

# ListViewEvent Policies

List View event policies monitor when data is viewed or downloaded from your list views using Salesforce Classic, Lightning Experience, or the API.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| ListViewEvent | Application Name, Developer Name, Event Source, List View ID, Name, Name of Columns, Number of Columns, Order By, Owner ID, Queried Entities, Rows Processed, Scope, Session Level, Source IP, User ID, Username | Block, Notifications, Multi-Factor Authentication (for UI logins)Multi-factor authentication isn’t supported for list views in Lightning pages, so the action is upgraded to Block. |

## What You Can Do With It

Create a policy that can:

-   Block a user who tries to access a list view of sensitive patent data
-   Notify you if a user exports more than 5,000 rows from a list view in your org

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

The values captured by transaction security policies are unique API names that can be retrieved by performing REST API Describe calls on the object. When creating a ListViewEvent policy, make sure that the values you want the conditions to check for are unique API names and not display labels. For example, a “Name of Column” condition checks for values that match the metadata information retrieved from a Describe call on the report, not the column headers displayed on the report. Refer to the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_listviewdescribe.htm) for more information.
