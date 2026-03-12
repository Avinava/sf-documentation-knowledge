---
title: "Gamification Mobile Android SDK API Reference"
domain: loyalty
topic: gamification-mobile-android-sdk-api-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.838Z
estimatedTokens: 158
keywords: [Gamification, Mobile, Android, SDK, API, interacts, Salesforce, APIs, retrieves, games, assigned, loyalty, member, rewards, won]
---

# Gamification Mobile Android SDK API Reference

> The Gamification Mobile Android SDK interacts with the Salesforce Gamification APIs,
    and retrieves games assigned to a loyalty member, and the rewards won by the member after
    playing the game.

# Gamification Mobile Android SDK API Reference

The Gamification Mobile Android SDK interacts with the Salesforce Gamification APIs, and retrieves games assigned to a loyalty member, and the rewards won by the member after playing the game.

| Available in: all editions that have Loyalty Management enabled |
| --- |


Interact with the Gamification APIs, including:

| Resource | Description |
| --- | --- |
| /game/participant/${participantId}/games | Get games assigned to a participant. |
| /game/gameparticipantreward/${gameParticipantRewardId}/game-reward | Get details of the reward won after the member plays the game. |

## Related Topics

- /game/participant/${participantId}/games (atlas.en-us.loyalty.meta/loyalty/connect_resources_gamification.htm)
- /game/gameparticipantreward/${gameParticipantRewardId}/game-reward (atlas.en-us.loyalty.meta/loyalty/connect_resources_game_result.htm)
