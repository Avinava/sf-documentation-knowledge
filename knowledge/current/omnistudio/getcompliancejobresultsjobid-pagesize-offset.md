---
title: "getComplianceJobResults(jobId, pageSize,
    offset)"
domain: omnistudio
topic: getcompliancejobresultsjobid-pagesize-offset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.572Z
keywords: [getComplianceJobResults, jobId, pageSize, offset, API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example]
---

# getComplianceJobResults(jobId, pageSize,
    offset)

# getComplianceJobResults(jobId, pageSize, offset)

Get the compliance job results for a specific job.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.ComplianceJobStatusRepresentation getComplianceJobResults(String jobId, Integer pageSize, Integer offset)

## Parameters

jobId

Type: String

ID of the compliance evaluation job to get the details for.

pageSize

Type: Integer

Number of results that are displayed per page.

offset

Type: Integer

Number of records that are skipped before returning results.

## Return Value

Type: [ConnectApi.ComplianceJobStatusRepresentation](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_job_status.htm "Output representation for job status response.")

## Usage

You need Compliance User permission set to use this method.

## Example

```

```