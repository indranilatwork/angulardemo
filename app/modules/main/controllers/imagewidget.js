'use strict';
module.exports = [
    '$scope',
    function($scope) {
        $scope.tags = [];
        // This function will be called user saves a new widget or saves a widget after edit.
        // This function will check for the empty field otherwise add it.
        $scope.saveWidget = function(){
            if(!$scope.widget.title || !$scope.widget.imageSrc){
                return;
            }
            $scope.widget.isAdd = false;
            $scope.widget.isEdit = false;
        }
        // This function will be called when the edit button will be clicked within existing widget.
        $scope.editWidget = function(){
            $scope.widget.isEdit = true; 
        }
           //This function will be called when the delete button will be clicked within existing widget.
        // This will emit a event to the parent controller 
        $scope.deleteWidget = function(){
            $scope.$emit('removeWidget', $scope.widget);
        }
        //This function will be called when the cacel button will be clicked.
        // If cancel is clicked at the time of adding a widget,
        // This will emit a event to the parent controller  
        // If cancel is clicked at the time of editing a widget, the editing mode will be canceled
        $scope.cancelWidget = function(){
            if(!$scope.widget.isAdd){
                $scope.widget.isEdit = false;  
            }else{
                $scope.$emit('removeWidget', $scope.widget);
            }
        },
        //This function will be called when the move up button will be clicked within existing widget.
        // This will emit a event to the parent controller  
        $scope.moveUp = function(){
            $scope.$emit('moveUpWidget', $scope.widget); 
        },
        //This function will be called when the move down button will be clicked within existing widget.
        // This will emit a event to the parent controller  
        $scope.moveDown = function(){
            $scope.$emit('moveDownWidget', $scope.widget);  
        }
        $scope.tagImage = function(e){
            
            if($scope.widget.editTag){
            $scope.tags.push({
                "positionX" :((e.offsetX/$(e.currentTarget).width())*100)+"%",
                 "positionY" : ((e.offsetY/$(e.currentTarget).height())*100)+"%",
                 "text" : "",
                 "addedOn" : new Date().getTime()
            })
            }
        },
        $scope.editTag = function(){
            $scope.widget.editTag = true;
        }
         $scope.saveTag = function(){
            $scope.widget.editTag = false;
        }
        $scope.removeTag = function(removedTag){
            angular.forEach($scope.tags,function(tag,index){
                if(tag.addedOn === removedTag.addedOn){
                    $scope.tags.splice(index,1);
                    return false;
                }
            })
        }
  
    }];
