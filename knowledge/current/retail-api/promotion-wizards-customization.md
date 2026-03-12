---
title: "Promotion Wizards & Customization"
domain: retail-api
topic: promotion-wizards-customization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.122Z
estimatedTokens: 663
keywords: [Promotion, Wizards, Customization, promotions, implemented, Metadata, Wizard, Business, API, Installing, Updating, Base, Configuration, Records, MetadataWizard]
---

# Promotion Wizards & Customization

> Wizards related to promotions are implemented using Metadata Wizard
      and Business Object API.

# Promotion Wizards & Customization

Wizards related to promotions are implemented using Metadata Wizard and Business Object API.

When a user launches a wizard for a promotion, the MetadataWizard configuration for this user is used to display the required options in the user interface. When the user submits the wizard, the payload generated is submitted to the relevant Business Object API workflow for processing.

-   When new promotion option is selected from Trade Planning, Account Plan, or Promotion List, the NewPromotion configuration is used. When the wizard is submitted, the Create workflow is triggered through Business Object API.
-   When copy option is selected from Trade Planning or Promotion List, the CopyPromotion configuration is used. When the wizard is submitted, the Copy workflow is triggered through Business Object API.
-   When derive option is selected from Trade Planning or Promotion List, the DerivePromotion configuration is used. When the wizard is submitted, the Derive workflow is triggered through Business Object API.

## Installing and Updating Base Configuration Records

To install or update base configuration records, execute the following commands in APEX console:cgcloud.TPMSetupData.setupMetadataWizard('<sales org>'); cgcloud.TPMSetupData.setupBOApi('<sales org>');

These commands create and update MetadataWizard configuration records and Business Object API configuration records to the provided values by Consumer Goods Cloud TPM for the salesorg.

## Base MetadataWizard Configurations

A few records are required for the Metadata Wizard Configurations to work as designed. These records provide a customizable configuration for multiple wizards used for managing TPM use cases. Each of these configuration is required for each sales org. They’re created by running the APEX code snippet provided in Installing and Updating Base Configuration Records.

NewPromotion

```

```

CopyPromotion

```

```

DerivePromotion

```

```

-   **[New Promotion Wizard Invocable Actions](atlas.en-us.retail_api.meta/retail_api/rcg_tpm_new_promotion_apex_wrapper.htm)**
    This class contains support for Data Source providers used in the NewPromotion wizard.
-   **[Copy Promotion Wizard Invocable Actions](atlas.en-us.retail_api.meta/retail_api/rcg_tpm_copy_promotion_apex_wrapper.htm)**
    This class contains support for Data Source providers used in the CopyPromotion wizard.
-   **[Derive Promotion Wizard Invocable Actions](atlas.en-us.retail_api.meta/retail_api/rcg_tpm_derive_promotion_apex_wrapper.htm)**
    This class contains support for Data Source providers used in the DerivePromotion wizard.

## Code Examples

