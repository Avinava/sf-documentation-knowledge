---
title: "deploy()"
domain: metadata-api
topic: deploy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:38.685Z
estimatedTokens: 5154
keywords: [deploy, Uses, file, representations, components, create, update, delete, those, Salesforce, org., Syntax, Usage, Note, Deploy, Components, Org, Check, Status, Deployment]
---

# deploy()

> Uses file representations of components to create, update, or delete those components
        in a Salesforce org.

# deploy()

Uses file representations of components to create, update, or delete those components in a Salesforce org.

## Syntax

```

```

## Usage

Use this call to take file representations of components and deploy them into an org by creating, updating, or deleting the components they represent.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

To migrate Data 360 metadata from a sandbox org to a parent sandbox or a production org, use [DevOps data kit](https://help.salesforce.com/s/articleView?language=en_US&id=data.c360_a_data_package_kits.htm&type=5) instead of this call.

Here are the deploy limits. Limits can change without notice.

| Feature | Limit |
| --- | --- |
| Maximum compressed .zip folder size1 | Approximately 39 MB |
| Maximum uncompressed folder size2 | Approximately 600 MB |
| Maximum number of files included in a first-generation managed package (1GP). Only 1GP packages that have passed AppExchange Security Review can contain this number of files. | 35,000 |
| Maximum number of files included in an unlocked or second-generation managed package | 10,000 |

1 Metadata API base-64 encodes components after they’re compressed. The resulting .zip file can't exceed 50 MB. Base-64 encoding increases the size of the payload by approximately 22%, so your compressed payload can't exceed approximately 39 MB before encoding.

2The maximum size of uncompressed components in an uncompressed project is 600 MB (629,145,600 bytes) or less, depending on the files’ compression ratio. The size limit in bytes is calculated as 600 x 1024 x 1024.

If the files have a high compression ratio, you can migrate a total of approximately 600 MB because the compressed size is under 39 MB. However, if the components can't be compressed much, like binary static resources, you can migrate less than 600 MB.

In API version 29.0, Salesforce improved the deployment status properties and removed the requirement to use checkStatus() after a deploy() call to get information about deployments. Salesforce continues to support the use of checkStatus() when using deploy() with API version 28.0 or earlier.

## Deploy Components to an Org

The package.xml file is a project manifest that lists all the components that you want to retrieve or deploy. You can use package.xml to add components. To delete components, add another manifest file. See [Deleting Components from an Organization](atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm "To delete components, perform a deployment with the deploy() call by using a destructive changes manifest file that lists the components to remove from your organization. You can perform a deployment that only deletes components, or a deployment that deletes and adds components. In API version 33.0 and later, you can specify components to delete before and after other components are added or updated. In earlier API versions, if deletions and additions are specified for the same deployment, the deploy() call performs the deletions first.").

For API version 29.0 or later, here’s how to deploy (create or update) packaged or unpackaged components.

1.  Issue a deploy() call to start the asynchronous deployment. An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned. Note the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field, and use it for the next step.
2.  Issue a [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") call in a loop until the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field of the returned [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") contains true, which means that the call is completed. The [DeployResult](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm "Contains information about the success or failure of the associated deploy() call.") object contains information about an in-progress or completed deployment started using the deploy() call. When calling [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy()."), pass in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) value from the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object from the first step.

For API version 28.0 or earlier, here’s how to deploy (create or update) packaged or unpackaged components.

1.  Issue a deploy() call to start the asynchronous deployment. An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned. If the call is completed, the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field contains true. Most often, the call isn’t completed quickly enough to be noted in the first result. If it’s completed, note the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field returned, and skip the next step.
2.  If the call isn’t complete, issue a [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") call in a loop. In the loop, use the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field of the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object returned by the deploy() call in the previous step. Check the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object, which is returned until the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field contains true. The time taken to complete a deploy() call depends on the size of the zip file being deployed. Therefore, use a longer wait time between iterations as the size of the zip file increases.
3.  Issue a [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") call to obtain the results of the deploy() call, using the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) value returned in the first step.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The deployment process locks write-access to resources getting deployed until deployment completes. During deployment, changes made to locked resources or related items can result in errors. Salesforce recommends deployments during off-peak usage time and limiting or postponing changes to your org while deployment is in progress.

## Check the Status of a Deployment

Check the status of a deployment using Metadata API or from Setup. You can check the status of deployments that are in progress or completed in the last 30 days.

To check the status of a deployment using Metadata API, see [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().").

To check the status of a deployment from Setup, enter Deployment Status in the Quick Find box, then select **Deployment Status**.

When running a deployment, the Deployment Status page shows you the real-time progress of your current deployment. This page contains charts that provide a visual representation of the overall deployment progress. The first chart shows how many components have been deployed out of the total and includes the number of components with errors. For example, this chart indicates that 302 components were processed successfully out of 450 and there were 45 components with errors.

![Chart for processed components](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2Fdeploy_donut_chart_comp.png&folder=api_meta)

After all components have been deployed without errors, Apex tests start running, if necessary or enabled. A second chart shows how many Apex tests have run out of the total number of tests and the number of errors returned. In addition, the chart shows the name of the currently running test. For example, in this chart, 77 tests have completed execution out of a total of 120, and 1 test failed.

![Chart for processed components](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2Fdeploy_donut_chart_tests.png&folder=api_meta)

You can initiate multiple deployments, but only one deployment can run at a time. The other deployments remain in the queue waiting to run after the current deployment finishes. Queued deployments are listed under Pending Deployments and are not necessarily executed in the order in which they were submitted. To execute deployments in a particular order, submit them one at a time after the previous deployment has completed successfully.

## Cancel a Deployment

Cancel a deployment using the Metadata API or from Setup. You can cancel a deployment while it’s in progress or in the queue. For API versions 65.0 and higher, you can't cancel deployments with a status of Finalizing Deploy. For API versions below 65.0, attempts to cancel a deployment may fail if the deployment has started committing data. Alternatively, it's possible that the cancellation will succeed, but data from the deployment is also committed.

To cancel a deployment using Metadata API, see [cancelDeploy()](atlas.en-us.api_meta.meta/api_meta/meta_canceldeploy.htm "Cancels a deployment that hasn’t completed yet.").

To cancel a deployment from Setup, enter Deployment Status in the quick find box, then select **Deployment Status**. Click **Cancel** next to the deployment you want to cancel. The deployment has the status of Cancel Requested until the cancellation completes. A canceled deployment is listed in the Failed section.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the Modify Metadata Through Metadata API Functions permission. Otherwise, enable the Modify All Data permission.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| zipFile | base64 | Base 64-encoded binary data. Client applications must encode the binary data as base64. |
| deployOptions | DeployOptions | Encapsulates options for determining which packages or files are deployed. |

## DeployOptions

The following deployment options can be selected for this call:

| Name | Type | Description |
| --- | --- | --- |
| allowMissingFiles | boolean | If files that are specified in package.xml aren’t in the .zip file, specifies whether a deployment can still succeed.Don’t set this argument for deployment to production orgs. |
| autoUpdatePackage | boolean | If a file is in the .zip file but not specified in package.xml, specifies whether the file is automatically added to the package. A retrieve() is issued with the updated package.xml that includes the .zip file.Don’t set this argument for deployment to production orgs. |
| checkOnly | boolean | Defaults to false. Set to true to perform a test deployment (validation) of components without saving the components in the target org. A validation enables you to verify the results of tests that would be generated in a deployment, but doesn’t commit any changes. After a validation finishes with passing tests, sometimes it can qualify for deployment without rerunning tests. See deployRecentValidation().If you change a field type from Master-Detail to Lookup or vice versa, the change isn’t supported when using the checkOnly option to test a deployment. This change isn’t supported for test deployments to avoid permanently altering your data. If a change that isn’t supported for test deployments is included in a deployment package, the test deployment fails and issues an error.If your deployment package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the changes before you deploy to production. Perform a full deployment to another test sandbox. A full deployment includes a validation of the changes as part of the deployment process.A Metadata API deployment that includes Master-Detail relationships deletes all detail records in the Recycle Bin in the following cases.For a deployment with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before proceeding to deploy the Master-Detail field, or the deployment fails. During the deployment, detail records are permanently deleted from the Recycle Bin and can’t be recovered.For a deployment that converts a Lookup field relationship to a Master-Detail relationship, detail records must reference a master record or be soft-deleted (sent to the Recycle Bin) for the deployment to succeed. However, a successful deployment permanently deletes any detail records in the Recycle Bin. |
| ignoreWarnings | boolean | Indicates whether deployments with warnings complete successfully (true) or not (false). Defaults to false.The DeployMessage object for a warning contains the following values:problemType—Warningproblem—The text of the warningIf a warning occurs and ignoreWarnings is set to true, the success field in DeployMessage is true. If ignoreWarnings is set to false, success is set to false and the warning is treated like an error.This field is available in API version 18.0 and later. Before version 18.0, there was no distinction between warnings and errors. All problems were treated as errors and prevented a successful deployment. |
| performRetrieve | boolean | Indicates whether a retrieve() call is performed immediately after the deployment (true) or not (false). Set to true to retrieve whatever was deployed. |
| purgeOnDelete | boolean | If true, the deleted components in the destructiveChanges.xml manifest file aren't stored in the Recycle Bin. Instead, they become immediately eligible for deletion.This field is available in API version 22.0 and later.This option only works in Developer Edition or sandbox orgs. It doesn’t work in production orgs.When you delete a roll-up summary field using Metadata API, the field isn't saved in the Recycle Bin. The field is purged even if you don’t set the purgeOnDelete deployment option to true. |
| rollbackOnError | boolean | Indicates whether any failure causes a complete rollback (true) or not (false). If false, whatever actions can be performed without errors are performed, and errors are returned for the remaining actions. This parameter must be set to true if you’re deploying to a production org. The default is false. |
| runAllTests | boolean | (Deprecated and only available in API version 33.0 and earlier.) This field defaults to false. Set to true to run all Apex tests after deployment, including tests that originate from installed managed packages.Apex tests that run as part of a deployment always run synchronously and serially. |
| runTests | string[] | A list of Apex tests to run during deployment. Specify the class name, one name per instance. The class name can also specify a namespace with a dot notation. For more information, see Running a Subset of Tests in a Deployment.To use this option, set testLevel to RunSpecifiedTests. |
| singlePackage | boolean | Indicates whether the specified .zip file points to a directory structure with a single package (true) or a set of packages (false). |
| testLevel | TestLevel (enumeration of type string) | Optional. Specifies which tests are run as part of a deployment. The test level is enforced regardless of the types of components that are present in the deployment package. Valid values are:NoTestRun—No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial organizations. This test level is the default for development environments.RunSpecifiedTests—Only the tests that you specify in the runTests option are run. Code coverage requirements differ from the default coverage requirements when using this test level. Each class and trigger in the deployment package must be covered by the executed tests for a minimum of 75% code coverage. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.RunRelevantTests (beta)—Only tests relevant to the deployment payload are run. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies. For fine-grained control, you can annotate test classes so that they either run regardless of the deployment payload, or run when modified, referenced components are included in the deployment. See @IsTest Annotation in the Apex Developer Guide. Each class and trigger in the deployment package must be covered by the executed tests for a minimum of 75% code coverage. This coverage is computed for each class and trigger individually and is different from the overall coverage percentage.RunLocalTests—All tests in your org are run, except the ones that originate from installed managed and unlocked packages. This test level is the default for production deployments that include Apex classes or triggers.RunAllTestsInOrg—All tests are run. The tests include all tests in your org, including tests of managed packages.If you don’t specify a test level, the default test execution behavior is used. See Running Tests in a Deployment.Apex tests that run as part of a deployment always run synchronously and serially.This field is available in API version 34.0 and later. |

## Response

[AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.")

## Sample Code—Java

This sample shows how to deploy components in a zip file. See the [retrieve() sample code](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm#sample_java_retrieve) for details on how to retrieve a zip file.

```

```

1.  [Deleting Components from an Organization](atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm)
    To delete components, perform a deployment with the deploy() call by using a destructive changes manifest file that lists the components to remove from your organization. You can perform a deployment that only deletes components, or a deployment that deletes and adds components. In API version 33.0 and later, you can specify components to delete before and after other components are added or updated. In earlier API versions, if deletions and additions are specified for the same deployment, the deploy() call performs the deletions first.
2.  [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
    Checks the status of declarative metadata call deploy().
3.  [cancelDeploy()](atlas.en-us.api_meta.meta/api_meta/meta_canceldeploy.htm)
    Cancels a deployment that hasn’t completed yet.

#### See Also

-   [Running Tests in a Deployment](atlas.en-us.api_meta.meta/api_meta/meta_deploy_running_tests.htm)

-   [Run Relevant Apex Tests in a Deployment (Beta)](atlas.en-us.api_meta.meta/api_meta/meta_deploy_run_relevant_tests.htm "Use the RunRelevantTests (beta) test level to run only the Apex tests that are relevant to your deployment. Salesforce automatically identifies the relevant tests based on an analysis of the deployment payload and the payload dependencies.")

## Code Examples

```
AsyncResult = metadatabinding.deploy(base64 zipFile, DeployOptions deployOptions)
```

```apex
package com.doc.samples;

import java.io.*;

import java.rmi.RemoteException;

import com.sforce.soap.metadata.AsyncResult;
import com.sforce.soap.metadata.DeployDetails;
import com.sforce.soap.metadata.MetadataConnection;
import com.sforce.soap.metadata.DeployOptions;
import com.sforce.soap.metadata.DeployResult;
import com.sforce.soap.metadata.DeployMessage;
import com.sforce.soap.metadata.RunTestsResult;
import com.sforce.soap.metadata.RunTestFailure;
import com.sforce.soap.metadata.CodeCoverageWarning;
import com.sforce.soap.enterprise.LoginResult;
import com.sforce.soap.enterprise.EnterpriseConnection;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;

/**
 * Deploy a zip file of metadata components. 
 * Prerequisite: Have a deploy.zip file that includes a package.xml manifest file that 
 * details the contents of the zip file.
 */
public class DeploySample {
    // binding for the metadata WSDL used for making metadata API calls
    private MetadataConnection metadataConnection;

    static BufferedReader rdr = new BufferedReader(new InputStreamReader(System.in));

    private static final String ZIP_FILE = "deploy.zip";

    // one second in milliseconds
    private static final long ONE_SECOND = 1000;
    // maximum number of attempts to deploy the zip file
    private static final int MAX_NUM_POLL_REQUESTS = 50; 

    public static void main(String[] args) throws Exception {
        final String USERNAME = "user@company.com";
        // This is only a sample. Hard coding passwords in source files is a bad practice.
        final String PASSWORD = "password"; 
        final String URL = "https://login.salesforce.com/services/Soap/c/29.0";
        
        DeploySample sample = new DeploySample(USERNAME, PASSWORD, URL);
        sample.deployZip();
    }
    
    public DeploySample(String username, String password, String loginUrl) 
            throws ConnectionException {
        createMetadataConnection(username, password, loginUrl);
    }

    public void deployZip()
        throws RemoteException, Exception
    {
        byte zipBytes[] = readZipFile();
        DeployOptions deployOptions = new DeployOptions();
        deployOptions.setPerformRetrieve(false);
        deployOptions.setRollbackOnError(true);
        AsyncResult asyncResult = metadataConnection.deploy(zipBytes, deployOptions);
        String asyncResultId = asyncResult.getId();
        
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
        
        System.out.println("The file " + ZIP_FILE + " was successfully deployed");
    }
    
    /**
     * Read the zip file contents into a byte array.
     * @return byte[]
     * @throws Exception - if cannot find the zip file to deploy
     */
    private byte[] readZipFile()
        throws Exception
    {
        // We assume here that you have a deploy.zip file.
        // See the retrieve sample for how to retrieve a zip file.
        File deployZip = new File(ZIP_FILE);
        if (!deployZip.exists() || !deployZip.isFile())
            throw new Exception("Cannot find the zip file to deploy. Looking for " +
                    deployZip.getAbsolutePath());
        
        FileInputStream fos = new FileInputStream(deployZip);
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        int readbyte = -1;
        while ((readbyte = fos.read()) != -1)  {
            bos.write(readbyte);
        }
        fos.close();
        bos.close();
        return bos.toByteArray();
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
        loginConfig.setAuthEndpoint(loginUrl);
        loginConfig.setServiceEndpoint(loginUrl);
        loginConfig.setManualLogin(true);
        LoginResult loginResult = (new EnterpriseConnection(loginConfig)).login(
                username, password);
        
        final ConnectorConfig metadataConfig = new ConnectorConfig();
        metadataConfig.setServiceEndpoint(loginResult.getMetadataServerUrl());
        metadataConfig.setSessionId(loginResult.getSessionId());
        this.metadataConnection = new MetadataConnection(metadataConfig);
    }

}
```

## Related Topics

- Deleting Components from an Organization (atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm)
- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- checkDeployStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
- done (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- DeployResult (atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)
- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
- cancelDeploy() (atlas.en-us.api_meta.meta/api_meta/meta_canceldeploy.htm)
- deployRecentValidation() (atlas.en-us.api_meta.meta/api_meta/meta_deployRecentValidation.htm)
- DeployMessage (atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)
- Running a Subset of Tests in a Deployment (atlas.en-us.api_meta.meta/api_meta/meta_deploy_run_specific_tests.htm)
