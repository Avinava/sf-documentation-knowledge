---
title: "Does a Retrieve Job Have a Status of Pending?"
domain: metadata-api
topic: does-a-retrieve-job-have-a-status-of-pending
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.839Z
keywords: [Does, Retrieve, Job, Status, Pending?]
---

# Does a Retrieve Job Have a Status of Pending?

# Does a Retrieve Job Have a Status of Pending?

If you initiate several concurrent retrieve operations for a single org, Metadata API automatically puts some of those jobs in a queue, if that becomes necessary for service protection. If a retrieve job has a status of Pending, it’s in the queue. When one of the active retrieve jobs completes, Metadata API takes a pending job from the queue and activates it. If a retrieve job has a status of InProgress, it’s active. The process repeats until the job queue is cleared.

For more information, see "Metadata Limits" in the Salesforce Developer Limits and Allocations Quick Reference.