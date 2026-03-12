---
title: "QuestionDataCategorySelection"
domain: object-reference
topic: questiondatacategoryselection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.772Z
estimatedTokens: 767
keywords: [QuestionDataCategorySelection, data, category, selection, classifies, question, Calls, Special, Access, Rules, Usage, Sample, Code—Java]
---

# QuestionDataCategorySelection

> A data category selection represents a data
                category that classifies a question.

# QuestionDataCategorySelection

A data category selection represents a data category that classifies a question.

This object can be used to associate a question with a data category from a data category group or to query the categorization for a question.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To create, read or update data category selection, you must have create, read or update permission on the categorized question. Users who can update question can also delete its category selection. Users who can create questions can only select categories visible to their role.

## Fields

| Field Name | Details |
| --- | --- |
| DataCategoryGroupName | TypeDataCategoryGroupReferencePropertiesCreateDescriptionUnique name of the data category group which has a category associated with the question. |
| DataCategoryName | TypeDataCategoryGroupReferencePropertiesCreateDescriptionUnique name of the data category associated with the question. |
| ParentId | TypereferencePropertiesCreate, FilterDescriptionID of the question associated with the data category selection. |

## Usage

Every question can be categorized in a data category. You can use the QuestionDataCategorySelection object to query and manage question categorization. Client applications can create categorization for a question. They can also delete, query, and retrieve question categorization.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=object_reference)

#### Warning

Even though the API lets you select more than one category for QuestionDataCategorySelection, the Answers tab only supports one data category selection for questions. Selecting multiple categories through QuestionDataCategorySelection may result in unexpected behavior in the Answers tab, such as losing your multiple selections. You should only select one data category when using QuestionDataCategorySelection.

## Sample Code—Java

In the following example, the selectCategory method adds a category to a question data category selection. The retrieveCategorySelections method returns all the categories from a question data category selection.

```

```

Salesforce Knowledge uses a similar object for article data category selection. See [Article Type \_\_DataCategorySelection \_\_DataCategorySelection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_articletype__datacategoryselection.htm#sforce_api_objects_articletype__datacategoryselection "A data category selection represents a data category that classifies an article. This object is available in API version 19.0 and later.") for SOQL examples using this object.

#### See Also

-   [Article Type \_\_DataCategorySelection \_\_DataCategorySelection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_articletype__datacategoryselection.htm "A data category selection represents a data category that classifies an article. This object is available in API version 19.0 and later.")

## Code Examples

```apex
public void selectCategory(ID parentId, String categoryGroupName, String categoryName) {
    try {
        QuestionDataCategorySelection categorySelection = new QuestionDataCategorySelection();

        categorySelection.setParentId(parentId);
        categorySelection.setDataCategoryGroupName(categoryGroupName);
        categorySelection.setDataCategoryName(categoryName);
        binding.create(new SObject[]{categorySelection});
    } catch (RemoteException e) {
        System.out.println("An unexpected error has occurred." + e.getMessage());
    }
}

public String[] retrieveCategorySelections(String parentId) {
    QueryResult qr = null;

    try {
        qr = binding.query("SELECT DataCategoryName FROM QuestionDataCategorySelection WHERE Id = '" + parentId + "'");
    } catch (RemoteException e) {
        System.out.println("An unexpected error has occurred." + e.getMessage());
    }

    String[] categoryNames = new String[qr.getRecords().length];
    for (int index = 0; index < qr.getRecords().length; index++) {
        categoryNames[index] = ((QuestionDataCategorySelection)qr.getRecords()[index]).getDataCategoryName();
    }

    return categoryNames;
}
```

## Related Topics

- Article Type __DataCategorySelection __DataCategorySelection (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_articletype__datacategoryselection.htm)
