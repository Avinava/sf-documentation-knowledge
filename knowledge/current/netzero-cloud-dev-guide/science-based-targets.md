---
title: "Science Based Targets"
domain: netzero-cloud-dev-guide
topic: science-based-targets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.798Z
estimatedTokens: 1337
keywords: [Science, Targets, quantitative, align, science-based, criteria, reduce, company's, emissions, closer, net, zero, future]
---

# Science Based Targets

> You can set quantitative targets that align with science-based criteria to reduce your
  company's emissions and get closer to a net zero future.

# Science Based Targets

You can set quantitative targets that align with science-based criteria to reduce your company's emissions and get closer to a net zero future.

When you select Absolute Contraction as the target setting in Emissions Reduction Target, the system calculates the targets from base year to target year.

**Fields**

-   Emissions Reduction Target (EmssnReductionTarget)

    -   Target Setting Method (TargetSettingMethod)
    -   Target Year Emissions (TargetYearEmissions)
    -   Target Year (TargetYear)
    -   Target Emissions Change Percentage (TargetEmssnChangePercentage)
    -   Category (Category)
    -   Target Setting Method (TargetSettingMethod)
    -   Absolute Contraction Percentage (AbsoluteContractionPercentage)
    -   Custom Absolute Contraction Percentage (CustomAbsoluteContractionPct)
    -   Base Year Emissions (BaseYearEmissions)
    -   Base Year (BaseYear)
-   Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)

    -   Target Emissions (tC02e) (TargetEmissions)
    -   Target Year (TargetYear)
    -   Emissions Reduction Percentage (EmissionsReductionPercentage)
-   Emissions Reduction Commitment (EmssnRdctnCommitment)
    -   Commitment Type (CommitmentType)

**Calculations**

-   **EmssnReductionTarget.Target Year Emissions**

    EmssnReductionTarget.Target Year Emissions = AnnualEmssnRdctnTarget.Target Emissions (tC02e) where AnnualEmssnRdctnTarget.Target Year = EmssnReductionTarget.Target Year

-   **EmssnReductionTarget.Target Emissions Change Percentage**

    EmssnReductionTarget.Target Emissions Change Percentage = AnnualEmssnRdctnTarget.Emissions Reduction Percentage where AnnualEmssnRdctnTarget.Target Year = EmssnReductionTarget.Target Year

-   **AnnualEmssnRdctnTarget.Target Emissions (tC02e)**

    **Conditions**

    -   If EmssnReductionTarget.Category = "Science Based" and EmssnReductionTarget.Target Setting Method = "Absolute Contraction" and EmssnRdctnCommitment.Commitment Type = "1.5° Celsius"

        Then EmssnReductionTarget.Absolute Contraction Percentage = 4.2%

    -   If EmssnReductionTarget.Category = "Science Based" and EmssnReductionTarget.Target Setting Method = "Absolute Contraction" and EmssnRdctnCommitment.Commitment Type = "2° Celsius" or "Well Below 2° Celsius"

        Then EmssnReductionTarget.Absolute Contraction Percentage = 2.5%

    -   If EmssnReductionTarget.Target Setting Method = "Absolute Contraction" and EmssnReductionTarget.Absolute Contraction Percentage="Custom"

        Then EmssnReductionTarget.Absolute Contraction Percentage = EmssnReductionTarget.Custom Absolute Contraction Percentage

    -   If EmssnReductionTarget.Target Setting Method = "Absolute Contraction", click **Save** to create Annual Emission Reduction Target records for each year from base year to target year and AnnualEmssnRdctnTarget.Target Emissions and AnnualEmssnRdctnTarget.Emissions Reduction Percentage for the target year are added in EmssnReductionTarget.

    If EmssnReductionTarget.Absolute Contraction Percentage = 4.2%, then Percent = 0.042

    If EmssnReductionTarget.Absolute Contraction Percentage = 2.5%, then Percent = 0.025

    If EmssnReductionTarget.Absolute Contraction Percentage = Custom, then Percent = (EmssnReductionTarget.Custom Absolute Contraction Percentage / 100)

    If Var A = AnnualEmssnRdctnTarget.Target Emissions (tC02e) for base year + 1 = EmssnReductionTarget.Base Year Emissions - (Percent \* EmssnReductionTarget.Base Year Emissions)

    Var B = AnnualEmssnRdctnTarget.Target Emissions (tC02e) for base year + 2 = A - (Percent \* A)

    The AnnualEmssnRdctnTarget.Target Emissions (tC02e) for all years from base year + 1 to AnnualEmssnRdctnTarget.Target Year are calculated.

    For example, if EmssnReductionTarget.Absolute Contraction Percentage = 4.2%, EmssnReductionTarget.Base Year = 2021, and AnnualEmssnRdctnTarget.Target Year = 2030, then here's how the AnnualEmssnRdctnTarget.Target Emissions are calculated:

    | Target Emissions (tC02e) | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    |  | 1455385 | 1394259 | 1335700 | 1279601 | 1225857 | 1174371 | 1125048 | 1077796 | 1032528 | 989162 | 947617 |

-   **AnnualEmssnRdctnTarget.Emissions Reduction Percentage**

    If var X = EmssnReductionTarget.Base Year Emissions

    then AnnualEmssnRdctnTarget.Emissions Reduction Percentage for base year + 1 = (Base Emissions in Base Year + 1 - X) / X

    Emissions Reduction Percentage for base year + 2 = (Base Emissions in base year + 2 - X) / X

    The AnnualEmssnRdctnTarget.Emissions Reduction Percentage for all years from base year + 1 to AnnualEmssnRdctnTarget.Target Year are calculated.

    For example, if EmssnReductionTarget.Absolute Contraction Percentage = 4.2%, EmssnReductionTarget.Base Year = 2021, and AnnualEmssnRdctnTarget.Target Year = 2030, then here's how the AnnualEmssnRdctnTarget.Emissions Reduction Percentage are calculated:

    | Emissions Reduction Percentage | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    |  |  | -4.20% | -8.22% | -12.08% | -15.77% | -19.31% | -22.70% | -25.94% | -29.05% | -32.03% | -34.89% |
