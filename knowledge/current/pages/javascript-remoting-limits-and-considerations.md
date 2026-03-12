---
title: "JavaScript Remoting Limits and Considerations"
domain: pages
topic: javascript-remoting-limits-and-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:23.769Z
estimatedTokens: 496
keywords: [JavaScript, Remoting, Limits, Considerations, Although, isn’t, subject, resource]
---

# JavaScript Remoting Limits and Considerations

> Although JavaScript remoting isn’t subject to some resource limits, it has other
    limits.

# JavaScript Remoting Limits and Considerations

Although JavaScript remoting isn’t subject to some resource limits, it has other limits.

JavaScript remoting doesn’t avoid Salesforce service limits. JavaScript remoting calls aren’t subject to API limits, but Visualforce pages that use JavaScript remoting are subject to all standard Visualforce limits.

By default, the remote call response must return within 30 seconds, and after that the call times out. If your request takes longer to complete, configure a longer timeout, up to 120 seconds.

The request, including headers, has a maximum size of 4 MB.

The remote call response maximum size is 15 MB. If your JavaScript remoting code exceeds this limit, you have several options.

-   Reduce the size of the response for each request. Return only the data that’s required.
-   Break up large data retrieval into requests that return smaller chunks.
-   To reduce batch size, make more frequent batched requests.
-   Use nonbatched requests. Set { buffer: false } in your remoting request configuration block.

Salesforce logs error messages from some JavaScript remoting calls. You can prevent personal information from being logged by not including customer data in error messages. Instead, catch exceptions and log the full message. Then return a user-friendly message to your Visualforce page.

When a JavaScript remoting request is made, an access timeout value is created using the org-wide timeout value in the Session Settings Setup page. The timeout isn’t refreshed on subsequent requests. If the timeout is undesirable, you can employ User Profile access or Permission Set access.

JavaScript remoting doesn’t work when the referrer-policy HTTP header is set to no-referrer. For information about setting HTTP Referrer Policy values, see [Protect Sensitive Information in Your URLs](https://help.salesforce.com/s/articleView?id=xcloud.security_settings_referrer_policy.htm&type=5&language=en_US "HTML (New Window)").