```
{
  "size": "medium",
  "title": "{! $Label.cgcloud__NPW_NEW + ' ' + $SObjectType.cgcloud__Promotion__c.label}",
  "columns": 2,
  "components": [
    {
      "id": "promoSlogan",
      "type": "Text",
      "outputProperty": "Slogan",
      "required": true,
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Slogan__c.label }",
      "maxLength": 80,
      "defaultValue": "{! _input_.Slogan }"
    },
    {
      "id": "promoTemplate",
      "type": "Picklist",
      "required": true,
      "outputProperty": "PromotionTemplate",
      "source": {
        "class": "NewPromotionWizardCallable",
        "method": "getPromotionTemplates",
        "cache": true,
        "params": {}
      },
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Promotion_Template__c.label }",
      "autoSelectFirstItem": true,
      "defaultValue": "{! _input_.PromotionTemplate}"
    },
    {
      "id": "promoAnchorAccount",
      "type": "Picklist",
      "active": "{! promoTemplate.AnchorType == 'Customer' }",
      "visible": "{! promoTemplate.AnchorType == 'Customer' }",
      "required": true,
      "outputProperty": "AnchorAccount",
      "source": {
        "class": "NewPromotionWizardCallable",
        "method": "getAccounts",
        "cache": true,
        "params": {
          "dateFrom": "{! promoDateFrom }",
          "dateThru": "{! promoDateThru }"
        }
      },
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Anchor_Account__c.label }",
      "autoSelectFirstItem": true,
      "defaultValue": "{! _input_.AnchorAccount}"
    },
    {
      "id": "promoAnchorAccountSet",
      "type": "Picklist",
      "active": "{! promoTemplate.AnchorType == 'CustomerSet' }",
      "visible": "{! promoTemplate.AnchorType == 'CustomerSet' }",
      "required": true,
      "outputProperty": "AnchorAccountSet",
      "source": {
        "class": "NewPromotionWizardCallable",
        "method": "getAccountSets",
        "cache": true,
        "params": {
          "dateFrom": "{! promoDateFrom }",
          "dateThru": "{! promoDateThru }"
        }
      },
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Anchor_Account_Set__c.label }",
      "autoSelectFirstItem": true,
      "defaultValue": "{! _input_.AnchorAccountSet }"
    },
    {
      "id": "promoNoAnchor",
      "type": "Empty",
      "visible": "{! promoTemplate.AnchorType == null }"
    },
    {
      "type": "Picklist",
      "id": "productPicklist",
      "label": "{! $SObjectType.Product2.fields.cgcloud__Criterion_3_Product__c.label }",
      "active": "{! promoTemplate.ProductDefinitionLevel == 'Promotion' }",
      "visible": "{! promoTemplate.ProductDefinitionLevel == 'Promotion' }",
      "source": {
        "class": "NewPromotionWizardCallable",
        "method": "getProducts",
        "params": {
          "level": "Brand",
          "dateFrom": "{! promoDateFrom }",
          "dateThru": "{! promoDateThru }",
          "promotionTemplate": "{! promoTemplate.Id }",
          "accountOrAccountSet": "{! if(promoTemplate.AnchorType, if(promoTemplate.AnchorType == 'CustomerSet', promoAnchorAccountSet.Id, promoAnchorAccount.Id), '') }"
        },
        "cache": true
      },
      "multiselect": true,
      "defaultValue": "{! _input_.criterion_3_product__c }",
      "outputProperty": "ProductFilter.Criteria.Brand"
    },
    {
      "id": "promoNoProduct",
      "type": "Empty",
      "visible": "{! promoTemplate.ProductDefinitionLevel != 'Promotion' }"
    },
    {
      "id": "promoDateFrom",
      "type": "Date",
      "label": "{!$SObjectType.cgcloud__Promotion__c.fields.cgcloud__Placement_Date_From__c.label}",
      "outputProperty": "DateFrom",
      "required": true,
      "defaultValue": "{! _input_.initialDate || 'today' }"
    },
    {
      "id": "promoDateThru",
      "type": "Duration",
      "referenceDate": "{! promoDateFrom }",
      "required": true,
      "label": "{! $Label.cgcloud__NPW_DURATION }",
      "outputProperty": "DateThru",
      "defaultValue": {
        "metric": "week",
        "quantity": 3
      }
    },
    {
      "id": "promoManualInputController",
      "type": "ListController",
      "label": "{! $Label.cgcloud__NPW_KPI }",
      "outputProperty": "ManualInputs",
      "maxItems": "{! promoTemplate.NumberOfPromotionKPIs }",
      "active": "{! promoTemplate.NumberOfPromotionKPIs }",
      "defaultItems": "{! promoTemplate.NumberOfPromotionKPIs }",
      "visible": "{! promoTemplate.NumberOfPromotionKPIs }",
      "itemUniqueKey": "{! promoKPI.Id }",
      "columns": 2,
      "components": [
        {
          "id": "promoKPI",
          "label": "{! $Label.cgcloud__NPW_KPI }",
          "type": "Picklist",
          "required": true,
          "source": {
            "class": "NewPromotionWizardCallable",
            "method": "getPromotionKPIs",
            "params": {
              "promoTemplate": "{! promoTemplate.Id }"
            },
            "cache": true
          },
          "outputProperty": "KPI",
          "autoSelectFirstItem": true,
          "defaultValueIndex": "{! _idx_ }"
        },
        {
          "id": "promoKPIValue",
          "label": "{! $Label.cgcloud__VALUE}",
          "type": "Number",
          "required": true,
          "outputProperty": "Value",
          "decimalPlaces": "{! promoKPI.ValueDecimalPlaces }"
        }
      ]
    },
    {
      "id": "TacticController",
      "type": "ListController",
      "label": "{! $SObjectType.cgcloud__Tactic__c.pluralLabel }",
      "outputProperty": "Tactics",
      "maxItems": 10,
      "active": "{! promoTemplate.HasTacticTemplates }",
      "visible": "{! promoTemplate.HasTacticTemplates }",
      "defaultItems": 1,
      "columns": 3,
      "components": [
        {
          "id": "tacticTemplate",
          "type": "Picklist",
          "required": true,
          "outputProperty": "TacticTemplate",
          "source": {
            "class": "NewPromotionWizardCallable",
            "method": "getTacticTemplates",
            "params": {
              "promoTemplate": "{! promoTemplate.Id }"
            },
            "cache": true
          },
          "label": "{! $SObjectType.cgcloud__Tactic__c.fields.cgcloud__Tactic_Template__c.label }",
          "defaultValueIndex": "{! _idx_ }",
          "autoSelectFirstItem": true
        },
        {
          "id": "tacticKPIValue",
          "type": "Number",
          "label": "{! tacticKPIName.Name }",
          "required": false,
          "outputProperty": "ManualInputs[0].Value",
          "visible": "{! tacticKPIName.Id }",
          "active": "{! tacticKPIValue != null || tacticKPIValue == 0 }",
          "decimalPlaces": "{! tacticKPIName.ValueDecimalPlaces }"
        },
        {
          "id": "tacticKPIName",
          "type": "Picklist",
          "label": "{! $Label.cgcloud__NPW_KPI }",
          "visible": false,
          "active": "{! tacticKPIValue != null || tacticKPIValue == 0 }",
          "source": {
            "class": "NewPromotionWizardCallable",
            "method": "getTacticKPIs",
            "params": {
              "promoTemplate": "{! promoTemplate.Id }",
              "tacticTemplate": "{! tacticTemplate.Id }"
            },
            "cache": true
          },
          "outputProperty": "ManualInputs[0].KPI",
          "autoSelectFirstItem": true
        },
        {
          "id": "tacticCompensationModel",
          "type": "Picklist",
          "required": true,
          "outputProperty": "CompensationModel",
          "source": {
            "class": "NewPromotionWizardCallable",
            "method": "getTacticCompensationModels",
            "params": {
              "tacticTemplate": "{! tacticTemplate.Id }"
            },
            "cache": true
          },
          "label": "{! $SObjectType.cgcloud__Tactic__c.fields.cgcloud__Compensation_Model__c.label }",
          "autoSelectFirstItem": true
        }
      ]
    }
  ],
  "footerLeftButtons": [
    "cancel"
  ],
  "footerRightButtons": [
    {
      "type": "saveAndCopy",
      "brand": "neutral",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE_AND_COPY }"
    },
    {
      "type": "saveAndEdit",
      "brand": "neutral",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE_AND_EDIT }"
    },
    {
      "type": "submit",
      "brand": "brand",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE }"
    }
  ]
}
```

