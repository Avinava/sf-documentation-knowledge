---
title: "PromotionHoverContent Class"
domain: retail-api
topic: promotionhovercontent-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.145Z
estimatedTokens: 910
keywords: [PromotionHoverContent, Apex, programmatic, access, promotion, hover, content, buttons, trade, calendar, launchpad, Implementation]
---

# PromotionHoverContent Class

> The PromotionHoverContent Apex class provides
    programmatic access to the promotion hover content and the buttons on the trade calendar
    promotion launchpad UI.

# PromotionHoverContent Class

The PromotionHoverContent Apex class provides programmatic access to the promotion hover content and the buttons on the trade calendar promotion launchpad UI.

## Namespace

```

```

## Example Implementation

```

```

## Supported Methods

| Method Signature | Description | Version |
| --- | --- | --- |
| cgcloud.PromotionHoverContent.Attribute(String label, String value) | Constructor for loading a PromotionHoverContent attribute. | 60.0 |
| cgcloud.PromotionHoverContent.KPI(String readCode, Srting label) | Constructor for loading a KPI. The constructor parameters are:readCode: String. The read code for the KPI to display.label: String. The label displayed on the UI. | 60.0 |
| cgcloud.PromotionHoverContent.ThresholdKPI(String readCode, String label, Decimal redThreshold, Decimal greenThreshold) | Constructor for loading a threshold KPI. A threshold KPI extends the KPI class. The constructor parameters are:readCode: String. The read code for the KPI to display.label: String. The label displayed on the UI.redThreshold: Decimal. The red threshold the KPI value is compared against.greenThreshold: Decimal. The green threshold the KPI value is compared against.A red, green, or yellow colored dot is displayed next to a KPI value on the UI based on how close or far the KPI value is from the thresholds. | 60.0 |
| getAttributes() | Returns the default attributes configured for the PromotionHoverContent instance. | 60.0 |
| getCopyButtonVisible() | Returns whether the Copy button is visible (true) or not (false). | 60.0 |
| getDeleteButtonVisible() | Returns whether the Delete button is visible (true) or not (false). | 60.0 |
| getDeriveButtonVisible() | Returns whether the Derive button is visible (true) or not (false). | 60.0 |
| getEditButtonVisible() | Returns whether the Edit button is visible (true) or not (false). | 60.0 |
| getHeaderRow1() | Gets the values of the first header row displayed on the promotion launchpad. | 60.0 |
| getHeaderRow2() | Gets the values of the second header row displayed on the promotion launchpad. | 60.0 |
| getHeaderRow3() | Gets the values of the third header row displayed on the promotion launchpad. | 60.0 |
| getKPIs() | Returns the configured KPIs with the read codes for the given PromotionHoverContent instance. Possible read codes are:LROILETVLETMLETP | 60.0 |
| getOpenInNewTabButtonVisible() | Indicates whether the Open In button is visible (true) or not (false). | 60.0 |
| setAttributes(List<cgcloud.PromotionHoverContent.Attribute> attributes) | Sets new attributes on the promotion launchpad. | 60.0 |
| setCopyButtonVisible(Boolean value) | Sets the visibility of the Copy button to true or false. | 60.0 |
| setDeleteButtonVisible(Boolean value) | Sets the visibility of the Delete button to true or false. | 60.0 |
| setDeriveButtonVisible(Boolean value) | Sets the visibility of the Derive button to true or false. | 60.0 |
| setEditButtonVisible(Boolean value) | Sets the visibility of the Edit button to true or false. | 60.0 |
| setHeaderRow1(String value) | Sets a new value for the first header row displayed on the promotion launchpad. | 60.0 |
| setHeaderRow2(String value) | Sets a new value for the second header row displayed on the promotion launchpad. | 60.0 |
| setHeaderRow3(String value) | Sets a new value for the third header row displayed on the promotion launchpad. | 60.0 |
| setKPIs( List<cgcloud.PromotionHoverContent.KPI> kpis) | Sets new KPIs on the promotion launchpad. | 60.0 |
| setOpenInNewTabButtonVisible(Boolean value) | Sets the visibility of the Open In button to true or false. | 60.0 |

## Code Examples

```
cgcloud.PromotionHoverContent promoHoverContent;
```
