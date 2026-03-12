---
title: "CustomFeatureExtractor Interface"
domain: omnistudio
topic: customfeatureextractor-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.859Z
estimatedTokens: 1712
namespace: AiAccelerator
keywords: [CustomFeatureExtractor, custom, apex-based, feature, extractor, override, extend, default, implementation., Usage, extractFeatures, var1, var2, Example, Implementation]
---

# CustomFeatureExtractor Interface

> Use the custom apex-based feature extractor interface to override or
      extend the default feature extractor implementation.

**Namespace:** `AiAccelerator`

# CustomFeatureExtractor Interface

Use the custom apex-based feature extractor interface to override or extend the default feature extractor implementation.

## Namespace

[AiAccelerator](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_aiaccelerator.htm "The AiAccelerator namespace provides an interface for overriding the default feature extractor.")

## Usage

Custom feature extractor interface takes feature extraction parameters as inputs, performs the required buiness logic according to the use-case, and then returns the extracted features as a <key,value> map. Here the expected keys of the map are:

-   columnNames:List<String>—It is input feature names required by the model.
-   rawData:List<List<String>>—A two-dimensional array that contains the value for each feature in the same order and a two-dimensional array for bulk feature retrieval for multiple records.

Consider an ML use case that predicts the price of a real estate property. To do so, the ML model can require features, such as the property’s square feet area, location, number of bedrooms, construction year, and construction age. Assume that all of these features are available in the property record except the construction age feature. In this case, the AI Accelerator API invokes a feature extractor to calculate the construction age in runtime by subtracting the construction year feature from the current year. Complex logic, such as taking joins across different entities and calculating the sum or average of some data over a period, can be used in feature extraction.

The behavior of the custom feature extractor interface implementation is dependent on the value of the FeatureExtractorType property set in your use case configuration file.

-   Apex—Default feature extractor implementation is overridden by the custom feature extractor implementation.
-   Hybrid—Default feature extractor implementation is used and can be extended by the custom feature extractor implementation.
-   Java—Default feature extractor implementation is overridden by the custom feature extractor implementation.

Keep these considerations in mind when implementing the interface for a custom feature extractor.

