---
title: "PK Chunking"
domain: api-asynch
topic: pk-chunking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.039Z
estimatedTokens: 1981
keywords: [Chunking, primary, key, enable, automatic, bulk, query, job, splits, queries, large, tables, chunks, record, IDs]
---

# PK Chunking

> Use the primary key (PK) chunking request header to enable automatic PK chunking for a
  bulk query job. PK chunking splits bulk queries on large tables into chunks based on the record
  IDs, or primary keys, of the queried records.

# PK Chunking

Use the primary key (PK) chunking request header to enable automatic PK chunking for a bulk query job. PK chunking splits bulk queries on large tables into chunks based on the record IDs, or primary keys, of the queried records.

Each chunk is processed as a separate batch that counts toward your daily batch limit, and you must download each batch’s results separately. PK chunking works only with queries that don’t include subqueries or conditions other than WHERE.

PK chunking works by adding record ID boundaries to the query with a WHERE clause, limiting the query results to a smaller chunk of the total results. The remaining results are fetched with extra queries that contain successive boundaries. The number of records within the ID boundaries of each chunk is referred to as the chunk size. The first query retrieves records between a specified starting ID and the starting ID plus the chunk size. The next query retrieves the next chunk of records, and so on.

For example, let’s say you enable PK chunking for the following query on an Account table with 10,000,000 records.

```

```

Assuming a chunk size of 250,000 and a starting record ID of 001300000000000, the query is split into these 40 queries. Each query is submitted as a separate batch.

```

```

Each query executes on a chunk of 250,000 records specified by the base-62 ID boundaries.

PK chunking is designed for extracting data from entire tables, but you can also use it for filtered queries. Because records could be filtered from each query’s results, the number of returned results for each chunk can be less than the chunk size. The IDs of soft-deleted records are counted when the query is split into chunks, but the records are omitted from the results. Therefore, if soft-deleted records fall within a given chunk’s ID boundaries, the number of returned results is less than the chunk size. In some scenarios, the net chunk size can also be greater than what is specified.

The default chunk size is 100,000, and the maximum size is 250,000. The default starting ID is the first record in the table. However, you can specify a different starting ID to restart a job that failed between chunked batches.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

A chunk size between 100,000 and 250,000 is recommended. Smaller chunk sizes can cause empty batches to be created and sent.

When a query is successfully chunked, the original batch’s status shows as NOT\_PROCESSED. If the chunking fails, the original batch’s status shows as FAILED, but any chunked batches that were successfully queued during the chunking attempt are processed as normal. When the original batch’s status is changed to NOT\_PROCESSED, monitor the subsequent batches. You can retrieve the results from each subsequent batch after it’s completed. Then you can safely close the job.

Salesforce recommends that you enable PK chunking when querying tables with more than 10 million records or when a bulk query consistently times out. However, the effectiveness of PK chunking depends on the specifics of the query and the queried data.

## Supported Objects

PK chunking only works with the following objects:

