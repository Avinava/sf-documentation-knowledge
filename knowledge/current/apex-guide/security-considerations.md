---
title: "Security Considerations"
domain: apex-guide
topic: security-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:33.735Z
estimatedTokens: 575
keywords: [Security, Considerations, aware, Apex, access, metadata]
---

# Security Considerations

> Be aware of security considerations when using Apex to access metadata.

# Security Considerations

Be aware of security considerations when using Apex to access metadata.

Generally, Apex classes installed in the subscriber org can access any public, supported metadata type or component in the subscriber org. Protected metadata, such as a custom metadata type that’s been marked protected, can only be accessed by Apex classes in the same namespace as the protected metadata.

Additionally, for managed packages, if the managed package isn’t approved by Salesforce via security review, Apex classes in the package can’t access public or protected metadata unless the **Deploy Metadata from Non-Certified Package Versions via Apex** org preference is enabled. This preference, located under **Setup** | **Apex Settings**, must be enabled if admins or developers are installing managed packages that haven’t passed security review for app testing or pilot purposes.

For deployments, because Metadata.Operations.enqueueDeployment() uses asynchronous Apex, queued deployment jobs and deployment callbacks are counted as asynchronous jobs in the current org. Queued deployment jobs and callbacks are subject to governor limits. See [Lightning Platform Apex Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled."). To preserve service function, we limit the number of Metadata API deployments originating from Apex that can be enqueued at a time. See Limit on Enqueued Deployments from Apex.

Apps that access metadata via Apex must notify users that the app can retrieve or deploy metadata in the subscriber org. For installs that access metadata, notify users in the description of your package. You can write your own notice, or use this sample:

This package can access and change metadata outside its namespace in the Salesforce org where it’s installed.

Salesforce verifies the notice during the security review. For more information, see the [ISVforce Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_guidelines.htm).

## Related Topics

- Lightning Platform Apex Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