-   Every implementation receives parameters as a [recordList of Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_ctor "HTML (New Window)") and a [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_map.htm#apex_System_Map_ctor_3 "HTML (New Window)") of the previously extracted features.
-   An implementation receives parameters as a Map of the previous extracted features when multiple Apex classes are involved in feature extraction or when the intermediate extracted features must be passed on across the classes.
-   Add validations for input parameters in the implementation for your use case. Make sure that the validations check for the presence of essential keys or columns required for the implementation.
-   Every implementation must merge newly extracted features with previously extracted features, and return the merged output. The previously extracted features can be null.
-   If a use case requires the execution of multiple implementations in sequence or parallel, provide a wrapper to invoke the required feature extractors. Mention the wrapper class name in the configuration file.
-   For some use cases, few features have to be extracted and others have to be provided as raw data in the input request. For such use cases, implementation must provide the final output by merging extracted features and values from the raw data.
-   For Java and Hybrid feature extractors, all the Java implementation classes must expose a default constructor without requiring any parameters to be passed.
-   AI Accelerator platform validates the output map of feature extraction implementations to ensure that it contains a non-empty list of raw data and column names.
    -   Raw data is a [List of Lists](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_list.htm "HTML (New Window)") where each inner list represents the values of features for a record. The outer list supports bulk extraction.
    -   Column names store the list of feature names.

-   **[CustomFeatureExtractor Methods](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_aiaccelerator_CustomFeatureExtractor.htm#apex_aiaccelerator_CustomFeatureExtractor_methods)**

-   **[CustomFeatureExtractor Example Implementation](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_aiaccelerator_CustomFeatureExtractor.htm#apex_interface_aiaccelerator_CustomFeatureExtractor_Example)**


## CustomFeatureExtractor Methods

The following are methods for CustomFeatureExtractor.

-   **[extractFeatures(var1, var2)](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_aiaccelerator_CustomFeatureExtractor.htm#apex_aiaccelerator_CustomFeatureExtractor_extractFeatures)**
    Returns the extracted features for a model at run time to make a prediction. The extracted features are returned as a key value pair map.

### extractFeatures(var1, var2)

Returns the extracted features for a model at run time to make a prediction. The extracted features are returned as a key value pair map.

#### Signature

public Map<String,Object\> extractFeatures(List<Map<String,Object\>> var1, Map<String,Object\> var2)

#### Parameters

var1

Type: List<Map<String,Object>>

Represents the input parameters for deriving the feature extraction. For example, recordId that is required for a DB query, as per the implementation logic of the feature extractor.

var2

Type: Map<String,Object>

Represents the map of a previous extracted feature when multiple classes are involved in feature extraction. This is applicable when your custom feature extractor implementation is extending the default feature extractor implementation in case of Hybrid FeatureExtractorType setting in the use case configuration file.

#### Return Value

Type: Map<String,Object>

## CustomFeatureExtractor Example Implementation

This is an example implementation of the aiaccelerator.CustomFeatureExtractor interface.

-   The feature extraction implementation is just a test implementation. It actually doesn't do any DB queries and just expects everything to be present in the rawData map to be returned in the final output.
-   The feature extraction parameters contain the rawData key. This can be used to pass the values of a few features directly, if applicable.
-   In actual, the keys like storeId and productId can be used as parameters in a DB query for feature derivation. The rawData keys and values can be merged with the extracted features.

```

```

## Code Examples

```apex
global virtual class SampleCustomFeatureExtractor implements CustomFeatureExtractor {

    private static final String RAW_DATA = 'rawData';
    private static final String COL_NAMES = 'columnNames';

    /**
    * A Sample implementation that extracts "rawData" key from the map
    * and prepares response of columnNames list and rawData list of list.
    * @request:
    *   [{
    *        "storeId":"st1",
    *        "productId":"p1",
    *        "rawData":{
    *            "storeCategory":"PREMIUM"
    *            "day": MONDAY
    *         }
    *    }]
    * @return
    * {
    *   "rawData":[[PREMIUM, MONDAY]]
    *   "columnNames": ["storeCategory", "day"]
    * }
    * */
    global virtual Map<String,Object> extractFeatures(List<Map<String,Object>> request, Map<String,Object> extractedFeatures) {
        if (request == null || request.size() == 0) {
            return extractedFeatures;
        }
        Set<String> cols = new Set<String>();
        List<List<String>> rawDataList = new List<List<String>>();

        //iterating list
        for (Map<String, Object> record: request) {

            //iterating outer map
            for (String key: record.keySet()) {
                List<String> row = new List<String>();

                //extract rawData and add to output features
                if ('rawData' == key) {
                    Object value = record.get(key);
                    if (value instanceof Map<String,Object>) {
                        Map<String,Object> raw = (Map<String, Object>) value;
                        for (String keyRawData: raw.keySet()) {
                            cols.add(keyRawData);
                            row.add((String) raw.get(keyRawData));
                        }
                    }
                    rawDataList.add(row);
                }
            }

        }

        return mergeFeatures(extractedFeatures, new List<String>(cols), rawDataList);
    }

    private Map<String, Object> mergeFeatures(Map<String, Object> extractedFeatures, List<String> columnNames, List<List<String>> rawDataList) {
        Map<String, Object> features = new Map<String, Object>();
        if (extractedFeatures == null || extractedFeatures.isEmpty() || extractedFeatures.get(COL_NAMES) == null
                    || extractedFeatures.get(RAW_DATA) == null) {
                    features.put(COL_NAMES, columnNames);
                    features.put(RAW_DATA, rawDataList);
                    return features;
        }
        if (columnNames.isEmpty()) {
            return extractedFeatures;
        }
        List<String> oldCols = (List<String>) extractedFeatures.get(COL_NAMES);
        List<List<String>> oldRows = (List<List<String>>) extractedFeatures.get(RAW_DATA);
        List<String> extractedCols = new List<String>();
        List<List<String>> extractedRows = new List<List<String>>();
        extractedCols.addAll(oldCols);
        extractedCols.addAll(columnNames);

        for (Integer i = 0; i < rawDataList.size(); i++) {
            List<String> mergedRow = new List<String>();
            mergedRow.addAll(oldRows.get(i));
            mergedRow.addAll(rawDataList.get(i));
            extractedRows.add(mergedRow);
        }
        features.put(COL_NAMES, extractedCols);
        features.put(RAW_DATA, extractedRows);
        return features;
    }
}
```

## Related Topics

- AiAccelerator (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_aiaccelerator.htm)
- CustomFeatureExtractor Methods (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_aiaccelerator_CustomFeatureExtractor.htm)
- CustomFeatureExtractor Example Implementation (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_aiaccelerator_CustomFeatureExtractor.htm)
- extractFeatures(var1, var2) (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_aiaccelerator_CustomFeatureExtractor.htm)
