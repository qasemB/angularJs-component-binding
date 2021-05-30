var app = angular.module("mainApp" ,[]);

app.controller("mainAppController" , function($scope){
    $scope.name="qasem";
    $scope.showFunc = function(){
        console.log("aaa");
    }
    $scope.obj={
        checkBox:true,
        radio:false,
        data:[
            {name:"qasem",family:"bassaki"},
            {name:"abbas",family:"bassaki"},
        ]
    }
})

app.component("personnelComp" , {
    templateUrl:"component.html",
    bindings:{
        username: "=",
        showFunc:"&",
        obj : "="
    },
    controller:[function(){
        var $ctrl = this;
        $ctrl.$onInit=function(){
            console.log($ctrl.obj);
            $ctrl.showFunc();
            $ctrl.username = "mojtaba";
            // $ctrl.firstname = $ctrl.username;
        }
        $ctrl.changeName = function(){
            $ctrl.obj.data[0].name = "mojtaba" 
        }
    }],
})

