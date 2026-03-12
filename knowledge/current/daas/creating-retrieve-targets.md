---
title: "Creating Retrieve Targets"
domain: daas
topic: creating-retrieve-targets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.048Z
estimatedTokens: 849
keywords: [Creating, Retrieve, Targets, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Creating Retrieve Targets

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Creating Retrieve Targets

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The build.xml file specifies a series of commands to be executed by Ant. Within the build.xml file are named targets that process a series of commands when you run Ant with a target name. The following parameters can be set for each <sf:retrieve\> target:

| Field | Description |
| --- | --- |
| username | Required if sessionId isn’t specified. The Salesforce username used for login. The username associated with this connection must have the Modify Metadata through Metadata API Functions permission. |
| password | Required if sessionId isn’t specified. The password you use to log in to the organization associated with this project. If you are using a security token, paste the 25-digit token value to the end of your password. |
| sessionId | Required if username and password aren’t specified. The ID of an active Salesforce session or the OAuth access token. A session is created after a user logs in to Salesforce successfully with a username and password. Use a session ID for logging in to an existing session instead of creating a new session. Alternatively, use an access token for OAuth authentication. For more information, see Authenticating Apps with OAuth in the Salesforce Help. |
| serverurl | Optional. The Salesforce server URL (if blank, defaults to login.salesforce.com). To connect to a sandbox instance, change this value to test.salesforce.com. |
| retrieveTarget | Required. The root of the directory structure into which the metadata files are retrieved. |
| packageNames | Required if unpackaged is not specified. A comma-separated list of the names of the packages to retrieve. Specify either packageNames or unpackaged, but not both. |
| apiVersion | Optional. The Metadata API version to use for the retrieved metadata files. The default is 66.0. |
| pollWaitMillis | Optional. Defaults to 10000. The number of milliseconds to wait between attempts when polling for results of the retrieve request. The client continues to poll the server up to the limit defined by maxPoll. |
| maxPoll | Optional. Defaults to 200. The number of times to poll the server for the results of the retrieve request. The wait time between successive poll attempts is defined by pollWaitMillis. |
| singlePackage | Optional. Defaults to true. Set this parameter to false if you are retrieving multiple packages. If set to false, the retrieved zip file includes an extra top-level directory containing a subdirectory for each package. |
| trace | Optional. Defaults to false. Prints the SOAP requests and responses to the console. This option shows the user’s password in plain text during login. |
| unpackaged | Required if packageNames is not specified. The path and name of a file manifest that specifies the components to retrieve. Specify either unpackaged or packageNames, but not both. |
| unzip | Optional. Defaults to true. If set to true, the retrieved components are unzipped. If set to false, the retrieved components are saved as a zip file in the retrieveTarget directory. |
