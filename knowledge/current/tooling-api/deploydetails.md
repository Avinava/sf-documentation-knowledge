---
title: "DeployDetails"
domain: tooling-api
topic: deploydetails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:37.614Z
keywords: [DeployDetails, Fields]
---

# DeployDetails

# DeployDetails

A complex type that contains detailed XML for any compile errors reported in the asynchronous request defined by a ContainerAsyncRequest object. Replaces the JSON field CompilerErrors in Tooling API version 31.0 and later.

## Fields

| Field | Details |
| --- | --- |
| componentFailures | TypestringDescriptionThe line number, component name and a short description for any compile errors. For example:<DeployDetails>     <componentFailures>         <lineNumber>5</lineNumber>         <fullName>myApex</fileName>         <problem>invalid name 'abc'</problem>     </componentFailures>     <componentFailures>         <lineNumber>10</lineNumber>         <fullName>myApex2</fileName>         <problem>invalid type 'hello'</problem>     </componentFailures> </DeployDetails> |