---
title: "Participant Game Rewards List"
domain: loyalty
topic: participant-game-rewards-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.553Z
estimatedTokens: 305
keywords: [Participant, Game, Rewards, Output, representation, reward]
---

# Participant Game Rewards List

> Output representation of the participant game reward object.

# Participant Game Rewards List

Output representation of the participant game reward object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expirationDate | String | Date until which the game reward is valid. | Small, 60.0 | 60.0 |
| gameParticipantRewardId | String | ID of the participant game reward object. | Small, 60.0 | 60.0 |
| gameRewardId | String | ID of the game reward won. This field is null for a game yet to be played. | Small, 60.0 | 60.0 |
| issuedRewardReference | String | Voucher ID, or the transaction journal ID associated with the voucher, or the loyalty points rewarded to the participant. This field is null for a game yet to be played. | Small, 60.0 | 60.0 |
| sourceActivity | String | ID of the promotion, or the transaction journal that is associated with the activity because of which the participant was eligible to play the game. Examples of source activities include purchasing a product, and reviewing on social media.This field is null for a game yet to be played. | Small, 60.0 | 60.0 |
| status | String | Status of the reward. Possible values are:ExpiredNoRewardRewardedYetToReward | Small, 60.0 | 60.0 |
