---
title: "Bookmark"
domain: object-reference
topic: bookmark
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.592Z
estimatedTokens: 301
keywords: [Bookmark, link, opportunities, share, common, Calls, Usage]
---

# Bookmark

> Represents a link between opportunities
                that share common information.

# Bookmark

Represents a link between opportunities that share common information.

This object is available to organizations with the Similar Opportunities feature enabled.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ID | TypeIDPropertiesDefaulted on create, FilterDescriptionID of the bookmark. Label is Bookmark ID. |
| FromId | TypeIDPropertiesFilterDescriptionThe originating opportunity. Label is Bookmarked From ID |
| ToId | TypeIDPropertiesFilterDescriptionThe opportunity to which the originating opportunity is linked. Label is Bookmarked To ID. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |

## Usage

The Bookmark object works with the Opportunity object only.

Use this read-only object to query the bookmarks between opportunities in your organization. In the online application, users can search for opportunities that share attributes with their opportunity. The user can then bookmark the appropriate opportunities for future reference.
