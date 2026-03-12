---
title: "deployRecentValidation()"
domain: metadata-api
topic: deployrecentvalidation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.386Z
estimatedTokens: 907
keywords: [deployRecentValidation, Deploys, recently, validated, component, running, Apex, tests, Usage, Version, Arguments, Sample, Code—Java]
---

# deployRecentValidation()

> Deploys a recently validated component set without running Apex
            tests.

# deployRecentValidation()

Deploys a recently validated component set without running Apex tests.

## Syntax

```

```

## Usage

Use deployRecentValidation() to deploy your components to production in less time by skipping the execution of Apex tests. Ensure that the following requirements are met before deploying a recent validation.

-   The components have been validated successfully for the target environment within the last 10 days.
-   As part of the validation, Apex tests in the target org have passed.
-   Code coverage requirements are met.
    -   If all tests in the org or all local tests are run, overall code coverage is at least 75%, and Apex triggers have some coverage.
    -   If specific tests are run with the RunSpecifiedTests test level, each class and trigger that was deployed is covered by at least 75% individually.

This call is equivalent to performing a quick deployment of a recent validation on the Deployment Status page in the Salesforce user interface.

Before you call deployRecentValidation(), your organization must have a validation that was recently run. You can run a validation on a set of components by calling [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") with the checkOnly property of the deployOptions parameter set to true. Note the ID that you obtained from the deploy() call. You’ll use this ID for the deployRecentValidation() call in the next step.

After you’ve run a validation successfully, use these steps to quick-deploy the validation to the same target environment.

1.  To start an asynchronous quick deployment, call deployRecentValidation() and pass it the ID of a recent validation. This ID is obtained from the previous [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") call. The deployRecentValidation() call returns the ID of the quick deployment. Note this value. You’ll use it in the next step.
2.  Check for the completion of the call. This process is similar to that of [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org."). Issue a [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") call in a loop until the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field of the returned [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") contains true, which means that the call is completed. The [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") object contains information about an in-progress or completed deployment that was started by using the deployRecentValidation() call. When calling [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy()."), pass in the ID value that you obtained in the first step.

## Version

Available in API version 33.0 and later.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| validationID | string | The ID of a recent validation. |

## Response

Type: string

The ID of the quick deployment.

## Sample Code—Java

```

```

## Code Examples

```
string = metadatabinding.deployRecentValidation(ID validationID)
```

```apex
package com.salesforce.test.metadata;

import java.rmi.RemoteException;

import com.sforce.soap.metadata.CodeCoverageWarning;
import com.sforce.soap.metadata.DeployDetails;
import com.sforce.soap.metadata.DeployMessage;
import com.sforce.soap.metadata.DeployResult;
import com.sforce.soap.metadata.MetadataConnection;
import com.sforce.soap.metadata.RunTestFailure;
import com.sforce.soap.metadata.RunTestsResult;
import com.sforce.soap.partner.Connector;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;

/**
 * Quick-deploy a recent validation. 
 * Prerequisite: A successful validation (check-only deploy) has been done in the org recently. 
 */
public class DeployRecentValidationSample {
    // binding for the metadata WSDL used for making metadata API calls
    private MetadataConnection metadataConnection;

    // one second in milliseconds
    private static final long ONE_SECOND = 1000;
    // maximum number of attempts to deploy the zip file
    private static final int MAX_NUM_POLL_REQUESTS = 50; 

    public static void main(String[] args) throws Exception {
        final String USERNAME = args[0];
        final String PASSWORD = args[1]; 
        final String URL = args[2];
        
        final String recentValidationId = args[3];
        
        DeployRecentValidationSample sample = new DeployRecentValidationSample(
                          USERNAME, PASSWORD, URL);
        sample.deployRecentValidation(recentValidationId);
    }
    
    public DeployRecentValidationSample(String username, String password, String loginUrl) 
            throws ConnectionException {
        createMetadataConnection(username, password, loginUrl);
    }

    public void deployRecentValidation(String recentValidationId)
        throws RemoteException, Exception
    {
        String asyncResultId = metadataConnection.deployRecentValidation(recentValidationId);
        
        // Wait for the deploy to complete
        int poll = 0;
        long waitTimeMilliSecs = ONE_SECOND;
        DeployResult deployResult = null;
        boolean fetchDetails;
        do {
            Thread.sleep(waitTimeMilliSecs);
            // double the wait time for the next iteration
            waitTimeMilliSecs *= 2;
            if (poll++ > MAX_NUM_POLL_REQUESTS) {
                throw new Exception("Request timed out. If this is a large set " +
                        "of metadata components, check that the time allowed by " +
                        "MAX_NUM_POLL_REQUESTS is sufficient.");
            }
            
            // Fetch in-progress details once for every 3 polls
            fetchDetails = (poll % 3 == 0);
            deployResult = metadataConnection.checkDeployStatus(asyncResultId, fetchDetails);
            System.out.println("Status is: " + deployResult.getStatus());
            if (!deployResult.isDone() && fetchDetails) {
                printErrors(deployResult, "Failures for deployment in progress:
");
            }
        }
        while (!deployResult.isDone());
        
        if (!deployResult.isSuccess() && deployResult.getErrorStatusCode() != null) {
            throw new Exception(deployResult.getErrorStatusCode() + " msg: " +
                    deployResult.getErrorMessage());
        }

        if (!fetchDetails) {
            // Get the final result with details if we didn't do it in the last attempt.
            deployResult = metadataConnection.checkDeployStatus(asyncResultId, true);
        }

        if (!deployResult.isSuccess()) {
            printErrors(deployResult, "Final list of failures:
");
            throw new Exception("The files were not successfully deployed");
        }
        
        System.out.println("The recent validation " + recentValidationId + 
                            " was successfully deployed");
    }
    
    /**
     * Print out any errors, if any, related to the deploy.
     * @param result - DeployResult
     */
    private void printErrors(DeployResult result, String messageHeader)
    {
        DeployDetails deployDetails = result.getDetails();
        
        StringBuilder errorMessageBuilder = new StringBuilder();
        if (deployDetails != null) {
            DeployMessage[] componentFailures = deployDetails.getComponentFailures();
            for (DeployMessage message : componentFailures) {
                String loc = (message.getLineNumber() == 0 ? "" :
                    ("(" + message.getLineNumber() + "," +
                            message.getColumnNumber() + ")"));
                if (loc.length() == 0
                        && !message.getFileName().equals(message.getFullName())) {
                    loc = "(" + message.getFullName() + ")";
                }
                errorMessageBuilder.append(message.getFileName() + loc + ":" +
                        message.getProblem()).append('
');
            }
            RunTestsResult rtr = deployDetails.getRunTestResult();
            if (rtr.getFailures() != null) {
                for (RunTestFailure failure : rtr.getFailures()) {
                    String n = (failure.getNamespace() == null ? "" :
                        (failure.getNamespace() + ".")) + failure.getName();
                    errorMessageBuilder.append("Test failure, method: " + n + "." +
                            failure.getMethodName() + " -- " +
                            failure.getMessage() + " stack " +
                            failure.getStackTrace() + "

");
                }
            }
            if (rtr.getCodeCoverageWarnings() != null) {
                for (CodeCoverageWarning ccw : rtr.getCodeCoverageWarnings()) {
                    errorMessageBuilder.append("Code coverage issue");
                    if (ccw.getName() != null) {
                        String n = (ccw.getNamespace() == null ? "" :
                            (ccw.getNamespace() + ".")) + ccw.getName();
                        errorMessageBuilder.append(", class: " + n);
                    }
                    errorMessageBuilder.append(" -- " + ccw.getMessage() + "
");
                }
            }
        }
        
        if (errorMessageBuilder.length() > 0) {
            errorMessageBuilder.insert(0, messageHeader);
            System.out.println(errorMessageBuilder.toString());
        }
    }
    
    private void createMetadataConnection( 
        final String username,
        final String password,
        final String loginUrl) throws ConnectionException {

        final ConnectorConfig loginConfig = new ConnectorConfig();
        loginConfig.setUsername(username);
        loginConfig.setPassword(password);
        loginConfig.setAuthEndpoint(loginUrl);
        
        Connector.newConnection(loginConfig);
        
        
        final ConnectorConfig metadataConfig = new ConnectorConfig();
        metadataConfig.setServiceEndpoint(
            loginConfig.getServiceEndpoint().replace("/u/", "/m/"));
        metadataConfig.setSessionId(loginConfig.getSessionId());
        this.metadataConnection = com.sforce.soap.metadata.Connector.
            newConnection(metadataConfig);
    }

}
```

## Related Topics

- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- checkDeployStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
- done (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- DeployResult (atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)
