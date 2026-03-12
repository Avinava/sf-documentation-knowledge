---
title: "Find and Create Records Deployment API Code Sample"
domain: live-agent-dev
topic: find-and-create-records-deployment-api-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.084Z
estimatedTokens: 114
keywords: [Records, Deployment, API, Code, Sample, Test, preview, how, automatically, creating, work, Chat, deployments]
---

# Find and Create Records Deployment API Code Sample

> Test and preview how automatically creating records can work with your Chat deployments
    using this code sample.

# Find and Create Records Deployment API Code Sample

Test and preview how automatically creating records can work with your Chat deployments using this code sample.

The following code searches for and creates records when an agent begins a chat with a customer using the following methods:

-   addCustomDetail
-   findOrCreate
-   findOrCreate.map
-   findOrCreate.saveToTranscript
-   findOrCreate.linkToEntity
-   findOrCreate.showOnCreate

```

```

## Code Examples

```
<script type='text/javascript'>
/* Creates a custom detail called First Name and sets the value to "Jane" */
liveagent.addCustomDetail("First Name", "Jane");

/* Creates a custom detail called Last Name and sets the value to "Doe" */
liveagent.addCustomDetail("Last Name", "Doe");

/* Creates a custom detail called Phone Number and sets the value to "555-1212" */
liveagent.addCustomDetail("Phone Number", "415-555-1212");

/* Creates a custom detail called Case Subject and sets the value to "Best snowboard for
a beginner" and will perform a knowledge search when the chat is accepted for the agent */

liveagent.addCustomDetail("Case Subject", "Best snowboard for a beginner").doKnowledgeSearch();

/* Creates a custom detail called Case Status and sets the value to "New" */
liveagent.addCustomDetail("Case Status", "New");

/* This does a non-exact search on cases by the value of the "Case Subject" custom detail.
	If no results are found, it will create a case and set the case's subject and status
	The case that's found or created will be associated to the chat and the case will open in
	the Console for the agent when the chat is accepted */
liveagent.findOrCreate("Case").map("Subject","Case Subject",true,false,true).map("Status","Case Status",false,false,true).saveToTranscript("CaseId").showOnCreate();

/* This searches for a contact whose first and last name exactly match the values in the custom details for First and Last Name
	If no results are found, it will create a new contact and set it's first name, last name, and phone number to the values in the custom details */
liveagent.findOrCreate("Contact").map("FirstName","First Name",true,true,true).map("LastName","Last Name",true,true,true).map("Phone","Phone Number",false,false,true);

/* The contact that's found or created will be saved or associated to the chat transcript.
The contact will be opened for the agent in the Console and the case is linked to the contact record */
liveagent.findOrCreate("Contact").saveToTranscript("ContactId").showOnCreate().linkToEntity("Case","ContactId");
</script>
```
