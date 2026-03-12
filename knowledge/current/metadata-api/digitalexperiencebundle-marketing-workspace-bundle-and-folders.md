---
title: "DigitalExperienceBundle: Marketing Workspace Bundle and Folders"
domain: metadata-api
topic: digitalexperiencebundle-marketing-workspace-bundle-and-folders
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.830Z
estimatedTokens: 1251
keywords: [DigitalExperienceBundle, Marketing, Workspace, Bundle, Folders, uses, marketing, workspace, organize, content, items, used, campaigns, content-focused, text-based, code, structure., sfdc, _cms, _brand]
---

# DigitalExperienceBundle: Marketing Workspace Bundle and Folders

> DigitalExperienceBundle uses the marketing
    workspace type to organize content items used in marketing campaigns in a content-focused,
    text-based code structure.

# DigitalExperienceBundle: Marketing Workspace Bundle and Folders

DigitalExperienceBundle uses the marketing workspace type to organize content items used in marketing campaigns in a content-focused, text-based code structure.

For Marketing Cloud, the marketing folder contains one or more workspace folders, each representing an individual marketing workspace. Each workspace folder contains a collection of related content items, such as landing pages, forms, and emails, and their associated images and branding.

The folder for each marketing workspace includes content type folders, content item subfolders, and associated data that's contained in content.json and \_meta.json files.

![Marketing workspace type folder structure](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2FDigitalExperienceBundle_marketing.png&folder=api_meta)

The following content type folders represent the content types that are supported in a marketing workspace. For example, forms for a marketing workspace are stored under a content type folder called sfdc\_cms\_\_form.

