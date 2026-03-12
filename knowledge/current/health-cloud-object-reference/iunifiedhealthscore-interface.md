---
title: "IUnifiedHealthScore
    Interface"
domain: health-cloud-object-reference
topic: iunifiedhealthscore-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.674Z
estimatedTokens: 712
keywords: [IUnifiedHealthScore, Stores, additional, action, logs, Usage, saveActionDetail, var1, Implementation]
---

# IUnifiedHealthScore
    Interface

> Stores additional information in the action logs.

# IUnifiedHealthScore Interface

Stores additional information in the action logs.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

## Usage

Actions triggered from the Dynamic Actions for Unified Health Scoring component are logged in the Health Score Action Log object. You can customize the information logged in this object using the IUnifiedHealthScore Apex interface in a custom Apex class.

-   **[IUnifiedHealthScore Methods](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IUnifiedHealthScore.htm#apex_healthcloudext_IUnifiedHealthScore_methods)**

-   **[IUnifiedHealthScore Example Implementation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IUnifiedHealthScore.htm#apex_interface_healthcloudext_IUnifiedHealthScore_Example)**


## IUnifiedHealthScore Methods

The following are methods for IUnifiedHealthScore.

-   **[saveActionDetail(var1)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IUnifiedHealthScore.htm#apex_healthcloudext_IUnifiedHealthScore_saveActionDetail)**
    Stores health score information in the Health Score Action Log object. The action history logged in Health Score Action Log doesn’t include score information by default.

### saveActionDetail(var1)

Stores health score information in the Health Score Action Log object. The action history logged in Health Score Action Log doesn’t include score information by default.

#### Signature

public Boolean saveActionDetail(Map<String,String\> var1)

```

```

#### Parameters

var1

Type: Map<String,String>

A map of key-value pairs for the attributes, including subject ID, action status, action date, action label, action name, action description, action icon URL, and performed by ID.

#### Return Value

Type: Boolean

## IUnifiedHealthScore Example Implementation

This example shows an implementation of the healthcloudext.IUnifiedHealthScore interface.

Using this sample code, your action logs now also mention the specified score category and its score value at the time the action was triggered.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Ensure that you replace the category ID in this sample code with the ID of the category that you want to log score information for. You can find the IDs of your score categories by either inspecting a category page’s URL, or you can run this query in the Developer Console Query Editor:

```

```

## Code Examples

```apex
healthcloudext.IUnifiedHealthScore, saveActionDetail, [Map<String,String>], Boolean
```

```apex
global class ApexClassForCustomLogs implements healthcloudext.IUnifiedHealthScore{//IMPORTANT: replace CustomActionLog with the name the Apex class 
    public Boolean saveActionDetail(Map<String, String> request){
        try {
            String aSubject = request.get('subjectId');
            List<HealthScore> aHealthScore = [select CurrentScore from HealthScore where SubjectId=:aSubject and ScoreCategoryId='0gzRN00000001drYAA'];
            //IMPORTANT: Replace 0gzRN00000001drYAA with the Id of your score category.
            List<HealthScoreActionLog> acctList = new List<HealthScoreActionLog>();
        HealthScoreActionLog aHealthScoreActionLog = new HealthScoreActionLog(
             ActionDescription=request.get('actionDescription'),
             ActionIconUrl=request.get('actionIconUrl'),
             ActionLabel=request.get('actionLabel'),
             ActionName=request.get('actionName'),
             ActionStatus=request.get('actionStatus'),
             PerformedById=request.get('performedById'),
             SubjectId=request.get('subjectId'),
             ActionDate=datetime.now(),
            Score=aHealthScore[0].CurrentScore,
            ScoreCategoryId='0gzRN00000001drYAA'//IMPORTANT: Replace 0gzRN00000001drYAA with the Id of your score category.
        );
            acctList.add(aHealthScoreActionLog);
            Database.SaveResult[] srList = Database.insert(acctList, false);
            for (Database.SaveResult sr : srList) {
    if (sr.isSuccess()) {
        // Operation was successful, so get the ID of the record that was processed
        System.debug('Successfully inserted account. HealthScoreActionLog ID: ' + sr.getId());
    }
    else {
        // Operation failed, so get all errors
        for(Database.Error err : sr.getErrors()) {
            System.debug('The following error has occurred.');
            System.debug(err.getStatusCode() + ': ' + err.getMessage());
            System.debug('Account fields that affected this error: ' + err.getFields());
        }
    }
}
            //insert aHealthScoreActionLog;
            return true;
        }catch(DmlException e) {
          System.debug('An unexpected error has occurred: ' + e.getMessage());
          return false;
        }
    }
}
```

```
Select Id,CategoryName from ScoreCategory
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- IUnifiedHealthScore Methods (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IUnifiedHealthScore.htm)
- IUnifiedHealthScore Example Implementation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IUnifiedHealthScore.htm)
- saveActionDetail(var1) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IUnifiedHealthScore.htm)
