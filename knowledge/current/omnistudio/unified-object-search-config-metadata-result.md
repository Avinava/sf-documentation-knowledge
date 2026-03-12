---
title: "Unified Object Search Config Metadata Result"
domain: omnistudio
topic: unified-object-search-config-metadata-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.837Z
estimatedTokens: 175
keywords: [Unified, Search, Config, Metadata, Result, Output, representation, unified, search, configuration, metadata, result.]
---

# Unified Object Search Config Metadata Result

> Output representation for the unified object search configuration
      metadata result.

# Unified Object Search Config Metadata Result

Output representation for the unified object search configuration metadata result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Timeline Error | Details of the error message returned if the request failed to retrieve the search configuration metadata. | Small, 58.0 | 58.0 |
| searchCriteriaConfigurationList | Unified Object Search Config Metadata | Search criteria configurations to retrieve the definitions. | Small, 58.0 | 58.0 |
| status | String | Indicates whether the request succeeded (true) or failed (false). | Small, 58.0 | 58.0 |

## Code Examples

```
{
   "errors":[
      
   ],
   "searchCriteriaConfigurationList":[
      {
         "actionList":[
            {
               "actionReference":"healthcloud/createReferralActionWrapper",
               "actionScope":"Global",
               "actionType":"LightningWebComponent",
               "displayName":"Create Referral"
            }
         ],
         "aggregateFields":[
            {
               "displayType":"Checkbox",
               "fieldLabel":"Provider Gender",
               "fieldName":"ProviderGender"
            },
            {
               "displayType":"Picklist",
               "fieldLabel":"Facility Name",
               "fieldName":"FacilityName"
            },
            {
               "displayType":"Picklist",
               "fieldLabel":"Provider Type",
               "fieldName":"ProviderType"
            },
            {
               "displayType":"Picklist",
               "fieldLabel":"Specialty",
               "fieldName":"Specialty"
            },
            {
               "displayType":"Picklist",
               "fieldLabel":"Subspecialty",
               "fieldName":"SubSpecialty"
            },
            {
               "displayType":"Text",
               "fieldLabel":"Languages Spoken",
               "fieldName":"LanguagesSpoken"
            }
         ],
         "description":"",
         "filterType":"MultipleFields",
         "objectName":"CareProviderSearchableField",
         "resultDisplayFormat":"Card",
         "resultFlexCard":"HealthCloudPSProviderCardContainer",
         "searchAndFilterFields":[
            {
               "options":[
                  
               ],
               "searchFieldLabel":"Provider Name",
               "searchFieldName":"ProviderName",
               "searchFieldSourceObjectFieldName":"ProviderName",
               "searchFieldSourceObjectName":"CareProviderSearchableField",
               "searchFieldSourceObjectRecordType":"012000000000000AAA",
               "searchFieldType":"Text"
            },
            {
               "options":[
                  
               ],
               "searchFieldLabel":"Facility Name",
               "searchFieldName":"FacilityName",
               "searchFieldSourceObjectFieldName":"FacilityName",
               "searchFieldSourceObjectName":"CareProviderSearchableField",
               "searchFieldSourceObjectRecordType":"012000000000000AAA",
               "searchFieldType":"Text"
            },
            {
               "options":[
                  
               ],
               "searchFieldLabel":"Provider Gender",
               "searchFieldName":"ProviderGender",
               "searchFieldSourceObjectFieldName":"ProviderGender",
               "searchFieldSourceObjectName":"CareProviderSearchableField",
               "searchFieldSourceObjectRecordType":"012000000000000AAA",
               "searchFieldType":"Text"
            },
            {
               "options":[
                  
               ],
               "searchFieldLabel":"Provider Type",
               "searchFieldName":"ProviderType",
               "searchFieldSourceObjectFieldName":"ProviderType",
               "searchFieldSourceObjectName":"HealthcareProvider",
               "searchFieldSourceObjectRecordType":"012000000000000AAA",
               "searchFieldType":"Picklist"
            },
            {
               "options":[
                  
               ],
               "searchFieldLabel":"Accepts new patients",
               "searchFieldName":"IsAcceptingNewPatients",
               "searchFieldSourceObjectFieldName":"IsAcceptingNewPatients",
               "searchFieldSourceObjectName":"CareProviderSearchableField",
               "searchFieldSourceObjectRecordType":"012000000000000AAA",
               "searchFieldType":"Boolean"
            },
            {
               "options":[
                  
               ],
               "searchFieldLabel":"Specialty",
               "searchFieldName":"Specialty",
               "searchFieldSourceObjectFieldName":"Specialty",
               "searchFieldSourceObjectName":"CareProviderSearchableField",
               "searchFieldSourceObjectRecordType":"012000000000000AAA",
               "searchFieldType":"Text"
            },
            {
               "options":[
                  {
                     "5":"5 miles"
                  },
                  {
                     "10":"10 miles"
                  },
                  {
                     "50":"50 miles"
                  }
               ],
               "searchFieldLabel":"Maximum Distance Range",
               "searchFieldName":"",
               "searchFieldSourceObjectFieldName":"",
               "searchFieldSourceObjectName":"",
               "searchFieldSourceObjectRecordType":"",
               "searchFieldType":"Distance"
            }
         ],
         "searchCriteriaConfigurationIsActive":true,
         "searchCriteriaConfigurationLabel":"Provider Search",
         "searchCriteriaConfigurationName":"Provider_Search",
         "sortFields":[
            
         ]
      }
   ],
   "status":"SUCCESS"
}
```

## Related Topics

- Timeline Error (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_timeline_error.htm)
- Unified Object
                  Search Config Metadata (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_unified_object_search_config_metadata.htm)
