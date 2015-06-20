'use strict';
module.exports = [
    '$scope',
    function($scope) {
        // Initializing the widgets with blank array
        $scope.widgets = [];
        // Initializing the widget type as text.
        $scope.widgetType = "text";
        // This function will be called when the add widget button is clicked.
        // Adding a new widget to the widget list with blank data & editing mode.
        // If widget type is image the adding a new property imageSrc
        $scope.addWidget = function(){
            var addedWidget = {
                "isEdit" : true,
                "type" : $scope.widgetType,
                "title" : "",
                "updatedAt" : ""  
            };
            if($scope.widgets.length && !$scope.widgets[0].updatedAt){
                $scope.widgets.splice(0,1);
            }
            if(addedWidget.type === 'image'){
                addedWidget.imageSrc = ''; 
            }
            $scope.widgets.unshift(addedWidget);
        }
        // Removing a widget from widget list.
        // The removing widget is passed from the child directive
        $scope.removeWidget = function(widget){
            if(widget.updatedAt){
                $scope.widgets.forEach(function(item,index){
                    if(item.updatedAt === widget.updatedAt){
                        $scope.widgets.splice(index,1);
                        return false;
                    }
                })
            }else{
                $scope.widgets.splice(0,1);  
            }
        }
        // Moving a specific widget up in the list.
        // At first getting the position of the widget in the array.
        // If the widget is on the top position then it can't the taken to up.
        //Otherwise swapping the widget with the widget on top of the particular widget
        $scope.moveUpWidget = function(widget){
            var widgetIndex,movedWidget;
            $scope.widgets.forEach(function(item,index){
                if(item.updatedAt === widget.updatedAt){
                    widgetIndex = index;
                    return false;
                }
            })
            if(widgetIndex > 0){
                movedWidget = $scope.widgets[widgetIndex]; 
                $scope.widgets[widgetIndex] = $scope.widgets[widgetIndex-1];
                $scope.widgets[widgetIndex-1] = movedWidget;
            }
        }
        // Moving a specific widget down in the list.
        // At first getting the position of the widget in the array.
        // If the widget is in the bottom of the list then it can't the taken down.
        //Otherwise swapping the widget with the widget in bottom of the particular widget
        $scope.moveDownWidget = function(widget){
            var widgetIndex,movedWidget;
            $scope.widgets.forEach(function(item,index){
                if(item.updatedAt === widget.updatedAt){
                    widgetIndex = index;
                    return false;
                }
            })
            if(widgetIndex < ($scope.widgets.length-1)){
                movedWidget = $scope.widgets[widgetIndex]; 
                $scope.widgets[widgetIndex] = $scope.widgets[widgetIndex+1];
                $scope.widgets[widgetIndex+1] = movedWidget;
            }
        }
  
    }];
