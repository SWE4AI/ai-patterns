const e="047",t="Model Published as Data",n="",i=`simplicity-flexibility trade off in deployment

want to ingest model at runtime`,o="training process publishes a trained model to a streaming platform (i.e. Apache Kafka) which will be consumed at runtime by the application, instead of build time \u2014 eligible to subscribe for any model updates.",s=`pre-trained: yes
on-the-fly-predictions: yes

Maintaining the infrastructure required for this archeticutre demands much more engineering sophistication, however ML models can be updated without any applications needing to be redeployed \u2014 this is because the model can be ingested at runtime.`,a="",c=[""],r=["Deployment"],d=["113"],l={id:e,name:t,aka:n,motivation:i,solution:o,consequences:s,examples:a,related:c,categories:r,resources:d};export{n as aka,r as categories,s as consequences,l as default,a as examples,e as id,i as motivation,t as name,c as related,d as resources,o as solution};
