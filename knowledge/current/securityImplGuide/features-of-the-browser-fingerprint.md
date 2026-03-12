---
title: "Features of the Browser Fingerprint"
domain: securityImplGuide
topic: features-of-the-browser-fingerprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.000Z
estimatedTokens: 555
keywords: [Features, Browser, Fingerprint, collection, together, identify, device, Salesforce, uses, build, model, user’s, original, they, logged]
---

# Features of the Browser Fingerprint

> A browser fingerprint is a collection of features that together identify a device.
		Salesforce uses these features to build a model of the user’s original browser fingerprint
		when they logged in. Salesforce uses this model to detect whether a user’s session was
		hijacked.

# Features of the Browser Fingerprint

A browser fingerprint is a collection of features that together identify a device. Salesforce uses these features to build a model of the user’s original browser fingerprint when they logged in. Salesforce uses this model to detect whether a user’s session was hijacked.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


| Feature Name | Description | Example |
| --- | --- | --- |
| window | The window size, in pixels, of the browser. | (750, 340) |
| userAgent | HTTP Header that contains information about the browser, operating system, version, and more. | Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10 |
| timestamp | Timestamp of the captured event. Usually in Coordinated Universal Time (UTC) format. | 2020-03-03T03:10:10Z |
| screen | The screen size, in pixels, of the browser. | (1050.0,1680.0) |
| plugins | JavaScript attribute that lists the activated browser plugins. | Chrome PDF Plugin:Portable Document FormatChrome PDF Viewer |
| originApp | The origin app of the fingerprint. | Lightning |
| drm | Whether DRM (Digital Rights Management) is enabled. | 0, 1 |
| dnt | JavaScript attribute that indicates whether the user is requesting web sites and advertisers to not track them. | enabled |
| webSockets | Whether the browser used web sockets. | true |
| sessionStorage | Whether the browser used session storage. | true |
| platform | Browser-populated JavaScript attribute regarding the platform the browser is running on (window.navigator.platform). | iPad |
| localStorage | Whether local storage is used, extending beyond the duration of the session. | false |
| ipAddress | The IP address in the request. | 96.43.144.26 or ”Salesforce.com IP” |
| indexDb | Whether an indexed database is enabled for browser storage. | true |
| fonts | A hashed value of a list of browser fonts. | 9wAt8IYAgO= |
| color | The color depth of the browser. | (24.0,24.0) |
