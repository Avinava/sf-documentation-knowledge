---
title: "HeadlessUserDiscoveryHandler Example Implementation"
domain: apex-reference
topic: headlessuserdiscoveryhandler-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.618Z
keywords: [HeadlessUserDiscoveryHandler, Example, Implementation]
---

# HeadlessUserDiscoveryHandler Example Implementation

## HeadlessUserDiscoveryHandler Example Implementation

Here's an example implementation of the Auth.HeadlessUserDiscoveryHandler interface. This example supports login with email and login with SMS.

The discoverUserFromLoginHint method uses custom logic to search for a user account with a verified email address or phone number that matches the data passed in the login hint. As a security best practice, Salesforce always recommends writing code to determine if the user's email address or phone number is verified.

For users logging in with email, the custom logic first checks whether the email address passed in the login hint is in a valid format. Then, to look for a verified Salesforce email address that matches the email address passed in the login hint, it queries the [TwoFactorMethodsInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_twofactormethodsinfo.htm) object. If successful, it returns an instance of Auth.HeadlessUserDiscoveryResponse with the user ID. If something goes wrong, it returns an instance of Auth.HeadlessUserDiscoveryResponse with a custom error message. In this example, it returns error messages when the email address format isn't valid, the email address isn't verified, there's no user with that email address, or there are multiple users with that email address.

For users logging in with SMS, the custom logic is similar. It checks whether the phone number passed in the login hint is in a valid format. Then, it looks for a verified Salesforce phone number that matches the phone number passed in the login hint. If successful, it returns an instance of Auth.HeadlessUserDiscoveryResponse with the user ID, and if not, it returns custom error messages.

```

```