-   Account
-   AccountContactRelation
-   AccountTeamMember
-   AiVisitSummary
-   Asset
-   AssignedResource
-   Campaign
-   CampaignMember
-   CandidateAnswer
-   Case
-   CaseArticle
-   CaseComment
-   CaseRelatedIssue
-   ChangeRequest
-   ChangeRequestRelatedIssue
-   ChangeRequestRelatedItem
-   Claim
-   ClaimParticipant
-   Contact
-   ContentDistribution
-   ContentDocument
-   ContentNote
-   ContentVersion
-   Contract
-   ContractLineItem
-   ConversationDefinitionEventLog
-   ConversationEntry
-   ConversationReason
-   ConversationReasonExcerpt
-   ConversationReasonGroup
-   CustomerProperty
-   EinsteinAnswerFeedback
-   EmailMessage
-   EngagementScore
-   Entitlement
-   Event
-   EventRelation
-   FeedItem
-   Incident
-   IncidentRelatedItem
-   Individual
-   InsurancePolicy
-   InsurancePolicyAsset
-   InsurancePolicyParticipant
-   Lead
-   LeadInsight
-   LinkedArticle
-   LiveChatTranscript
-   LoginHistory
-   LoyaltyAggrPointExprLedger
-   LoyaltyLedger
-   LoyaltyLedgerTraceability
-   LoyaltyMemberCurrency
-   LoyaltyMemberTier
-   LoyaltyPartnerProduct
-   LoyaltyProgramMbrPromotion
-   LoyaltyProgramMember
-   LoyaltyProgramPartner
-   LoyaltyProgramPartnerLedger
-   MessagingSession
-   MlRetrainingFeedback
-   Note
-   ObjectTerritory2Association
-   Opportunity
-   OpportunityContactRole
-   OpportunityHistory
-   OpportunityLineItem
-   OpportunitySplit
-   OpportunityTeamMember
-   Order
-   OrderItem
-   Pricebook2
-   PricebookEntry
-   Problem
-   ProblemIncident
-   ProblemRelatedItem
-   Product2
-   ProductConsumed
-   ProductRequired
-   QuickText
-   Quote
-   QuoteLineItem
-   ReplyText
-   ScoreIntelligence
-   ServiceAppointment
-   ServiceContract
-   Task
-   TaskRelation
-   TermDocumentFrequency
-   TimeSheetEntry
-   TransactionJournal
-   User
-   UserRole
-   VoiceCall
-   VoiceCallRecording
-   Voucher
-   WebCart
-   WorkloadUnit
-   WorkOrder
-   WorkOrderLineItem
-   WorkPlan
-   WorkPlanTemplate

Support includes custom objects.

## Sharing and History Objects

You can use PK chunking with any Sharing and History tables that support standard objects. To enable PK-Chunking for History and Sharing objects, specify the parent object in the Sforce-Enable-PKChunking header by using the parent header field name.

## Filtered Queries

PK chunking is designed for extracting data from entire tables, but you can also use it for filtered queries.

Because records could be filtered from each query’s results, the number of returned results for each chunk can be less than the chunk size. Also, the IDs of soft-deleted records are counted when the query is split into chunks, but the records are omitted from the results. Therefore, if soft-deleted records fall within a given chunk’s ID boundaries, the number of returned results is less than the chunk size.

Some query limitations apply that *effectively disable PK chunking* for the specified bulk query job:

-   Filtering on any field with “id” in the field name (ID fields).
-   Using an "ORDER BY" clause.

## Header Field Name and Values

Field name

Sforce-Enable-PKChunking

Field values

-   TRUE—Enables PK chunking with the default chunk size, starting from the first record ID in the queried table.
-   FALSE—Disables PK chunking. If the header isn’t provided in the request, the default is FALSE.
-   chunkSize—Specifies the number of records within the ID boundaries for each chunk. The default is 100,000, and the maximum size is 250,000. If the query contains filters or soft-deleted records, the number of returned results for each chunk could be less than the chunk size. Other factors could return a net chunk size that is greater than the specified chunkSize. To exercise a tighter limit on the number of records in a chunk, add the useSampledData header. In any case, consider experimenting to determine the optimal chunk size.
-   parent—Specifies the parent object when you’re enabling PK chunking for queries on sharing objects. The chunks are based on the parent object’s records rather than the sharing object’s records. For example, when querying on AccountShare, specify Account as the parent object. PK chunking is supported for sharing objects as long as the parent object is supported.

    Similarly, for CaseHistory, specify Case as the parent object. For example:

    Sforce-Enable-PKChunking: parent=Case

-   startRow—Specifies the 15-character or 18-character record ID to be used as the lower boundary for the first chunk. Use this parameter to specify a starting ID when restarting a job that failed between batches.

Example

Sforce-Enable-PKChunking: chunkSize=50000; startRow=00130000000xEftMGH

## Code Examples

```
SELECT Name FROM Account
```

```
SELECT Name FROM Account WHERE Id >= 001300000000000 AND Id < 00130000000132G
SELECT Name FROM Account WHERE Id >= 00130000000132G AND Id < 00130000000264W
SELECT Name FROM Account WHERE Id >= 00130000000264W AND Id < 00130000000396m
...
SELECT Name FROM Account WHERE Id >= 00130000000euQ4 AND Id < 00130000000fxSK
```
