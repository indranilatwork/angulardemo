'use strict';
module.exports = [
    '$scope',
    '$compile',
    '$timeout',
    function($scope,$compile,$timeout) {
        // Initializing the widgets with blank array
        $scope.widgets = [{
                "isEdit" : false,
                "type" : "image-widget",
                "title" : "qqq",
                "updatedAt" : new Date().getTime(),
                "isAdd" : false,
                "editTag" : true,
                "imageSrc" : "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/HD-landscape-Photographs-798x350.png"
        }];
        // Initializing the widget type as text.
        $scope.widgetType = "text-widget";
        // Initialize the events emitted from the child controllers.
        $scope.$on('removeWidget', function(event, widget){
            $scope.removeWidget(widget);
        });
        $scope.$on('moveUpWidget', function(event, widget){
            $scope.moveUpWidget(widget);
        });
        $scope.$on('moveDownWidget', function(event, widget){
            $scope.moveDownWidget(widget);
        });

        // This function will be called when the add widget button is clicked.
        // Adding a new widget to the widget list with blank data & editing mode.
        // If widget type is image the adding a new property imageSrc
        $scope.addWidget = function(){
            var addedWidget = {
                "isEdit" : true,
                "type" : $scope.widgetType,
                "title" : "",
                "updatedAt" : new Date().getTime(),
                "isAdd" : true
            };
            if($scope.widgets.length && $scope.widgets[0].isAdd){
                $scope.widgets.splice(0,1);
            }
            if(addedWidget.type === 'image-widget'){
                addedWidget.imageSrc = ''; 
                addedWidget.editTag = true;
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
