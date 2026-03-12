---
title: "Accessing All Data Categories Associated
with an sObject"
domain: apex-guide
topic: accessing-all-data-categories-associated-with-an-sobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.325Z
estimatedTokens: 648
keywords: [Accessing, Data, Categories, Associated, sObject, describeDataCategoryGroups, describeDataCategoryGroupStructures, specific, Testing, Access]
---

# Accessing All Data Categories Associated
with an sObject

> Use the describeDataCategoryGroups and describeDataCategoryGroupStructures methods to return the categories associated with a specific object:

# Accessing All Data Categories Associated with an sObject

Use the describeDataCategoryGroups and describeDataCategoryGroupStructures methods to return the categories associated with a specific object:

1.  Return all the category groups associated with the objects of your choice (see describeDataCategoryGroups(sObjectNames)).
2.  From the returned map, get the category group name and sObject name you want to further interrogate (see [DescribeDataCategoryGroupResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm)).
3.  Specify the category group and associated object, then retrieve the categories available to this object (see describeDataCategoryGroupStructures).

The describeDataCategoryGroupStructures method returns the categories available for the object in the category group you specified. For additional information about data categories, see “Work with Data Categories” in the Salesforce online help.

In the following example, the describeDataCategoryGroupSample method returns all the category groups associated with the Article and Question objects. The describeDataCategoryGroupStructures method returns all the categories available for articles and questions in the Regions category group. For additional information about articles and questions, see “Work with Articles and Translations” in the Salesforce online help.

To use the following example, you must:

-   Enable Salesforce Knowledge.
-   Enable the answers feature.
-   Create a data category group called Regions.
-   Assign Regions as the data category group to be used by Answers.
-   Make sure the Regions data category group is assigned to Salesforce Knowledge.

For more information on creating data category groups, see “Create and Modify Category Groups” in the Salesforce online help. For more information on answers, see “Answers Overview” in the Salesforce online help.

```

```

```

```

## Testing Access to All Data Categories Associated with an sObject

The following example tests the describeDataCategoryGroupSample method shown earlier. It ensures that the returned category group and associated objects are correct.

```

```

This example tests the describeDataCategoryGroupStructures method. It ensures that the returned category group, categories and associated objects are correct.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm "Accessing All sObjects")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm "Dynamic SOQL")

## Code Examples

```apex
public class DescribeDataCategoryGroupSample {
   public static List<DescribeDataCategoryGroupResult> describeDataCategoryGroupSample(){
      List<DescribeDataCategoryGroupResult> describeCategoryResult;
      try {
         //Creating the list of sobjects to use for the describe
         //call
         List<String> objType = new List<String>();

         objType.add('KnowledgeArticleVersion');
         objType.add('Question');

         //Describe Call
         describeCategoryResult = Schema.describeDataCategoryGroups(objType);
   
         //Using the results and retrieving the information
         for(DescribeDataCategoryGroupResult singleResult : describeCategoryResult){
            //Getting the name of the category
            singleResult.getName();

            //Getting the name of label
            singleResult.getLabel();

            //Getting description
            singleResult.getDescription();

            //Getting the sobject
            singleResult.getSobject();
         }         
      } catch(Exception e){
      }
      
      return describeCategoryResult;
   }
}
```

```apex
public class DescribeDataCategoryGroupStructures {
   public static List<DescribeDataCategoryGroupStructureResult> 
   getDescribeDataCategoryGroupStructureResults(){
      List<DescribeDataCategoryGroupResult> describeCategoryResult;
      List<DescribeDataCategoryGroupStructureResult> describeCategoryStructureResult;
      try {
         //Making the call to the describeDataCategoryGroups to
         //get the list of category groups associated
         List<String> objType = new List<String>();
         objType.add('KnowledgeArticleVersion');
         objType.add('Question');
         describeCategoryResult = Schema.describeDataCategoryGroups(objType);
         
         //Creating a list of pair objects to use as a parameter
         //for the describe call
         List<DataCategoryGroupSobjectTypePair> pairs = 
            new List<DataCategoryGroupSobjectTypePair>();
         
         //Looping throught the first describe result to create
         //the list of pairs for the second describe call
         for(DescribeDataCategoryGroupResult singleResult : 
         describeCategoryResult){
            DataCategoryGroupSobjectTypePair p =
               new DataCategoryGroupSobjectTypePair();
            p.setSobject(singleResult.getSobject());
            p.setDataCategoryGroupName(singleResult.getName());
            pairs.add(p);
         }
         
         //describeDataCategoryGroupStructures()
         describeCategoryStructureResult = 
            Schema.describeDataCategoryGroupStructures(pairs, false);

         //Getting data from the result
         for(DescribeDataCategoryGroupStructureResult singleResult : describeCategoryStructureResult){
            //Get name of the associated Sobject
            singleResult.getSobject();

            //Get the name of the data category group
            singleResult.getName();

            //Get the name of the data category group
            singleResult.getLabel();

            //Get the description of the data category group
            singleResult.getDescription();

            //Get the top level categories
            DataCategory [] toplevelCategories = 
               singleResult.getTopCategories();
            
            //Recursively get all the categories
            List<DataCategory> allCategories = 
               getAllCategories(toplevelCategories);

            for(DataCategory category : allCategories) {
               //Get the name of the category
               category.getName();

               //Get the label of the category
               category.getLabel();

               //Get the list of sub categories in the category
               DataCategory [] childCategories = 
                  category.getChildCategories();
            }
         }
      } catch (Exception e){
      }
      return describeCategoryStructureResult;
    }
    
   private static DataCategory[] getAllCategories(DataCategory [] categories){
      if(categories.isEmpty()){
         return new DataCategory[]{};
      } else {
         DataCategory [] categoriesClone = categories.clone();
         DataCategory category = categoriesClone[0];
         DataCategory[] allCategories = new DataCategory[]{category};
         categoriesClone.remove(0);
         categoriesClone.addAll(category.getChildCategories());
         allCategories.addAll(getAllCategories(categoriesClone));
         return allCategories;
      }
   }
}
```

