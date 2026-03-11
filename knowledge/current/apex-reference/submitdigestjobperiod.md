---
title: "submitDigestJob(period)"
domain: apex-reference
topic: submitdigestjobperiod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.484Z
keywords: [submitDigestJob, period, Submit, daily, weekly, Chatter, email, digest, job., API, Version, Requires, Signature, Parameters, Return, Value, Usage, Warning, Example, See]
---

# submitDigestJob(period)

> Submit a daily or weekly Chatter email digest job.

### submitDigestJob(period)

Submit a daily or weekly Chatter email digest job.

#### API Version

37.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.DigestJobRepresentation submitDigestJob(ConnectApi.DigestPeriod period)

#### Parameters

period

Type: [ConnectApi.DigestPeriod](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#DigestFrequencyEnum)

Time period that’s included in a Chatter email digest. Values are:

-   DailyDigest—The email includes up to the 50 latest posts from the previous day.
-   WeeklyDigest—The email includes up to the 50 latest posts from the previous week.

#### Return Value

Type: [ConnectApi.DigestJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_digest_job.htm#apex_connectapi_output_digest_job "Represents a successfully enqueued API digest job request.")

#### Usage

The times when Chatter sends email digests are not configurable in the UI. To control when email digests are sent and to use this method, contact Salesforce to enable API-only Chatter Digests.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

Enabling API-only Chatter Digests disables the scheduled digests for your org. You must call the API for your users to receive their digests.

We recommend scheduling digest jobs by implementing the Apex Schedulable interface with this method. To monitor your digest jobs from Setup, enter Background Jobs in the Quick Find box, then select **Background Jobs**.

#### Example

Schedule daily digests:

```

```

Schedule weekly digests:

```

```

#### See Also

-   [Apex Scheduler](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_scheduler.htm "Apex Scheduler - HTML (New Window)")