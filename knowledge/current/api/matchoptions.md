---
title: "MatchOptions"
domain: api
topic: matchoptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.407Z
estimatedTokens: 206
keywords: [MatchOptions, match, operation, options, Standard, Matching, Rule, Leads, Accounts]
---

# MatchOptions

> Represents a type to be used with a match operation. It describes
         options to be used during the match operation. This type can be used only with the Standard
         Matching Rule for Leads on Accounts.

# MatchOptions

Represents a type to be used with a match operation. It describes options to be used during the match operation. This type can be used only with the Standard Matching Rule for Leads on Accounts.

This type is available in API versions 42.0 and later, in **Professional**, **Enterprise**, **Performance**, and **Unlimited** Editions with **Pardot Pro** or **Pardot Ultimate** Edition.

## Fields

| Field | Details | Description |
| --- | --- | --- |
| Fields | string | Comma-separated list of fields to be used in the match operation by the specified rule. |
| MatchEngine | string | Match engine (exact or fuzzy) to be used in the match operation. |
| Rule | string | Developer name of the MatchingRule to be used in the match operation. |
| SobjectType | string | Type of object to evaluate for matches. |
