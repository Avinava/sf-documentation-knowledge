---
title: "Materiality Matrix Score"
domain: netzero-cloud-dev-guide
topic: materiality-matrix-score
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.176Z
estimatedTokens: 662
keywords: [Materiality, Matrix, Score, captures, inward, financial, outward, impact, topic]
---

# Materiality Matrix Score

> The Materiality Matrix Score object captures the inward (financial) and outward
                (impact) materiality score for a materiality topic.

# Materiality Matrix Score

The Materiality Matrix Score object captures the inward (financial) and outward (impact) materiality score for a materiality topic.

Here are the calculated fields:

-   **Inward Impact Score (InwardImpactScore)**

    **Input Fields**

    -   Materiality Matrix Score (MaterialityMatrixScore)

        Materiality Assessment Topic (MaterialityAsmtTopicId)

    -   Survey Question Response (SurveyQuestionResponse)

        Response ID (ResponseId)

        Response Value (ResponseValue)

    -   Materiality Topic (MaterialityTopic)

        Name (Name)

    -   Materiality Topic Question (MaterialityTopicQstn)

        Impact Type (ImpactType)

        Materiality Topic (MaterialityTopicId)

    -   Materiality Stakeholder (MaterialityStakeholder)

        Weighting Percent (WeightingPercent)

    -   Materiality Stakeholder Category (MaterialityStkhldrCatg)

        Materiality Assessment (MaterialityAssessmentId)

        Weighting Percent (WeightingPercent)


    **Calculations**

    MaterialityMatrixScore.Inward Impact Score = Sum (For each stakeholder filling out a materiality assessment (SurveyQuestionResponse.ResponseValue (where MaterialityTopicQuestion.Materiality Topic = MaterialityMatrixScore.Materiality Assessment Topic and MaterialityTopicQstn.Impact Type = “Outward”) × MaterialityStakeholder.Weighting Percent × MaterialityStkhldrCatg.Weighting Percent))

-   **Outward Impact Score (OutwardImpactScore)**

    **Input Fields**

    -   Materiality Matrix Score (MaterialityMatrixScore)

        Materiality Assessment Topic (MaterialityAsmtTopicId)

    -   Survey Question Response (SurveyQuestionResponse)

        Response ID (ResponseId)

        Response Value (ResponseValue)

    -   Materiality Topic (MaterialityTopic)

        Name (Name)

    -   Materiality Topic Question (MaterialityTopicQstn)

        Impact Type (ImpactType)

        Materiality Topic (MaterialityTopicId)

    -   Materiality Stakeholder (MaterialityStakeholder)

        Weighting Percent (WeightingPercent)

    -   Materiality Stakeholder Category (MaterialityStkhldrCatg)

        Materiality Assessment (MaterialityAssessmentId)

        Weighting Percent (WeightingPercent)


    **Calculations**

    MaterialityMatrixScore.Outward Impact Score = Sum (For each stakeholder filling out a materiality assessment (SurveyQuestionResponse.ResponseValue (where MaterialityTopicQuestion.Materiality Topic = MaterialityMatrixScore.Materiality Assessment Topic and MaterialityTopicQstn.Impact Type = “Outward”) × MaterialityStakeholder.Weighting Percent × MaterialityStkhldrCatg.Weighting Percent))
