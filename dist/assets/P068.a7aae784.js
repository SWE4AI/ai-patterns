const e="068",t="Model-load pattern",a="",s=`When update cycle of a model is more frequent than server image update.
When you want to reuse a server image for serving multiple models.`,n="build and save the prediction server image and model file separately, making the image light-weight with respect to size.",o=`Pros: Separate model versioning and image versioning.
Reuse of server image.
Light image size.
Change management of server image becomes easier.
Cons: It may take longer to start the service. The server although up should be treated as unhealthy until the model load completes.
A new requirement of matching supported library versions between images and models is applicable for this pattern.`,i="https://github.com/shibuiwilliam/ml-system-in-actions/tree/main/chapter3_release_patterns/model_load_pattern#",r=[""],l=["Deployment"],m=["124"],c={id:e,name:t,aka:a,motivation:s,solution:n,consequences:o,examples:i,related:r,categories:l,resources:m};export{a as aka,l as categories,o as consequences,c as default,i as examples,e as id,s as motivation,t as name,r as related,m as resources,n as solution};
