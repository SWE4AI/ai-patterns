const e="060",n="Microservice vertical pattern",o="",t=`When you need to run several inferences in order;
When you have several inferences, and they have dependencies`,r="The pattern deploys prediction models in separate servers or containers as service. You execute prediction request from top to bottom synchronously, and gather the results to respond to the client.",s=`Pros: You may run multiple predictions in order.
It is possible to select next prediction service depending on the former prediction.
You may make the resource usage efficient, independent in server and code, and isolate failure. Cons: Since the predictions run synchronous order, it will require higher latency.
A former prediction latency may be bottleneck.
Complex system structure and workflow.`,i="-",c=["Microservice horizontal pattern"],a=["Architecture"],d=["124","012032","012113","012128"],l={id:e,name:n,aka:o,motivation:t,solution:r,consequences:s,examples:i,related:c,categories:a,resources:d};export{o as aka,a as categories,s as consequences,l as default,i as examples,e as id,t as motivation,n as name,c as related,d as resources,r as solution};
