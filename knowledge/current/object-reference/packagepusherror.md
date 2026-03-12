---
title: "PackagePushError"
domain: object-reference
topic: packagepusherror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.243Z
estimatedTokens: 496
keywords: [PackagePushError, error, encountered, push, number, records, created, depends, jobs, result, Calls, Special, Access, Rules, Usage]
---

# PackagePushError

> Represents an error encountered during a push request. The number of
			PackagePushError records created depends on the number of push jobs in the request that
			result in an error.

# PackagePushError

Represents an error encountered during a push request. The number of PackagePushError records created depends on the number of push jobs in the request that result in an error.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To initiate a push upgrade for a first-generation managed package, the Upload AppExchange Packages user permission is required.

To initiate a push upgrade for an unlocked or second-generation managed package, the Create and Update Second-Generation Packages user permission is required.

The push upgrade feature is only available to first- and second-generation managed packages that have passed AppExchange security review. To enable push upgrades for your managed package, log a support case in the [Salesforce Partner Community.](https://partners.salesforce.com/)

For unlocked packages, push upgrades are enabled by default.

## Fields

| Field Name | Details |
| --- | --- |
| ErrorDetails | TypestringPropertiesNillable, SortDescriptionExplanation of the error. |
| ErrorMessage | TypestringPropertiesNillable, SortDescriptionThe error code that appears in the API. |
| ErrorSeverity | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionValid values are:ErrorWarning |
| ErrorTitle | TypestringPropertiesNillable, SortDescriptionThe error message title that appears in the API. |
| ErrorType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionValid values are:ApexTestFailureDeployErrorFeatureMissingIneligibleUpgradeLimitExceededLockingFailurePACErrorUnclassifiedError |
| PackagePushJobId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. The parent push job record ID. |

## Usage

Suppose that your push upgrade request wasn’t successful due to some of its jobs failing. Let’s write some code to find out what those errors were.

This code sample uses the Web Services Connector (WSC).

```

```

## Code Examples

```
// Retrieves all PackagePushError objects associated with the PackagePushJob with the given
// ID
final String PACKAGE_PUSH_ERROR_QUERY = "Select ErrorMessage, ErrorDetails, ErrorTitle,"  
+ " ErrorSeverity, ErrorType from PackagePushError where PackagePushJobId = '%s'";

// job is a PackagePushJob instance
QueryResult queryResult = conn.query(String.format(PACKAGE_PUSH_ERROR_QUERY, job.getId()));

StringBuilder errorMessages = new StringBuilder();
errorMessages.append("Errors for PackagePushJob [").append(job.getId()).append("]:")
	.append("
");

// There can be multiple PackagePushErrors for a given PackagePushJob
for(SObject r : queryResult.getRecords()) {
	PackagePushError e = (PackagePushError) r;
	errorMessages.append("Title: ").append(e.getErrorTitle()).append("
");
	errorMessages.append("Severity: ").append(e.getErrorSeverity()).append("
");
	errorMessages.append("Type: ").append(e.getErrorType()).append("
");
	errorMessages.append("Message: ").append(e.getErrorMessage()).append("
");
	errorMessages.append("Details: ").append(e.getErrorDetails()).append("
");
	errorMessages.append("
");
}

String errors errorMessages.toString();
```
