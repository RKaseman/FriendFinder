
// chosen CSS
var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
        allow_single_deselect: true
    },
    ".chosen-select-no-single": {
        disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
        no_results_text: "No results"
    },
    ".chosen-select-width": {
        width: "95%"
    }
};

for (var selector in config) {
    $(selector).chosen(config[selector]);
}

// get form inputs
$("#submit").on("click", function (event) {
    event.preventDefault();

    // form validation
    function validateForm() {
        var isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        $(".chosen-select").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    // if all required fields are filled
    if (validateForm()) {
        // create an object of the user's data
        var userData = {
            fName: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        // post the data to the friends API
        $.post("/api/friends", userData, function (data) {

            // best match's name and photo are displayed.
            $("#match-name").text(data.fName);
            $("#match-img").attr("src", data.photo);

            // modal with the best match
            $("#results-modal").modal("toggle");

        });
    } else {
        alert("Please fill out all fields to submit");
    }
});

