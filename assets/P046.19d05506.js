const e="046",i="Dedicated Model API",n="",t=`Differing from the embedded model approach, this method compromises simplicity for flexibility.
\u2192 want flexible model deployment`,o=`The trained machine learning model becomes a dependency of a separate Machine Learning API service.
A separate microservice has been dedicated to Machine learning and is exclusively responsible for returning the prediction.`,a=`pre-trained: yes
on-the-fly-predictions: 

maintain a separate service there is increased complexity with this architecture, but there is more flexibility since the model deployments are now independent of the main application deployments. 

 model microservice or main server can be scaled separately to deal with higher volumes of traffic or to potentially serve other applications`,s="",r=[""],c=["Deployment"],l=["113"],d={id:e,name:i,aka:n,motivation:t,solution:o,consequences:a,examples:s,related:r,categories:c,resources:l};export{n as aka,c as categories,a as consequences,d as default,s as examples,e as id,t as motivation,i as name,r as related,l as resources,o as solution};
