---
title: "Deploying a Recent Validation"
domain: daas
topic: deploying-a-recent-validation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.094Z
estimatedTokens: 977
keywords: [Deploying, Recent, Validation, helps, shorten, deployment, time, because, tests, aren’t, rerun, successful, deploy, validated, components]
---

# Deploying a Recent Validation

> Deploying a validation helps you shorten your deployment time because tests aren’t
    rerun. If you have a recent successful validation, you can deploy the validated components
    without running tests. You can deploy a recent validation with the <sf:deployRecentValidation> task.

# Deploying a Recent Validation

Deploying a validation helps you shorten your deployment time because tests aren’t rerun. If you have a recent successful validation, you can deploy the validated components without running tests. You can deploy a recent validation with the <sf:deployRecentValidation> task.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

A validation doesn’t save any components in the organization. You use a validation only to check the success or failure messages that you would receive with an actual deployment. To validate your components, add the checkOnly="true" parameter in your deploy target (<sf:deploy>).

Before deploying a recent validation, ensure that the following requirements are met.

-   The components have been validated successfully for the target environment within the last 10 days.
-   As part of the validation, Apex tests in the target org have passed.
-   Code coverage requirements are met.
    -   If all tests in the org or all local tests are run, overall code coverage is at least 75%, and Apex triggers have some coverage.
    -   If specific tests are run with the RunSpecifiedTests test level, each class and trigger that was deployed is covered by at least 75% individually.

The <sf:deployRecentValidation> task supports these parameters.

| Field | Description |
| --- | --- |
| username | Required if sessionId isn’t specified. The Salesforce username for login. The username associated with this connection must have the Modify Metadata through Metadata API Functions permission. |
| password | Required if sessionId isn’t specified. The password you use to log in to the org associated with this project. If you are using a security token, paste the 25-digit token value to the end of your password. |
| recentValidationId | Required. Specifies the ID of a recent validation. |
| sessionId | Required if username and password aren’t specified. The ID of an active Salesforce session or the OAuth access token. A session is created after a user logs in to Salesforce successfully with a username and password. Use a session ID for logging in to an existing session instead of creating a new session. Alternatively, use an access token for OAuth authentication. For more information, see Authenticating Apps with OAuth in the Salesforce Help. |
| serverurl | Optional. The Salesforce server URL (if blank, defaults to login.salesforce.com). To connect to a sandbox instance, change this URL to test.salesforce.com. |
| rollbackOnError | Optional. Defaults to true. Indicates whether any failure causes a complete rollback (true) or not (false). If false, whatever set of actions can be performed without errors are performed, and errors are returned for the remaining actions. This parameter must be set to true if you are deploying to a production org. |
| maxPoll | Optional. Defaults to 200. The number of times to poll the server for the results of the deploy request. Deployment can succeed even if you stop waiting. |
| pollWaitMillis | Optional. Defaults to 10000. The number of milliseconds to wait when polling for results of the deployment. Deployment can succeed even if you stop waiting. |
| trace | Optional. Defaults to false. Prints the SOAP requests and responses to the console. This option shows the user’s password in plain text during login. |

This example shows a target for deploying a recent validation. The value of recentValidationId (sf.​recentValidationId) is defined in the build.properties file.

```

```

Support for <sf:deployRecentValidation> starts with version 34.0 of the Ant Migration Tool.

## Code Examples

```
<target name="quickDeploy">
  <sf:deployRecentValidation username="${sf.username}" password="${sf.password}" 
                             sessionId="${sf.sessionId}" serverurl="${sf.serverurl}"
                             maxPoll="${sf.maxPoll}"
                             recentValidationId="${sf.​recentValidationId}"/>
</target>
```
