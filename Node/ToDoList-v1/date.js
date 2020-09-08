
// noob way 
module.exports.getDay = getDay; 


//pro way, shortcut can bypass module.exports - dont need it
exports.getDate = function () {
    const today = new Date();

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    return day = today.toLocaleDateString("en-US", options);
}

function getDay() {
    let today = new Date();

    let options = {
        weekday: 'long'
    };

    return day = today.toLocaleDateString("en-US", options);

}