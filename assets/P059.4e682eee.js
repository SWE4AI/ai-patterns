const e="059",o="Prep-pred pattern",t="",s=`When you have different code-base, library or resource load requirements for preprocess and prediction.
When you want to separate preprocess with prediction to divide issue in each resource to improve availability`,n="divide preprocessing steps and the prediction model into separate resources",i=`Pros: (1) Able to use resource efficiently with fault isolation.
(2) Flexibility in resource usage and scalability.
(3) Able to select library and language versions for each component.
Cons: (1) Increases operation cost with complexity in resources.
(2) Network connection in between preprocess and prediction may become bottleneck.`,r="https://github.com/shibuiwilliam/ml-system-in-actions/tree/main/chapter4_serving_patterns/prep_pred_pattern",a=[""],c=["Deployment"],p=["124"],l={id:e,name:o,aka:t,motivation:s,solution:n,consequences:i,examples:r,related:a,categories:c,resources:p};export{t as aka,c as categories,i as consequences,l as default,r as examples,e as id,s as motivation,o as name,a as related,p as resources,n as solution};
