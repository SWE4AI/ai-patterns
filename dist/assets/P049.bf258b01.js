const e="049",t="Web single pattern",n="",o="When you want to quickly release the predictor in the simplest architecture.",a="packs all the artifacts and code for the prediction model in a web server",i=`Since the single server REST (or GRPC) interface, preprocess, and trained model are in one place, you can create and deploy them as a simple predictor.  Pros:  (1) Ability to use one programming language for the web server, preprocess and inference.
(2) Easy to manage because of it's simplicity. (3) Easier troubleshooting.
(4) Minimal time-to-production post model training.
Cons: (1) Since all components are packed in a server or a docker image, applying a small patch will require updating the whole image (2) Updates will also require a service deployment, which in bigger organizations requires one to follow a hefty SDLC`,s="https://github.com/shibuiwilliam/ml-system-in-actions/tree/main/chapter4_serving_patterns/web_single_pattern",r=[""],c=["Deployment"],l=["124"],p={id:e,name:t,aka:n,motivation:o,solution:a,consequences:i,examples:s,related:r,categories:c,resources:l};export{n as aka,c as categories,i as consequences,p as default,s as examples,e as id,o as motivation,t as name,r as related,l as resources,a as solution};