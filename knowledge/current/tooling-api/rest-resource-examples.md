---
title: "REST Resource Examples"
domain: tooling-api
topic: rest-resource-examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:46:36.928Z
keywords: [REST, Resource, Examples, Example, Setup, Note, Retrieve, Description, Manipulate, Objects, Tip, Query, Within, MetadataContainer, Check, Deployment, Status, Execute, Anonymous, Apex]
---

# REST Resource Examples

# REST Resource Examples

Robust examples using REST resources in the Tooling API.

## Example Setup

The following examples use Apex to execute REST requests, but you can use any standard REST tool to access the Tooling API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

The examples in this guide use a production login URL with MyDomainName in place of the org’s My Domain name. The format for sandbox login URLs differs. To use these examples, update the login URL. You can find the My Domain name and My Domain login URL for your org on the My Domain page in Setup.

First, set up the connection to your org and the HTTP request type:

```

```

At the end of each request, add the following code to send the request and retrieve the body of the response:

```

```

## Retrieve a Description

To get a description of all available objects in Tooling API:

```

```

To get a description of a specific Tooling API object, for example, [TraceFlag](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_traceflag.htm "Represents a trace flag that triggers an Apex debug log at the specified logging level."):

```

```

To get a description of all metadata for a specific Tooling API object, for example, [TraceFlag](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_traceflag.htm "Represents a trace flag that triggers an Apex debug log at the specified logging level."):

```

```

## Manipulate Objects by ID

To create a new Tooling API object, for example, [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together."):

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_tooling)

#### Tip

Use the ID from this call in the rest of the examples.

To retrieve a Tooling API object by ID, for example, [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together."):

```

```

To update a Tooling API object by ID, for example, [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together."):

```

```

To query a Tooling API object by ID, for example, [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together."):

```

```

## Query Within MetadataContainer

To query an object within a [MetadataContainer](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacontainer.htm "Manages working copies of ApexClassMember, ApexTriggerMember, ApexPageMember, and ApexComponentMember objects, including collections of objects to be deployed together."):

```

```

## Check Deployment Status

To check on the status of a deployment, using [ContainerAsyncRequest](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_containerasyncrequest.htm "Allows you to compile and asynchronously deploy a MetadataContainer object to your organization."):

```

```

## Execute Anonymous Apex

To execute anonymous Apex:

```

```

## Retrieve Apex

To retrieve your Apex classes and triggers, and the global Apex classes and triggers from your installed managed packages:

```

```

## Execute Apex Unit Tests

To execute Apex unit tests, use the runTestsSynchronous or runTestsAsynchronous resource. This example illustrates how to POST to the runTestsSynchronous resource using JavaScript. The comment blocks show which objects these calls return.

```

```