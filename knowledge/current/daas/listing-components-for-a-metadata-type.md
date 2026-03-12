---
title: "Listing Components for a Metadata Type"
domain: daas
topic: listing-components-for-a-metadata-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.114Z
estimatedTokens: 800
keywords: [Listing, Components, Metadata, listMetadata, target, retrieves, components.This, useful, identify, individual, package.xml, retrieval, high-level, view, particular]
---

# Listing Components for a Metadata Type

> The listMetadata target retrieves property information
    about your metadata components.This target is useful to identify
      individual components in package.xml for a retrieval or a high-level
      view of particular metadata types. For example, you can use this target to return a list of
      names of all your CustomObject or Layout components. Then use the information retrieve a subset
      of the components.

# Listing Components for a Metadata Type

The listMetadata target retrieves property information about your metadata components.This target is useful to identify individual components in package.xml for a retrieval or a high-level view of particular metadata types. For example, you can use this target to return a list of names of all your CustomObject or Layout components. Then use the information retrieve a subset of the components.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

You can set parameters for each <sf:listMetadata\> target.

| Field | Description |
| --- | --- |
| username | Required if sessionId isn’t specified. The Salesforce username used for login. The username associated with this connection must have the Modify Metadata through Metadata API Functions permission. |
| password | Required if sessionId isn’t specified. The password you use to log in to the organization associated with this project. If you are using a security token, paste the 25-digit token value to the end of your password. |
| sessionId | Required if username and password aren’t specified. The ID of an active Salesforce session or the OAuth access token. A session is created after a user logs in to Salesforce successfully with a username and password. Use a session ID for logging in to an existing session instead of creating a new session. Alternatively, use an access token for OAuth authentication. For more information, see Authenticating Apps with OAuth in the Salesforce Help. |
| serverurl | Optional. The Salesforce server URL (if blank, defaults to login.salesforce.com). To connect to a sandbox instance, change this value to test.salesforce.com. |
| metadataType | Required. The name of the metadata type that you’re retrieving property information for, such as CustomObject for custom objects or Report for custom reports. The StandardValueSet metadata type isn’t supported. To review the supported types, see the Metadata Types chapter in the Metadata API Developer Guide. |
| folder | The folder associated with the component. This field is required for components that use folders, such as Dashboard, Document, EmailTemplate, or Report. |
| apiVersion | Optional. The API version to use for the metadata. The default is 66.0. |
| resultFilePath | Optional. The path of the output file where results are stored. The default output is the console. Directing the output to a file makes it easier to extract the relevant information for your package.xml manifest file. |
| trace | Optional. Defaults to false. Prints the SOAP requests and responses to the console. This option shows the user’s password in plain text during login. |

To get property information for components of one metadata type, such as CustomObject, specify a target in the build.xml file that uses <sf:listMetadata\>.

```

```

This example uses a component that resides in a folder.

```

```

## Code Examples

```
<target name="listMetadata">
  <sf:listMetadata
    username="${sf.username}"
    password="${sf.password}"
    sessionId="${sf.sessionId}"
    serverurl="${sf.serverurl}"
    metadataType="CustomObject"
    resultFilePath="listMetadata/list.log"/>
  </target>
```

```
<target name="listMetadata">
  <sf:listMetadata
    username="${sf.username}"
    password="${sf.password}"
    sessionId="${sf.sessionId}"
    serverurl="${sf.serverurl}"
    metadataType="Report"
    folder="Marketing_Reports"
    resultFilePath="listMetadata/list.log"/>
</target>
```
