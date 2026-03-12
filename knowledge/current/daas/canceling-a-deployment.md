---
title: "Canceling a Deployment"
domain: daas
topic: canceling-a-deployment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.077Z
estimatedTokens: 618
keywords: [Canceling, Deployment, cancel, that’s, progress, queued, <sf, cancelDeploy>, task]
---

# Canceling a Deployment

> You can cancel a deployment that’s in progress or queued with the <sf:cancelDeploy> task.

# Canceling a Deployment

You can cancel a deployment that’s in progress or queued with the <sf:cancelDeploy> task.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The <sf:cancelDeploy> task supports these parameters.

| Field | Description |
| --- | --- |
| username | Required if sessionId isn’t specified. The Salesforce username for login. The username associated with this connection must have the Modify Metadata through Metadata API Functions permission. |
| password | Required if sessionId isn’t specified. The password you use to log in to the org associated with this project. If you are using a security token, paste the 25-digit token value to the end of your password. |
| sessionId | Required if username and password aren’t specified. The ID of an active Salesforce session or the OAuth access token. A session is created after a user logs in to Salesforce successfully with a username and password. Use a session ID for logging in to an existing session instead of creating a new session. Alternatively, use an access token for OAuth authentication. For more information, see Authenticating Apps with OAuth in the Salesforce Help. |
| requestId | Required. Specifies the ID of an in-progress or queued deployment to cancel. |
| serverurl | Optional. The Salesforce server URL (if blank, defaults to login.salesforce.com). To connect to a sandbox instance, change this URL to test.salesforce.com. |
| maxPoll | Optional. Defaults to 200. The number of times to poll the server for the results of the deploy request. Deployment can succeed even if you stop waiting. |
| pollWaitMillis | Optional. Defaults to 10000. The number of milliseconds to wait when polling for results of the deployment. Deployment can succeed even if you stop waiting. |
| trace | Optional. Defaults to false. Prints the SOAP requests and responses to the console. This option shows the user’s password in plain text during login. |

This example shows a target for canceling a deployment. The value of requestId (sf.​deployRequestId) is defined in the build.properties file.

```

```

Support for sf:cancelDeploy starts with version 34.0 of the Ant Migration Tool.

## Code Examples

```
<target name="cancel">
  <sf:cancelDeploy username="${sf.username}" password="${sf.password}" 
      sessionId="${sf.sessionId}" serverurl="${sf.serverurl}" maxPoll="${sf.maxPoll} 
      requestId="${sf.​deployRequestId}"/>
</target>
```
