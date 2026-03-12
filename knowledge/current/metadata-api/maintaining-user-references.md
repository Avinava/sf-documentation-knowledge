---
title: "Maintaining User References"
domain: metadata-api
topic: maintaining-user-references
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.755Z
estimatedTokens: 321
keywords: [Maintaining, User, References, preserved, metadata, deployment]
---

# Maintaining User References

> User fields are preserved during a metadata deployment.

# Maintaining User References

User fields are preserved during a metadata deployment.

When a component in your deployment refers to a specific user, such as a recipient of a workflow email notification or a dashboard running user, then Salesforce attempts to locate a matching user in the destination organization by comparing usernames during the deployment.

For example, when you copy data to a sandbox, the fields containing usernames from the production organization are altered to include the sandbox name. In a sandbox named test, the username user@acme.com becomes user@acme.com.test. When you deploy the metadata in the sandbox to another organization, the test in the username is ignored.

For user references in deployments, Salesforce performs the following sequence:

1.  Salesforce compares usernames in the source environment to the destination environment and adapts the organization domain name.
2.  If two or more usernames match, Salesforce lists the matching names and requests one of the users in the source environment be renamed.
3.  If a username in the source environment doesn’t exist in the destination environment, Salesforce displays an error, and the deployment stops until the usernames are removed or resolved to users in the destination environment.
