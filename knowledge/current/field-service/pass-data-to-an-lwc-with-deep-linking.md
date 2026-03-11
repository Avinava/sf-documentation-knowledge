---
title: "Pass Data to an LWC with Deep Linking"
domain: field-service
topic: pass-data-to-an-lwc-with-deep-linking
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.211Z
keywords: [Pass, Data, LWC, Deep, Linking]
---

# Pass Data to an LWC with Deep Linking

# Pass Data to an LWC with Deep Linking

Pass data between Lightning web components (LWC) or from external apps to an LWC with deep linking. LWC with deep linking is available for the Field Service mobile app on both Android and iOS devices.

To pass parameters using deep linking, such as passing data into an LWC form, use the quick actions URI schema with your LWC quick action as the <api\_name>, followed by the parameter key and value pairs.

```

```

Here’s an example of a deep link URL that passes the first and last name of Jane Doe to an LWC using a quick action called LWC\_Pass\_Fields.

```

```

To pass the data, also update the LWC source code of the current page reference, the LWC that the deep link opens. Here’s an example of an LWC that passes the parameter value into the corresponding parameter key of the current page reference.

```

```