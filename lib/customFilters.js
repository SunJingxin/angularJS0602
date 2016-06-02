angular.module("customFilters",[]).
  filter("unique",function(){  	
  	 	return function(data,propertyName){
           if (angular.isArray(data)&&angular.isString(propertyName)) {
           	 var result=[];
           	 var key={};
           	 for(var i=0;i<data.length;i++){
               var val=data[i][propertyName];
               if(angular.isUndefined(key[val])){
               	  key[val]=true;
               	  result.push(val);
               }
           	 }
           	 return result;
           }else{
           	 return data;
           }
  	   } 	 
  })