---
title: "Find and Create Records Pre-Chat API Code Sample"
domain: live-agent-dev
topic: find-and-create-records-pre-chat-api-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.124Z
estimatedTokens: 128
keywords: [Records, Pre-Chat, API, Code, Sample, Test, preview, how, automatically, customer, completes, form]
---

# Find and Create Records Pre-Chat API Code Sample

> Test and preview how to automatically create records when
a customer completes a pre-chat form using this code sample.

# Find and Create Records Pre-Chat API Code Sample

Test and preview how to automatically create records when a customer completes a pre-chat form using this code sample.

The following code searches for and creates records when a customer completes a pre-chat form using the following methods:

-   findOrCreate.map
-   findOrCreate.map.doFind
-   findOrCreate.map.isExactMatch
-   findOrCreate.map.doCreate
-   findOrCreate.saveToTranscript
-   findOrCreate.showOnCreate
-   findOrCreate.linkToEntity

```

```

## Code Examples

```
<form method="post" action="#">
<label>First Name: </label> <input type='text' name='liveagent.prechat:ContactFirstName' /><br />
<label>Last Name: </label> <input type='text' name='liveagent.prechat:ContactLastName' /><br />
<label>Subject: </label> <input type='text' name='liveagent.prechat:CaseSubject' /><br />
<input type="hidden" name="liveagent.prechat:CaseStatus" value="New" /><br />
<input type="hidden" name="liveagent.prechat.findorcreate.map:Contact" value="FirstName,ContactFirstName;LastName,ContactLastName" />
<input type="hidden" name="liveagent.prechat.findorcreate.map.doFind:Contact" value="FirstName,true;LastName,true" />
<input type="hidden" name="liveagent.prechat.findorcreate.map.isExactMatch:Contact" value="FirstName,true;LastName,true" />
<input type="hidden" name="liveagent.prechat.findorcreate.map.doCreate:Contact" value="FirstName,true;LastName,true" />
<input type="hidden" name="liveagent.prechat.findorcreate.saveToTranscript:Contact" value="ContactId" />
<input type="hidden" name="liveagent.prechat.findorcreate.showOnCreate:Contact" value="true" />
<input type="hidden" name="liveagent.prechat.findorcreate.linkToEntity:Contact" value="Case,ContactId" />
<input type="hidden" name="liveagent.prechat.findorcreate.map:Case" value="Subject,CaseSubject;Status,CaseStatus" />
<input type="hidden" name="liveagent.prechat.findorcreate.map.doCreate:Case" value="Subject,true;Status,true" />
<input type="submit" value="Submit" />
</form>
```
