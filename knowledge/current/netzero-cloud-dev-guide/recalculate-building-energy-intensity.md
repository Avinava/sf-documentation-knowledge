---
title: "Recalculate Building Energy Intensity"
domain: netzero-cloud-dev-guide
topic: recalculate-building-energy-intensity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.283Z
estimatedTokens: 132
keywords: [Recalculate, Building, Energy, Intensity, BEI, filters, fuel, geolocation]
---

# Recalculate Building Energy Intensity

> Recalculate the building energy intensity (BEI) based on filters such
      as fuel type, building type, and geolocation.

# Recalculate Building Energy Intensity

Recalculate the building energy intensity (BEI) based on filters such as fuel type, building type, and geolocation.

Resource

```

```

Resource example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Response body for POST

[Building Energy Intensity Output](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_bei_calculation.htm "Output representation of the building energy intensity calculation request.")

## Code Examples

```
/connect/sustainability/bei/recalculate/${recordId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X​/connect/sustainability/bei/recalculate/${recordId}
```

## Related Topics

- Building Energy Intensity Output (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_bei_calculation.htm)
