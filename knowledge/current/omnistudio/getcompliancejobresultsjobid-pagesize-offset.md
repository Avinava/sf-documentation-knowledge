---
title: "getComplianceJobResults(jobId, pageSize,
    offset)"
domain: omnistudio
topic: getcompliancejobresultsjobid-pagesize-offset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.469Z
estimatedTokens: 218
keywords: [getComplianceJobResults, jobId, pageSize, offset, compliance, job, results, specific, API, Version, Requires, Chatter, Usage]
---

# getComplianceJobResults(jobId, pageSize,
    offset)

> Get the compliance job results for a specific job.

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

## Code Examples

```apex
public class JobStatus {
  public void getJobStatus() {
    String jobId = '<JOB ID>';
    Integer pageSize = 10;
    Integer offset = 0;

    // Call API
    ConnectApi.ComplianceJobStatusRepresentation response = 
      ConnectApi.IndustriesCompliance.getComplianceJobResults(jobId, pageSize,
      offset);
    System.debug('Response**********' + response);
  }
}

// Execute the method
JobStatus jobStatus = new JobStatus();
jobStatus.getJobStatus();
```

## Related Topics

- ConnectApi.ComplianceJobStatusRepresentation (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_job_status.htm)
