---
title: "extractFeatures(var1, var2)"
domain: omnistudio
topic: extractfeaturesvar1-var2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.898Z
keywords: [extractFeatures, var1, var2, Returns, extracted, features, model, run, time, prediction., returned, key, value, pair, map., Signature, Parameters, Return, Value]
---

# extractFeatures(var1, var2)

> Returns the extracted features for a model at run time to make a
      prediction. The extracted features are returned as a key value pair map.

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