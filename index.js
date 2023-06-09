// Function Object
console.log(
    "-----------------------------String-------------------------------"
);
const string =
    "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

//charAt():  là một phương thức trả về ký tự từ chỉ mục được chỉ định.
console.log("charAt = ", string.charAt(8));

// charCodeAt(): là một phương thức trả về vị trí unicode của ký tự tại vị trí đã cho trong chuỗi.
console.log(string.charCodeAt(0));

//concat():  là một phương thức để nối chuỗi.
const string2 = "and visual mockups.";
console.log("concat = ", string.concat(" ", string2));

//includes(): để xác định xem một chuỗi có thể được tìm thấy trong một chuỗi khác hay không.
const string3 = "text1";
console.log(
    "includes = ",
    `The word "${string3}" ${
    string.includes(string3) ? "is" : "is not"
  } in the sentence`
);

//slice(): cắt một phần chuỗi khỏi một chuỗi và đưa ra một chuỗi mới, indexStart: vị trí bắt đầu và indexEnd(vị trí kết thúc). tham số thứ 2 không bắt buộc
console.log("slice = ", string.slice(12, 14));

//startedWith(): xác định xem một chuỗi có bắt đầu bằng các ký tự của một chuỗi đã chỉ định hay không, và nó trả về giá trị đúng hoặc sai.
console.log("startedWith = ", string.startsWith("Lorem"));

//endWith(): kiểm tra rằng nếu một chuỗi kết thúc bằng một chuỗi được chỉ định và nó trả về giá trị đúng hoặc sai.
console.log("endWith = ", string.endsWith("layouts"));

//toUpperCase(): chuyển đổi tất cả các chuỗi chữ thường thành chữ hoa.
console.log("toUpperCase = ", string.toUpperCase());

//toUpperCase(): chuyển đổi tất cả các chuỗi chữ Hoa thành chữ thường.
const str1 = "BAN NSHD";
console.log("toLowerCase = ", str1.toLowerCase(str1));

//trimStart() loại bỏ khoảng trắng từ đầu chuỗi.
const str2 = "    bantvph14622    ";
console.log("trimStart = ", str2.trimStart());

//trimEnd() loại bỏ khoảng trắng từ cuối chuỗi.
console.log("trimEnd = ", str2.trimEnd());

//trim() loại bỏ khoảng trắng từ đầu và cuối chuỗi.
console.log("trim = ", str2.trim());

//replace() tìm kiếm và thay thế trên 1 chuỗi, Chỉ thay đổi chuỗi đầu tiên tìm thấy
console.log("replace = ", string.replace("dog", "cat"));

//replaceAll() tìm kiếm và thay thế trên tất cả trên 1 chuỗi.
console.log("replaceAll = ", string.replaceAll("dog", "cat"));

//substring() sẽ tìm kiếm chính xác một chuỗi ký tự, có 2 tham số : indexStart(vị trí bắt đầu) và indexEnd(vị trí kết thúc). (tham số thứ 2 không bắt buộc).
console.log(string.substring(0, 5));

// match() dùng để sử dụng các mẫu biểu thức chính quy
var number = "50 plus 50 equals 100!";
console.log("match = ", number.match(/\d+/g));

//split() là hàm chuyển một chuỗi thành một mảng các ký tự dựa trên dấu phân cách được cung cấp.
console.log("split = ", string.split("."));

// valueOf() trả về giá trị nguyên thuỷ của chuỗi
const stringObj = new String("foo");
console.log("valueOf = ", stringObj.valueOf());

// indexOf() Hàm này trả về vị trí của lần xuất hiện đầu tiên của một giá trị đã cho trong một chuỗi. Không thấy thì trả về -1
var email = "gmail@google.com";
var index = email.indexOf("@");
console.log("indexOf = ", index);

console.log(
    "-----------------------------Array-------------------------------"
);

// some() kiểm tra mảng với một hàm được truyền dưới dạng tham số. Trả về true nếu đúng và false nếu sai
const myAwesomeArray = ["a", "b", "c", "d", "e"];
console.log(
    "some = ",
    myAwesomeArray.some((item) => item === "d")
);

// reduce() này nhận một hàm có bộ tích lũy là đối số đầu tiên và giá trị làm đối số thứ hai.
const arrNumber = [1, 2, 3, 4, 5, 6];
const a = arrNumber.reduce((total, value) => {
    return total * value;
}, 2);
console.log("reduce = ", a);

// every() này kiểm tra mảng với một hàm được truyền dưới dạng tham số.
const arrEvery = ["a", "a", "a", "a", "a"];
const arrEvery1 = arrEvery.every((item) => {
    return item === "a";
});
console.log("every = ", arrEvery1);

// map() này nhận một hàm làm tham số. Và trả về một mảng mới.
const arrMap = arrNumber.map((item) => {
    return item + item;
});
console.log("map = ", arrMap);

// flat() này thường được sử dụng để tạo ra một mảng mới chứa các phần tử trong mảng (mà có chứa mảng con)
const arrFlat = [
    [1, 2],
    [3, 4], 5
];
console.log("flat = ", arrFlat.flat());

//filter() này nhận một hàm làm tham số. Và trả về một mảng mới.
const arrName = [{
        name: "Ban",
        age: 21,
    },
    {
        name: "Nam",
        age: 10,
    },
];
const arrFilter = arrName.filter((item) => {
    return item.name === "Nam";
});
console.log("filter = ", arrFilter);

