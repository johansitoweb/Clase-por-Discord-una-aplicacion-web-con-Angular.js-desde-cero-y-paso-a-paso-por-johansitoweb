var app = angular.module('clinicApp', []);

app.controller('clinicController', function($scope) {
    $scope.patients = [];
    $scope.appointments = [];
    $scope.patientName = '';
    $scope.patientAge = '';
    $scope.appointmentPatient = null;
    $scope.appointmentDate = '';

    $scope.addPatient = function() {
        if ($scope.patientName && $scope.patientAge) {
            $scope.patients.push({ name: $scope.patientName, age: $scope.patientAge });
            $scope.patientName = '';
            $scope.patientAge = '';
        }
    };

    $scope.deletePatient = function(patient) {
        var index = $scope.patients.indexOf(patient);
        if (index !== -1) {
            $scope.patients.splice(index, 1);
        }
    };

    $scope.addAppointment = function() {
        if ($scope.appointmentPatient && $scope.appointmentDate) {
            $scope.appointments.push({ patient: $scope.appointmentPatient, date: $scope.appointmentDate });
            $scope.appointmentPatient = null;
            $scope.appointmentDate = '';
        }
    };

    $scope.deleteAppointment = function(appointment) {
        var index = $scope.appointments.indexOf(appointment);
        if (index !== -1) {
            $scope.appointments.splice(index, 1);
        }
    };
});
