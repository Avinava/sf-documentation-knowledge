---
title: "List Custom Channels and Channel Members"
domain: platform-events
topic: list-custom-channels-and-channel-members
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.720Z
estimatedTokens: 474
keywords: [Custom, Channels, Channel, Members, Salesforce, org, performing, SOQL, queries, Tooling, API]
---

# List Custom Channels and Channel Members

> You can find which channels and channel members are set up in your Salesforce org by
  performing SOQL queries through Tooling API.

# List Custom Channels and Channel Members

You can find which channels and channel members are set up in your Salesforce org by performing SOQL queries through Tooling API.


| User Permissions Needed |
| --- |
| To query PlatformEventChannel and PlatformEventChannelMember Tooling objects: | View Setup and Configuration |
| To use REST with Tooling API: | API Enabled |

To perform SOQL queries, make a REST query call or use the Query Editor in the Developer Console with the **Tooling API** option selected. To make REST calls using Postman, set up Postman with the Salesforce Platform APIs collection. See [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce) in Trailhead.

Perform a GET request to this endpoint with the SOQL query appended.

```

```

This query returns all the custom channels. The query results in this page are based on the Order\_Channel\_\_chn channel.

```

```

If you're using Postman, expand **Event Platform** | **Custom Channels**, and then click **List event channels**.

Sample result:

Id

0YLRM0000004CEI4A2

DeveloperName

Order\_Channel

ChannelType

event

MasterLabel

Custom Channel for Orders

And this query returns all the channel members.

```

```

If you're using Postman, expand **Event Platform** | **Custom Channels**, and then click **List channel members**.

For example, the query returns the two channel members created earlier. The SelectedEntity field references the ID of the custom platform event.

First channel member:

Id

0v8RM0000000N6uYAE

DeveloperName

Order\_Channel\_chn\_Order\_NorthAmer\_e

EventChannel

0YLRM0000004CEI4A2

SelectedEntity

01IRM0000006w522AA

Second channel member:

Id

0v8RM0000004VPJYA2

DeveloperName

Order\_Channel\_chn\_Order\_EMEA\_e

EventChannel

0YLRM0000004CEI4A2

SelectedEntity

01IRM0000006w572AA

## Code Examples

```
/services/data/v66.0/tooling/query?q=<query>
```

```
SELECT Id, DeveloperName, ChannelType, MasterLabel FROM PlatformEventChannel
```

```
SELECT Id, DeveloperName,EventChannel, SelectedEntity FROM PlatformEventChannelMember
```