//forEach() dùng để duyệt qua từng phần tử của mảng
const array = ["a", "b", "c"];
array.forEach(function(element) {
    console.log("forEach = ", element + "#");
});

console.log("forEach = ", array);

// includes() kiểm tra xem phần tử đã cho có tồn tại trong mảng hay không, KHÔNG làm thay đổi mảng ban đầu
console.log("includes", array.includes("b"));

// indexOf() dùng để tìm kiếm vị trí của phần tử trong mảng
var beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log("indexOf = ", beasts.indexOf("bison")); // > 1
console.log("indexOf = ", beasts.indexOf("bison", 2)); // > 4
console.log("indexOf = ", beasts.indexOf("giraffe")); // > -1

// join() dùng để tạo ra một chuỗi mới bằng cách nối tất cả các phần tử của mảng
var elements = ["Fire", "Air", "Water"];

console.log("join = ", elements.join()); // > "Fire,Air,Water"
console.log("join = ", elements.join("")); // > "FireAirWater"
console.log("join = ", elements.join("-")); // > "Fire-Air-Water"

// pop() dùng để xoá phần tử cuối cùng ra khỏi mảng, trả về phần tử bị xóa
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log("pop = ", plants.pop()); // > "tomato"

// shift() dùng để xoá phần tử đầu tiên ra khỏi mảng, trả về phần tử bị xóa
const plants1 = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log("shift = ", plants1.shift()); // > "broccoli"

// reverse() này đảo ngược một mảng.
const arrReverse = ["e", "d", "c", "b", "a"];
console.log("reverse = ", arrReverse.reverse());

// fill() Hàm này sẽ tra về một mảng mới, có tổng số phần tử bằng với mảng cũ
// array.fill(value, start, end)
// value: giá trị truyền vào,
// start: vị trí bắt đầu,
// end: vị trí kết thúcthúc
var numbers = [1, 2, 3, 4];
console.log("fill = ", numbers.fill(22, 1, 3)); // [1, 22, 22, 4]

// sort() Nó sắp xếp các phần tử của một mảng tăng dần hoặc giảm dần, và thay đổi mảng gốc
const arrSort = [5, 4, 3, 2, 1];

// Sắp xếp từ Nhỏ nhất đến Lớn nhất
console.log(
    "sort = ",
    arrSort.sort((a, b) => a - b)
); //-------> Kết quả : [1, 2, 3, 4, 5]

// Sắp xếp từ Lớn nhất đến Nhỏ nhất
console.log(
    "sort = ",
    arrSort.sort((a, b) => b - a)
); //-------> Kết quả : [5, 4, 3, 2, 1]

// find() Nó trả về giá trị của một phần tử được tìm thấy trong mảng và thỏa mãn hàm kiểm tra. Nếu không, nó trả về undefined.
const myArr = [
    { id: 1, name: "Hải" },
    { id: 2, name: "Doanh" },
    { id: 3, name: "Việt" },
];

console.log(
    "find = ",
    myArr.find((element) => element.id === 3)
); //-------> Kết quả : {id: 3, name: "Việt"}

console.log(
    "find = ",
    myArr.find((element) => element.id === 7)
); //-------> Kết quả : undefined

//  findIndex() Nó trả về chỉ mục của một phần tử được tìm thấy và thỏa mãn hàm
const arrIndex = [
    { id: 1, name: "Hải" },
    { id: 2, name: "Doanh" },
    { id: 3, name: "Việt" },
];

console.log(
    "findIndex = ",
    arrIndex.findIndex((element) => element.id === 3)
); //-------> Kết quả : 2

console.log(
    "findIndex = ",
    arrIndex.findIndex((element) => element.id === 7)
); //-------> Kết quả : -1

// -------------------------------------Câu 2 --------------------------------------------
console.log("-------------------------------------Câu 2 --------------------------------------------");
// So sánh 2 object
console.log("So sánh: ");
let x = {};
let y = x;

console.log(y == x); // true
console.log(y === x); // true
// true vì cùng 1 tham chiếu đến 1 địa chỉ

let c = {};
let b = {}; // khởi tạo object độc lập
console.log(b == c); // false
console.log(b === c); // false
// false vì không cùng 1 tham chiếu đến 1 địa chỉ

let e = { k: 1, j: 'kal' }
let f = { k: 1, j: 'kal' }

console.log(e == f); // false
console.log(e === f); // false

function test(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        console.log("False");
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            console.log("False");
            return false;
        }
    }
    console.log("True");
    return true
}
test(e, f)


// merge 2 object
console.log("merge 2 object");
const obj = { name: "Ban", age: 21 };
const obj1 = { address: "Hải Dương" };
const obj2 = {...obj, ...obj1 };
console.log(obj2);

// Thêm 1 thuộc tính vào obj
console.log("Thêm 1 thuộc tính vào obj");
const addObj = { name: "Ban", age: 21 };
// Thêm obj kiểu 1
addObj.address = "Hải Dương";
// Thêm obj kiểu 2 (typescript)
addObj['email'] = "bannshd@gmail.com";
console.log(addObj);

// Xóa
delete addObj.age;
console.log(addObj);