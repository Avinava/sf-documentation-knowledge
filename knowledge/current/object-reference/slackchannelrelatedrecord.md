---
title: "SlackChannelRelatedRecord"
domain: object-reference
topic: slackchannelrelatedrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.280Z
estimatedTokens: 324
keywords: [SlackChannelRelatedRecord, record, mapping, Slack, channel, Salesforce, that’s, made, API, version, 65.0, later, Calls, Usage]
---

# SlackChannelRelatedRecord

> Represents the related record mapping between a Slack channel and a
         Salesforce record that’s made when you create a Salesforce channel. This object is
      available in API version 65.0 and later.

# SlackChannelRelatedRecord

Represents the related record mapping between a Slack channel and a Salesforce record that’s made when you create a Salesforce channel. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesFilter, SortDescriptionThe name of the related record mapping. |
| RelatedRecord | TypestringPropertiesFilter, Group, SortDescriptionThe Salesforce record ID associated with the related record mapping. |
| SlackChannel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Slack channel ID of the Salesforce channel associated with the related record mapping. |
| TopLevelTeam | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Slack Enterprise org ID associated with the Salesforce channel. |

## Usage

Use this object to retrieve and query the related record mapping between a Slack channel and a Salesforce record. You can select this object in Salesforce Flow Builder and Slack Workflow Builder to trigger actions when a Salesforce channel is created.

This object is read only. You can’t create, modify, or delete the related record mappings between Slack channels and Salesforce records using this object.
