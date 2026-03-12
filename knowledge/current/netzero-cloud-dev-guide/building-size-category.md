---
title: "Building Size Category"
domain: netzero-cloud-dev-guide
topic: building-size-category
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.524Z
estimatedTokens: 223
keywords: [Building, Size, Category, filter, criteria, energy, intensity, records, stored, range, floor, area, sizes, minimum, maximum]
---

# Building Size Category

> The Building Size Category object represents the building size filter criteria for the
  building energy intensity records. The building size filter criteria are stored as a range of
  floor area sizes from a minimum size to a maximum size, in units of sqft or m². The records can
  have overlapping minimum-maximum ranges.

# Building Size Category

The Building Size Category object represents the building size filter criteria for the building energy intensity records. The building size filter criteria are stored as a range of floor area sizes from a minimum size to a maximum size, in units of sqft or m². The records can have overlapping minimum-maximum ranges.

Here are the calculated fields:

-   Maximum Size (sqft) (MaximumSizeInSqft)

    **Input fields**

    Size Unit (SizeUnit)

    Maximum Size (MaximumSize)

    If Size Unit = sqft

    Maximum Size (sqft) = Maximum Size

    else

    Maximum Size (sqft) = Maximum Size converted to sqft

-   Minimum Size (sqft) (MinimumSizeInSqft)

    **Input fields**

    Size Unit (SizeUnit)

    Minimum Size (MinimumSize)

    If Size Unit = sqft

    Minimum Size (sqft) = Minimum Size

    else

    Minimum Size (sqft) = Minimum Size converted to sqft