```
{
  "size": "small",
  "title": "{! $Label.cgcloud__PC_BTN_COPY + ' ' + $SObjectType.cgcloud__Promotion__c.label}",
  "columns": 1,
  "context": [
    {
      "id": "promotionData",
      "source": {
        "class": "CopyPromotionWizardCallable",
        "method": "getPromotion",
        "cache": false,
        "params": {
          "promotionId": "{! _input_.promotionId }",
          "fields": [
            "Id",
            "cgcloud__Slogan__c",
            "cgcloud__Placement_Date_From__c",
            "cgcloud__Anchor_Account__c",
            "cgcloud__Anchor_Account_Set__c",
            "cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c"
          ]
        }
      }
    }
  ],
  "components": [
    {
      "id": "promotionId",
      "type": "Computed",
      "outputProperty": "Id",
      "value": "{! promotionData.Id }"
    },
    {
      "id": "promoSlogan",
      "type": "Text",
      "outputProperty": "Slogan",
      "required": true,
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Slogan__c.label }",
      "maxLength": 80,
      "defaultValue": "{! promotionData.cgcloud__Slogan__c }"
    },
    {
      "id": "promoDateFrom",
      "type": "Date",
      "label": "{!$SObjectType.cgcloud__Promotion__c.fields.cgcloud__Placement_Date_From__c.label}",
      "outputProperty": "InStoreDateFrom",
      "required": true,
      "defaultValue": "{! promotionData.cgcloud__Placement_Date_From__c || 'today' }"
    },
    {
      "id": "promoAnchorAccount",
      "type": "Picklist",
      "active": "{! promotionData.cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c == 'Customer' }",
      "visible": "{! promotionData.cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c == 'Customer' }",
      "outputProperty": "AnchorAccount",
      "source": {
        "class": "CopyPromotionWizardCallable",
        "method": "getAccounts",
        "cache": true,
        "params": {
          "promotionId": "{! promotionId }",
          "inStoreDateFrom": "{! promoDateFrom }"
        }
      },
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Anchor_Account__c.label }",
      "autoSelectFirstItem": true,
      "defaultValue": "{! promotionData.cgcloud__Anchor_Account__c }"
    },
    {
      "id": "promoAnchorAccountSet",
      "type": "Picklist",
      "active": "{! promotionData.cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c == 'CustomerSet' }",
      "visible": "{! promotionData.cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c == 'CustomerSet' }",
      "required": true,
      "outputProperty": "AnchorAccountSet",
      "source": {
        "class": "CopyPromotionWizardCallable",
        "method": "getAccountSets",
        "cache": true,
        "params": {
          "promotionId": "{! promotionId }",
          "inStoreDateFrom": "{! promoDateFrom }"
        }
      },
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Anchor_Account_Set__c.label }",
      "autoSelectFirstItem": true,
      "defaultValue": "{! promotionData.cgcloud__Anchor_Account_Set__c }"
    },
    {
      "id": "promoNoAnchor",
      "type": "Empty",
      "visible": "{! promotionData.cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c == null }"
    },
    {
      "id": "copyAttachments",
      "type": "Checkbox",
      "outputProperty": "CopyAttachments",
      "label": "{! $Label.cgcloud__PC_LBL_COPY_ATTACHMENTS }"
    }
  ],
  "footerLeftButtons": [
    "cancel"
  ],
  "footerRightButtons": [
    {
      "type": "saveAndCopy",
      "brand": "neutral",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE_AND_COPY }"
    },
    {
      "type": "saveAndEdit",
      "brand": "neutral",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE_AND_EDIT }"
    },
    {
      "type": "submit",
      "brand": "brand",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE }"
    }
  ]
}
```