-   [sfdc\_cms\_\_brand Folder](#brand_folder)
-   [sfdc\_cms\_\_brandSettings Folder](#brandSettings_folder)
-   [sfdc\_cms\_\_email Folder](#email_folder)
-   [sfdc\_cms\_\_form Folder](#form_folder)
-   [sfdc\_cms\_\_image Folder](#image_folder)
-   [sfdc\_cms\_\_landingPage Folder](#landingpage_folder)
-   [sfdc\_cms\_\_languageSettings Folder](#language_folder)

## sfdc\_cms\_\_brand Folder

This content type folder contains one content subfolder per brand. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_brandSettings Folder

This content type folder contains one content subfolder called brandSettings. The brandSettings content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_email Folder

This content type folder contains one content subfolder per email. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

In marketing workspaces, the default data graph, personalization recommenders, personalization points, and decisions aren't included in the bundle. If the workspace includes emails with personalized content that’s based on these objects, then:

-   Any merge field or repeater that uses the default data graph or a personalization recommender from the source org is broken in the target org.
-   Any dynamic content variations of email components are removed and only the default variations appear in the email.

<apiName>/content.json

```

```

## sfdc\_cms\_\_form Folder

This content type folder contains one content subfolder per form. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_image Folder

This content type folder contains one content subfolder per image. Each content subfolder contains two or more JSON files and a \_media subfolder that contains the image file.

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_landingPage Folder

This content type folder contains one content subfolder per landing page. Each content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## sfdc\_cms\_\_languageSettings Folder

This content type folder contains one content subfolder called languages. The languages content subfolder contains two or more JSON files:

-   [\_meta.json](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm#meta_json_description)
-   content.json
-   If applicable, additional JSON files that represent variations of the content item

<apiName>/content.json

```

```

## Code Examples

```
{
  "type" : "sfdc_cms__brand",
  "title" : "brand 1",
  "contentBody" : {
    "baseFontFamily" : "{!$brand.fontFamily.arial}",
    "baseFontSize" : {
      "unit" : "px",
      "value" : 16.0
    },
    "borderRadius" : {
      "round" : {
        "unit" : "rem",
        "value" : 0.25
      },
      "square" : {
        "unit" : "rem",
        "value" : 0.0
      }
    },
    "borderWeight" : {
      "medium" : {
        "unit" : "rem",
        "value" : 0.125
      },
      "none" : {
        "unit" : "rem",
        "value" : 0.0
      },
      ...
    },
    "buttonStyleGroup" : {
      "primary" : {
        "lightning:borderRadius" : "{!$brand.borderRadius.round}",
        "lightning:borderWidth" : "{!$brand.borderWeight.thin}",
        "lightning:buttonColorGroup" : {
          "backgroundColor" : "{!$brand.colorScheme.primaryAccent}",
          "backgroundHoverColor" : "{!$brand.colorScheme.primaryAccentDerived}",
          "borderColor" : "{!$brand.colorScheme.primaryAccent}",
          "borderHoverColor" : "{!$brand.colorScheme.primaryAccentDerived}",
          "textColor" : "{!$brand.colorScheme.primaryAccentContrast}",
          "textHoverColor" : "{!$brand.colorScheme.primaryAccentContrastDerived}"
        },
        "lightning:padding" : {
          "bottom" : {
            "unit" : "rem",
            "value" : 0.5
          },
          ...
        },
        "lightning:typography" : "{!$brand.typography.button.button1}"
      },
      "secondary" : {...},
      "tertiary" : {...}
    },
    "colorScheme" : {
      "contrast" : "#000000",
      "neutral" : "#747474",
      "primaryAccent" : "#99F077",
      "primaryAccentContrast" : "#ffffff",
      "primaryAccentContrastDerived" : "#000000",
      "primaryAccentDerived" : "#7fd65f",
      "root" : "#ffffff"
    },
    "fontFamily" : {
      "arial" : {
        "category" : "sans-serif",
        "fallbacks" : [ "Helvetica" ],
        "name" : "Arial"
      },
      "arialBlack" : {
        "category" : "sans-serif",
        "fallbacks" : [ "Gadget" ],
        "name" : "Arial Black"
      },
      ...
    },
    "fontSize" : {
      "large" : {
        "unit" : "rem",
        "value" : 1.125
      },
      "medium" : {
        "unit" : "rem",
        "value" : 1.0
      },
      ...
    },
    "spacing" : {
      "large" : {
        "bottom" : {
          "unit" : "rem",
          "value" : 1.5
        },
        "left" : {
          "unit" : "rem",
          "value" : 1.5
        },
        "right" : {
          "unit" : "rem",
          "value" : 1.5
        },
        "top" : {
          "unit" : "rem",
          "value" : 1.5
        }
      },
      ...
    },
    "typography" : {
      "button" : {
        "button1" : {
          "fontFamily" : "{!$brand.baseFontFamily}",
          "fontSize" : "{!$brand.fontSize.medium}",
          "fontWeight" : "{!$brand.fontWeight.normal}",
          "letterSpacing" : "normal",
          "lineHeight" : 1.5,
          "textTransform" : "none"
        }
      },
      ...
    },
    ...
    "lightning:dataProviders" : [ ],
    "sfdc_cms:einsteinBrandProperties" : {
      "personality" : {
        "defaultPersonality" : "professional"
      }
    },
    "sfdc_cms:variants" : [ ]
  },
  "urlName" : "brand-1",
  "sfdc_cms:title" : "brand 1",
}
```

```
{
  "type" : "sfdc_cms__brandSettings",
  "title" : "Brand Settings",
  "contentBody" : {
    "defaultBrand" : "brand3"
  },
  "urlName" : "brand-settings"
}
```

```
{
  "type" : "sfdc_cms__email",
  "title" : "Email_marketingSpaceA",
  "contentBody" : {
    "backgroundColor" : "#f3f3f3",
    "lightning:brandSource" : {
      "defaultBrandOption" : "sfdcBrand"
    },
    "lightning:colorScheme" : "{!$brand.colorScheme}",
    "lightning:dataProviders" : [ {
      "attributes" : {
        "objectApiName" : "UnifiedIndividual__dlm"
      },
      "definition" : "sfdc_cms__unifiedIndividualDataProvider",
      "sfdcExpressionKey" : "unifiedIndividual"
    } ],
    "lightning:padding" : "{!$brand.spacing.none}",
    "messagePurpose" : "promotional",
    "sfdc_cms:block" : {
      "definition" : "sfdc_cms/rootContentBlock",
      "id" : "6458e24b-c1a8-4f7d-b6f0-3659c092f1c3",
      "type" : "block",
      "children" : [ {
        "attributes" : {
          "lightning:borderRadius" : "{!$brand.borderRadius.square}",
          "lightning:borderWidth" : "{!$brand.borderWeight.none}",
          "lightning:colorScheme" : "{!$brand.colorScheme}",
          "lightning:margin" : "{!$brand.spacing.none}",
          "lightning:padding" : "{!$brand.spacing.xSmall}",
          "stackOnMobile" : true,
          "lightning:backgroundImage" : {
            "repeat" : "no-repeat",
            "position" : "center center",
            "size" : "cover"
          }
        },
        "definition" : "lightning/section",
        "id" : "b61c4d08-7985-41f2-a38c-7f8338e56e00",
        "type" : "block",
        "children" : [ {
          "attributes" : {
            "columnWidth" : 12.0,
            "lightning:borderRadius" : "{!$brand.borderRadius.square}",
            "lightning:borderWidth" : "{!$brand.borderWeight.none}",
            "lightning:colorScheme" : "{!$brand.colorScheme}",
            "lightning:margin" : "{!$brand.spacing.none}",
            "lightning:padding" : "{!$brand.spacing.xSmall}",
            "lightning:verticalAlignment" : "top",
            "lightning:backgroundImage" : {
              "repeat" : "no-repeat",
              "position" : "center center",
              "size" : "cover"
            }
          },
          "definition" : "lightning/column",
          "id" : "778d9976-82ec-49aa-a3de-ac6485332434",
          "type" : "block",
          "children" : [ ]
        } ]
      } ]
    },
    "sfdc_cms:title" : "Email_marketingSpaceA",
    "subjectLine" : "Email_marketingSpaceA subject{!$organization.Address}",
    "lightning:expressions" : [ ],
    "lightning:backgroundImage" : {
      "repeat" : "no-repeat",
      "position" : "center center",
      "size" : "cover"
    },
    "sfdc_cms:variants" : [ ]
  },
  "urlName" : "email-mk1"
}
```

```
{
  "type" : "sfdc_cms__form",
  "title" : "Form1_mk1",
  "contentBody" : {
    "lightning:brandSource" : {
      "defaultBrandOption" : "sfdcBrand"
    },
    "lightning:dataProviders" : [ {
      "attributes" : {
        "objectApiName" : "Account",
        "recordTypeId" : "012000000000000AAA"
      },
      "definition" : "sfdc_cms__recordDataProvider",
      "sfdcExpressionKey" : "Flow1"
    } ],
    "sfdc_cms:block" : {
      "definition" : "sfdc_cms/rootContentBlock",
      "id" : "fef7b2b0-5ddf-4f0e-b0d5-cdbc77a897e9",
      "type" : "block",
      "children" : [ {
        "attributes" : {
          "lightning:borderRadius" : "{!$brand.borderRadius.square}",
          "lightning:borderWidth" : "{!$brand.borderWeight.none}",
          "lightning:colorScheme" : "{!$brand.colorScheme}",
          "lightning:margin" : "{!$brand.spacing.none}",
          "lightning:padding" : "{!$brand.spacing.xSmall}",
          "stackOnMobile" : true,
          "lightning:backgroundImage" : {
            "repeat" : "no-repeat",
            "position" : "center center",
            "size" : "cover"
          }
        },
        "definition" : "lightning/section",
        "id" : "43dc4273-47e2-43ad-9e64-f0862eb0fcdf",
        "type" : "block",
        "children" : [ {
          "attributes" : {
            "columnWidth" : 12.0,
            "lightning:borderRadius" : "{!$brand.borderRadius.square}",
            "lightning:borderWidth" : "{!$brand.borderWeight.none}",
            "lightning:colorScheme" : "{!$brand.colorScheme}",
            "lightning:margin" : "{!$brand.spacing.none}",
            "lightning:padding" : "{!$brand.spacing.xSmall}",
            "lightning:verticalAlignment" : "top",
            "lightning:backgroundImage" : {
              "repeat" : "no-repeat",
              "position" : "center center",
              "size" : "cover"
            }
          },
          "definition" : "lightning/column",
          "id" : "95fc1b5c-481d-4d32-bd03-fec0a4d7aaa0",
          "type" : "block",
          "children" : [ {
            "attributes" : {
              "lightning:borderRadius" : "{!$brand.borderRadius.square}",
              "lightning:borderWidth" : "{!$brand.borderWeight.none}",
              "lightning:formInputColorGroup" : {
                "backgroundColor" : "{!$brand.colorScheme.root}",
                "borderColor" : "{!$brand.colorScheme.neutral}",
                "textColor" : "{!$brand.colorScheme.contrast}"
              },
              "lightning:horizontalAlignment" : "left",
              "lightning:inputTypography" : "{!$brand.typography.input.input1}",
              "lightning:labelTypography" : "{!$brand.typography.label.label1}",
              "lightning:margin" : "{!$brand.spacing.none}",
              "lightning:padding" : "{!$brand.spacing.none}",
              "maxLength" : 255.0,
              "sfdc_cms:fieldReference" : "{!Flow1.Name}",
              "sfdc_cms:formInputLabelProperty" : "Account Name",
              "sfdc_cms:formInputNameProperty" : "Name",
              "sfdc_cms:formInputRequiredProperty" : true,
              "width" : "auto"
            },
            "definition" : "lightning/inputText",
            "id" : "6aac0596-26c6-457a-9a9a-cc43ba622739",
            "type" : "block"
          } ]
        } ]
      }, {
        "attributes" : {
          "lightning:borderRadius" : "{!$brand.borderRadius.square}",
          "lightning:borderWidth" : "{!$brand.borderWeight.none}",
          "lightning:colorScheme" : "{!$brand.colorScheme}",
          "lightning:margin" : "{!$brand.spacing.none}",
          "lightning:padding" : "{!$brand.spacing.xSmall}",
          "stackOnMobile" : true,
          "lightning:backgroundImage" : {
            "repeat" : "no-repeat",
            "position" : "center center",
            "size" : "cover"
          }
        },
        "definition" : "lightning/section",
        "id" : "7fe6298e-8c83-4dac-9596-02c629fdc519",
        "type" : "block",
        "children" : [ {
          "attributes" : {
            "columnWidth" : 12.0,
            "lightning:borderRadius" : "{!$brand.borderRadius.square}",
            "lightning:borderWidth" : "{!$brand.borderWeight.none}",
            "lightning:colorScheme" : "{!$brand.colorScheme}",
            "lightning:margin" : "{!$brand.spacing.none}",
            "lightning:padding" : "{!$brand.spacing.xSmall}",
            "lightning:verticalAlignment" : "top",
            "lightning:backgroundImage" : {
              "repeat" : "no-repeat",
              "position" : "center center",
              "size" : "cover"
            }
          },
          "definition" : "lightning/column",
          "id" : "976bff41-3fa9-4d04-aaf8-3590cb87909f",
          "type" : "block",
          "children" : [ {
            "attributes" : {
              "lightning:borderRadius" : "{!$brand.buttonStyleGroup.primary.lightning:borderRadius}",
              "lightning:borderWidth" : "{!$brand.buttonStyleGroup.primary.lightning:borderWidth}",
              "lightning:buttonColorGroup" : "{!$brand.buttonStyleGroup.primary.lightning:buttonColorGroup}",
              "lightning:horizontalAlignment" : "center",
              "lightning:margin" : "{!$brand.spacing.none}",
              "lightning:padding" : "{!$brand.buttonStyleGroup.primary.lightning:padding}",
              "lightning:typography" : "{!$brand.buttonStyleGroup.primary.lightning:typography}",
              "sfdc_cms:styleGroup" : "{!$brand.buttonStyleGroup.primary}",
              "text" : "Submit",
              "width" : "auto",
              "lightning:click" : {
                "actions" : [ {
                  "definition" : "sfdc_cms/customEventAction",
                  "attributes" : {
                    "type" : "formsubmit",
                    "options" : {
                      "bubbles" : true
                    }
                  }
                } ]
              }
            },
            "definition" : "lightning/actionButton",
            "id" : "84c67ba2-fffc-46d1-80af-35e66ae85ef3",
            "type" : "block"
          } ]
        } ]
      } ]
    },
    "sfdc_cms:title" : "Form1_mk1",
    "formsubmission" : {
      "actions" : [ {
        "definition" : "sfdc_cms/umaFormSubmissionAction",
        "attributes" : {
          "formId" : "{!$form.id}",
          "pageReferenceId" : "{!$page.id}",
          "formData" : "{!$form.fields}"
        }
      }, {
        "definition" : "sfdc_cms/showThankYouAction",
        "attributes" : {
          "message" : "Thank you for your submission."
        }
      } ]
    }
  },
  "urlName" : "form1-mk1"
}
```

```
{
  "type" : "sfdc_cms__image",
  "title" : "Img1_mk1",
  "contentBody" : {
    "sfdc_cms:media" : {
      "source" : {
        "mimeType" : "image/png",
        "ref" : "0sNSB000001rKsr2AE",
        "type" : "file",
        "size" : 538158
      }
    }
  },
  "urlName" : "img1-mk1"
}
```

## Related Topics

- _meta.json (atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm)
