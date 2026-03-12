---
title: "Describing Metadata Types"
domain: daas
topic: describing-metadata-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.099Z
estimatedTokens: 630
keywords: [Describing, Metadata, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated]
---

# Describing Metadata Types

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Describing Metadata Types

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The describeMetadata target returns a list of metadata types that are enabled for your organization. This target is useful when you want to identify the syntax needed for a metadata type in a <name\> element in package.xml; for example, CustomObject for custom objects or Layout for page layouts. The following parameters may be set for each <sf:describeMetadata\> target:

| Field | Description |
| --- | --- |
| username | Required if sessionId isn’t specified. The Salesforce username used for login. The username associated with this connection must have the Modify Metadata through Metadata API Functions permission. |
| password | Required if sessionId isn’t specified. The password you use to log in to the organization associated with this project. If you are using a security token, paste the 25-digit token value to the end of your password. |
| sessionId | Required if username and password aren’t specified. The ID of an active Salesforce session or the OAuth access token. A session is created after a user logs in to Salesforce successfully with a username and password. Use a session ID for logging in to an existing session instead of creating a new session. Alternatively, use an access token for OAuth authentication. For more information, see Authenticating Apps with OAuth in the Salesforce Help. |
| serverurl | Optional. The Salesforce server URL (if blank, defaults to login.salesforce.com). To connect to a sandbox instance, change this value to test.salesforce.com. |
| apiVersion | Optional. The API version to use for the metadata. The default is 66.0. |
| resultFilePath | Optional. The path of the output file where results are stored. The default output is the console. Directing the output to a file makes it easier to extract the relevant information for your package.xml manifest file. |
| trace | Optional. Defaults to false. Prints the SOAP requests and responses to the console. This option shows the user’s password in plain text during login. |

To get the list of metadata types enabled for your organization, specify a target in the build.xml file using <sf:describeMetadata\>.

```

```

## Code Examples

```
<target name="describeMetadata">
  <sf:describeMetadata
    username="${sf.username}"
    password="${sf.password}"
    sessionId="${sf.sessionId}"
    serverurl="${sf.serverurl}"
    resultFilePath="describeMetadata/describe.log"/>
</target>
```