```
{
  "size": "small",
  "title": "{! $Label.cgcloud__PC_BTN_DERIVE + ' ' + $SObjectType.cgcloud__Promotion__c.label}",
  "columns": 1,
  "context": [
    {
      "id": "promotionData",
      "source": {
        "class": "CopyPromotionWizardCallable",
        "method": "getPromotion",
        "cache": false,
        "params": {
          "promotionId": "{! _input_.promotionId }",
          "fields": [
            "Id",
            "cgcloud__Placement_Date_From__c"
          ]
        }
      }
    }
  ],
  "components": [
    {
      "id": "promotionId",
      "type": "Computed",
      "outputProperty": "Id",
      "value": "{! promotionData.Id }"
    },
    {
      "id": "promoTemplate",
      "type": "Picklist",
      "required": true,
      "outputProperty": "PromotionTemplate",
      "source": {
        "class": "DerivePromotionWizardCallable",
        "method": "getPromotionTemplates",
        "cache": true,
        "params": {
          "promotionId": "{! promotionData.Id }"
        }
      },
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Promotion_Template__c.label }",
      "autoSelectFirstItem": true
    },
    {
      "id": "promoDateFrom",
      "type": "Date",
      "label": "{!$SObjectType.cgcloud__Promotion__c.fields.cgcloud__Placement_Date_From__c.label}",
      "outputProperty": "InStoreDateFrom",
      "required": true,
      "defaultValue": "{! promotionData.cgcloud__Placement_Date_From__c || 'today' }"
    },
    {
      "id": "promoAnchorAccount",
      "type": "Picklist",
      "active": true,
      "visible": true,
      "required": true,
      "outputProperty": "AnchorAccount",
      "source": {
        "class": "DerivePromotionWizardCallable",
        "method": "getAccounts",
        "cache": true,
        "params": {
          "promotionId": "{! promotionData.Id }",
          "inStoreDateFrom": "{! promoDateFrom }"
        }
      },
      "label": "{! $SObjectType.cgcloud__Promotion__c.fields.cgcloud__Anchor_Account__c.label }",
      "autoSelectFirstItem": true
    },
    {
      "id": "deriveAttachments",
      "type": "Checkbox",
      "outputProperty": "DeriveAttachments",
      "label": "{! $Label.cgcloud__PC_LBL_DERIVE_ATTACHMENTS }"
    }
  ],
  "footerLeftButtons": [
    "cancel"
  ],
  "footerRightButtons": [
    {
      "type": "saveAndCopy",
      "brand": "neutral",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE_AND_COPY }"
    },
    {
      "type": "saveAndEdit",
      "brand": "neutral",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE_AND_EDIT }"
    },
    {
      "type": "submit",
      "brand": "brand",
      "label": "{! $Label.cgcloud__NPW_BTN_SAVE }"
    }
  ]
}
```

## Related Topics

- New Promotion Wizard Invocable Actions (atlas.en-us.retail_api.meta/retail_api/rcg_tpm_new_promotion_apex_wrapper.htm)
- Copy Promotion Wizard Invocable Actions (atlas.en-us.retail_api.meta/retail_api/rcg_tpm_copy_promotion_apex_wrapper.htm)
- Derive Promotion Wizard Invocable Actions (atlas.en-us.retail_api.meta/retail_api/rcg_tpm_derive_promotion_apex_wrapper.htm)