```apex
@isTest
private class DescribeDataCategoryGroupSampleTest {
   public static testMethod void describeDataCategoryGroupSampleTest(){
      List<DescribeDataCategoryGroupResult>describeResult =
                 DescribeDataCategoryGroupSample.describeDataCategoryGroupSample();
      
      //Assuming that you have KnowledgeArticleVersion and Questions
      //associated with only one category group 'Regions'.
      System.assert(describeResult.size() == 2,
           'The results should only contain two results: ' + describeResult.size());
      
      for(DescribeDataCategoryGroupResult result : describeResult) {
         //Storing the results
         String name = result.getName();
         String label = result.getLabel();
         String description = result.getDescription();
         String objectNames = result.getSobject();
         
         //asserting the values to make sure
         System.assert(name == 'Regions',
         'Incorrect name was returned: ' + name);
         System.assert(label == 'Regions of the World',
         'Incorrect label was returned: ' + label);
         System.assert(description == 'This is the category group for all the regions',
         'Incorrect description was returned: ' + description);
         System.assert(objectNames.contains('KnowledgeArticleVersion') 
                       || objectNames.contains('Question'),
                       'Incorrect sObject was returned: ' + objectNames);
      }
   }
}
```

```apex
@isTest
private class DescribeDataCategoryGroupStructuresTest {
   public static testMethod void getDescribeDataCategoryGroupStructureResultsTest(){
      List<Schema.DescribeDataCategoryGroupStructureResult> describeResult =
         DescribeDataCategoryGroupStructures.getDescribeDataCategoryGroupStructureResults();
      
      System.assert(describeResult.size() == 2,
            'The results should only contain 2 results: ' + describeResult.size());
            
      //Creating category info
      CategoryInfo world = new CategoryInfo('World', 'World');
      CategoryInfo asia = new CategoryInfo('Asia', 'Asia');
      CategoryInfo northAmerica = new CategoryInfo('NorthAmerica',
                                                  'North America');
      CategoryInfo southAmerica = new CategoryInfo('SouthAmerica',
                                                  'South America');
      CategoryInfo europe = new CategoryInfo('Europe', 'Europe');
      
      List<CategoryInfo> info = new CategoryInfo[] {
        asia, northAmerica, southAmerica, europe
     };
      
      for (Schema.DescribeDataCategoryGroupStructureResult result : describeResult) {
         String name = result.getName();
         String label = result.getLabel();
         String description = result.getDescription();
         String objectNames = result.getSobject();
         
         //asserting the values to make sure
         System.assert(name == 'Regions', 
         'Incorrect name was returned: ' + name);
         System.assert(label == 'Regions of the World',
         'Incorrect label was returned: ' + label);
         System.assert(description == 'This is the category group for all the regions',
         'Incorrect description was returned: ' + description);
         System.assert(objectNames.contains('KnowledgeArticleVersion') 
                    || objectNames.contains('Question'),
                       'Incorrect sObject was returned: ' + objectNames);
         
         DataCategory [] topLevelCategories = result.getTopCategories();
         System.assert(topLevelCategories.size() == 1,
         'Incorrect number of top level categories returned: ' + topLevelCategories.size());
         System.assert(topLevelCategories[0].getLabel() == world.getLabel() &&
                       topLevelCategories[0].getName() == world.getName());
         
         //checking if the correct children are returned
         DataCategory [] children = topLevelCategories[0].getChildCategories();
         System.assert(children.size() == 4,
         'Incorrect number of children returned: ' + children.size());
         for(Integer i=0; i < children.size(); i++){
            System.assert(children[i].getLabel() == info[i].getLabel() &&
                          children[i].getName() == info[i].getName());
         }
      }
      
   }
   
   private class CategoryInfo {      
      private final String name;
      private final String label;
            
      private CategoryInfo(String n, String l){
         this.name = n;
         this.label = l;
      }
      
      public String getName(){
         return this.name;
      }
      
      public String getLabel(){
         return this.label;
      }
   }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm)
