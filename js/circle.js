(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * (Math.pow(this.radius, 2));
            // return Math.PI * this.radius ** 2;
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if (doRounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is: "+ Math.round(this.getArea()));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: "+ this.getArea());
            }

            // let area = this.getArea();
            //
            // if(doRounding) {
            //     area = Math.round(area);
            // {
            //
            // // console.log("Area of a circle with radius: " + this.radius + ", is: "+ area);
        }

    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    // log info about the circle via dot notation
    circle.radius = 5;

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
