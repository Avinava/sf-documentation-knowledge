---
title: "View the Action History"
domain: salesforce-guided-engagement
topic: view-the-action-history
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.854Z
estimatedTokens: 765
keywords: [View, Action, History, actions, were, launched, agents, tab, Recommendations, component, state, status, started, paused, resumed]
---

# View the Action History

> See which actions were launched, by which agents, and when in the History tab on the
    Actions & Recommendations component. The History tab also shows the state, or status, for
    each action, so you can see when an action was started, paused, resumed, and completed. You also
    can  access the action history for a record programmatically using the RecordActionHistory
    object.

# View the Action History

See which actions were launched, by which agents, and when in the History tab on the Actions & Recommendations component. The History tab also shows the state, or status, for each action, so you can see when an action was started, paused, resumed, and completed. You also can access the action history for a record programmatically using the RecordActionHistory object.

| Available in: Lightning Experience |
| --- |
| Available in: Essentials, Professional, Enterprise, Performance, Unlimited, and Developer EditionsLightning console apps are available for an extra cost to users with Salesforce Platform user licenses for certain products. Some restrictions apply. For pricing details, contact your Salesforce account executive. |


## Use the Component’s History to Understand Status

The History tab lists state changes for actions associated with the record. It helps agents and supervisors grasp status so that they can quickly decide what to do next. For example, in a handoff or escalation, an agent or supervisor can review the history to identify gaps and determine the next step.

Here’s an example. The History tab lists the most recent 20 state changes, sorted with the most recently logged events listed first. Click **View More** to see the next 20 state changes in the log. Users can filter the list to see actions by status. The filter only applies to the last 200 actions. ![The component shows the history of guided actions.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_history_224.png&folder=salesforce_guided_engagement)

## Use APIs to Query the Action History

You can also use APIs to query the RecordActionHistory object, which is a big object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

The RecordActionHistory object is read-only. It is available in API version 44.0 and later.

Both synchronous and asynchronous queries are supported. Using SOQL, SOAP, REST, Bulk, or Apex APIs, synchronous queries must follow a specific pattern or they fail. See the description and examples in the [Object Reference for Salesforce and Lightning Platform](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_recordactionhistory.htm "HTML (New Window)"). To learn more about big objects and how to query them, see the *[Query Big Objects](https://trailhead.salesforce.com/en/modules/big_objects/units/big_objects_querying "HTML (New Window)")* module on Trailhead.

If you have access to Analytics, you can query the RecordActionHistory object and use the data to build an Analytics dashboard. For example, the dashboard can show usage data and compare how many actions were started, paused, resumed, and completed in a given time period.![You can display an Analytics dashboard with RecordActionHistory data.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_guided_action_history_analytics.png&folder=salesforce_guided_engagement)
