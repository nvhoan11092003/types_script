// arr
const arr3 = [{}, {}, {}];
const arr1 = ["1", "2", "3"];
const arr2 = [1, 2, 3];
// tuples
const tuple = ["1", 2, "3"];
//* enum
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCSESS"] = 200] = "SUCSESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERR"] = 201] = "CLIENT_ERR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 202] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
const code = STATUS_CODE.SUCSESS;
const logname = (name) => {
    if (typeof name == "number") {
        // name.toupperCase()
    }
};
logname("12");
