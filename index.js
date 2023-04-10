// Function Object
console.log("-----------------------------String-------------------------------");
const string = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?"

//charAt():  là một phương thức trả về ký tự từ chỉ mục được chỉ định.
console.log("charAt = ", string.charAt(8));

// charCodeAt(): là một phương thức trả về vị trí unicode của ký tự tại vị trí đã cho trong chuỗi.
console.log(string.charCodeAt(0));

//concat():  là một phương thức để nối chuỗi.
const string2 = "and visual mockups."
console.log("concat = ", string.concat(" ", string2));

//includes(): để xác định xem một chuỗi có thể được tìm thấy trong một chuỗi khác hay không.
const string3 = "text1"
console.log("includes = ", (`The word "${string3}" ${string.includes(string3) ? 'is' : 'is not'} in the sentence`));

//slice(): cắt một phần chuỗi khỏi một chuỗi và đưa ra một chuỗi mới, indexStart: vị trí bắt đầu và indexEnd(vị trí kết thúc). tham số thứ 2 không bắt buộc
console.log("slice = ", string.slice(12, 14));

//startedWith(): xác định xem một chuỗi có bắt đầu bằng các ký tự của một chuỗi đã chỉ định hay không, và nó trả về giá trị đúng hoặc sai.
console.log("startedWith = ", string.startsWith("Lorem"));

//endWith(): kiểm tra rằng nếu một chuỗi kết thúc bằng một chuỗi được chỉ định và nó trả về giá trị đúng hoặc sai.
console.log("endWith = ", string.endsWith('layouts'));

//toUpperCase(): chuyển đổi tất cả các chuỗi chữ thường thành chữ hoa.
console.log("toUpperCase = ", string.toUpperCase());

//toUpperCase(): chuyển đổi tất cả các chuỗi chữ Hoa thành chữ thường.
const str1 = "BAN NSHD"
console.log("toLowerCase = ", str1.toLowerCase(str1));

//trimStart() loại bỏ khoảng trắng từ đầu chuỗi.
const str2 = "    bantvph14622    "
console.log("trimStart = ", str2.trimStart());

//trimEnd() loại bỏ khoảng trắng từ cuối chuỗi.
console.log("trimEnd = ", str2.trimEnd());

//trim() loại bỏ khoảng trắng từ cuối chuỗi.
console.log("trim = ", str2.trim());

//replace() tìm kiếm vào thay thế trên 1 chuỗi, Chỉ thay đổi chuỗi đầu tiên tìm thấy
console.log("replace = ", string.replace('dog', 'cat'));

//replaceAll() tìm kiếm vào thay thế trên tất cả trên 1 chuỗi. 
console.log("replaceAll = ", string.replaceAll('dog', 'cat'));

//substring() sẽ tìm kiếm chính xác một chuỗi ký tự, có 2 tham số : indexStart(vị trí bắt đầu) và indexEnd(vị trí kết thúc). (tham số thứ 2 không bắt buộc).
console.log(string.substring(0, 5));

// match() dùng để sử dụng các mẫu biểu thức chính quy
var number = '50 plus 50 equals 100!'
console.log("match = ", number.match(/\d+/g));

//split() là hàm chuyển một chuỗi thành một mảng các ký tự dựa trên dấu phân cách được cung cấp. 
console.log("split = ", string.split("."));

// valueOf() trả về giá trị nguyên thuỷ của chuỗi
const stringObj = new String('foo');
console.log("valueOf = ", stringObj.valueOf());

// indexOf() Hàm này trả về vị trí của lần xuất hiện đầu tiên của một giá trị đã cho trong một chuỗi. Không thấy thì trả về -1
var email = 'gmail@google.com';
var index = email.indexOf('@');
console.log("indexOf = ", index);

console.log("-----------------------------Array-------------------------------");

// some() kiểm tra mảng với một hàm được truyền dưới dạng tham số. Trả về true nếu đúng và false nếu sai
const myAwesomeArray = ["a", "b", "c", "d", "e"]
console.log("some = ", myAwesomeArray.some(item => item === "d"));

// reduce() này nhận một hàm có bộ tích lũy là đối số đầu tiên và giá trị làm đối số thứ hai.
const arrNumber = [1, 2, 3, 4, 5, 6]
const a = arrNumber.reduce((total, value) => {
    return total * value
}, 2)
console.log("reduce = ", a);

// every() này kiểm tra mảng với một hàm được truyền dưới dạng tham số.
const arrEvery = ["a", "a", "a", "a", "a"];
const arrEvery1 = arrEvery.every(item => {
    return item === "a"
})
console.log("every = ", arrEvery1);

// map() này nhận một hàm làm tham số. Và trả về một mảng mới.
const arrMap = arrNumber.map(item => {
    return item + item
})
console.log("map = ", arrMap);

// flat() này thường được sử dụng để tạo ra một mảng mới chứa các phần tử trong mảng (mà có chứa mảng con)
const arrFlat = [
    [1, 2],
    [3, 4], 5
]
console.log("flat = ", arrFlat.flat());

//filter() này nhận một hàm làm tham số.
const arrName = [{
    name: "Ban",
    age: 21
}, {
    name: "Nam",
    age: 10
}]
const arrFilter = arrName.filter(item => {
    return item.name === "Nam"
})
console.log("filter", arrFilter);