---
title: "CSS Overrides Migration for the Reputation Leaderboard Component"
domain: communities-dev
topic: css-overrides-migration-for-the-reputation-leaderboard-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.412Z
estimatedTokens: 655
keywords: [CSS, Overrides, Migration, Reputation, Leaderboard, Component, plan, continue, custom, migrate, forward, template, Full, Row, User]
---

# CSS Overrides Migration for the Reputation Leaderboard Component

> If you plan to continue using custom CSS overrides, migrate them forward
    after you update the template.

# CSS Overrides Migration for the Reputation Leaderboard Component

If you plan to continue using custom CSS overrides, migrate them forward after you update the template.

This topic identifies selector changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

-   Use custom CSS sparingly since template updates don’t always support customizations.
-   Custom CSS is now shared across all your site pages. If you used custom CSS for Login pages, copy it and close the CSS editor. Then navigate to a non-Login page, reopen the editor, and add the custom CSS.

## Full Reputation Leaderboard

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard.leaderboard | .comm-leaderboard |

## Reputation Leaderboard Row

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboardRow | .comm-leaderboard li |
| .forceCommunityReputationLeaderboardRow.comm-leaderboard li | .comm-leaderboard .comm-leaderboard__item |

## User Info Column

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard .pointsAndLevels.forceCommunityReputationLeaderboard .userInfoCol | .comm-leaderboard .slds-media__body |

## Reputation Points Column

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard .reputationCol | .comm-leaderboard__points-column |

## Title

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard .title | .comm-leaderboard h2 |

## User Level Name

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard .reputationLevelName | .comm-leaderboard__level-name |

## User Reputation Level Image

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard .reputationLevelImage | .comm-leaderboard .slds-media__body .slds-icon_small |

## Username in User

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard .userName | .comm-leaderboard__user-name |

## User Photo in User

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard .userPhoto | .comm-leaderboard .slds-media__figure |

## User Points in Reputation Levels

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard reputationPointsNumber. | .comm-leaderboard__points |

## User Points Word in Reputation Levels

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityReputationLeaderboard .reputationPointsWord. | .comm-leaderboard__points-word |
