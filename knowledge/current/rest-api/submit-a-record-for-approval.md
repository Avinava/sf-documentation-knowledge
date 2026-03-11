---
title: "Submit a Record for Approval"
domain: rest-api
topic: submit-a-record-for-approval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:24.939Z
keywords: [Submit, Record, Approval]
---

# Submit a Record for Approval

# Submit a Record for Approval

Use the [Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm "Accesses all approval processes. Can also be used to submit a particular record if that entity supports an approval process and one has already been defined. Records can be approved and rejected if the current user is an assigned approver.") resource to submit a record or a collection of records for approval. Each call takes an array of requests.

Example usage

```

```

Example request body submit.json file

In the following example, the record "001D000000I8mIm" is submitted for approval process "PTO\_Request\_Process" by skipping its entry criteria on behalf of submitter "005D00000015rZy."

```

```

Example JSON response body

```

```