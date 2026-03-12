---
title: "PackagePushJob"
domain: object-reference
topic: packagepushjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.252Z
estimatedTokens: 829
keywords: [PackagePushJob, individual, push, job, upgrading, package, org, version, another, There, multiple, jobs, created, want, upgrade]
---

# PackagePushJob

> Represents an individual push job for upgrading a package in an org
			from one version to another version. There can be multiple push jobs created for one
			push request. For example, if you want to upgrade five orgs as part of one push, you
			have one PackagePushRequest record and five PackagePushJob records.

# PackagePushJob

Represents an individual push job for upgrading a package in an org from one version to another version. There can be multiple push jobs created for one push request. For example, if you want to upgrade five orgs as part of one push, you have one PackagePushRequest record and five PackagePushJob records.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To initiate a push upgrade for a first-generation managed package, the Upload AppExchange Packages user permission is required.

To initiate a push upgrade for an unlocked or second-generation managed package, the Create and Update Second-Generation Packages user permission is required.

The push upgrade feature is only available to first- and second-generation managed packages that have passed AppExchange security review. To enable push upgrades for your managed package, log a support case in the [Salesforce Partner Community.](https://partners.salesforce.com/)

For unlocked packages, push upgrades are enabled by default.

## Fields

| Field Name | Details |
| --- | --- |
| DurationSeconds | TypeintPropertiesGroup, NillableDescriptionThe length of time in seconds, that the push upgrade took to complete. This field is new in API version 51.0. |
| EndTime | TypedateTimePropertiesCreate, Nillable, UpdateDescriptionThe date and time (UTC) at which the push upgrade ended, in ISO 8601 format. This field is new in API version 51.0. |
| PackagePushRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The ID of the parent push request record that must have been created. |
| StartTime | TypedateTimePropertiesCreate, Nillable, UpdateDescriptionThe date and time (UTC) at which the push upgrade started, in ISO 8601 format. This field is new in API version 51.0. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the job. Valid values are:CanceledCreated (default)FailedIn ProgressPendingSucceededDon’t specify this value when you create the push job. The default value of Created is used. |
| SubscriberOrganizationKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The organization key of the org where the package is upgraded. This references orgKey in PackageSubscriber. |

## Usage

Suppose that you want to push version 3.4.6 of your package to all orgs. You’ve already identified the orgs eligible for the upgrade by using MetadataPackageVersion and created the push request using PackagePushRequest. Now let’s write some code to create a push job for each eligible org.

This code sample uses the Web Services Connector (WSC).

```

```

Or, if you’re using REST API, submit a POST request to the PackagePushJob sObject endpoint, as in the following example. SOAP API is also supported. This example returns the push job ID (starting with 0DX) that is required to query the status of the job.

```

```

**Checking the Status of a Push Job**

To check the job status, simply query the Status field. For example:

```

```

Here’s an example in Java.

```

```

You can also continuously poll the job status until the job is done. The following Java example polls the status every 10 seconds.

```

```

## Code Examples

```
PackageSubscriber[] subscribers = new PackageSubscriber[];

// ... populate eligible and desired subscribers

// Create the PackagePushJob array
PackagePushJob[] jobs = new PackagePushJob[subscribers.length];

for (int i = 0; i < subscribers.length; i++) {
	// create a job for each subscriber...
	PackagePushJob job = new PackagePushJob();
	// ... associate it to the PackagePushRequest ppr...
	job.setPackagePushRequestId(ppr.getId());
	// ... and add the orgKey
	job.setSubscriberOrganizationKey(subscribers[i].getOrgKey());
	jobs[i] = job;
}

// Save the jobs
SaveResult[] saveResults = conn.create(jobs);

// Add the newly generated id's to the PackagePushJob objects
for (int i = 0; i < saveResults.length; i++) {
	if (saveResults[i].isSuccess()) {
		jobs[i].setId(saveResults[i].getId());
	}
}
```

```
POST
/services/data/v38.0/sobjects/packagepushjob/
{
   "PackagePushRequestId" : "0DV...",
   "SubscriberOrganizationKey" : "00DR00..."
}
```

```
SELECT Id, Status FROM PackagePushJob WHERE PackagePushRequestId ='0DV...'
```

```
// Finds the status of the PackagePushJob with the given id
String PACKAGE_PUSH_JOB_STATUS_QUERY = "Select status from PackagePushJob where Id = '%s'";

// job is a PackagePushJob instance
QueryResult queryResult = conn.query(String.format(PACKAGE_PUSH_JOB_STATUS_QUERY, 
job.getId()));

// extract the status from the QueryResult 
String status = ((PackagePushJob) queryResult.getRecords()[0]).getStatus();

// optionally, update the PackagePushJob instance with the latest status
job.setStatus(status);
```

```
// The set of states that indicate a PackagePushJob has completed
final Set<String> TERMINAL_STATES = new HashSet<>();
TERMINAL_STATES.add("Succeeded");
TERMINAL_STATES.add("Failed");
TERMINAL_STATES.add("Canceled");
		
String status = queryJobStatus(job); // this method returns the status as retrieved in the previous code sample

// If the status is not one of the completed statuses...
while(!TERMINAL_STATES.contains(status)) {
	Thread.sleep(10 * 1000); // ... wait 10 seconds and try again
	status = queryJobStatus(job);
}
```
