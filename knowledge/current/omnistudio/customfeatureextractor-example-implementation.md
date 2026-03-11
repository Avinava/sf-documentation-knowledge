---
title: "CustomFeatureExtractor Example Implementation"
domain: omnistudio
topic: customfeatureextractor-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.898Z
keywords: [CustomFeatureExtractor, Example, Implementation]
---

# CustomFeatureExtractor Example Implementation

## CustomFeatureExtractor Example Implementation

This is an example implementation of the aiaccelerator.CustomFeatureExtractor interface.

-   The feature extraction implementation is just a test implementation. It actually doesn't do any DB queries and just expects everything to be present in the rawData map to be returned in the final output.
-   The feature extraction parameters contain the rawData key. This can be used to pass the values of a few features directly, if applicable.
-   In actual, the keys like storeId and productId can be used as parameters in a DB query for feature derivation. The rawData keys and values can be merged with the extracted features.

```

```