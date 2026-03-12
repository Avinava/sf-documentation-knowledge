---
title: "Promotion Reward Details"
domain: loyalty
topic: promotion-reward-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.619Z
estimatedTokens: 261
keywords: [Promotion, Reward, Output, representation, offered, eligible, rule]
---

# Promotion Reward Details

> Output representation of the details of the reward offered by an eligible promotion
    rule.

# Promotion Reward Details

Output representation of the details of the reward offered by an eligible promotion rule.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| rewardDetails | Map<String, Object> | Details of the reward offered by the promotion rule. | Small, 60.0 | 60.0 |
| rewardType | String | Type of the reward offered by the promotion rule. Possible values are:AssignBadge—Assigns a badge to the loyalty program member.AssignGame—Enrolls the customer in a game, playing which the customer can win rewards.CreditFixedPoints—Credits a fixed number of loyalty points to the loyalty program member.CreditMultiplierPoints—Credits loyalty points that are based on the multiplier and transaction journal fields to the loyalty program member.GiveFreeProduct—provides the customer a free product on the cart or cart items.IssueVoucher—Issues a voucher to the customer.ProvideDiscount—Provides the customer a discount on the cart or cart items. | Small, 60.0 | 60.0 |
