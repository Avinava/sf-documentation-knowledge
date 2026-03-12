---
title: "Retrieving Components in Bulk"
domain: daas
topic: retrieving-components-in-bulk
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.128Z
estimatedTokens: 763
keywords: [Retrieving, Components, Bulk, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Retrieving Components in Bulk

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Retrieving Components in Bulk

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

This target is the optimal way to download a large number of components of a single metadata type, such as custom reports, into a set of local files. The following parameters may be set for each <sf:bulkRetrieve\> target:

| Field | Description |
| --- | --- |
| username | Required if sessionId isn’t specified. The Salesforce username used for login. The username associated with this connection must have the Modify Metadata through Metadata API Functions permission. |
| password | Required if sessionId isn’t specified. The password you use to log in to the organization associated with this project. If you are using a security token, paste the 25-digit token value to the end of your password. |
| sessionId | Required if username and password aren’t specified. The ID of an active Salesforce session or the OAuth access token. A session is created after a user logs in to Salesforce successfully with a username and password. Use a session ID for logging in to an existing session instead of creating a new session. Alternatively, use an access token for OAuth authentication. For more information, see Authenticating Apps with OAuth in the Salesforce Help. |
| serverurl | Optional. The Salesforce server URL (if blank, defaults to login.salesforce.com). To connect to a sandbox instance, change this value to test.salesforce.com. |
| retrieveTarget | Required. The root of the directory structure into which the metadata files are retrieved. |
| metadataType | Required. The name of the metadata type to be retrieved; for example, CustomObject for custom objects, or Report for custom reports. For a full list of allowed values, see Component Types. |
| containingFolder | Optional. If the metadata is contained in a folder, this parameter should be the name of the folder from which the contents are retrieved. |
| batchSize | Optional, defaults to 10. The number of items to retrieve while doing multi-part retrieve. |
| apiVersion | Optional. The Metadata API version to use for the retrieved metadata files. The default is 66.0. |
| maxPoll | Optional. Defaults to 200. The number of times to poll the server for the results of the retrieve request. The clients waits for two seconds after the first poll attempt. The wait time is doubled for each successive poll attempt up to maximum of 30 seconds between poll attempts. |
| unzip | Optional. Defaults to true. If set to true, the retrieved components are unzipped. If set to false, the retrieved components are saved as a zip file in the retrieveTarget directory. |

To retrieve custom report components in bulk, specify a target in the build.xml file using <sf:bulkRetrieve\>.

```

```

## Code Examples

```
<target name="bulkRetrieve">
  <sf:bulkRetrieve
    username="${sf.username}"
    password="${sf.password}"
    sessionId="${sf.sessionId}"
    serverurl="${sf.serverurl}"
    metadataType="Report"
    retrieveTarget="retrieveUnpackaged"/>
</target>
```

## Related Topics

- Component Types (atlas.en-us.daas.meta/daas/daas_package.htm)
