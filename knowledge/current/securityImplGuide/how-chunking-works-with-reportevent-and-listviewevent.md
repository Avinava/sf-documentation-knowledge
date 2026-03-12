---
title: "How Chunking Works with ReportEvent and ListViewEvent"
domain: securityImplGuide
topic: how-chunking-works-with-reportevent-and-listviewevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.017Z
estimatedTokens: 1747
keywords: [How, Chunking, Works, ReportEvent, ListViewEvent, occurs, report, view, execution, records, Salesforce, splits, data, chunks, Transaction]
---

# How Chunking Works with ReportEvent and ListViewEvent

> Chunking occurs when a report or list view execution returns many records and
    Salesforce splits the returned data into chunks.

# How Chunking Works with ReportEvent and ListViewEvent

Chunking occurs when a report or list view execution returns many records and Salesforce splits the returned data into chunks.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

#### Tip

This topic applies to ReportEvent, ReportEventStream, ListViewEvent, and ListViewEventStream. However, for readability, we refer to just ReportEvent and ListViewEvent.

When Salesforce chunks a ReportEvent or ListViewEvent (and their streaming equivalents), it breaks it into multiple events in which most field values are repeated. The exceptions are the Records, Sequence, and EventIdentifier fields. You view all the data from a chunked result by correlating these fields with the ExecutionIdentifier field, which is unique across the chunks.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

When a report executes, we provide the first 1000 events with data in the Records field. Use the ReportId field to view the full report.

Let’s describe in more detail the fields of ReportEvent and ListViewEvent (and their storage equivalents) that you use to link together the chunks.

-   Records—A JSON string that represents the report or list view data. If Salesforce has chunked the data into multiple events, each event’s Records field contains different data.
-   Sequence—An incremental sequence number that indicates the order of multiple events that result from chunking, starting with 1. For example, if Salesforce breaks up an event into five chunks, the first chunk’s Sequence field is 1, the second is 2, and so on up to 5.
-   ExecutionIdentifier—A unique identifier for a particular report or list view execution. This identifier differentiates the report or list execution from other executions. If chunking has occurred, this field value is identical across the chunks, and you can use it to link the chunks together to provide a complete data picture.
-   EventIdentifier—A unique identifier for each event, including chunked events.

To view all the data chunks from a single report or list view execution, use the Sequence, Records, and ExecutionIdentifier fields in combination.

For example, let’s say a report execution returns 10K rows. Salesforce splits this data into three chunks based on the size of the records, and then creates three separate ReportEvent events. This table shows an example of the field values in the three events; the fields not shown in the table (except EventIdentifier) have identical values across the three events.

| ExecutionIdentifier | Sequence | Records |
| --- | --- | --- |
| a50a4025-84f2-425d-8af9-2c780869f3b5 | 1 | {"totalSize":3000, "rows":[{"datacells":["005B0000001vURv",..........]}]} |
| a50a4025-84f2-425d-8af9-2c780869f3b5 | 2 | {"totalSize":3000, "rows":[{"datacells":["005B000000fewai"..........]}]} |
| a50a4025-84f2-425d-8af9-2c780869f3b5 | 3 | {"totalSize":4000, "rows":[{"datacells":["005B0000001vURv",..........]}]} |

This sample SOQL query returns data similar to the preceding table.

```

```

## How Transaction Security Works With Chunking

If a chunked event triggers a transaction security policy, Salesforce executes the policy on only the first chunk. The PolicyId, PolicyOutcome, and EvaluationTime field values are repeated in all the chunked events. These tables show different policy actions and execution outcomes and their resulting events, some of which are chunked.

This event results from a triggered policy that had a block action.

| ExecutionIdentifier (value shortened for readability) | Sequence | Records | PolicyId (value shortened for readability) | PolicyOutcome | EvaluationTime |
| --- | --- | --- | --- | --- | --- |
| a50a4...9-2c780869f3b5 | 0 | {"totalSize":0, "rows":[{}]} | 0NIxx...GA2 | Block | 30 |

These events result from a triggered policy that has a multi-factor authentication (MFA) action. The first three rows show the multi-factor authentication in process, and the last three rows show the chunked events.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Multi-factor authentication was previously called two-factor authentication. Some MFA-related values reference “TwoFa”.

| ExecutionIdentifier (value shortened for readability) | Sequence | Records | PolicyId (value shortened for readability) | PolicyOutcome | EvaluationTime |
| --- | --- | --- | --- | --- | --- |
| a50a4...9-2c780869f3b5 | 0 | {"totalSize":0, "rows":[{}]} | 0NIxx...GA2 | TwoFaInitiated | 30 |
|  |  |  |  | TwoFaInProgress |  |
|  |  |  |  | TwoFaSucceed |  |
| 43805...e-5914976709c4 | 2 | {"totalSize":3000, "rows":[{"datacells":["005B000000fewai"..........]}]} | 0NIxx...GA2 | TwoFaNoAction | 24 |
| 43805...e-5914976709c4 | 3 | {"totalSize":4000, "rows":[{"datacells":["005B0000001vURv",..........]}]} | 0NIxx...GA2 | TwoFaNoAction | 24 |
| 43805...e-5914976709c4 | 1 | {"totalSize":3000, "rows":[{"datacells":["005B0000001vURv",..........]}]} | 0NIxx...GA2 | TwoFaNoAction | 24 |

These events result from a policy that has a block action but the event didn't meet the condition criteria. As a result, the PolicyOutcome field is NoAction.

| ExecutionIdentifier (value shortened for readability) | Sequence | Records | PolicyId (value shortened for readability) | PolicyOutcome | EvaluationTime |
| --- | --- | --- | --- | --- | --- |
| a50a4...9-2c780869f3b5 | 1 | {"totalSize":3000, "rows":[{"datacells":["005B0000001vURv",..........]}]} | 0NIxx...GA2 | NoAction | 24 |
| a50a4...9-2c780869f3b5 | 2 | {"totalSize":3000, "rows":[{"datacells":["005B000000fewai"..........]}]} | 0NIxx...GA2 | NoAction | 24 |
| a50a4...9-2c780869f3b5 | 3 | {"totalSize":4000, "rows":[{"datacells":["005B0000001vURv",..........]}]} | 0NIxx...GA2 | NoAction | 24 |

These events result from a policy that has a multi-factor authentication action but the policy wasn’t triggered and so the action didn’t occur. The policy didn’t trigger because the user already had a high assurance session level.

| ExecutionIdentifier (value shortened for readability) | Sequence | Records | PolicyId (value shortened for readability) | PolicyOutcome | EvaluationTime |
| --- | --- | --- | --- | --- | --- |
| a50a4...9-2c780869f3b5 | 1 | {"totalSize":3000, "rows":[{"datacells":["005B0000001vURv",..........]}]} | 0NIxx...GA2 | TwoFaNoAction | 24 |
| a50a4...9-2c780869f3b5 | 2 | {"totalSize":3000, "rows":[{"datacells":["005B000000fewai"..........]}]} | 0NIxx...GA2 | TwoFaNoAction | 24 |
| a50a4...9-2c780869f3b5 | 3 | {"totalSize":4000, "rows":[{"datacells":["005B0000001vURv",..........]}]} | 0NIxx...GA2 | TwoFaNoAction | 24 |

## Code Examples

```
SELECT ExecutionIdentifer, Sequence, Records FROM ReportEvent
```
