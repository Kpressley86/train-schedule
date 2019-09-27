$(document).ready(function () {

    // // Initialize Firebase

    var firebaseConfig = {
        apiKey: "AIzaSyBvF00UrHFujqLov2D8aUTLmXxLeV8C42Q",
        authDomain: "click-counter-f668d.firebaseapp.com",
        databaseURL: "https://click-counter-f668d.firebaseio.com",
        projectId: "click-counter-f668d",
        storageBucket: "",
        messagingSenderId: "64085530920",
        appId: "1:64085530920:web:56b0193e7973eb03e5981d"
      };

    firebase.initializeApp(firebaseConfig);

    //   // Assign the reference to the database to a variable

    var database = firebase.database();


    $("#submit").on("click", function (event) {

        event.preventDefault();

        var trainName = $("#train-name").val().trim();
        var trainDestination = $("#destination").val().trim();
        var trainArrival = $("#train-time").val().trim();
        var trainFrequency = $("#frequency").val().trim();

        database
            .ref()
            .push({
                name: trainName,
                destination: trainDestination,
                firstArrival: trainArrival,
                frequency: trainFrequency
            });


            
            database
            .ref()
            .on("child_added", function (snapshot) {
                
                let snapshotValue = snapshot.val();
                
                console.log(snapshot.val());
                
                //let formattedTime = moment(firstArrival, "HH:mm");
                //let monthsWorked = $("<td>").text(formattedTime.dif(moment(), "months"));
                //let totalbilled = $("<td>").text(monthsWorked * rate);
                var name = $("<td>").text(snapshotValue.name);
                var destination = $("<td>").text(snapshotValue.destination);
                var firstArrival = $("<td>").text(snapshotValue.firstArrival);
                var frequency = $("<td>").text(snapshotValue.frequency);
                
                let newRow = $("<tr>");

                newRow.append(name);
                newRow.append(destination);
                newRow.append(firstArrival);
                newRow.append(frequency);
                newRow.append(nextArrival);
                newRow.append(minutesAway);

            });

        $("#trainData").append(newRow);

    });

});
