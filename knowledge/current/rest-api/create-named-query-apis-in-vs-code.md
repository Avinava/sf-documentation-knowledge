---
title: "Create Named Query APIs in VS Code"
domain: rest-api
topic: create-named-query-apis-in-vs-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.599Z
estimatedTokens: 465
keywords: [Named, Query, APIs, Code, API, deploy, org, Setup, view, edit]
---

# Create Named Query APIs in VS Code

> In VS Code, you can create a Named Query API and deploy it to your org. In Setup, you
  can view, edit, and delete the Named Query API.

# Create Named Query APIs in VS Code

In VS Code, you can create a Named Query API and deploy it to your org. In Setup, you can view, edit, and delete the Named Query API.


| User Permissions Needed |
| --- |
| To work with Named Query API: | Allows users to create, read, update and delete Named Query API records |

1.  Create a Salesforce DX project.

    See [Create a Salesforce DX Project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm).

2.  In your force-app/main/default directory, create a folder for Named Query APIs.
3.  In the new folder, create a file for your Named Query API.

    Name the file by using the format <NamedQueryAPIName>.apiNamedQuery-meta.xml. For example, myNamedQuery.apiNamedQuery.xml.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_rest)

    #### Important

    The name must begin with a letter. It can contain only alpha-numeric characters.

4.  Add the metadata describing the Named Query API that you're creating.

    See the example later on this page.

5.  Deploy the metadata file to your target org.

    These options are supported deployment methods:

    -   Use the Salesforce CLI deploy command. For example: sf project deploy start -o <TargetOrg>, where <TargetOrg> is the username or alias of the target org.
    -   Inside your metadata file, right-click to open a list of Salesforce DX commands. Select **Salesforce DX: Deploy This Source to Org**.

## Example

Here's an example of a valid apiNamedQuery-meta.xml file. You must include these elements:

-   Label (<masterLabel>)
-   Description (<description>)
-   SOQL statement for the Named Query API (<body2>)

```

```

The ApiNamedQuery and ApiNamedQueryParameter objects are supported for use with Metadata API (Retrieve and Deploy).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ApiNamedQuery xmlns="http://soap.sforce.com/2006/04/metadata">
 <apiNamedQueryParameters>
   <description>Name of this account</description>
   <parameterLabel>ApiNamedQueryParameterLabel</parameterLabel>
   <parameterName>name</parameterName>
 </apiNamedQueryParameters>
 <apiVersion>64.0</apiVersion>
 <body2>SELECT Id, Name, NumberOfEmployees FROM Account WHERE Name = :name</body2>
 <description> Get id, name, and annual revenue from Account entity filtered by name</description>
 <masterLabel>Get Account Details</masterLabel>
</ApiNamedQuery>
```
