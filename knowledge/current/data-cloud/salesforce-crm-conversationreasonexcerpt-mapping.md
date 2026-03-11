---
title: "Salesforce CRM: ConversationReasonExcerpt Mapping"
domain: data-cloud
topic: salesforce-crm-conversationreasonexcerpt-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.651Z
keywords: [Salesforce, CRM, ConversationReasonExcerpt, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: ConversationReasonExcerpt Mapping

# Salesforce CRM: ConversationReasonExcerpt Mapping

These data mappings are for the ConversationReasonExcerpt DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Conversation Reason Excerpt object used with the CRM connector. You can add or customize the data mappings.

| DLO Field Label | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Channel Type | ChannelType__c | text | Conversation Entry Transcript Excerpt | Engagement Channel Type |
| Conversation Duration Seconds | DurationInSeconds__c | number | Conversation Entry Transcript Excerpt | Duration In Seconds |
| Conversation Research IDPrimary Key | Id__c | text | Conversation Entry Transcript Excerpt | Conversation Entry Transcript Excerpt ID |
| Conversation Reason ID | ConversationReasonId__c | text | Conversation Entry Transcript Excerpt | Conversation Reason |
| Conversation Reason Status | Status__c | text | Conversation Entry Transcript Excerpt | Conversation Intent Status |
| Conversation Turn Count | TurnCount__c | number | Conversation Entry Transcript Excerpt | Turn Count |
| Excerpt Text Index | ExcerptTextIndex__c | text | Conversation Entry Transcript Excerpt | Excerpt Text Index |
| Is Moved | IsMoved__c | text | Conversation Entry Transcript Excerpt | Moved |
| Language of the Conversation Excerpt | Language__c | text | Conversation Entry Transcript Excerpt | Language |
| Relevance Order | Order__c | text | Conversation Entry Transcript Excerpt | Excerpt Sequence Number |