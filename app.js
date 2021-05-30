var app = angular.module("myApp" , []);

app.component("outerComp" , {
    bindings:{
        username: "@"
    },
    controller:[function(){
        var $ctrl = this;

        $ctrl.names=[
            'qasem'
        ]

        $ctrl.$onInit = function(){
            $ctrl.name = $ctrl.username || "qasem";
        }

        $ctrl.addName=(nn)=>{
            $ctrl.name = nn;
            $ctrl.names.push(nn)
        }
    }],
    template:`
    <h2> hello world </h2>
    <p> {{$ctrl.name}} </p>
    <inner-comp add-name = "$ctrl.addName(nn)"></inner-comp>
    <hr/>
    <p ng-repeat="aa in $ctrl.names">{{aa}}</p>
    `
})

app.component("innerComp" , {
    bindings:{
        addName : "&"
    },
    controller:[function(){
        var $ctrl = this;
        $ctrl.addAName = function(){
            $ctrl.addName({nn:$ctrl.newName})
            $ctrl.newName = ''
        }
    }],
    template:`
    <h3> hello world2!!! </h3>
    <p><input type="text" ng-model="$ctrl.newName" /></p>
    <p><button ng-click="$ctrl.addAName()">click me</button></p>
    `
})