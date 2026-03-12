---
title: "Entering Salesforce Connection Information"
domain: daas
topic: entering-salesforce-connection-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.057Z
estimatedTokens: 746
keywords: [Entering, Salesforce, Connection, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Entering Salesforce Connection Information

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Entering Salesforce Connection Information

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

To retrieve or deploy metadata components, you need to edit build.properties to point to a Salesforce org.

1.  Go to the location where you extracted the Ant Migration Tool files and open the sample subdirectory.
2.  Open build.properties in a text editor and do either of the following.
    -   To use a username and password for login, substitute a valid Salesforce username and password. If you’re using a security token, paste the 25-digit token value at the end of your password.
    -   To use an active Salesforce session for login, uncomment the sf.sessionId property and substitute a valid session ID. Also, make sure to comment out the sf.username and sf.password properties.
    -   To use an OAuth access token for login, uncomment the sf.sessionId property and supply the access token. Also, make sure to comment out the sf.username and sf.password properties.

| Parameter | Value |
| --- | --- |
| sf.username | The Salesforce username for login. The username associated with this connection must have the Modify Metadata through Metadata API Functions permission.When connecting to a sandbox instance, your sandbox name is appended to your username. For example, if your production username is foo@salesforce.com, and one of your sandboxes is called bar, your sandbox username is foo@salesforce.com.bar. |
| sf.password | The password you use to log in to the org associated with this project. If you are using a security token, paste the 25-digit token value to the end of your password. |
| sf.serverurl | The salesforce server URL. Use https://login.salesforce.com to connect to a production or Developer Edition org. To connect to a sandbox instance, change this to https://test.salesforce.com. |
| sf.sessionId | The ID of an active Salesforce session or the OAuth access token. A session is created after a user logs in to Salesforce successfully with a username and password. Use a session ID for logging in to an existing session instead of creating a new session. Alternatively, use an access token for OAuth authentication. For more information, see Authenticating Apps with OAuth in the Salesforce Help. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

In the build.properties file, you can specify values for either the sf.username and sf.password property pair, or the sf.sessionId property, but not both. In the build.xml file, your targets can contain all three parameters (username, password, and sessionId). Either the username and password or the session ID will be used for authentication.
