const e="015",t="Delegation of Safety Responsibility",o="",s="Recent developments in ML and DL allowed probabilistic systems with large input and output spaces to be explored in safety critical systems. This introduces safety-related challenges, such as: (1) Model complexity and opacity, (2) Dealing with probabilistic output, (3) Sensitivity to distribution shifts (4) Formal verification is impossible or not scalable and more. This safety responsibility has to be dealt with.",i="Delegate all safety responsibility to other components or wrap DL algorithms in safety envelopes.",a="Increased Safety while putting limited constraints on the DL component. But increased complexity.",n="A computer vision based planning algorithm for autonomous vehicles might generate a series of unsafe manoeuvres or trajectories. However, safe executors will benefit from other sensors to delay execution of a maneouver or choose a different path in order to safely achieve the same goals",l=["Partial Rejection of Safety Responsibility","Full Acceptance of Safety Responsibility"],r=["Security & Safety"],c=["016"],p={id:e,name:t,aka:o,motivation:s,solution:i,consequences:a,examples:n,related:l,categories:r,resources:c};export{o as aka,r as categories,a as consequences,p as default,n as examples,e as id,s as motivation,t as name,l as related,c as resources,i as solution};