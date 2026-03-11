---
title: "MyDomainLoginDiscoveryHandler Example Implementation"
domain: apex-reference
topic: mydomainlogindiscoveryhandler-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.638Z
keywords: [MyDomainLoginDiscoveryHandler, Example, Implementation, Test, Class, MyDomainDiscLoginDefaultHandler]
---

# MyDomainLoginDiscoveryHandler Example Implementation

## MyDomainLoginDiscoveryHandler Example Implementation

Here's an example of the Auth.MyDomainLoginDiscoveryHandler interface. This sample class contains the default logic for My Domain login discovery using password authentication. You can customize the code to ensure it meets your needs. The requestAttributes parameter provides additional information that you can use in the discovery logic. Attributes include MyDomainUrl, IpAddress, UserAgent, and location information (such as Country and City). Use Auth.DiscoveryCustomErrorException to throw custom errors to display on the login page.

To implement this interface, the My Domain login page type must be set to Discovery.

```

```

### Test Class for MyDomainDiscLoginDefaultHandler Class

The following is the test class for MyDomainDiscoveryLoginHandler. For the test to work, your org must have the My Domain login page type set to Discovery.

```

```