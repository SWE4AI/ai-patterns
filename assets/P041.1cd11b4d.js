const e="041",i="Dedicated Model API",n="",t=`Differing from the embedded model approach, this method compromises simplicity for flexibility.
\u2192 flexible model deployment needed`,o=`The trained machine learning model becomes a dependency of a separate Machine Learning API service.
A separate microservice has been dedicated to Machine learning and is exclusively responsible for returning the prediction.`,s=`pre-trained: yes
on-the-fly-predictions: -

maintain a separate service there is increased complexity with this architecture, but there is more flexibility since the model deployments are now independent of the main application deployments. 

 model microservice or main server can be scaled separately to deal with higher volumes of traffic or to potentially serve other applications`,a="",r=[""],c=["Deployment"],l=["113"],d={id:e,name:i,aka:n,motivation:t,solution:o,consequences:s,examples:a,related:r,categories:c,resources:l};export{n as aka,c as categories,s as consequences,d as default,a as examples,e as id,t as motivation,i as name,r as related,l as resources,o as solution};
