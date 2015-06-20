'use strict';
module.exports = [
    '$scope',
    function($scope) {
        
        // This function will be called user saves a new widget or saves a widget after edit.
        // This function will check for the empty field otherwise add it.
        $scope.saveWidget = function(){
            if(!$scope.widget.title){
                return;
            }
            if($scope.widget.type === "image" && !$scope.widget.imageSrc){
                return;
            }
            $scope.widget.updatedAt = new Date().getTime();
            $scope.widget.isEdit = false;
        }
        // This function will be called when the edit button will be clicked within existing widget.
        $scope.editWidget = function(){
            $scope.widget.isEdit = true; 
        }
        //This function will be called when the delete button will be clicked within existing widget.
        // This will call the remove method of the parent controller which was inherited here 
        $scope.deleteWidget = function(){
            $scope.removeFromParent();
        }
        //This function will be called when the cacel button will be clicked.
        // If cancel is clicked at the time of adding a widget,
        // This will call the remove method of the parent controller which was inherited here 
        // If cancel is clicked at the time of editing a widget, the editing mode will be canceled
        $scope.cancelWidget = function(){
            if($scope.widget.updatedAt != 0){
                $scope.widget.isEdit = false;  
            }else{
                $scope.removeFromParent(); 
            }
        },
        //This function will be called when the move up button will be clicked within existing widget.
        // This will call the moveUp method of the parent controller which was inherited here 
        $scope.moveUp = function(){
            $scope.moveUpFromParent(); 
        },
        //This function will be called when the move down button will be clicked within existing widget.
        // This will call the moveDown method of the parent controller which was inherited here 
        $scope.moveDown = function(){
            $scope.moveDownFromParent(); 
        }
  
    }];
